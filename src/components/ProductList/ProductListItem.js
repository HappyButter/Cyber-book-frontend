import React, {useState} from 'react';
import axios from "axios-config";

import PersonPinIcon from '@material-ui/icons/PersonPin';
import { ListElement, Btn } from './ProductListItem.css';


const ProductListItem = ({ userInfo, userId }) => {
	const [isFollowed, setIsFollowed] = useState(userInfo.isFollowed);

	const handleFollowBtn = (e) => {
		e.preventDefault();
		
		isFollowed 
		? unfollow()
		: follow()
    }  

    const follow = async () => {
		try {
			const isOk = await axios.post(`/user/follow`, {userId, userToFollowId: userInfo.id})
			isOk.data === "ok" && setIsFollowed(prev => !prev); 
		} catch (err) {
			console.log(err)
		}
    }

    const unfollow = async () => {
      try {
        const isOk = await axios.post(`/user/unfollow`, {userId, userToUnfollowId: userInfo.id})
		isOk.data === "ok" && setIsFollowed(prev => !prev);
      } catch (err) {
        console.log(err)
      }
    }

    return (
        <ListElement key={userInfo.id}>

			<PersonPinIcon style={{ fontSize: 50 }} />
			<br/>
			<h2>{userInfo.firstName + " " + userInfo.lastName}</h2>
            <br/>
			<hr/>
			<br />

            <Btn onClick={ handleFollowBtn }>
                {isFollowed ? "Unfollow" : "Follow"}
            </Btn>
        </ListElement>
        
    );
}

export default ProductListItem;