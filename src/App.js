import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './UI/components/LoginComponents/login';
import Reset from './UI/components/Resetcomponents/Reset';
// import Signup from './UI/components/SignupComponents/signup';
// import Load from './UI/components/LoadingPage/load';
// import Home from './UI/pages/Home/home';
import Pagenotfound from './UI/components/PageNotFound/pagenotfound';
function App() {
  // const [loading, setLoading] = useState(false);
  // useEffect(() =>{
  //     setLoading(true)
  //     setTimeout(()=>{
  //         setLoading(false)
  //     },1000)
  // },[]);
  return (
    // (loading ? <Load/> :(
    <div className="App">
     <Router>
       <Routes>
         {/* <Route path="/" element={<Home/>} /> */}
         <Route path="/" element={<Login/>} />
         <Route path="/*" element={<Pagenotfound/>}/>
         <Route path="/Reset*" element={<Reset/>}/>
         <Route path="/LOgin*" element={< Login/>}/>
         {/* <Route path="/Signup" element={<Signup/>}/> */}
       </Routes>
     </Router>
    </div>
    // ))
  );
}

export default App;
