import React from "react";

const AuthContext = React.createContext({
	user: null,
	loading: false,
	error: null,
	login: () => {},
	register: () => {},
	logout: () => {},
});

export default AuthContext;
