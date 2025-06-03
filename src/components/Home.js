import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import pb from '../connection.js';
import Navbar from './Navbar.js';
import Club from './Club.js';

function Home() {
    const navigator = useNavigate();

    useEffect(() => {
        if (!pb.authStore.isValid) {
            navigator("/login");
        }
    }, [])

    return (
        <>
            <title>UQU Admin</title>
            <Navbar />
            <Club />
        </>
    );
}

export default Home;