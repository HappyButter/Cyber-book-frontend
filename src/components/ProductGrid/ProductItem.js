import React from 'react';
import { useNavigate } from 'react-router-dom';

import MenuBookIcon  from '@material-ui/icons/MenuBook';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

import { GridElement, CustomLink, Btn } from './productItem.css';

const ProductItem = ({ bookInfo }) => {
    const navigate = useNavigate();
    const goToBook = (e) => {
        navigate(`/book/${bookInfo.ISBN}`);
    }

    return (
        <GridElement key={bookInfo.ISBN}>

            <CustomLink to={`/book/${bookInfo.ISBN}`}>
                <MenuBookIcon style={{ fontSize: 50 }} />
                <br/><br/>
                {bookInfo.title}
                <br/><br/>
                {bookInfo.author}
            </CustomLink>
            <br/><br/>
            
            <Box component="fieldset" mb={1} borderColor="transparent">
                <Rating name="read-only" 
                        value={parseFloat(bookInfo.rate)}
                        readOnly
                        precision={0.5} />
                <hr/>
            </Box>

            <Btn onClick={ goToBook }>
                {"More"}
            </Btn>
        </GridElement>
        
    );
}

export default ProductItem;