import Header from "../Components/Header.js";
import Community from "../Components/Community.js";
import Faq from "../Components/Faq.js";
import Partner from "../Components/Partner.js";
import {useEffect} from "react";
import AliceCarousel from "react-alice-carousel";
import {InfoImages} from "../Asset/Data/Data.js";
import {InfoDetails} from "../Asset/Data/Data.js";

const Info = () => {
	
	const items = InfoImages.map(image => {
		const {id, img} = image;
		return (
			  <div className="info-img" key={id}>
			    <img src={img} alt="poster"/>
			  </div>
			)
	});
  const responsive = {
		0: {items : 1,},
		1024: {items : 3,},
	}
	useEffect(() => {
		window.scrollTo(0,0)
	}, []);
	return (
		<>
		 <Header/>
		 <section>
		    <div className="info-alice">
		    <AliceCarousel mouseTracking infinite
		    autoPlayInterval={1000} animationDuration={2000} items={items} autoPlay responsive={responsive} disableDotsControls disableButtonsControls/></div>
		    <div className="info-header">
		       <h1>Track, read, and hold 100+ cryptocurrencies on Cryptlite🚀</h1>
		    </div>
		    <div className="info-details">
		      {InfoDetails.map (infos => {
		      	const {id, title, info} = infos;
		      	return (
		      	  <div className="info-detail" key={id}>
		      	    <h3>{title}</h3>
		      	    <p>{info}</p>
		      	  </div>
		      	)
		      })}
		    </div>
		 </section>
		 <Partner/>
		 <Faq/>
		 <Community/>
		</>
		)
}

export default Info;