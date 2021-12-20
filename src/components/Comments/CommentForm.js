import { useState } from 'react';
import axios from 'axios-config';

import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './commentForm.css'


const CommentForm = ({ user, bookISBN, reloadReviewsInitializer }) => {
    const [loading, setLoading] = useState(false);
    const [commentText, setCommentText] = useState('');
    const [rate, setRate] = useState(2);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        setLoading(true);
        try {
            const response = await axios.post("/book/review", {
                userId: user.id, 
                isbn: bookISBN, 
                rate: rate, 
                review: commentText
            })

            if(response) reloadReviewsInitializer(true);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    } 

    if(loading) return <>adding review...</>

    return (
        <>
            <form id="comment" className="form" onSubmit={handleSubmit}>
                <Box component="fieldset" width={300}>
                    <Typography component="legend">Your rate</Typography>
                    <Rating
                        name="rating"
                        value={rate}
                        onChange={(event, newValue) => {
                        setRate(newValue);
                        }}
                    />
                </Box>
                <br/>

                <textarea name="commentText" id="commentText" placeholder="Your review..."
                onChange={(event) => setCommentText(event.target.value)}></textarea>
                <br/>
                
                <button type="submit" id="addCommBtn">Add Review</button>
                <br/><br/>
            </form>
        </>
    );
}

export default CommentForm;