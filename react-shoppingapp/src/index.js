import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import NetflixFooterComponent from './components/Netflix/NetflixFooterComponent';
//import InstagramIndexComponent from './components/Instagram/InstagramIndexComponent';


//import FakeComponent from './components/FakeComponent';
// import DataBindingnasa from './components/Databindingnasa';
// import Databindingnasacardcomponent from './components/Databindingnasacardcomponent';
//import EventBindingComponent from './components/EventBindingComponent';
//import TwoWayBinding from './components/TwoWayBinding';
//import TwoWayBindingExample from './components/ClassBinding/TwoWayBindingExample';
//import ShoppingClassDemo from './components/ClassBinding/ShoppingClassDemo';
//import ShoppingComponent from './components/ClassBinding/ShoppingComponent';
import FakeShoppingComponentAgain from './components/FakeComponentAgain';
import FakeComponentEg from './components/FakeComponentEg';
import ShoppingComponent from './components/ClassBinding/ShoppingComponent';


// import { Netflixregistercompnt } from './components/NetflixRegistercomponent';
// import NetflixIndexComponent from './components/NetflixIndexComponent';
// import Registercomponent from './components/Registercomponent';
// import Databindingcomponent from './components/Databindingcomponent';
// import DataBinding from './components/DataBinding';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShoppingComponent/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
