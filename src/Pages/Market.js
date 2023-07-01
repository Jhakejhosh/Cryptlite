import Header from "../Components/Header.js";
import Community from "../Components/Community.js";
import Faq from "../Components/Faq.js";
import {useEffect, useState} from "react";
import {Select, MenuItem} from "@mui/material";
import {useGlobalContext} from "../Context/Context.js";
import {AllCoins} from "../Asset/Data/Config.js";
import axios from "axios";
import {Link} from "react-router-dom"

const Market = () => {
	const {currency, setCurrency, sign} = useGlobalContext();
	const [search, setSearch] = useState();
	const [cryptos, setCryptos] = useState([]);


	useEffect(() => {
		window.scrollTo(0,0)
	}, []);
		
	useEffect(() => {
	const fetchAllCoins = async() => {
		const {data} = await axios.get(AllCoins(currency));
		setCryptos(data);
	}
		fetchAllCoins();
	}, [currency]);

	return (
		<>
		 <Header/>
		   <section>
		     <div className="market_head">
		       <h2>Markets</h2>
		       <Select value={currency} variant="outlined" onChange={e => setCurrency(e.target.value)} style={{width:"80px", height:"40px"}}>
		         <MenuItem value={"USD"}>USD</MenuItem>
		         <MenuItem value={"NGN"}>NGN</MenuItem>
		       </Select>
		     </div>
		     <input type="search" placeholder="Search" onChange={e => setSearch(e.target.value)} value={search}/>
		     { !cryptos ? (<div>Loading....</div>) : (
		     <table>
		       <tr>
		         <th style={{textAlign:"left"}}>Name</th>
		         <th style={{textAlign:"left"}}>Price/24h Change</th>
		         <th style={{textAlign:"right",}}>Cap/Vol</th>
		       </tr>
		         {cryptos ? cryptos.map(crypto => {
		         	const {id, symbol, name, image, current_price, market_cap, total_volume, price_change_percentage_24h} = crypto;
		         	const profit = price_change_percentage_24h >= 0;
		         	return (
		         	  <Link to={`/coins/${id}`}><tr key={id}>
		         	    <td style={{textAlign:"left",
		         	    	display:"flex",
		         	    	alignItems:"center"
		         	    }}>
		         	      <img src={image} style={{marginRight:"0.5rem"}} alt={name}/>
		         	      <div className="img_text" style={{display:"flex", flexDirection:"column"}}>
		         	        <span>{symbol.toUpperCase()}</span>
		         	        <small style={{color:"darkgrey"}}>{name}</small>
		         	      </div>
		         	    </td>
		         	    <td style={{textAlign:"left",
		         	    	display:"flex",
		         	    	flexDirection:"column"
		         	    }}>
		         	      <span>{sign}{current_price.toLocaleString()}</span>
		         	      <small style={{
		         	      	color:profit > 0 ? "green" : "red"
		         	      }}>{profit && "+"}{price_change_percentage_24h.toFixed(2)}%</small>
		         	    </td>
		         	    <td style={{textAlign:"right",
		         	      display:"flex",
		         	    	flexDirection:"column"
		         	    }}>
		         	      <span>{sign}{market_cap?.toLocaleString().slice(0, -10)}M</span>
		         	      <small style={{
		         	      	color:"darkgrey"
		         	      }}>{total_volume?.toLocaleString().slice(0, -10)}M</small>
		         	    </td>
		         	  </tr></Link>
		         	)
		         }) : "Loading..."}
		     </table>)}
		   </section>
		 <Faq/>
		 <Community/>
		</>
		)
}

export default Market;