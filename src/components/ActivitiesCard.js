import React, {useState, useEffect} from "react";
function ActivitiesCard(props){
    const [ cardTrip,  setcardTrip] = useState([]);
    useEffect(() => {
      fetch("https://ketravelapi1.herokuapp.com/CardPackage")
        .then((response) => response.json())
        .then((data) => {
                setcardTrip(data);
        });
    }, []); 
     // the fetch request to get, convert the json date to object that can be used to make the card dynamic
    return(
        <div className="purpose">
            {/* we used map method to dynamicaly create cards in relation to the data available */}
            {cardTrip.map((identities)=>(
        <div className='card'>
            <div className='oneb'>
                <p>{identities.description}</p>
            </div>
            <div className='two'>
                    <h6>{identities.place}</h6>
                    <a href='#'>View More</a>
            </div>
    </div>))}
    </div>
    )
} 
export default ActivitiesCard;