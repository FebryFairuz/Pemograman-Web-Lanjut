import './App.css';
import {useState,useEffect}  from 'react';
import {useDispatch} from 'react-redux';
import { Route,Switch,Redirect } from "react-router-dom";
import Layout from "./component/module/templates/Layout";
import Signin from "./component/module/page/authentification";

function App() {

  const IsAuth = localStorage.getItem("AuthToken");
    const dispatch = useDispatch();
    const SignOutPage = ()=>{
        dispatch({type:"SIGN_OUT"});
    }

    const PageNotFound = () =>{
      return <h2>Page not found</h2>
    }

    return (
      <Switch>  
          {!IsAuth ? (
              /*Render auth page when user at `/auth` and not authorized.*/              
              <Route path="/sign-in" component={Signin}/>
          ) : (
              /*Otherwise redirect to root page (`/`)*/
              <Redirect from="/sign-in" to="/"/>
          )}

          <Route path="/sign-out" component={SignOutPage}/>
              
          {!IsAuth ? (
              /*Redirect to `/auth` when user is not authorized*/
              <Redirect to="/sign-in"/>            
          ) : (
              <Layout />            
          )}       
          <Route component={PageNotFound}/>
      </Switch> 
    );
}

export default App;
