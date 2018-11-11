import Link from 'next/link'
import axios from 'axios';
import Alert from 'react-s-alert';
import { toast } from 'react-toastify';
import Select from 'react-select';

// const options = [
//     { value: 'chocolate', label: 'Chocolate' },
//     { value: 'strawberry', label: 'Strawberry' },
//     { value: 'vanilla', label: 'Vanilla' }
//   ];

const categories = []

const usertypes = []


 class Signup extends React.Component {
    state = {
        selectedCategory: null,
        selectedType: null
      }
      handleChange0 = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
      }

      handleChange1 = (selectedOption1) => {
        this.setState({ selectedOption1 });
        console.log(`Option selected:`, selectedOption1);
      }

    constructor(props) {
        super(props);
        this.state = {
            first_name: 'sdsd',
            last_name: ' ',
            phone_number: '',
            company_name: '',
            email: '',
            user_type: '',
            description: '',
            address: '',
            category_id: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/v1/signup', {
            first_name : this.state.first_name,
            last_name : this.state.last_name,
            phone_number : this.state.phone_number,
            company_name : this.state.company_name,
            address : this.state.address,
            user_type : this.selectedType,
            email : this.state.email,
            description : this.state.description,
            category_id : this.selectedCategory
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
        const { selectedCategory } = this.state.category_id;
        const { selectedType } = this.state.user_type;

        const data = this.props.categories

        for (let a = 0;a < data.length; a++){
            categories.push({ value: data[a].public_id, label: data[a].name })
        }

        const data1 = this.props.usertypes

        for (let i = 0;i < data1.length; i++){
            usertypes.push({ value: data1[i].public_id, label: data1[i].name })
        }


         return (
                <div className="container">
                    <div className="row" style={{marginTop:100 + 'px'}}>
                        <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
                            <form role="form">
                                <fieldset>
                                    <h2>Complete the form and join the TMS family</h2>
                                    <hr className="colorgraph"/>
                                    <label>First Name</label>
                                    <div className="form-group">
                                        <input type="text" name="first_name" id="first_name" className="form-control input-lg" placeholder="John" ref="first_name"  value={this.state.first_name} onChange={e => this.handleChange(e)}/>
                                    </div>
                                    <label>Last Name</label>
                                    <div className="form-group">
                                        <input type="text" name="last_name" id="last_name" className="form-control input-lg" placeholder="Doe"  ref="last_name" value={this.state.last_name} onChange={e => this.handleChange(e)}/>
                                    </div>
                                    <label>Phone Number</label>
                                    <div className="form-group">
                                        <input type="text" name="phone_number" id="phone_number" className="form-control input-lg" placeholder="254.."  ref="phone_number" value={this.state.phone_number} onChange={e => this.handleChange(e)}/>
                                    </div>
                                    <label>Company Name</label>
                                    <div className="form-group">
                                        <input type="text" name="company_name" id="company_name" className="form-control input-lg" placeholder=""  ref="company_name" value={this.state.company_name} onChange={e => this.handleChange(e)}/>
                                    </div>
                                    <label>Address</label>
                                    <div className="form-group">
                                        <input type="text" name="address" id="address" className="form-control input-lg" placeholder=""  ref="address" value={this.state.address} onChange={e => this.handleChange(e)}/>
                                    </div>
                                    <label>Email</label>
                                    <div className="form-group">
                                        <input type="text" name="email" id="email" className="form-control input-lg" placeholder=""  ref="email" value={this.state.email} onChange={e => this.handleChange(e)}/>
                                    </div>
                                    <label>Describe what you do?</label>
                                    <div className="form-group">
                                        <textarea type="text" name="description" id="description" className="form-control input-lg" placeholder="What does your company do??"  ref="description" value={this.state.description} onChange={e => this.handleChange(e)}/>
                                    </div>
                                    <label>Select the best Category that describes what you do</label>
                                    <div className="form-group">
                                        <Select
                                            value={selectedCategory}
                                            onChange={this.handleChange0}
                                            options={categories}
                                            id="category_id"
                                        />
                                    </div>
                                    <label>Join TMS as</label>
                                    <div className="form-group">
                                        <Select
                                            value={selectedType}
                                            onChange={this.handleChange1}
                                            options={usertypes}
                                            id="user_type"
                                        />
                                    </div>
                                    <hr className="colorgraph"/>
                                    <div className="row">
                                        <div className="col-xs-6 col-sm-6 col-md-6">
                                            <input type="submit" className="btn btn-lg btn-success btn-block" value="Sign Up" onClick={(e) => this.onSubmit(e)}/>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6">
                                            <Link as="/login" ><a href="/login" className="btn btn-lg btn-primary btn-block">Sign In</a></Link>
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
 export default Signup