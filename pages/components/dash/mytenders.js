import React from 'react';

import styled from 'styled-components'
import axios from 'axios';

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
            console.log('using localstorgae')
        }
    }

    fetchBids(public_id){
        var all_bids_array = [];
        let dataurl = 'http://0.0.0.0:5000/api/v1/my/tenders/' + public_id;
        axios.get(dataurl).then(response => {
            all_bids_array.push(response.data);
            this.setState({
                dataset: all_bids_array
            });
            localStorage.setItem('tenders', JSON.stringify(response.data));
        });
    }

    // cancelBid(bid_id){
    //     var all_bids_array = [];
    //     let dataurl = 'http://0.0.0.0:5000/api/v1/terminate/bid/' + bid_id;
    //     axios.get(dataurl).then(res => {
    //         if(res.status == 200){
    //             let dataurl2 = 'http://0.0.0.0:5000/api/v1/my/bids/' + this.state.public_id;
    //             console.log('url', dataurl2);
    //             axios.get(dataurl2).then(response => {
    //                 all_bids_array.push(response.data);
    //                 this.setState({
    //                     dataset: all_bids_array
    //                 });
    //                 localStorage.setItem('bids', JSON.stringify(response.data));
    //             });
    //         } else {
    //             alert('An error has occured');
    //         }
    //     });
    // }

    render(){
      var all_bids = this.state.dataset;
      console.log(all_bids);
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
                        {all_bids.map((bid, index) => (
                            <tr  key={index}>
                                <td>{bid.amount}</td>
                                <td>{bid.duration} Days</td>
                                <td>{bid.applied_at}</td>
                                {/* <td>{bid.application_}</td> */}
                                <td>{bid.tender.tender_code}</td>
                                <td>{bid.tender.owner.company}</td>
                                <td>{bid.tender.owner.fullname}</td>
                                <td>{bid.tender.owner.phone_number}</td>
                                <td>{bid.status}</td>
                                {/* <td><a className="btn btn-danger" onClick={this.cancelBid(bid.public_id)}>Terminate bid</a></td> */}
                            </tr>
                        ))}
                        </tbody> 
                    </table>
                </div>
            </div>

        );
    }
}

export default MyTenders;