import '../Card.css'
function DestinationCard(){
    return(
        <div className="Cards">
            <h3>Top Deals</h3>
            <div className="Card-container">
                <div className='image-container'>
                    <p>@ 2 Days, 1 Night at weslands hotel (Single room rate)</p>
                </div>
                <div className='row'>
                <div className="words">
                    <span>From</span>
                    <h3>KES 20, 000</h3>
                    <div className="town">
                        <img/>
                        <cite>Nairobi</cite>
                    </div>
                    <h4>Expires on:2022-06-03</h4>
                </div>
                <div>
                    <a href="#">View more img</a>
                </div>
                </div>
            </div>
        </div>
    )
} 
export default DestinationCard;