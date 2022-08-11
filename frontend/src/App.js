import React from "react"
import List from './components/list/list';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./components/Signin/Signin";
import Logout from "./components/Logout/Logout";
import Signup from "./components/Signup/Signup";

function App() {
  return (
  <>
     <BrowserRouter>
      <Routes>
         <Route path="/"  element={<Signin/>}>Signin</Route>
        <Route path="/Signup" element={<Signup/>}>Signup</Route>
        <Route path="/Logout" element={<Logout/>}>Logout</Route>
       <Route path="/list" element={<List/>}></Route>
      </Routes>
      
     </BrowserRouter>
  </>
     
  );
}

export default App;