import graph from '../membership_growth.png';
import './Analytics.css';

function Analytics() {
    return (
        <div className='analytics-container'>
            <div className='analytics-group'>
                <svg id="person-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                <div className='analytics-subgroup'>
                    <h3>2,200</h3>
                    <span>Active Members</span>
                </div>
            </div>
            <div className='analytics-group'>
                <svg id="revenue-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
                <div className='analytics-subgroup'>
                    <h3>$11,000</h3>
                    <span>Revenue</span>
                </div>
            </div>
            <img src={graph} img='membership growth graph' id="graph"/>
        </div>
    );
}

export default Analytics;
