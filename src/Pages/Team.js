import Header from "../Components/Header.js";
import Community from "../Components/Community.js";
import Partner from "../Components/Partner.js";
import Faq from "../Components/Faq.js";
import {useEffect, useState} from "react";
import {Jobs} from "../Asset/Data/Data.js";
import crowd from "../Asset/Images/crowdfunding.png";
import {FaAngleDoubleRight} from "react-icons/fa"

const Team = () => {
	const [value, setValue] = useState(0);
	const [active, setActive] = useState(false);
	const {department, description, profile} = Jobs[value];
	useEffect(() => {
		window.scrollTo(0,0)
	}, []);
	return (
		<>
		 <Header/>
		 <section>
		   <div className="team">
		     <div className="team_head">
		       <span className="sub_title">Team</span>
		       <h2>Our Team</h2>
		       <p>Lorem ipsum dolor sit amet. Vel dolor unde in dignissimos dolor et repellendus saepe qui laboriosam quia et doloribus repudiandae qui perspiciatis</p>
		     </div>
		     <img src={crowd} alt="team_work" className="team_img"/>
		   </div>
		   <div className="team_body">
		     <h2>Meet The Magicians</h2>
		     <div className="team_btns">
		       {
		       	Jobs.map((job, index) => {
		       		const {category} = job;
		       		return (
		       			  <button key={index} className={active ? "team_btn active" : "team_btn"} onClick={() => {
		       			  	setValue(index);
		       			  	setActive(true)
		       			  }}>{category}</button>
		       			)
		       	})
		       }
		      </div> 
		       <div className="profiles">
		         <h3>{department}</h3>
		         <h4>Job Roles</h4>
		         {description.map((role, index) => {
		         	return <p key={index}><FaAngleDoubleRight className="profile_icon"/>{role}</p>
		         })}
		         <div className="profile_imgs">
		             {profile.map((person, index) => {
		             	const {img , name, job} = person;
		             	return (
		             		  <div className="profile_card" key={index}>
		                     <img src={img} alt={name} className="person"/>
		                     <div className="img_jobs">
		                       <h4>{name}</h4>
		                       <span>{job}</span>
		                     </div>
		             		  </div>
		             		)
		             })
		             }
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

export default Team;