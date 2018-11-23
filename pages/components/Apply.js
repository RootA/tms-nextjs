import Link from 'next/link'
import axios from 'axios';
import request from "../../node_modules/superagent/superagent";
import Router from 'next/router'


class Apply extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            supplier_id: '',
            tender_id: this.props.tender_id,
            amount: '',
            duration: ''
        }
    }

    componentDidMount(){
        let public_id = localStorage.getItem('public_id').replace(/^"(.+)"$/,'$1');
        this.setState({supplier_id: public_id})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let apiBaseUrl = "http://localhost:5000/api/v1/bid";

        var payload = {
            "session_id" : this.state.supplier_id,
            "tender_id" : this.state.tender_id,
            "amount" : event.target.elements.amount.value,
            "duration" : event.target.elements.duration.value,
        }

        request.post(apiBaseUrl).set('Content-Type', 'application/json').send(payload).end(function(err, res){
            alert(res.body.message);
            if(res.statusCode == 200){
                var all_bids_array = [];
                let dataurl = 'http://0.0.0.0:5000/api/v1/my/bids/' + payload.supplier_id;
                axios.get(dataurl).then(response => {
                    all_bids_array.push(response.data);
                    this.setState({
                        dataset: all_bids_array
                    });
                    localStorage.setItem('bids', JSON.stringify(response.data));
                    Router.push("/mybids");
                });
            }
        }); 
    }

    render(){
        return(
            <form role="form" onSubmit={this.handleSubmit}>
                <fieldset>
                    <h3>After Applying enter your dashboard to upload documents</h3>
                    <hr className="colorgraph"/>
                    <div className="form-group">
                        <label>Amount : KES</label>
                        <input type="number" name="amount" id="amount" ref={node => (this.inputNode = node)} className="form-control input-lg" placeholder="0000000" ref="amount" required />
                    </div>
                    <div className="form-group">
                        <label>Duration to complete tender : DAYS</label>
                        <input type="number" name="duration" id="duration"  ref={node => (this.inputNode = node)} className="form-control input-lg" placeholder="X days"  ref="duration" required  />
                    </div>
                    <hr className="colorgraph"/>
                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6">
                            <input type="submit" className="btn btn-lg btn-success btn-block" value="Submit Bid"/>
                        </div>
                    </div>
                </fieldset>
            </form>
        );
    }
}

export default Apply