import Header from "../Components/Header.js";
import Community from "../Components/Community.js";
import {Link} from "react-router-dom";
import {AiFillEyeInvisible, AiFillEye} from "react-icons/ai"
import {useGlobalContext} from "../Context/Context.js";
import {FcGoogle} from "react-icons/fc";
import {useFormik} from "formik"
import * as Yup from "yup"
import {signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "../Firebase/Firebase.js";
import {toast} from "react-toastify";

const Login = () => {
	
const {showPassword, setShowPassword, googleAuth, navigate} = useGlobalContext();
	
const formik = useFormik({
		initialValues : {
			email:'',
			password:''
		},
		validationSchema : Yup.object({
		email: Yup.string().email("Invalid email address").required("Email is required"),
		password: Yup.string().min(8, "Password must be minimum of 8 characters").required("Password is required")
	}),
		onSubmit : async(values) => {
			try {
				await signInWithEmailAndPassword(auth, formik.values.email, formik.values.password)
				toast.success("Login successful 👍", {
					position: toast.POSITION.TOP_CENTER
				})
				navigate("/")
			} catch (e) {
				toast.error(`${e.message}`, {
					position : toast.POSITION.TOP_CENTER
				})
			}
		}
	})
	
	return (
		<>
		  <Header/>
		  <section>
		  <div className="register">
		    <h2>Log In</h2>
		    <form onSubmit={formik.handleSubmit}>
		      <div className="form-email">
		        <label>Email</label>
		        <input type="email" placeholder="example@gmail.com" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} name="email"/>
		        {formik.touched.email && formik.errors.email ? <small>{formik.errors.email}</small> : null}
		      </div>
		      <div className="form-password">
		        <label>Password</label>
		        <span className="password">
		        <input type={showPassword ? "text" : "password"} placeholder="********" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} name="password"/>
		        <span onClick={()=>setShowPassword(!showPassword)}>{showPassword ? <AiFillEye/> : <AiFillEyeInvisible/>}</span>
		        </span>
		        {formik.touched.password && formik.errors.password ? <small>{formik.errors.password }</small> : null}
		      </div>
		      
		      <button type="submit">Login</button>
		     <div className="or">
		     <div></div><p>or</p><div></div>
		     </div>
		     
		     <button className="google-btn" onClick={googleAuth}><FcGoogle style={{marginRight:"0.5rem"}}/>Continue with google
		     </button>
		      <p className="form-option">Don't have an account ? <Link to="/register">Register here</Link></p>
		    </form>
		  </div>
		  </section>
		  <Community/>
		</>  
		)
}

export default Login