import styled from 'styled-components';
import { Link } from "react-router-dom";

export const GridElement = styled.div`
	min-height: 300px;
	padding: 15px 0;
	background-color: rgba( 255, 255, 255, 0.1 );
	position: relative;

	&:before {
    	content: '';
		position: absolute;
		bottom: 0; left: 0;
		border-bottom: 40px solid rgb(32, 32, 32);
		border-right: 40px solid transparent;
		width: 0;
    }
`;

export const CustomLink = styled(Link)`
    text-decoration: none;
	color: rgba(255,255,255,.75);
	font-size: 1.1em;
`;

export const Btn = styled.div`
	background-color: #33C333;
	display:inline-block;
	font-size:18px;
	padding: 8px 20px;
	text-decoration:none;
	position: relative;
	cursor: pointer;   
	
    &:hover {
        background-color:#269126;
    }
    
    &:active {
        position:relative;
        top:2px;
    }
` 