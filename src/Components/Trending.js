import {useState, useEffect} from "react";
import AliceCarousel from "react-alice-carousel";
import {TrendingCoin} from "../Asset/Data/Config.js";
import axios from "axios";
import {Link} from "react-router-dom";


const Trending = () => {
	
	const [trends, setTrends] = useState([]);
	const fetchTrendData = async() => {
		const {data} = await axios.get(TrendingCoin());
		setTrends(data.coins);
	}
	useEffect(() => {
		fetchTrendData();
	}, []);
	
	const items = trends.map(trend => {
		const {id, name, symbol, large} = trend.item;
		return (
			  <Link to={`/coins/${id}`}><div className="trend_details" key={id}>
			    <img src={large} alt={name}/>
			    <h5>{name}</h5>
			    <span>{symbol}</span>
			  </div></Link>
			)
	});
  const responsive = {
		0: {items : 2,},
		1024: {items : 4,},
	}
	
	return (
		  <section id="trend">
		    <div className="trend_head">
		      <h2>Check Out The Trending Cryptos</h2>
		      <p>Et iste dolorem ab perferendis voluptas aut enim necessitatibus et enim non esse sunt 33 eaque iusto rem consequatur numquam!</p>
		    </div>
		    <AliceCarousel mouseTracking infinite
		    autoPlayInterval={1000} animationDuration={2000} items={items} autoPlay responsive={responsive} disableDotsControls disableButtonsControls/>
		  </section>
		)
}

export default Trending;