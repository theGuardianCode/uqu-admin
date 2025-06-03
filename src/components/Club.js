import { useState, useEffect, useRef } from 'react';
import pb from '../connection.js';
import Events from './Events.js';
import Members from './Members.js';
import Analytics from './Analytics.js';
import Create from './Create.js';
import Announcements from './Announcements.js';
import './Club.css';

function Club() {
	const initialised = useRef(false);

    // Club info state
    const [clubId, setClubId] = useState(null);
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [logoURL, setLogoURL] = useState(null);
    const [cost, setCost] = useState(null);

    // Events state
    const [events, setEvents] = useState([]);

    const [activeElement, setActive] = useState('events');

    const fetchInfo = async () => {
        const data = await pb.collection("Clubs").getFirstListItem(`id='${pb.authStore.record.clubId}'`);

		const imageURL = pb.files.getURL(data, data.logo);

        setClubId(data.id);
        setName(data.name);
        setDesc(data.description);
        setLogoURL(imageURL);
        setCost(data.membershipFee);
    };

    const fetchEvents = async () => {
		let records = await pb.collection("Events").getFullList(`clubId='${clubId}'`);
		records.forEach((record) => {
			const imageURL = pb.files.getURL(record, record.image);
			record.image = imageURL;
		})
		
		setEvents(records);
    };

    useEffect(() => {
		if (!initialised.current) {
			initialised.current = true;
			fetchInfo();
			fetchEvents();
		}
    }, []);

    return (
        <div>
            <div className='bio'>
                <img src={logoURL} alt='club-logo' className='club-logo'/>
                <div className='text'>
                    <h3>{name}</h3>
                    <h5>Cost: ${cost}</h5>
                    <h5>{desc}</h5>
                </div>
            </div>
            <div className='scrolling-selector'>
                <p className={activeElement === 'events' ? 'active' : ''} onClick={() => setActive('events')}>events</p>
                <p className={activeElement === 'members' ? 'active' : ''} onClick={() => setActive('members')}>members</p>
                <p className={activeElement === 'analytics' ? 'active' : ''} onClick={() => setActive('analytics')}>analytics</p>
                <p className={activeElement === 'announcements' ? 'active' : ''} onClick={() => setActive('announcements')}>announcements</p>
            </div>
            <hr/>
            {activeElement === 'events' ? <Events events={events}/> : null}
            {activeElement === 'members' ? <Members /> : null}
            {activeElement === 'analytics' ? <Analytics /> : null}
            {activeElement === 'announcements' ? <Announcements /> : null}
            {activeElement === 'events' || activeElement === 'announcements' ? <Create /> : null }
        </div>
    );
}

export default Club;
