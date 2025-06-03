import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";
import pb from '../connection';
import Navbar from './Navbar';

function Login() {
	const navigator = useNavigate();

	const [user, setUser] = useState("");
	const [pass, setPass] = useState("");

	function handleSubmit(event) {
		event.preventDefault();

		const authData = pb.collection("ClubAdmin").authWithPassword(user, pass);
		if (pb.authStore.isValid) {
			navigator("/");
		}
	}

	return (
		<div>
			<Navbar />
			<form onSubmit={handleSubmit}>
				<input required placeholder="Username" type="text" value={user} onChange={(e) => setUser(e.target.value)}/>
				<input required placeholder="Password" type="password" value={pass} onChange={(e) => setPass(e.target.value)}/>
				<input type="submit" value="Login" />
			</form>
		</div>
	);
};

export default Login;
