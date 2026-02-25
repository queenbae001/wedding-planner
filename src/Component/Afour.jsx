import '../Component/Afour.css';
import '@fontsource/dancing-script';
import Img from '../assets/love2.jpg';

const Afour = () => {
  return (
    <div className="Afour-container">
      <img src={Img} alt="Wedding love2" className="Afour-image" />
      <div className="Afour-text">
        <h1>Designing with Heart, Celebrating Love Stories</h1>
        <p>
          We believe that exceptional wedding planning goes beyond beautiful details; it’s about creating meaningful celebrations that reflect each couple’s unique love story. Our philosophy is rooted in empathy, cultural understanding, and a deep appreciation of human connection ensuring every wedding we design is not only seamless and thoughtful, but also emotionally unforgettable.
        </p>
        <br />
        <p>
          At Queenie Planning, we are dedicated to crafting weddings that are as unique and special as the couples we serve. We take the time to understand your love story, your values, and your vision for your wedding day. This allows us to create a celebration that is not only beautiful but also deeply meaningful and reflective of who you are as a couple.
        </p>
      </div>
    </div>
  );
};

export default Afour;
