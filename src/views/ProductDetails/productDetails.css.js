import styled from 'styled-components';

export const Paragraph = styled.p`
    color: rgba(255,255,255,.75);
    font-size: 180%;
    text-align: center;
    overflow: hidden;
    font-family: 'Anonymous Pro', monospace;
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