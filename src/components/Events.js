import './Events.css'

function Events(props) {
    return (
        <ul>
            {props.events.map(event => {
                return (
                    <li key={event.id}>
                        <div className="event-row">
                            <img src={event.image} alt='event image' />
                            <div className="event-column">
                                <span id="header"><h3 style={{display: 'inline'}}>{event.name}</h3><span className="rate">{event.predictedRate}%</span></span>
                                <h5>📍 {event.location}</h5>
                                <h5>Cost: ${event.ticketPrice}</h5>
                                <p>{event.description}</p>
                            </div>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}

export default Events;