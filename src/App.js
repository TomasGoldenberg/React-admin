import React,{useEffect} from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import Admin from "./Containers/Admin"
import Sales from "./Containers/Sales"
import Orders from "./Containers/Orders"
import Clients from "./Containers/Clients"
import Products from "./Containers/Products"
import Login from "./Containers/Login"
import {connect} from "react-redux";
import {auth} from "./firebase.js"
import {setUser } from "./actions";

//necesitamos traer a redux aca



function App(props) {

useEffect( (setUser)=>{

 const unSuscribe = auth.onAuthStateChanged((authUser) => {
    if(authUser){
      //is logged
      props.setUser(authUser)
      console.log("reduxiando user", authUser)
    }else{
      //isent logged
      props.setUser([])
    }
  })

  return ()=>{
    unSuscribe()
  }


},[] )

console.log(props.user)

  return (
    <Router>
        <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/" exact component={props.user.length === 0 ? Login :Admin } />
            <Route path="/sales" exact component={ props.user.length === 0 ? Login :Sales  } />
            <Route path="/orders" exact component={props.user.length === 0 ? Login : Orders } />
            <Route path="/clients" exact component={props.user.length === 0 ? Login : Clients } />
            <Route path="/products" exact component={props.user.length === 0 ? Login : Products } />
        </Switch>
    </Router>
  );
}

const mapDispatchToProps={
 setUser

}

const mapStateToProps =state=>{
  return{
      user:state.user
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);