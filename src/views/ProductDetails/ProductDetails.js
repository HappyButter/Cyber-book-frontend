import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios-config";

import MenuBookIcon  from '@material-ui/icons/MenuBook';
import Rating from '@material-ui/lab/Rating';

import { Comments } from 'components';
import { Paragraph, Btn } from './productDetails.css';
import { Middlepane } from 'styles/Middlepane.css';

// const book = {
//     "author": "J.M. Barlog",
//     "genres": [
//         " Media Tie-In",
//         "Fiction "
//     ],
//     "pageCount": 400,
//     "ISBN": 9781789090154,
//     "rate": 4,
//     "publisher": "Titan Books",
//     "description": "The novelization of the highly anticipated God of War 4 game.\nHis vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse gods and monsters. It is in this harsh, unforgiving world that he must fight to survive... and teach his son to do the same. This startling reimagining of God of War deconstructs the core elements that defined the series—satisfying combat; breathtaking scale; and a powerful narrative—and fuses them anew.",
//     "language": "English",
//     "voteCount": {
//         "low": 2,
//         "high": 0
//     },
//     "title": "God of War: The Official Novelization",
//     "published_date": "Aug 28, 2018"
// }

const ProductDetails = () => {
    const { isbn } = useParams();
    const [bookInfo, setBookInfo] = useState(null);

    useEffect( () => {
        window.scrollTo(0, 0);
        getBookData();
    }, [isbn]);

    const getBookData = async () => {
        const bookData = await axios.get(`book/isbn/${isbn}`);
        setBookInfo(bookData.data[0]);
    }

    if(!bookInfo) return <div>Not working</div>

    return(
        <Middlepane>
            <br/><br/>
            {<MenuBookIcon style={{ fontSize: 200 }}/>}
            <br/><br/><hr/>

            <Paragraph>
                {bookInfo.title}
            </Paragraph>
           
            <h2>
                {bookInfo.author}
            </h2>
            
            <br/>
            <Rating 
                    value={parseFloat(bookInfo.rate)}
                    readOnly
                    precision={0.5}
                    size="large" />
            <br/><br/>
            <hr/>
            <div className="description">
                <br/>                        
                <Paragraph>Publisher:</Paragraph>
                    {bookInfo.publisher}
                    <Paragraph>Description:</Paragraph>
                    {bookInfo.description}
                    <br/><br/>
                    
                <br/><br/>
            </div>
            <hr/>
            <br/><br/>
            <Comments bookISBN={isbn}/>
        </Middlepane> 
    )   
}

export default ProductDetails;