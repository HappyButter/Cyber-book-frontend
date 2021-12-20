import React, { useState, useEffect } from 'react';
import axios from 'axios-config';
import { AdsCarousel, ProductGrid } from 'components';


import { Paragraph } from './home.css';
import { MiddlepaneOffer } from 'styles/Middlepane.css';

// const recommendedBooks = [
//     {
//         isbn: "1",
//         title: "Good Book 1",
//         rate: 2.3
//     },
//     {
//         isbn: "2",
//         title: "Good Book 2",
//         rate: 5
//     },
//     {
//         isbn: "3",
//         title: "Good Book 3",
//         rate: 4
//     },
// ]

const Home = () => {

    const [bestRatedBooks, setBestRatedBooks] = useState([]);

    useEffect(() => {
        getBestBooks();
    }, []);

    const getBestBooks = async () => { 
        try {
            const books = await axios.get('/book/best-ratings');
            setBestRatedBooks(books.data);
        } catch (err) {
            console.log(err)
        } 
    }

    return (
        <MiddlepaneOffer>
            <br/>
            <br/>
            <Paragraph>Welcome to CyberBook!</Paragraph>
            <br/>
            <br/>
            <AdsCarousel/>
            <br/><br/>
            <Paragraph>Best reviews</Paragraph>
            <ProductGrid 
                booksInfo={bestRatedBooks} 
            />
        </MiddlepaneOffer>
    );
};

export default Home;
