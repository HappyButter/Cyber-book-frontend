import React from 'react';
import { ListContainer } from './ProductList.css';
import ProductListItem from './ProductListItem';

const ProductList = ({ usersInfo, user }) => {
    return (
        <ListContainer>
            {usersInfo.map(item => <ProductListItem userInfo={item} userId={user.id} />)}
        </ListContainer>
    );
}

export default ProductList;