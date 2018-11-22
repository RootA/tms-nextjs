import styled from 'styled-components'

const SubHeader = styled.h2`
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
`
class AllCategories extends React.Component{
    render(){
        return(
            <div className="container-fluid">    
            <SubHeader className="sub-header">Current Categories</SubHeader>
            <button className="btn btn-info">Add new</button>
            <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Status</th>
                      <th>Added On</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.categories.map((category) => (
                        <tr  key={category.public_id}>
                            <td>{category.name}</td>
                            <td>{category.description}</td>
                            <td>{category.status}</td>
                            <td>{category.created_at}</td>
                            <td><a className="btn btn-warning">Edit</a></td>
                        </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
        );
    }
}
export default AllCategories;