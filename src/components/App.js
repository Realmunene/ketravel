import '../App.css';
import ActivitiesCard from './ActivitiesCard';
import DestinationCard from './DestinationCard';
import Home from "./Home";
import HotelCard from './HotelCard';
import AboutSection from './AboutSection';

function App() {
  return (
    <div className="App">
       <Home/>
       <DestinationCard/>
       <ActivitiesCard/>
       <HotelCard/>
       <AboutSection/>
    </div>
  );
}

export default App;
