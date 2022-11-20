import thanksCSS from './Card.module.css';
import thankYou from '../images/illustration-thank-you.svg';



function Thankyou({rating}){
    return (
    <div className={thanksCSS.box1}>
    <img src={thankYou}  />
    <p className={thanksCSS.selected}>You selected {rating} out of 5</p>       
    <h1 className={thanksCSS.heading}>Thank you!</h1>
    <p className={thanksCSS.text}>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
    </div>

    );
}

export default Thankyou;