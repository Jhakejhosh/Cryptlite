import {FaBitcoin} from "react-icons/fa";
import {BsPersonFill} from "react-icons/bs";
import {FcGoogle} from "react-icons/fc";
import startup from "../Asset/Images/startup.png";
import {useInView} from "react-intersection-observer";
import {Link} from "react-router-dom"
import {useGlobalContext} from "../Context/Context.js";

const Banner = () => {
	
	const {googleAuth} = useGlobalContext()
  
  const {ref:headlineRef, inView:headlineInview} = useInView({
  	triggerOnce: true,
  });
  const {ref:bannerImgRef, inView:imgInview} = useInView({
  	threshold: 1,
  	triggerOnce: true,
  });
  

	return (
		<main ref={headlineRef}>
		  <div className={headlineInview ? "headlines show" : "headlines"}>
		  <span className="sub_title"><span><FaBitcoin/></span>Safe & secure platform</span>
		  <h1>Learn and Invest in Cryptocurrencies</h1>
		  <p>Find the crypto data you need – whether you’re looking to trade on a new exchange, invest in a fresh currency, or take a view on the big picture in global markets.</p>
		  <div className="banner-btn">
		     <Link to="/login"><button className="get_started"><BsPersonFill style={{marginRight:"0.5rem"}}/>Sign up with email
		     </button></Link>
		     <div className="or">
		     <div></div><p>or</p><div></div>
		     </div>
		     <button className="google-btn" onClick={googleAuth}><FcGoogle style={{marginRight:"0.5rem"}}/>Continue with google
		     </button>
		  </div>
		  </div>
		  <div className="banner_img" ref={bannerImgRef}>
		     <img src={startup} alt="startup" className={imgInview ? "startup startup_show" : "startup"}/>
		  </div>
		</main>
		)
}

export default Banner;