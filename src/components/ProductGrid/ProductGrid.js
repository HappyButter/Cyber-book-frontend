import React from 'react';
import { GridContainer } from './productGrid.css';
import ProductItem from './ProductItem';

const ProductGrid = ({ booksInfo }) => {

    return (
        <GridContainer>
            {booksInfo.map(item => <ProductItem bookInfo={item}/>)}
        </GridContainer>
    );
}

export default ProductGrid;