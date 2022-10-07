import React, { useState } from "react";
import '../Card.css';
import ActivitiesCard from './ActivitiesCard';
import DestinationCard from './DestinationCard';
import HotelCard from './HotelCard';
function Home(){
    const itemList = [
        "Nairobi",
        "Kisumu",
        "Mombase",
        "Eldoret",
        "Kilifi",
        "Taita Taveta",
    ]
    const liDisplay = itemList.map((list)=>{
        return <li><a href="#">{list}</a></li>;
    })
    return (
        <div className="general">
        <div className="applyPack">
            <h3>Explore and experience.</h3>
            <div className="Choices">
                <input type="text" placeholder="Going to.."/>
                <input type="text"/>
                <input type="text"/>
                <input type="text" placeholder="Going to.."/>
                <input type="button"/>
            </div>
            <div className="listingA">
            <ol>
                {liDisplay}
            </ol>
            </div>
        </div>
            <DestinationCard/>
            <ActivitiesCard/>
            <HotelCard/>
        </div>
    )
}
export default Home;