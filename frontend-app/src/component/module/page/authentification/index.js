import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import sign from "jwt-encode";
import Logo from "../../../../media/logo/logo-ibik-web.png";
import Background from "../../../../media/bg/bg-3.jpg";
import "./sign.css"

export function Signin() {

    const [postData,setPostData] = useState({username:'',password:''});
    const dispatch = useDispatch();

    //message info
    const [message,setMessage] = useState("");
    const [labelSignIN,setLabelSignIN] = useState("Sign In");
    
    const submitPost = (e) =>{
        e.preventDefault();
        let publicKey = "PWL123!@#$";
        let encription = sign(postData,publicKey);
        console.log(postData);

        //dispatch({type:"SIGN_IN",param:encription});        

        var axios = require('axios');
        var qs = require('qs');
        var data = qs.stringify({
            'token': encription 
        });
        var config = {
            method: 'post',
            url: 'http://localhost/program/IBIK/2020-2021/Pemograman-Web-Lanjut/backend-app/APIRequest/authentification',
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
        };

        axios(config)
            .then(function (response) {
                setLabelSignIN("processing...");
            //store ke dalam redux
                if(response.data.return){ // true
                    let publicKey = "PWL123!@#$";
                    let encription = sign(response.data,publicKey);
                    dispatch({type:"SIGN_IN", param:encription});
                    //setLabelSignIN("Sign In");
                    setMessage(response.data.message);
                    //redirect / reload page
                    setTimeout(() => {
                        //window.location.reload();
                        window.location.href = "/";
                    }, 1000);

                }else{
                    setLabelSignIN("Sign In");
                    setMessage(response.data.message);
                }
            //end store ke redux
                
        })
            .catch(function (error) {
            console.log(error);
        });

    }

    return (
        <div className="form-signin text-center">
            <form className="form" onSubmit={submitPost} autoComplete="off" >
                <img className="mb-4" src={Logo} alt="IBIK" width="100%" />
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                {(message) ? (
                <div className="alert alert-danger">
                    <p class="m-0">{message}</p>
                </div>
                ) : ''}
                <div className="form-floating">
                    <input type="text" name="Username" className="form-control"  id="floatingInput" value={postData.username} onChange={(e)=>setPostData({...postData, username:e.target.value })} placeholder="Username" />
                    <label for="floatingInput">Username</label>
                </div>
                <div className="form-floating">
                    <input type="password" name="Password" className="form-control"  id="floatingPassword" value={postData.password} onChange={(e)=>setPostData({...postData, password:e.target.value })} placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>

                <button className="w-100 btn btn-lg btn-primary" type="submit">{labelSignIN}</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2021 - Pemograman Web Lanjut</p>
            </form>
        </div>
    )
}

export default Signin