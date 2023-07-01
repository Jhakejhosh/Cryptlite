import {useGlobalContext} from "../Context/Context.js";

const ProtectedRoute = ({children}) => {
	
	const {user, navigate} = useGlobalContext();
	if(!user){
		navigate("/login")
	}
	
	return children
}

export default ProtectedRoute