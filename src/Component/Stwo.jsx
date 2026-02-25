import "./Stwo.css";
import "@fontsource/dancing-script";
import IMage from "../assets/gin.jpg"

const Stwo = () => {
  return (
    <div className="section">
      <div className="write-up">
        <h1>The Wedding World 💍</h1>
        <p>
          We believe a wedding is more than just an event it’s a meaningful
          celebration of love and commitment.
          <br /><br />
          We create beautifully curated, stress-free experiences tailored to
          your unique story, ensuring every detail comes together seamlessly
          on your special day.
        </p>
      </div>

      	  <img src={IMage} alt="gin.jpg" className='img' />
	   
    </div>
  ); 
};

export default Stwo;
