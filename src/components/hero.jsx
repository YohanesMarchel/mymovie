import { FiTv } from "react-icons/fi";
const Hero = (props) => {
    return(
        <>
        <div className="container">
            <div className="hero-body">
                <h1>Mym<FiTv/>vie<span className="dot">.</span></h1>
                <h2>Unlimited movies, TV shows, and more.</h2>
                <p>Watch anywhere. Cancel anytime.
                   <br /> Ready to watch? Enter your email to create or restart your membership.</p>
                <div className="hero-btn">
                <a href="#explor" className="explor">Explor Film</a>
                {/* <a href="" className="get-started">Get Started</a> */}
                </div>
            </div>
        </div>
        </>   
    )
}

export default Hero;