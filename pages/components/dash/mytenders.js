import React from 'react';
import request from "../../../node_modules/superagent/superagent"
import styled from 'styled-components'
import FileUpload from 'react-fileupload'

const SubHeader = styled.h2`
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
`

class MyTenders extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            public_id: '',
            url_: '',
            dataset: []
        };
    }

    

    componentDidMount(){
        if(!localStorage.getItem('tenders')){
            var public_id_l = localStorage.getItem('public_id');
            let public_id = public_id_l.replace(/^"(.+)"$/,'$1');
            this.setState({public_id: public_id})
            this.fetchBids(public_id)
        } else {
            this.setState({dataset: JSON.parse(localStorage.getItem('tenders'))})
        }
    }

    fetchBids(public_id){
        var all_bids_array = [];
        let dataurl = 'http://0.0.0.0:5000/api/v1/my/tenders/' + public_id;

        request.get(dataurl).end(function(err, res){
            if(res.statusCode == 200){
                all_bids_array.push(res.body)
                localStorage.setItem('tenders', JSON.stringify(res.body));
            }
        });
    }

    
    render(){
        const options={
            baseUrl:'http://127.0.0.1',
            param:{
                fid:0
            }
        }

      var all_bids = this.state.dataset;
      if(all_bids.length > 0){
        return(
            <div className="container-fluid">
                <SubHeader className="sub-header">Current Tenders</SubHeader>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>Amount</th>
                            <th>Duration</th>
                            <th>Added on</th>
                            <th>Tender Code</th>
                            <th>Owner</th>
                            <th>Contant Person</th>
                            <th>Contant Person Email</th>
                            <th>Contant Person Phone Number</th>
                            <th>Status</th>
                            {/* <th>Upload Docs</th> */}
                        </tr>
                        </thead>
                        <tbody>
                        {all_bids.map((bid, index) => (
                            <tr  key={index}>
                                <td>{bid.amount}</td>
                                <td>{bid.duration} Days</td>
                                <td>{bid.applied_at}</td>
                                {/* <td>{bid.application_}</td> */}
                                <td>{bid.tender.tender_code}</td>
                                <td>{bid.tender.owner.company}</td>
                                <td>{bid.tender.owner.fullname}</td>
                                <td>{bid.tender.owner.email}</td>
                                <td>{bid.tender.owner.phone_number}</td>
                                <td>{bid.status}</td>
                            </tr>
                        ))}
                        </tbody> 
                    </table>
                </div>
            </div>

        );
      } else {
          return(
            <div className="container-fluid">
            <SubHeader className="sub-header">Current Tenders</SubHeader>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Amount</th>
                        <th>Duration</th>
                        <th>Added on</th>
                        <th>Tender Code</th>
                        <th>Owner</th>
                        <th>Contant Person</th>
                        <th>Contant Person Email</th>
                        <th>Contant Person Phone Number</th>
                        {/* <th>Action</th> */}
                    </tr>
                    </thead>
                    <tbody>
                    </tbody> 
                    </table>
                </div>
            </div>
          );
      }
    }
}

export default MyTenders;