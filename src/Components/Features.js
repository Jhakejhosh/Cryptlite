import {CryptliteFeatures} from "../Asset/Data/Data.js";
import entrepreneur from "../Asset/Images/entrepreneur.png";
import {useInView} from "react-intersection-observer";

const Features = () => {
	
const {ref:featuresImgRef, inView:entreInview} = useInView({
  	threshold: 0.5,
  	triggerOnce: true,
  });
	
	return (
		<section>
		 <div className="features">
		   <div className="features_head">
		     <span className="sub_title">Features</span>
		     <h1>The Heart of Cryptlite Platform</h1>
		     <p>Lorem ipsum dolor sit amet. Vel dolor unde in dignissimos dolor et repellendus saepe qui laboriosam quia et doloribus repudiandae qui perspiciatis odit.</p>
		     </div>
		     <div className="features-body">
		     <div className="features-container">
		     {CryptliteFeatures.map(feature => {
		     	const {id, icon, details, title} = feature;
		     	return (
		     		  <div className="features_card" key={id}>
		     		    <span className="features_icon"> {icon}</span>
		     		    <div className="texts">
		     		      <span>{title}</span><br/><br/>
		     		      <p>{details}</p>
		     		    </div>
		     		  </div>
		     		)
		     })}
		     </div>
		   <div className="features_img" ref={featuresImgRef}>
		     <img src={entrepreneur} alt="entrepreneur" className={entreInview ? "entre entre_show" : "entre"}/>
		   </div>
		   </div>
		 </div>
		</section>
		)
}

export default Features;