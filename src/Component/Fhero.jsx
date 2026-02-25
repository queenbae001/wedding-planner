import './Fhero.css'
import IMage from '../assets/King.jpg'
const Fhero = () => {
  return (
    <div className='section'>
        <div className="write-up">
            <h1>Weddings Crafted with <br /> Skill and Care</h1>
            <p>We believe a wedding is never simply planned it is thoughtfully designed  with intention, meaning, and heart. Every celebration we create is a careful <br /> balance of exquisite details and graceful artistry. It’s not only about how it appears, but how it feels a reflection of your love story, your vision, and the <br /> moments you’ll cherish with those closest to you.</p>
        </div>

          <img src={IMage} alt="King.jpg" className='img' />
        
    </div>
  )
} 

export default Fhero