import HomePng from '../assets/home.png'
import BackgroundVideo from '../assets/BackgroundVideo.mp4'

const Home = () => {
    return (
        <div className="home" style={{overflow: 'hidden', padding: 0, margin: 0, boxSizing: 'border-box'}}>
            <video src={BackgroundVideo} autoPlay={true} muted  loop playsinline style={{position: "absolute", width: "100%",  objectFit: 'cover', top: 0, left: 0, zIndex: 0, height: "100%"}}/>
        </div>
    )
}

export default Home