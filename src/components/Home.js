import React, { useState, useEffect} from "react";
import '../Card.css';

function Home(){
    const [date, setDate] = useState();
    const [value, setValue]=useState("")
    const [ cardTrip,  setcardTrip] = useState([]);
    useEffect(() => {
      fetch("http://localhost:3000/CardPackage")
        .then((response) => response.json())
        .then((data) => {
            setcardTrip(cardTrip);
            
        });
    }, []); 
    // for testing whether the get request has some data and was successfull in fetching
console.log(cardTrip);
    return (
        <div className="general">
            <div className="applyPack">
                <h3>Explore and experience.</h3>
            <div className="Choices">
                <input type="text" placeholder="Going to.."/>
                <input type="date" onChange={e=> setDate(e.target.value)}/>
                <input type="date" onChange={e=> setDate(e.target.value)}/>
                <input list='data' onChange={(e)=>setValue(e.target.value)} placeholder='Guest,Room' />
                <input type="submit"/>
            
            </div>
            {/* link that are supposed to change the components */}
            <div className="listingA">
                <ol>
                <li><a to="/" element={<Home/>}>Things To do</a></li>
                <li><a href="#">Place To visit</a></li>
                <li><a href="#">Hotels available</a></li>
                <li><a href="#">Holiday Packages</a></li>
                <li><a href="#">Regular Packages</a></li>
                <li><a href="#">Create Package</a></li>
                </ol>
            </div>
        </div>
        </div>
    )
}
export default Home;