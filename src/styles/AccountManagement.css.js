import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';

export const RedirectLink = styled(Link)`
    font-size: 0.6em;
    text-decoration: none;
    color: #3f51b5;
`;

export const AccountManagementWrapper = styled(Container)`
    background-color: rgba(255,255,255, 0.5);
    color: rgb(239, 255, 250, 0.8);
    font-size: 180%;
    border-radius: 1em;
    padding-top: 1px;
    padding-bottom: 11px;
    margin-top: 1em;
`