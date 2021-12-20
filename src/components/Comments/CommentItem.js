import Rating from '@material-ui/lab/Rating';
import { Span } from './commentItem.css';

const CommentItem = ({commentData}) => {
    
    return (
        <article>            
            <hr/>
            <br/>
            <header>
                <Span>{commentData.authorFirstName + " " + commentData.authorLastName}</Span>
                <Rating name="read-only" 
                        value={parseInt(commentData.rate)}
                        readOnly />
            </header>
            <p>
                {commentData.review}
            </p>
            <br/>
        </article>
    )
}

export default CommentItem;