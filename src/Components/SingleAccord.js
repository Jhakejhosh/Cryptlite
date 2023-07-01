import {useState} from "react";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai"

const SingleAccord = ({title, info}) => {
	const [showInfo, setShowInfo] = useState(false);
	return (
		  <article>
		    <div className="accord_head">
		      <h4>{title}</h4>
		      <button onClick={() => setShowInfo(!showInfo)}>{showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
		    </div>
		    {showInfo && <p>{info}</p>}
		  </article>
		)
}

export default SingleAccord;