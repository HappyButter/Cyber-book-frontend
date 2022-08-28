import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios-config";

import MenuBookIcon  from '@material-ui/icons/MenuBook';
import Rating from '@material-ui/lab/Rating';

import { Comments } from 'components';
import { Paragraph } from './productDetails.css';
import { Middlepane } from 'styles/Middlepane.css';


const ProductDetails = () => {
    const { isbn } = useParams();
    const [bookInfo, setBookInfo] = useState(null);

    useEffect( () => {
        window.scrollTo(0, 0);
        getBookData();
        // eslint-disable-next-line
    }, [isbn]);

    const getBookData = async () => {
        const bookData = await axios.get(`book/isbn/${isbn}`);

        if (bookData.data.isbn) {
            const bookMapped = {...bookData.data, ISBN: bookData.data.isbn};
            setBookInfo(bookMapped);
        } else {
            setBookInfo(bookData.data[0]);
        }
    }

    if(!bookInfo) return <div>Loading...</div>

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