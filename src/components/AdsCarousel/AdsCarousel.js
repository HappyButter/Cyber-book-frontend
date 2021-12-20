import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { Box, CarouselWrapper, CarouselLink } from './adsCarousel.css';



const Carousel = () => {
    const newsList = [{id: 123, title: "Hyper super news 1!"},{id: 321, title: "Hyper super news 2!"},]
    
    const items = newsList.map(news => ( 
        <CarouselLink to={`/news/${news.title}`} onDragStart={e => e.preventDefault()}>
            <Box key={news.id}>
                {news.title}
            </Box>
        </CarouselLink>
    ));
    
    return (
    <CarouselWrapper>
        <AliceCarousel
            animationType="fadeout" 
            animationDuration={800}
            disableButtonsControls
            infinite
            items={items}
            mouseTracking
            autoPlay
            autoPlayInterval={4000}
        />
    </CarouselWrapper>
    )
};

export default Carousel;