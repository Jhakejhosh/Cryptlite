import {Menu} from "../Asset/Data/Menu.js";
import {HiOutlineMenuAlt4} from "react-icons/hi";
import {GiAstronautHelmet} from "react-icons/gi";
import {useState, useRef, useEffect} from "react";
import {Link} from "react-router-dom";
import {useGlobalContext} from "../Context/Context.js";
import {signOut} from "firebase/auth";
import {auth} from "../Firebase/Firebase.js";
import {toast} from "react-toastify";

const Header = () => {
	
	const [showMenu, setShowMenu] = useState(false);
	const menuListRef = useRef(null);
	const {user, navigate} = useGlobalContext();
	
	const logout = async() => {
		try {
			await signOut(auth);
			toast.success("Logout successful", {
				position : toast.POSITION.TOP_CENTER
			});
			navigate("/")
		} catch (e) {
			toast.error(`${e.message}`, {
				position : toast.POSITION.TOP_CENTER
			})
		}
	}
	
	useEffect(() => {
		if(showMenu) {
			menuListRef.current.style.width="100%";
		}else {
			menuListRef.current.style.width="0px"
		}
	}, [showMenu]);
	
	return (
		  <div>
		    <nav>
		      <div className="logo">
		        <Link to="/"><h3><GiAstronautHelmet/>Cryptlite</h3></Link>
		      </div>
		      <div className="menu_list" ref={menuListRef}>
		      <div className="menuContainer">
		        <ul>{Menu.map(list => {
		        	const {id, icon, name, url} = list;
		        	return (
		        		<Link to={url}><li key={id}><span>{icon}</span>{name}</li></Link>
		        	)
		        })}</ul>
		        
		        <span className="close_btn" onClick={() => setShowMenu(false)}>&times;</span>
		        {!user ? (<><Link to="/register"><button className="get_started">Register</button></Link>
		        <Link to="/login"><button className="login-btn">Log in</button></Link></>) : (<button className="get_started" onClick={logout}>Log out</button>)}
		        </div>
		      </div>
		      
		        {/**desktop view**/}
		      <div className="desktopContainer">
		        {Menu.map(list => {
		        	const {id, name, url} = list;
		        	return (
		        	<ul key={id}>
		        		<Link to={url}><li>{name}</li></Link></ul>
		        	)
		        })}</div>
		      
		        <span onClick={() => setShowMenu(true)} className="bars"><HiOutlineMenuAlt4/></span>
		    </nav>
		  </div>
		)
}

export default Header;