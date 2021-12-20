import React, { useEffect, useState, useContext } from 'react';
import axios from "axios-config";
import { AuthContext } from 'hooks/Auth';

import { FollowedUsersReviewsList } from 'components';
import { Middlepane } from 'styles/Middlepane.css';


const Followed = () => {
	const { user } = useContext(AuthContext);

	const [loading, setLoading] = useState(false);
	const [followedUsersReviews, setFollowedUsersReviews] = useState([]);

	useEffect( () => {
		getFollowedUsersReviews();
	},[]);

	const getFollowedUsersReviews = async () => {
		setLoading(true);

		try {
			const users = await axios.post("/user/followed", {userId: user.id});
			
			if(!users) throw new Error("Went wrong");
			setFollowedUsersReviews(users.data.sort((a,b) =>  b.creationDate - a.creationDate));
		} catch (err) {
			setFollowedUsersReviews([]);
			console.log(err);
		} finally {
			setLoading(false);
		}
	}

	return (
		<Middlepane>
			<hr/><br/>
			<h2>{"Recent activities"}</h2>
			<br/><hr/><br/>
			{loading ? <>loading...</> : <FollowedUsersReviewsList items={followedUsersReviews} user={user}/>}
			<br/>
		</Middlepane>
	);
};

export default Followed;
