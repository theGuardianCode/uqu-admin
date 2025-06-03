import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import Navbar from "./Navbar.js";
import './CreateEvent.css';

function CreateEvent() {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(null);

    const navigator = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        const file_uuid = crypto.randomUUID(); 
    }

    return (
        <div>
            <title>Create UQU Event</title>
            <Navbar />
            <video id="background-video" autoPlay loop muted>
                <source src="https://firebasestorage.googleapis.com/v0/b/mayhack-fk11js.firebasestorage.app/o/gradient_background.mp4?alt=media" type="video/mp4"></source>
            </video>
            <div className="container">
                <h2>Create an event:</h2>
                <form onSubmit={handleSubmit}>
                    <img src={ image !== null ? URL.createObjectURL(image) : 'https://firebasestorage.googleapis.com/v0/b/mayhack-fk11js.firebasestorage.app/o/placeholder.png?alt=media'} alt='preview' className='image-preview'/><br/>
                    <input required title="Cover image" type="file" onChange={(event) => setImage(event.target.files[0])} accept="image/png,image/jpeg" /><br/>
                    <input required className="name-input" placeholder="Event Name..." type="text" value={name} onChange={(event) => setName(event.target.value)} /><br/>
                    <input required type="date" value={date} onChange={(event) => setDate(event.target.value)} /><br/>
                    <input required placeholder="Add Event Location" type="text" value={location} onChange={(event) => setLocation(event.target.value)} /><br/>
                    <textarea required placeholder="Add Description" value={description} onChange={(event) => setDescription(event.target.value)} /><br/>
                    <input required placeholder="Ticket Price..." type="number" value={price} onChange={(event) => setPrice(event.target.value)} /><br/>
                    <input id="submit-button" type="submit" value="Create Event" />
                </form>
            </div>
        </div>
    );
}

export default CreateEvent;
