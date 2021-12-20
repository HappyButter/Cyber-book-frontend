import React, { useEffect, useState } from 'react';
import axios from "axios-config";

import { ProductGrid, SearchBar } from 'components';
import { Middlepane } from 'styles/Middlepane.css';


const Offer = () => {
    
    const [loading, setLoading] = useState(true);
    const [booksData, setBooksData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect( () => {
        getBooks();
    },[searchQuery]);

    const getBooks = async () => {
        setLoading(true);
        try {
            const books = await axios.post("/book/title", {title: searchQuery});
            setBooksData(books.data);
        } catch (err) {
            setBooksData([]);
            console.log(err);
        } finally {
            setLoading(false);
        }
    }


    return (
        <Middlepane>
            <hr/><br/>
            <h2>
                {"Find your book!"}
                <br/><br/>
                <SearchBar setSearchQuery={setSearchQuery}/>
            </h2>
            <br/><hr/><br/>

            {loading 
            ? <>loading...</> 
            : <ProductGrid booksInfo={booksData} />}
            
            <br/>
        </Middlepane>
    );
};

export default Offer;
