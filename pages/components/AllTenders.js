import styled from 'styled-components'
import Link from 'next/link'
import Truncate from 'react-truncate';

const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid gray;
  position: relative;
`

const List = styled.li`
  text-decoration: None;
`
class AllTenders extends React.Component {
    render() {
      return (
        <div className="row" style={{clear: "dow", position: "relative"}}>
          {this.props.tenders.map((data) => (
            <div className="col-md-12 mb-6" key={data.public_id}>
              <div className="card h-100">
                <div className="card-body">
                  <h4 className="card-title"><strong>{data.title}</strong></h4>
                  {/* <Line></Line> */}
                  <Link as={`/category/tenders`} href={`/category?public_id=${data.category_id}`}><a>{data.category}</a></Link>
                  <br/>
                  <p>COMPANY : {data.company_name}</p>
                  <p>CODE : {data.tender_code}</p>
                  <Truncate className="card-text" lines={3} ellipsis={<span>...</span>}>{data.description}</Truncate>
                  <ul>
                    <List><strong>Application Start Date : </strong> {data.application_start_date} </List>
                    <List><strong>Application Close Date : </strong> {data.application_close_date}</List>
                  </ul>
                </div>
                <div className="card-footer">
                  <Link as={`/tenders/${data.public_id}`} href={`/tenders?public_id=${data.public_id}`}><a className="btn btn-warning">Read More</a></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
  
  export default AllTenders;