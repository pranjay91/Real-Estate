
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import PropertyView from './components/PropertyView';
// import AddProperty from './components/AddProperty';
//import AddProperty from "./components/addProperty/addProperty";
import Logout from "./components/Logout/Logout";


function App() {
  return (
    <div className="App">
   
      <BrowserRouter>
      <Routes>
            <Route path="/" element={<Signin/>}></Route>
             <Route path="/signup" element={<Signup/>}></Route> 
            <Route path="/listproperty" element={<PropertyView/>}></Route>
            {/* <Route path="/addproperty" element={<AddProperty/>}></Route> */}
            <Route path="/logout"  element={<Logout/>}></Route> 
          </Routes>
      </BrowserRouter>
     
    </div>

  );
}

export default App;