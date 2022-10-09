import React,{useState, useEffect} from 'react';
import '../Card.css'
import ActivitiesCard from './ActivitiesCard';
function DestinationCard(){
    const [ cardTrip,  setcardTrip] = useState([]);
    useEffect(() => {
      fetch("http://localhost:3000/CardPackage")
        .then((response) => response.json())
        .then((data) => {
                setcardTrip(data);
        });
    }, []); 
    // the fetch request to get, convert the json date to object that can be used to make the card dynamic
return(
    <div>
        <div className='purpose'>
            {/* we used map method to dynamicaly create cards in relation to the data available */}
            {cardTrip.map((identities)=>(
                <div className='card'>
                <div className='onea'>
                    <p>{identities.description}</p>
                </div>
                <div className='two'>
                    <div>
                        <p>From</p>
                        <h3>{identities.amount}</h3>
                        <h6>{identities.place}</h6>
                        <p>Expires on: {identities.date}</p>
                    </div>
                    <div>
                        <a href='#'>View More</a>
                    </div>
                </div>
               </div>
            ))}
        </div>
        <ActivitiesCard/> 
        </div>
    )
} 
export default DestinationCard;