import Header from "../Components/Header.js";
import Partner from "../Components/Partner.js";
import Community from "../Components/Community.js";
import Faq from "../Components/Faq.js";
import sales from "../Asset/Images/sales-team.png";
import meysam from "../Asset/Images/meysam.jpg";
import huston from "../Asset/Images/huston.jpg";
import {useEffect} from "react";

const About = () => {
	useEffect(() => {
		window.scrollTo(0,0)
	}, [])
	return (
		<>
		 <Header/>
		 <section>
		   <div className="about_banner">
		     <div className="about_bannerHead">
		       <span className="sub_title">About us</span>
		       <h2>Welcome to Cryptlite</h2>
		       <p>Lorem ipsum dolor sit amet. Vel dolor unde in dignissimos dolor et repellendus saepe qui laboriosam quia et doloribus repudiandae qui perspiciatis odit🚀</p>
		     </div>
		     <img src={sales} alt="about" className="bannerHead_img"/>
		   </div>
		   <div className="about_body">
		     <h2>Discover More About Us</h2>
		     <p>Etino iusto dolorem et impedit facilis ex nobis enim et sunt possimus et pariatur cupiditate At error exercitationem.</p>
		     <div className="founders">
		       <h2>Our Founders</h2>
		       <div className="founders_img">
		         <div className="founders_card">
		           <img src={huston} alt="ceo"/>
		           <div className="founders_text">
		             <h4>Jacob Joshua</h4>
		             <span>Founder/CEO</span>
		           </div>
		         </div>
		         <div className="founders_card">
		           <img src={meysam} alt="cto"/>
		           <div className="founders_text">
		             <h4>Bob James</h4>
		             <span>CTO</span>
		           </div>
		         </div>
		       </div>
		     </div>
		   </div>
		 </section>
		 <Partner/>
		 <Faq/>
		 <Community/>
		</>
		)
}

export default About;