import styled from 'styled-components';

export const Middlepane = styled.div`
	overflow-x: hidden;
	width: 65vw;
	background-color: rgb(32, 32, 32);
	text-align: center;
	align-items: center;
	margin: 0 auto;
	padding: 30px;

	box-shadow: 0 20px 50px 0 rgba(2, 216, 243, 0.35);
	backdrop-filter: blur( 13.5px );
	-webkit-backdrop-filter: blur(  10.0px );

	font-family: BlenderProBold,sans-serif;
    font-weight: 700;

	@media (max-width: 800px) { 
		width: 100%;
		padding: 20px;
	}
`;

export const MiddlepaneOffer = styled(Middlepane)`
	background-color: rgb(32, 32, 32);
`