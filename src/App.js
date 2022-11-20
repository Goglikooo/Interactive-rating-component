
import './App.css';
import Thankyou from './components/Thankyou.js';
import { useState } from 'react';
import FirstCard from './components/FirstCard.js';


function App() {
  
const[showThankYouPage, setShowThankYouPage] = useState(false);
const [rating, setRating] = useState(null);

return showThankYouPage ? <Thankyou rating={rating} /> : <FirstCard rating={rating} setRating={setRating} setShowThankYouPage={setShowThankYouPage} />
    
}

export default App;


