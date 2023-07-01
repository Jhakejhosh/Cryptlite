import React, {useContext, useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {onAuthStateChanged, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import {auth} from "../Firebase/Firebase.js"
import {toast} from "react-toastify";



const AppContext = React.createContext();

const AppProvider = ({children}) => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [currency, setCurrency] = useState("NGN");
	const [sign, setSign] = useState("N");
	const [showPassword, setShowPassword] = useState(false);
	
	//Google authentication
	const googleAuth = async() => {
		const provider = new GoogleAuthProvider();
		try {
			await signInWithPopup(auth, provider);
			toast.success("Welcome 🚀", {
				position : toast.POSITION.TOP_CENTER
			})
		} catch (e) {
			toast.error(`${e.message}`, {
				position : toast.POSITION.TOP_CENTER
			})
		}
	}
	
	useEffect(() => {
		if(currency==="NGN") setSign("N"); else if(currency==="USD") setSign("$")
	}, [currency])
	
	//controlling the user routing
	const [user, setUser] = useState({})
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, cred => {
			setUser(cred)
		})
		return () => {unsubscribe()}
	}, [])
	
	return <AppContext.Provider value={{loading, setLoading, sign, navigate, user, currency, setCurrency, showPassword, setShowPassword, googleAuth}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
	return useContext(AppContext)
}
export default AppProvider;