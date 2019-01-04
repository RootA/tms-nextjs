import { Document, Page } from 'react-pdf';
import styled from 'styled-components'

const Panel = styled.div`
    margin-top: 50px;
`

class ReadMore extends React.Component {
    state = {
        numPages: null,
        pageNumber: 1,
      }
     
      onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
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
                    <h3>BIDS ({this.props.tender.num_of_bids})</h3>
                    {this.props.tender.bids.map((data) => (
                        <div className="well">
                            <p>Applied at: {data.applied_at}</p>
                            <p>Amount: {data.amount}</p>
                            <p>Duration: {data.duration} Days</p>
                            <p>Supplier : {data.supplier.company}</p>
                        </div>
                    ))}
                    </div>
                </Panel>
            </div>
        );
    }
}

export default ReadMore