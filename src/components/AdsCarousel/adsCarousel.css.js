import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Box = styled.div`
    height: 300px;
    text-align: center;
    color: black;
    background: rgb(0, 240, 255);
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
            
    &:before {
    	content: '';
		position: absolute;
		bottom: 0; left: 0;
		border-bottom: 80px solid rgb(32, 32, 32);
		border-right: 80px solid rgb(0, 240, 255);
		width: 0;
    }

    &:after {
    	content: '';
		position: absolute;
		top: 0; right: 0;
		border-right: 80px solid rgb(32, 32, 32);
		border-bottom: 80px solid rgb(0, 240, 255);
		width: 0;
    }
`;

export const CarouselWrapper = styled.div`
    width: 100%;

    font-size: 3em;
    li.alice-carousel__stage-item :not(.__cloned) {
        width: auto !important;
  }
`;

export const CarouselLink = styled(Link)`
    text-decoration: none;
`;