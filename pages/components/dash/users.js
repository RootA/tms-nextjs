import styled from 'styled-components'
import Truncate from 'react-truncate';


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

class Users extends React.Component{
    render(){
        return(
            <div className="container-fluid">    
    
            <SubHeader className="sub-header">Current Users</SubHeader>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Full Name</th>
                      <th>Company</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>Added on</th>
                      <th>UserType</th>
                      <th>Email</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.users.map((user) => (
                        <tr  key={user.public_id}>
                            <td>{user.first_name} {user.last_name}</td>
                            <td>{user.company_name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone_number}</td>
                            <td>{user.created_at}</td>
                            <td>{user.user_type}</td>
                            <td>{user.status}</td>
                            <td>{user.status}</td>
                            <td><a className='btn btn-warning'>Disable</a></td>
                            {/* <td><Link as={`/readmore/${user.public_id}`} href={`/readmore?public_id=${data.public_id}`}><a className="btn btn-warning" >View More</a></Link></td> */}
                        </tr>
                    ))}
                  </tbody>
                </table>
              </div>
        </div>

        );
    }
} 
export default Users;