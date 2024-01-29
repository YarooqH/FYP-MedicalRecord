import HomePng from '../assets/home.png'
import BackgroundVideo from '../assets/BackgroundVideo.mp4'
import Medchain from '../assets/Medchain.png'

const Home = () => {
    return (
        <div className="home" style={{overflow: 'hidden', padding: 0, margin: 0, boxSizing: 'border-box'}}>
            <video src={BackgroundVideo} autoPlay={true} muted  loop playsinline style={{position: "absolute", width: "100%",  objectFit: 'cover', top: 0, left: 0, zIndex: 0, height: "100%"}}/>
            <div  style={{position: 'absolute', alignItems: 'center', justifyContent: 'center', display: 'flex', height: '100%', width: '100%'}}>
                <div style={{backgroundColor: 'rgba(1,1,1,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '500px', width: '600px', padding: '100px', borderRadius: '10px' }}>
                    <img src={Medchain} alt="medchain" style={{objectFit: 'contain', width: '550px' }} />
                </div>
            </div>
        </div>
    )
}

export default Home