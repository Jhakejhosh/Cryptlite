import {FaApplePay, FaApper, FaStripe} from "react-icons/fa";
import {SiLogitech} from "react-icons/si";
import {GoLogoGithub} from "react-icons/go";
import {IoLogoSkype} from "react-icons/io";

const logo = [{
	id:1,
	icon:<FaStripe/>
},
{
	id:2,
	icon:<FaApper/>
},{
	id:3,
	icon:<GoLogoGithub/>
},
{
	id:4,
	icon:<FaApplePay/>
},
{
	id:1,
	icon:<SiLogitech/>
},
{
	id:1,
	icon:<IoLogoSkype/>
}]

const Partner = () => {
	return (
		  <div className="partner">
		   <h2>Our Partners</h2>
		   <div className="partner_grid">
		     {
		     	logo.map(name => {
		     		const {id, icon} = name;
		     		return (
		     		  <span key={id}>{icon}</span>
		     		)
		     	})
		     }
		   </div>
		  </div>
		)
}

export default Partner;