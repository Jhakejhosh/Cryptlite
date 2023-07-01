import {GiStopwatch, GiSpeedometer} from "react-icons/gi";
import {FaRegHandshake} from "react-icons/fa";
import {BiHeadphone} from "react-icons/bi";
import team from "../Asset/Images/support-team.png"

const HowItWork = () => {
	return (
		  <section>
		    <div className="work">
		      <div className="work_head">
		       <span className="sub_title">How it works</span>
		       <h2>Easy Tracking of Cryptocurrency</h2>
		       <p>Aut excepturi doloremque 33 sint magnam est culpa exercitationem et blanditiis architecto. Eum provident eveniet in animi corporis aut porro voluptatem </p>
		      </div>
		      <div className="work-container">
		      <div className="work_lists">
		        <div className="work_list">
		          <span className="work_icon">
		            <GiSpeedometer/>
		          </span>
		          <span className="list_texts">Exchange Value</span>
		        </div>
		        <div className="work_list">
		          <span className="work_icon">
		            <BiHeadphone/>
		          </span>
		          <span className="list_texts">User Security</span>
		        </div>
		        <div className="work_list">
		          <span className="work_icon">
		            <GiStopwatch/>
		          </span>
		          <span className="list_texts">Assets Tracking</span>
		        </div>
		        <div className="work_list">
		          <span className="work_icon">
		            <FaRegHandshake/>
		          </span>
		          <span className="list_texts">User's Dashboard</span>
		        </div>
		      </div>
		      <div className="work_body">
		        <img src={team} alt="team" className="work_img"/>
		      </div>
		      </div>
		    </div>
		  </section>
		)
}

export default HowItWork;