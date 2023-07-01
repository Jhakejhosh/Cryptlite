import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CircularProgress from '@mui/material/CircularProgress';
import {useState, useEffect} from "react";
import {useGlobalContext} from "../Context/Context.js";
import axios from "axios";
import {Link} from "react-router-dom";
import {PopularCoins} from "../Asset/Data/Config.js"


const Popular = () => {
	const [coins, setCoins] = useState([]);
	const {loading, setLoading, currency, sign} = useGlobalContext();
	
	useEffect (() => {
		setLoading(true)
const fetchData = async() => {
		const {data} = await axios.get(PopularCoins(currency));
    setCoins(data)
	}
	setLoading(false)
	fetchData()
	}, [currency, setLoading])
	
	return (
		  <section>
		    <div className="popular">
		      <h2>Popular Cryptocurrencies</h2>
		      <TableContainer style={{
		      	marginBottom:"var(--medium-space)"
		      }}>
		        <Table>
		          <TableHead>
		            <TableRow style={{border:"none"}}>
		              <TableCell align="left">Name</TableCell>
		              <TableCell align="right">Last Price</TableCell>
		              <TableCell align="right">24h Change</TableCell>
		            </TableRow>
		          </TableHead>
		          {
		          	loading ? (
		          		  <CircularProgress style={{color:"var(--primary-color)",
		          		  	textAlign:"center"
		          		  }}/>
		          		) : (
		          			  <TableBody>
		          			    {coins.map(coin => {
		          			    	const {id,symbol,name,image,current_price,price_change_percentage_24h} = coin;
		          			    	const profit = price_change_percentage_24h >= 0;
		          			    	return (<TableRow key={id}>
		          			    	  <Link to={`/coins/${id}`}><TableCell scope="row" style={{
		          			    	  	display:"flex",
		          			    	  	gap:"10px"
		          			    	  }} component="th">
		          			    	    <img src={image} alt={name}/>
		          			    	    <div className="name_text">
		          			    	    <span style={{
		          			    	    	fontWeight:"bold"
		          			    	    }}>{name}</span>
		          			    	    <span style={{
		          			    	    	textTransform:"uppercase",
		          			    	    	color:"darkgrey"
		          			    	    }}>{symbol}</span>
		          			    	    </div>
		          			    	  </TableCell>
		          			    	  </Link>
		          			    	  <TableCell align="right" >{sign}{current_price.toLocaleString()}</TableCell>
		          			    	<TableCell align="right" style={{
		          			    		color: profit > 0 ? "green" : "red"
		          			    	}}>{coin?.price_change_percentage_24h.toFixed(2)}%</TableCell>
		          			    	</TableRow>)
		          			    })}
		          			  </TableBody>
		          			)
		          }
		        </Table>
		      </TableContainer>
		      <Link to="/market"><button className="view_more">View more markets ></button></Link>
		    </div>
		  </section>
		)
}

export default Popular