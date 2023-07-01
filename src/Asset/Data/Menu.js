import {BsCurrencyExchange, BsBarChartFill} from "react-icons/bs";
import {RiTeamFill, RiLightbulbFlashFill} from "react-icons/ri";


export const Menu = [{
	id: 1,
	url: "/about",
	icon: <RiLightbulbFlashFill/>,
	name: "About Us"
},
{
	id: 2,
	url: "/market",
	icon: <BsBarChartFill/>,
	name: "Market"
},
{
	id: 3,
	url: "/info",
	icon: <BsCurrencyExchange/>,
	name: "Info"
},
{
	id: 4,
	url: "/team",
	icon: <RiTeamFill/>,
	name: "Team"
}
];
