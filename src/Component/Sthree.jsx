import "./Sthree.css";
import "@fontsource/dancing-script";
import IMage1 from "../assets/ink.jpg"
import IMage2 from "../assets/pin.jpg"
import IMage3 from "../assets/you.jpg"

const Sthree = () => {
  return (
    <div className="section4">
      <div className="game">
        <h1>Bring Your Dream Wedding to Life</h1>
        <p>We specialize in exquisite, bespoke wedding planning for couples who value perfection. <br /> Our comprehensive planning process handles every detail with care, allowing you to <br /> fully enjoy your wedding day without a single worry. </p>
      </div>
      <div className="img-core">
          <img src={IMage1} alt="ink.jpg" className='img' />
         <img src={IMage2} alt="pin.jpg" className='img' />
          <img src={IMage3} alt="you.jpg" className='img' />
      </div>
    </div>
  ); 
};

export default Sthree;
