import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { render } from "react-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Login} from './components/Login/login.jsx';
import {Register} from './components/RegisterBecado/RegisterBecado.jsx';
import {Coach} from './components/Coach/Coach.jsx';
import {AllCoach} from './components/allCoach/AllCoach.jsx';
import {AllBecados} from './components/allBecados/AllBecados.jsx';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";





// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";


// import AdminLayout from "./layouts/Admin/Admin.js";

// import RTLLayout1 from "./layouts/RTL/RTL.js";

// import "./assets/scss/black-dashboard-react.scss";
// import "./assets/demo/demo.css";
// import "./assets/css/nucleo-icons.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";



// import ThemeContextWrapper1 from "./contexts/ThemeContext.js";


// import BackgroundColorWrapper from "./contexts/BackgroundColorContext.js";

let token = 1

render(
  <BrowserRouter>
{  token ? <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/register-becado" element={<Register />}/>
      <Route path="/coach/:id" element={<Coach />}/>
      <Route path="/all-coach" element={<AllCoach />}/>
      <Route path="/all-becados" element={<AllBecados />}/>
      <Route path="*" element={<Navigate replace to='/'/>}/>

    </Routes> 
    :  <Routes>
      <Route path="*" element={<Login />}/>

    
    </Routes>
      
      }

  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
