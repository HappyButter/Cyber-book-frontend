import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios-config';

import { AuthContext } from 'hooks/Auth';
import CommentItem from './CommentItem';
import CommentForm from './CommentForm';
import { CommentsWrapper } from './comments.css';


const Comments = ({ bookISBN }) => {
    const { user } = useContext(AuthContext);
    const [bookReviews, setBookReviews] = useState([]);
    const [reloadReviewsInitializer, setReloadReviewsInitializer] = useState(false);
    
    useEffect( () => {
        getReviews();
    }, [bookISBN, reloadReviewsInitializer]);

    const getReviews = async () => {
        try {
            const reviews = await axios.get(`/book/reviews/${bookISBN}`);
            setBookReviews(reviews.data)
        } catch (err) {
            console.log(err);
            setBookReviews([]);
        } finally {
            setReloadReviewsInitializer(false);
        }

    }

    if(!bookReviews) return <div>Not working</div>
    
    return (
        <CommentsWrapper>
            {user && <CommentForm 
                            user={user}
                            bookISBN={bookISBN}
                            reloadReviewsInitializer={setReloadReviewsInitializer} />}
            {bookReviews?.map(review => <CommentItem key={review.authorId} commentData={review}/>)}
        </CommentsWrapper>
    );
}


export default Comments;