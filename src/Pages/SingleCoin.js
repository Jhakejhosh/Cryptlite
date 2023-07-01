import Header from "../Components/Header.js";
import Community from "../Components/Community.js";
import Faq from "../Components/Faq.js";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {CoinDetails} from "../Asset/Data/Config.js";
import axios from "axios";
import {useGlobalContext} from "../Context/Context.js";
import {AiOutlineFile, AiOutlineLink} from "react-icons/ai"

const SingleCoin = () => {
	const {id} = useParams();
	const [coins, setCoins] = useState([]);
	const {currency, sign} = useGlobalContext()
	const profit = coins.market_data ? coins.market_data.price_change_percentage_24h_in_currency[currency.toLowerCase()] >= 0 : "--";
	
	const profit_1h = coins.market_data ? coins.market_data.price_change_percentage_1h_in_currency[currency.toLowerCase()] >= 0 : "--";
	
	const profit_7d = coins.market_data ? coins.market_data.price_change_percentage_7d_in_currency[currency.toLowerCase()] >= 0 : "--";


	useEffect(() => {
		window.scrollTo(0,0)
	}, []);
	useEffect(() => {
	const fetchData = async() => {
		const {data} = await axios.get(CoinDetails(id));
		setCoins(data)
	};
		fetchData();
	}, [id]);
	
	return (
		<>
		 <Header/>
		 <section>
		   <div className="single_coin">
		     <div className="single_head">
		        <span className="rank">Rank {coins.market_cap_rank}</span>
		        <header>
		          <div className="id_img">
		            <img src={coins.image ? coins.image.large : null} alt={coins.name}/>
		            <div className="img_logoText">
		              <h3>{coins.name}</h3>
		              <span>{coins.symbol}</span>
		            </div>
		          </div>
		          <div className="id_price">
		            <h3>{sign}{coins.market_data ? coins.market_data.current_price[currency.toLowerCase()].toLocaleString() : "--"}</h3>
		            <span style={{
		            	color: profit > 0 ? "green" : "red",
		            	textAlign:"right"
		            }}>{profit && "+"}{coins.market_data ? coins.market_data.price_change_percentage_24h_in_currency[currency.toLowerCase()].toFixed(2) : "--"}%</span>
		          </div>
		        </header>
		        <div className="about-coin">
		        <h3>About</h3>
		        <p className="coin_des">{coins.description ? coins.description.en.split(".")[0] : "loading..."}...</p>
		        </div>
		        <button className="trade-coin"><a href={coins.tickers ? coins.tickers[3].trade_url : null}>Trade your {coins.name}</a></button>
		        <div className="resources">
		          <h3>Resources</h3>
		          <div className="resources-list">
                <a href={coins.links ? coins.links.homepage[0] : null}><AiOutlineLink style={{marginRight:"1rem"}}/>Official website</a>
                <a href={coins.links ? coins.links.blockchain_site[0] : null}><AiOutlineFile style={{marginRight:"1rem"}}/>{coins.name} Blockchain</a>
		          </div>
		        </div>
		        <div className="coin_data">
		          <h3>Market stats</h3>
		          <div className="surge">
		             <div className="stats"><h6>MARKET CAP</h6> <p>{sign}{coins.market_data ? coins.market_data.market_cap[currency.toLowerCase()].toLocaleString().slice(0, -10) : "0"}M</p></div>
		             
		          <div className="stats">
		            <h6>VOLUME (24H)</h6><p>{sign}{coins.market_data ? coins.market_data.total_volume[currency.toLowerCase()].toLocaleString().slice(0, -10) : "0"}M</p>
		          </div>
		          
		          <div className="stats">
		            <h6>CIRCULATING SUPPLY</h6><p>{coins.market_data ? coins.market_data.circulating_supply.toLocaleString().slice(0, -10) : "--"}M {coins.symbol}</p>
		          </div>
		          
		          <div className="stats">
		            <h6>PRICE CHANGE (24H)</h6><p style={{color: profit > 0 ? "green" : "red"}}>{profit && "+"}{coins.market_data ? coins.market_data.price_change_percentage_24h_in_currency[currency.toLowerCase()].toFixed(2) : "0"}%</p>
		          </div>
		          
		          <div className="stats">
		            <h6>POPULARITY</h6><p>#{coins.market_data ? coins.market_data.market_cap_rank : "0"}</p>
		          </div>
		          
		          <div className="stats">
		            <h6>PRICE CHANGE (1H)</h6><p style={{color: profit_1h > 0 ? "green" : "red"}}>{profit_1h && "+"}{coins.market_data ? coins.market_data.price_change_percentage_1h_in_currency[currency.toLowerCase()].toFixed(2) : "0"}%</p>
		          </div>
		          
		          <div className="stats">
		            <h6>PRICE CHANGE (7D)</h6><p style={{color: profit_7d > 0 ? "green" : "red"}}>{profit_7d && "+"}{coins.market_data ? coins.market_data.price_change_percentage_7d_in_currency[currency.toLowerCase()].toFixed(2) : "0"}%</p>
		          </div>
		          
		          <div className="stats">
		            <h6>ALL TIME HIGH</h6><p>{sign}{coins.market_data ? coins.market_data.ath[currency.toLowerCase()].toLocaleString().slice(0, -5) : "0"}M</p>
		          </div>
	
		         </div>
		       </div>
		     </div>
		   </div>  
		 </section>
		 <Faq/>
		 <Community/>
		</>
		)
}

export default SingleCoin;