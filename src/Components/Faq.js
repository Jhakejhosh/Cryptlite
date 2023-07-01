import {Accordion} from "../Asset/Data/Data.js";
import SingleAccord from "./SingleAccord.js";


const Faq = () => {
	
	return (
		  <section>
		    <div className="faq">
		      <h2>FAQs</h2>
		      <div className="faq_body">
		        {Accordion.map(accord => {
		        	return <SingleAccord key={accord.id} {...accord}/>
		        })}
		      </div>
		    </div>
		  </section>
		)
}

export default Faq;