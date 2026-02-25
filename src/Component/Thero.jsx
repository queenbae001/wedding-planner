import './Thero.css'

const Thero = () => {
  return (
    <div className='thero'>
      <h3>Our Expertise</h3>
      <div className='thero-container'>
        <div className='thero-card'>
          <h2>Full-Service Wedding Planning</h2>
          <p>Our planning services are designed to make your wedding journey  <br />smooth and stress-free.  From initial concept development and budget <br /> management to timelines and logistics, we handle every detail with precision and care.</p>
        </div>
        <div className='thero-card'>
          <h2>Wedding Design & Styling</h2>
          <p>We believe that your wedding should be a reflection of your unique love story. <br />Our design team works closely with you to create a cohesive aesthetic that captures <br />your vision, from color palettes and floral arrangements to lighting and decor.</p>
        </div>
        <div className='thero-card'>
          <h2>Day-Of Coordination</h2>
          <p>On your wedding day, our experienced coordinators take the reins to ensure everything runs seamlessly. <br />We manage the timeline, coordinate with vendors, and handle any unexpected challenges, allowing you to fully immerse yourself in the joy of the moment.</p>
        </div>
      </div>
    </div>
  )
} 

export default Thero