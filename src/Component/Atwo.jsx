import '../Component/Atwo.css'
import '@fontsource/dancing-script'
import HomeIcon from '@mui/icons-material/Home';
import RestoreIcon from '@mui/icons-material/Restore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Atwo = () => {
  return (
    <div className="Atwo">

      {/* LEFT SIDE */}
      <div className="atwo-left">
        <h1>About Us</h1>
        <h2>We excel in planning and coordinating <br /> exceptional weddings.</h2>

        <p>
          Every celebration begins with intention. We take time to understand your dreams,
          preferences, and priorities, allowing us to thoughtfully plan and coordinate each
          element of your wedding.
        </p>

        <p>
          Our commitment goes beyond the planning stage. We provide continuous support and
          on-the-day coordination to ensure every detail runs smoothly and beautifully.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="atwo-right">
       <div className="info-box">
          <RestoreIcon className="icon" />
          <div>
            <h1>Our Vision</h1>
            <p>To turn dreams into timeless wedding experiences.</p>
          </div>
        </div>

        <div className="info-box">
          <HomeIcon className="icon" />
          <div>
            <h1>Our Mission</h1>
            <p>Delivering exceptional planning and design services.</p>
          </div>
        </div>

        <div className="info-box">
          <CheckCircleIcon className="icon" />
          <div>
            <h1>Our Values</h1>
            <p>Excellence, creativity, and personalized service.</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Atwo
