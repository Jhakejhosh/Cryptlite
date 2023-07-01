import Header from "../Components/Header.js";
import Banner from "../Components/Banner.js";
import Features from "../Components/Features.js";
import Popular from "../Components/Popular.js";
import HowItWork from "../Components/Work.js";
import Trending from "../Components/Trending.js";
import Partner from "../Components/Partner.js";
import Community from "../Components/Community.js";
import Faq from "../Components/Faq.js";
import {useEffect} from "react"


const Home = () => {
	useEffect(() => {
		window.scrollTo(0,0)
	}, []);
	return (
		<>
		 <Header/>
		 <Banner/>
		 <Features/>
		 <Popular/>
		 <HowItWork/>
		 <Trending/>
		 <Partner/>
		 <Faq/>
		 <Community/>
		</>
		)
}

export default Home;