import React, { Suspense, lazy, useContext } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route } from "react-router-dom";

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import Skeleton from '@material-ui/lab/Skeleton';
import { ProtectedRoute, AppBar } from './components';
import { MiddlepaneOffer } from 'styles/Middlepane.css';
import './index.css';
import { AuthContext } from 'hooks/Auth';

const Login = lazy(() => import('./views/Login'));
const Register = lazy(() => import('./views/Register'));
const Home = lazy(() => import('./views/Home'));
const News = lazy(() => import('./views/News'));
const Offer = lazy(() => import('./views/Offer'));
const Users = lazy(() => import('./views/Users'));
const Account = lazy(() => import('./views/Account'));
const Followed = lazy(() => import('./views/Followed'));
const ProductDetails = lazy(() => import('./views/ProductDetails'));

function App() {

  const { user } = useContext(AuthContext);

  const Loading = () => {
    return( 
      <MiddlepaneOffer>
        <Skeleton animation="wave" height={500} />
      </MiddlepaneOffer>
    );
  };

  return ( 
    <ThemeProvider theme={theme}>
      <Router>
        <div className="layout">
          <AppBar/>
          <Suspense fallback={<Loading/>}>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="login" element={<Login/>} />
              <Route path="register" element={<Register/>} />
              <Route path="books" element={<Offer/>}/>
              <Route path="book/:isbn" element={<ProductDetails/>}/>
              <Route path="news/:newsId" element={<News/>}/>

              <Route path="users" element={<ProtectedRoute element={Users} auth={!!user}/>} />
              <Route path="followed" element={<ProtectedRoute element={Followed} auth={!!user}/>} />
              <Route path="account" element={<ProtectedRoute element={Account} auth={!!user}/>} />
            </Routes>
          </Suspense>
        </div>
      </Router>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
