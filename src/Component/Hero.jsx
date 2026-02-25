import Home from "../Pages/Home";      
 import './Hero.css'
import IMage from '../assets/happy.jpg'
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <div className='home'>
      <img src={IMage} alt="happy.jpg" className='homeimg' />
      <div className='clay'>
      <h1>Let your dream wedding come to life with <br />Queenie Wedding Planning.</h1>
      <p>From the heart, we specialize in bringing your wedding dreams to life.!</p>
      <button><Link to="https://supercal.com/queenderaokeke" className="jar">Book Your Date</Link></button>
      </div>
    </div>
  )
}

export default Hero

