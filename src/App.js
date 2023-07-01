import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home.js";
import About from "./Pages/About.js";
import Market from "./Pages/Market.js";
import Register from "./Pages/Register.js";
import Login from "./Pages/Login.js";
import Info from "./Pages/Info.js";
import Team from "./Pages/Team.js";
import SingleCoin from "./Pages/SingleCoin.js";
import './App.css';
import ProtectedRoute from "./Components/Protected route.js"
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <>
    <ToastContainer theme="colored"/>
    <Routes>
      <Route path="/" element={<Home/>} exact/> 
      <Route path="/about" element={<About/>}/> 
      <Route path="/market" element={<ProtectedRoute><Market/></ProtectedRoute>}/> 
      <Route path="/info" element={<Info/>}/> 
      <Route path="/register" element={<Register/>}/> 
      <Route path="/login" element={<Login/>}/> 
      <Route path="/team" element={<Team/>}/> 
      <Route path="/coins/:id" element={<SingleCoin/>}/> 
    </Routes>
    </>
  );
}

export default App;
