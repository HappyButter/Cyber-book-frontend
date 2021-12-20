import React, { useEffect, useState, useContext } from 'react';
import axios from "axios-config";
import { AuthContext } from 'hooks/Auth';

import { ProductList, SearchBar } from 'components';
import { Middlepane } from 'styles/Middlepane.css';


const Users = () => {
	const { user } = useContext(AuthContext);	

	const [loading, setLoading] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');
	const [usersData, setUsersData] = useState([]);

	useEffect( () => {
		getUsers();
	},[searchQuery]);

	const getUsers = async () => {
		setLoading(true);
		try {
			const users = await axios.post("/user/name", {name: searchQuery, userId: user.id});
			setUsersData(users.data);
		} catch (err) {
			setUsersData([]);
			console.log(err);
		} finally {
			setLoading(false);
		}
	}


	return (
		<Middlepane>
			<hr/><br/>
			<h2>{"Find a friend..."}</h2>
			<SearchBar setSearchQuery={setSearchQuery}/>
			<br/><hr/><br/>
			{loading ? <>loading...</> : <ProductList usersInfo={usersData} user={user}/>}
			<br/>
		</Middlepane>
	);
};

export default Users;
