import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import PersonPinIcon from '@material-ui/icons/PersonPin';
import MenuBookIcon  from '@material-ui/icons/MenuBook';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { ListContainer, ListElement, Btn } from './FollowedUsersReviewsList.css';


const FollowedUsersReviewsListItem = ({ itemData }) => {

	const authorData = itemData.author[0];
	const bookData = itemData.book[0];
	const reviewData = {rate: itemData.rate, review: itemData.review, creationDate: itemData.creationDate}

    const navigate = useNavigate();
    const goToBook = (e) => {
		e.preventDefault();

        navigate(`/book/${bookData.ISBN}`);
    }

    return (
        <ListElement key={authorData.authorId + bookData.ISBN}>
			<PersonPinIcon style={{ fontSize: 50 }} /> 
			<h2 style={{textAlign: "center"}}>{authorData.firstName + " " + authorData.lastName}</h2>
			<hr/>
			<br/>
			{"Rate:"}
            <Box component="fieldset" mb={1} borderColor="transparent">
				<Rating name="read-only" 
                        value={parseFloat(reviewData.rate)}
                        readOnly
                        precision={0.5} />
            </Box>
			
			{"Review:"}
			<br/><br/>
			{reviewData.review}

            <br/>
			<br/>
			<hr/>
			<br/>

			<MenuBookIcon style={{ fontSize: 50 }} />
			<h3>{bookData.title}</h3>
			<h4>{bookData.author}</h4>
            <br/>
            <Btn onClick={ goToBook }>
                {"More"}
            </Btn>    
        </ListElement>
    );
}

const FollowedUsersReviewsList = ({items}) => {
    return (
        <ListContainer>
            {items.map(item => <FollowedUsersReviewsListItem itemData={item} />)}
        </ListContainer>
    );
}

export default FollowedUsersReviewsList;