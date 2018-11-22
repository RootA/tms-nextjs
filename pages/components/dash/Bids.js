import styled from 'styled-components'

const SubHeader = styled.h2`
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
`

class Bids extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <SubHeader className="sub-header">Current Bids</SubHeader>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>Supplier</th>
                            <th>Company</th>
                            <th>Amount</th>
                            <th>Duration</th>
                            <th>Added on</th>
                            <th>Tender Name</th>
                            <th>Tender Code</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.all_bids.map((bid) => (
                            <tr  key={bid.public_id}>
                                <td>{bid.supplier.company} </td>
                                <td>{bid.tender.owner.company}</td>
                                <td>{bid.amount}</td>
                                <td>{bid.duration}</td>
                                <td>{bid.applied_at}</td>
                                <td>{bid.tender.title}</td>
                                <td>{bid.tender.tender_code}</td>
                                <td>{bid.status}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

        );
    }
}
export default Bids;