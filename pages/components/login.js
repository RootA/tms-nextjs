import Link from 'next/link'
import axios from 'axios';
import Alert from 'react-s-alert';
import { toast } from 'react-toastify';

 class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: ' ',
            email: ' '
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/v1/login', {
            email : this.state.email || "",
            password : this.state.password || ""
        }).then((res)=> {
            console.log(res.data)
            notify = () => { toast.success(res.data.messge, {
                position: toast.POSITION.TOP_LEFT
            }); }
        }).catch(function (error) {
            console.log(error.response)
        });
         
        this.setState({
             password: '',
             email: ''
        })
     }
     render(){
         return (
                <div className="container">
                    <div className="row" style={{marginTop:100 + 'px'}}>
                        <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
                            <form role="form">
                                <fieldset>
                                    <h2>Please Sign In</h2>
                                    <button onClick={this.notify}>Notify</button>
                                    <hr className="colorgraph"/>
                                    <div className="form-group">
                                        <input type="email" name="email" id="email" className="form-control input-lg" placeholder="Email Address" ref="email"  value={this.state.email} onChange={e => this.handleChange(e)}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="password" id="password" className="form-control input-lg" placeholder="Password"  ref="password" value={this.state.password} onChange={e => this.handleChange(e)}/>
                                    </div>
                                    <span className="button-checkbox">
                                        {/* <button type="button" className="btn" data-color="info">Remember Me</button> */}
                                        {/* <input type="checkbox" name="remember_me" id="remember_me" checked="checked" className="hidden"/> */}
                                        <Link><a href="" className="btn btn-link pull-right">Forgot Password?</a></Link>
                                    </span>
                                    <hr className="colorgraph"/>
                                    <div className="row">
                                        <div className="col-xs-6 col-sm-6 col-md-6">
                                            <input type="submit" className="btn btn-lg btn-success btn-block" value="Sign In" onClick={(e) => this.onSubmit(e)}/>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6">
                                        <Link as="/signup" ><a href="/signup" className="btn btn-lg btn-primary btn-block">Register</a></Link>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                    <Alert stack={{limit: 3}} />
                </div>
         );
     }
 }
 export default Login