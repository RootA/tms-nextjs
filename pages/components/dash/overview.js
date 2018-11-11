import styled from 'styled-components'
import Truncate from 'react-truncate';
import Link from 'next/link'


const Placeholder_ = styled.div`
    margin-bottom: 30px;
    text-align: center;
    margin-bottom: 20px;
`

const Placeholderh4_ = styled.h4`
    margin-bottom: 0;
`

const Placeholderimg_ = styled.img`
    display: inline-block;
    border-radius: 50%;
`

const SubHeader = styled.h2`
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
`

class Overview extends React.Component{
    render(){
        return(
            <div className="container-fluid">
            {/* <h1 className="page-header">Dashboard</h1>
            <Placeholder_ class="row placeholders">
                <div class="col-xs-6 col-sm-3 placeholder">
                    <Placeholderimg_ src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail"/>
                    <Placeholderh4_>Label</Placeholderh4_>
                    <span class="text-muted">Something else</span>
                </div>
                <div class="col-xs-6 col-sm-3 placeholder">
                    <Placeholderimg_ src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail"/>
                    <Placeholderh4_>Label</Placeholderh4_>
                    <span class="text-muted">Something else</span>
                </div>
                <div class="col-xs-6 col-sm-3 placeholder">
                    <Placeholderimg_ src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail"/>
                    <Placeholderh4_>Label</Placeholderh4_>
                    <span class="text-muted">Something else</span>
                </div>
                <div class="col-xs-6 col-sm-3 placeholder">
                    <Placeholderimg_ src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail"/>
                    <Placeholderh4_>Label</Placeholderh4_>
                    <span class="text-muted">Something else</span>
                </div>
            </Placeholder_> */}
    
            <div style={{paddingBottom:30+'px'}}></div>

    
            <SubHeader className="sub-header">Current Tenders</SubHeader>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Company</th>
                      <th># of bids</th>
                      <th>Added on</th>
                      <th>Application Start Date</th>
                      <th>Application Close Date</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.tenders.map((data) => (
                        <tr  key={data.public_id}>
                            <td>{data.index}</td>
                            <Truncate lines={1} ellipsis={<span>...</span>}>{data.title}</Truncate>
                            <td>{data.company_name}</td>
                            <td>{data.num_of_bids}</td>
                            <td>{data.created_at}</td>
                            <td>{data.application_start_date}</td>
                            <td>{data.application_close_date}</td>
                            <td>{data.status}</td>
                            <td><Link as={`/readmore/${data.public_id}`} href={`/readmore?public_id=${data.public_id}`}><a className="btn btn-warning" >View More</a></Link></td>
                        </tr>
                    ))}
                  </tbody>
                </table>
              </div>
        </div>

        );
    }
} 
export default Overview;