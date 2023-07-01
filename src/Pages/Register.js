import Header from "../Components/Header.js";
import Community from "../Components/Community.js";
import {Link} from "react-router-dom";
import {AiFillEyeInvisible, AiFillEye} from "react-icons/ai"
import {useGlobalContext} from "../Context/Context.js";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../Firebase/Firebase.js";
import {toast} from "react-toastify";
import {useFormik} from "formik";
import * as Yup from "yup";

const Register = () => {
	
	const {showPassword, setShowPassword, navigate} = useGlobalContext();
	
	const formik = useFormik({
		initialValues : {
			email:'',
			password:'',
			confirmPassword:''
		},
		validationSchema : Yup.object({
		email: Yup.string().email("Invalid email address").required("Email is required"),
		password: Yup.string().min(8, "Password must be minimum of 8 characters").required("Password is required"),
		confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Password must match").required("Confirm password is required")
	}),
		onSubmit : async(values) => {
			try {
				await createUserWithEmailAndPassword(auth, formik.values.email, formik.values.password)
				toast.success("Welcome🚀...start exploring the crypto world", {
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
		    <h2>Create an Account</h2>
		    <form onSubmit={formik.handleSubmit}>
		      <div className="form-email">
		        <label for="email">Email</label>
		        <input type="email" placeholder="example@gmail.com" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} name="email"/>
		        {formik.touched.email && formik.errors.email ? <small>{formik.errors.email}</small> : null}
		      </div>
		      <div className="form-password">
		        <label for="password">Password</label>
		        <span className="password">
		        <input type={showPassword ? "text" : "password"} placeholder="********" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} name="password"/>
		        <span onClick={()=>setShowPassword(!showPassword)}>{showPassword ? <AiFillEye/> : <AiFillEyeInvisible/>}</span>
		        </span>
		        {formik.touched.password && formik.errors.password ? <small>{formik.errors.password}</small> : null}
		      </div>
		      <div className="form-password">
		      <label for="confirmpassword">Confirm Password</label>
		        <span className="password">
		        <input type={showPassword ? "text" : "password"} placeholder="********" value={formik.values.confirmPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} name="confirmPassword"/>
		        <span onClick={()=>setShowPassword(!showPassword)}>{showPassword ? <AiFillEye/> : <AiFillEyeInvisible/>}</span>
		        </span>
		        {formik.touched.confirmPassword && formik.errors.confirmPassword ? <small>{formik.errors.confirmPassword}</small> : null}
		      </div>
		      <button type="submit">Create an account</button>
		      <p className="form-option">Already have an account ? <Link to="/login">Log in</Link></p>
		    </form>
		  </div>
		  </section>
		  <Community/>
		</>  
		)
}

export default Register