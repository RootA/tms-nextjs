import { Document, Page } from 'react-pdf';
import styled from 'styled-components'
import axios from 'axios'
import { Alert } from 'react-alert'
import { withAlert } from 'react-alert'
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'


const Panel = styled.div`
    margin-top: 50px;
`

const options = {
    position: 'bottom center',
    timeout: 5000,
    offset: '30px',
    transition: 'scale'
  }

class OrgBid extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            session_id: ''
        };
    }


    componentDidMount(){
        var public_id_l = localStorage.getItem('public_id');
        let public_id = public_id_l.replace(/^"(.+)"$/,'$1');
        this.setState({public_id: public_id})
    }

    state = {
        numPages: null,
        pageNumber: 1,
      }
     
      onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
      }

       AwardTender(tender_id, bid_id, supplier_id){
            var public_id_l = localStorage.getItem('public_id');
            let public_id = public_id_l.replace(/^"(.+)"$/,'$1');
            console.log('localstorage ', public_id)
            var _url = 'http://localhost:5000/api/v1/award/tender/' + tender_id + '/' + bid_id + '/' + supplier_id + '/' + public_id
            axios.get(_url).then((res) => {
                console.log(res)
                if(res.status == 200){
                    alert(res.data.message)
                } else {
                    alert('There is trouble in paradise')
                }
            }).catch((err) => {
                console.log(err)
            });
      }

      rejectTender(tender_id, bid_id, supplier_id){
        var public_id_l = localStorage.getItem('public_id');
            let public_id = public_id_l.replace(/^"(.+)"$/,'$1');
            console.log('localstorage ', public_id)
            var _url = 'http://localhost:5000/api/v1/reject/tender/' + tender_id + '/' + bid_id
            axios.get(_url).then((res) => {
                console.log(res)
                if(res.status == 200){
                    alert(res.data.message)
                } else {
                    alert('There is trouble in paradise')
                }
            }).catch((err) => {
                console.log(err)
            });
      }

    render(){
        const { pageNumber, numPages } = this.state;

        return(
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <Panel className="panel panel-primary">
                    <div className="panel-heading">{this.props.tender.title}</div>
                    <div className="panel-body">
                        <ul>
                            <li><strong>Application Start Date :</strong> {this.props.tender.application_start_date}</li>
                            <li><strong>Application Close Date :</strong> {this.props.tender.application_close_date}</li>
                            <li><strong># of Bids :</strong> {this.props.tender.num_of_bids}</li>
                            <li><strong>Category:</strong> {this.props.tender.category}</li>
                            <li><strong>TENDER CODE :</strong> {this.props.tender.tender_code}</li>
                        </ul>
                        {this.props.tender.description}
                        <div></div>
                        <div>
                            <Document
                            file="https://docs.aws.amazon.com/aws-technical-content/latest/aws-overview/aws-overview.pdf"
                            onLoadSuccess={this.onDocumentLoadSuccess}
                            >
                            <Page pageNumber={pageNumber} />
                            </Document>
                            <p>Page {pageNumber} of {numPages}</p>
                        </div>
                    </div>
                    <div className="panel-footer" style={{backgroundColor:'#FFF'}}>
                    <h3>BID COUNT ({this.props.tender.num_of_bids})</h3>

                    <h3>Awarded Bids</h3>

                    {this.props.tender.awarded.map((data) => (
                        <div className="well">
                            <p>Applied at: {data.applied_at}</p>
                            <p>Amount: {data.amount}</p>
                            <p>Duration: {data.duration} Days</p>
                            <p>Supplier : {data.supplier.company}</p>
                            <p> Contact Name : {data.supplier.fullname} </p>
                            <p> Contact Email : {data.supplier.email} </p>
                            <p> Contact PhoneNumber : {data.supplier.phone_number} </p>
                            <input type="submit"className='btn btn-warning' value='Reject' onClick={ () => this.rejectTender(this.props.tender.public_id, data.public_id, data.supplier.public_id)}/>
                        </div>
                    ))}

                    <h3>Bids</h3>
                    {this.props.tender.bids.map((data) => (
                        <div className="well">
                            <p>Applied at: {data.applied_at}</p>
                            <p>Amount: {data.amount}</p>
                            <p>Duration: {data.duration} Days</p>
                            <p>Supplier : {data.supplier.company}</p>
                            <p> Contact Name : {data.supplier.fullname} </p>
                            <p> Contact Email : {data.supplier.email} </p>
                            <p> Contact PhoneNumber : {data.supplier.phone_number} </p>
                            <input type="submit"className='btn btn-success' value='Award Tender' onClick={ () => this.AwardTender(this.props.tender.public_id, data.public_id, data.supplier.public_id)}/>
                        </div>
                    ))}
                    </div>
                </Panel>
            </div>
        );
    }
}

export default OrgBid