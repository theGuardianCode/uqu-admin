import { useNavigate } from 'react-router-dom';
import pb from '../connection';
import logo from './../uqu-logo.svg';
import './Navbar.css';

function Navbar() {
    const navigator = useNavigate();

    function handleClick() {
        navigator("/");    
    }

    function logout() {
        pb.authStore.clear();
        navigator("/login");
    }

    return (
        <div className='Navbar-container' onClick={handleClick}>
            <img src={logo} alt='UQU Logo' className='App-logo'/>
            <span onClick={logout}>Logout</span>
        </div>
    );
}

export default Navbar;