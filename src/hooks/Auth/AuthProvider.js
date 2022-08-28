import React, { useState, useEffect } from "react";
import axios from 'axios-config';

import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		setUser(null);
	}, []);

	const login = async (email, password) => {
		setLoading(true);
		try {
			const user = await axios.post('/auth/login', {email, password});

			if(!user) {
				setUser(null);
				setError("Errors while login. Try again.");
				setLoading(false);
				return;
			} 

			setUser(user.data);	
		} catch (err) {
			alert(err);
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	const register = async ({email, password, firstName, lastName}) => {
		setLoading(true);
		try {
			const user = await axios.post('/auth/register', {email, password, firstName, lastName});

			if(!user) {
				setUser(null);
				setError("Errors while register. Try again.");
				setLoading(false);
				return;
			} 

			setUser(user.data);	
		} catch (err) {
			alert(err);
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	const logout = () => {
		setUser(null);
		setError(null);
		setLoading(false);
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				loading,
				error,
				login,
				register,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
