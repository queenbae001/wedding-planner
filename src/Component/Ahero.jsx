import '../Component/Ahero.css'
import Img from '../Assets/card.jpg'
import '@fontsource/dancing-script'
const Ahero = () => {   
    return (
        <>
        <div className='Ahero'>
            <img src={Img} alt="card.jpg" className='Ape' />
            <div className='Atext'>
                <h1>Meet the Queenie <br />Planning Team</h1>
            </div>

        </div>
        </>
    )
}

export default Ahero