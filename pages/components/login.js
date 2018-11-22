import Link from 'next/link';
import axios from 'axios';
import React from 'react';
import Router from 'next/router'

 class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
    }

    handleSubmit = (event) => {
        event.preventDefault()

        var apiBaseUrl = "http://localhost:5000/api/v1/login";
        var payload= {
            "email": event.target.elements.email.value,
            "password": event.target.elements.password.value
        }

        alert('payload', payload);
        
        axios.post(apiBaseUrl, payload).then(function (response) {
            if(response.status == 200){
                localStorage.setItem('auth_token', JSON.stringify(response.data.auth_token));
                localStorage.setItem('company_name', JSON.stringify(response.data.company_name));
                localStorage.setItem('email', JSON.stringify(response.data.email));
                localStorage.setItem('full_name', JSON.stringify(response.data.full_name));
                localStorage.setItem('public_id', JSON.stringify(response.data.public_id));
                localStorage.setItem('phone_number', JSON.stringify(response.data.phone_number));
                localStorage.setItem('type_id', JSON.stringify(response.data.type_id));
                localStorage.setItem('user_type', JSON.stringify(response.data.user_type));
                sessionStorage.setItem('public_id', response.data.public_id);

                console.log('session',sessionStorage.getItem('public_id'));

                if (response.data.user_type == "Admin"){
                    Router.push("/dash");
                }
            }
        }).catch(function (error) {
            console.log('error',error);
        });
      }


     render(){
         return (
                <div className="container">
                    <div className="row" style={{marginTop:100 + 'px'}}>
                        <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
                            <form role="form" onSubmit={this.handleSubmit}>
                                <fieldset>
                                    <h2>Please Sign In</h2>
                                    {/* <button onClick={this.notify}>Notify</button> */}
                                    <hr className="colorgraph"/>
                                    <div className="form-group">
                                        <input type="email" name="email" id="email" ref={node => (this.inputNode = node)} className="form-control input-lg" placeholder="Email Address" ref="email" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="password" id="password"  ref={node => (this.inputNode = node)} className="form-control input-lg" placeholder="Password"  ref="password" required  />
                                    </div>
                                    <span className="button-checkbox">
                                        {/* <button type="button" className="btn" data-color="info">Remember Me</button> */}
                                        {/* <input type="checkbox" name="remember_me" id="remember_me" checked="checked" className="hidden"/> */}
                                        {/* <Link><a href="/signup" className="btn btn-link pull-right">Forgot Password?</a></Link> */}
                                    </span>
                                    <hr className="colorgraph"/>
                                    <div className="row">
                                        <div className="col-xs-6 col-sm-6 col-md-6">
                                            {/* <button className="btn btn-lg btn-success btn-block">Sign In</button> */}
                                            <input type="submit" className="btn btn-lg btn-success btn-block" value="Sign In"/>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6">
                                        <Link as="/signup" ><a href="/signup" className="btn btn-lg btn-primary btn-block">Register</a></Link>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
         );
     }
 }
 export default Login