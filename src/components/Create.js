import { useNavigate } from 'react-router-dom';
import './Create.css';

function Create() {
    const navigator = useNavigate();

    function handleClick() {
        navigator("/create-event");    
    }

    return (
        <button className="create-button" onClick={handleClick}>+</button>
    );
}

export default Create;