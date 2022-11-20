import CardCSS from './Card.module.css';
import star from '../images/icon-star.svg';
import Text from './Text.js';
import RatingCSS from './Rating.module.css';
import {useState} from 'react';


const FirstCard = ({rating, setRating, setShowThankYouPage}) => {

    const [isActive, setIsActive] = useState(0);

    const handleClick = () => {
        if(!rating) return;
        setShowThankYouPage(true);
        console.log("ragaca")
    }

    return (
<div>
            
        <div className={CardCSS.box}>
        <div className={CardCSS.star}><img src={star} /></div>
        
            <Text />
                
    <div className={RatingCSS.rating} >
            <button className={isActive === 1 ? RatingCSS.oval2 : RatingCSS.oval }  onClick={() => {
                setIsActive(1);
                setRating(1);
            } }>1</button>
            <button className={isActive === 2 ? RatingCSS.oval2 : RatingCSS.oval} onClick={() => {
                setIsActive(2);
                setRating(2);
            } }>2</button>
            <button className={isActive === 3 ? RatingCSS.oval2 : RatingCSS.oval} onClick={() => {
                setIsActive(3);
                setRating(3);
            } }>3</button>
            <button className={isActive === 4 ? RatingCSS.oval2 : RatingCSS.oval} onClick={() => {
                setIsActive(4);
                setRating(4);
            } }>4</button>
            <button className={isActive === 5 ? RatingCSS.oval2 : RatingCSS.oval} onClick={() => {
                setIsActive(5);
                setRating(5);
            } }>5</button>
    </div>
        
    <div>
        <button type='Submit' className={RatingCSS.submit} onClick={handleClick}>
            Submit
        </button>
    </div>
</div>
        
</div>
    )
}

export default FirstCard;