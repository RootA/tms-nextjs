import React from 'react';
import styled from 'styled-components'
import axios from 'axios';
import ReactUploadFile from 'react-upload-file';
import Router from 'next/router'
import Link from 'next/link'

const SubHeader = styled.h2`
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
`

class OrgTenders extends React.Component {
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
            this.fetchTenders(public_id)
        } else {
            this.setState({dataset: JSON.parse(localStorage.getItem('tenders'))})
            console.log('using localstorgae')
        }
    }

    fetchTenders(public_id){
        var all_tenders_array = [];
        let dataurl = 'http://0.0.0.0:5000/api/v1/org/tenders/' + public_id;
        axios.get(dataurl).then(response => {
            all_tenders_array.push(response.data);
            this.setState({
                dataset: all_tenders_array
            });
            localStorage.setItem('tenders', JSON.stringify(response.data));
        });

        console.log('tenders', this.state.dataset)
    }


    uploadDoc = (event) => {
        event.preventDefault();
        console.log('event', event.target.elements.file);
        var apiBaseUrl = 'http://127.0.0.1:5000/api/v1/tender/doc/upload/' + localStorage.getItem('public_id').replace(/^"(.+)"$/,'$1');
        console.log(apiBaseUrl);

        var payload = {
            'file' : event.target.elements.file.value,
        }


        axios.post(apiBaseUrl, payload,{
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            data: {
                file: event.target.elements.file.value
            }
          }).then(res => {
            if(res.status == 200){
                alert(res.data.message);
                this.fetchTenders(this.state.public_id);
                Router.push("/org");
            } else {
                alert('Something went wrong');
            }
        });
    }


    onClick() {
        if(!localStorage.getItem('auth_token')){
            alert('You have to login first');
            Router.push("/login");
        }
    }

    render(){
        var tenders = this.state.dataset;
        // const options = {
        //     baseUrl: `http://127.0.0.1:5000/api/v1/tender/doc/upload/${this.state.public_id}`,
        //     dataType: 'json',
        //     multiple: true,
        //     numberLimit: 9,
        //     accept: 'image/*',
        //     didUpload: (files) => {
        //         console.log('you just uploaded', typeof files === 'string' ? files : files[0].name);
        //     }
        //   }
        //   let YourChooseButton = <button className="btn btn-primary">Choose</button>
        //   let YourUploadButton = <button className="btn btn-primary">Upload file</button>
        return(
            <div className="container-fluid">
                <SubHeader className="sub-header">Current Tenders</SubHeader>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>Category</th>
                            <th>Tender Code</th>
                            <th>Title</th>
                            <th>Added on</th>
                            <th>Num of Bids</th>
                            <th>Docs</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {tenders.map((tender, index) =>(
                            <tr key={index}>
                                <td>{tender.category}</td>
                                <td>{tender.tender_code}</td>
                                <td>{tender.title}</td>
                                <td>{tender.applied_at}</td>
                                <td>{tender.num_of_bids}</td>
                                <td>{tender.doc_count}</td>
                                <td>
                                {/* <ReactUploadFile options={options} chooseFileButton={<a className="btn btn-primary">Choose</a>} uploadFileButton={<a>Upload</a> } /> */}
                                    <form method="post" enctype="multipart/form-data" onSubmit={this.uploadDoc}>
                                        {/* Select image to upload: */}
                                        <input type="file" name="file" id="file" ref={node => (this.inputNode = node)}/>
                                        <input type="submit" value="Upload Doc" name="submit" className="btn btn-primary"/>
                                    </form>
                                </td>
                                {/* <td><a className="btn btn-info">View Bids</a></td> */}
                                <td><Link as={`/view/bids/${tender.public_id}`}  href={`/view/bids?public_id=${tender.public_id}`} onClick={this.onClick}><a className="btn btn-warning">View Bids</a></Link></td>
                            </tr>
                        ))}
                        </tbody> 
                    </table>
                </div>
            </div>
        );
    }
}

export default OrgTenders