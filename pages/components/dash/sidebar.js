import styled from 'styled-components'
import { relativeTimeRounding } from 'moment';

const Navsidebar=styled.ul`
    margin-right: -21px;
    margin-bottom: 20px;
    margin-left: -20px;
`

const Sidebar_ = styled.div` 
    position: fixed;
    width:200px;
    top: 51px;
    padding-top: 50px;
    bottom: 0;
    left: 0;
    z-index: 1000;
    display: block;
    padding-left: 40px;
    overflow-x: hidden;
    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
    background-color: #f5f5f5;
    border-right: 1px solid #eee;
`

class SideBar extends React.Component{

    constructor(props) {
        super(props);
        this.state={
          fromLocal:'',
          full_name: '',
          user_type: ''
        }
      }

      componentDidMount(){
        let newSearchColumns = localStorage.getItem('auth_token');
        let name = localStorage.getItem('full_name');
        let user_type = localStorage.getItem('user_type');
        this.setState({fromLocal: newSearchColumns})
        this.setState({full_name: name})
        this.setState({user_type: user_type})
      }

    render() {
        const user_type = this.state.user_type;
        let sidebar;
        if(this.state.user_type.replace(/^"(.+)"$/,'$1') == "Admin"){
            return(
                <Sidebar_ className="col-sm-3 col-md-2">
                        <Navsidebar className="nav">
                            <li className="active"><a href="/dash">Overview <span className="sr-only">(current)</span></a></li>
                            <li><a href="/bids">Bids</a></li>
                            <li><a href="/users">Users</a></li>
                            <li><a href="/categories">Categories</a></li>
                        </Navsidebar>
                    </Sidebar_>
            );
        } else if (this.state.user_type.replace(/^"(.+)"$/,'$1') == "Supplier"){
            return(
                <div>
                    <Sidebar_ className="col-sm-3 col-md-2">
                        <Navsidebar className="nav">
                            {/* <li className="active"><a href="/dash">Overview <span className="sr-only">(current)</span></a></li> */}
                            <li><a href="/mybids">My Bids</a></li>
                            <li><a href="/mytenders">My Tenders</a></li>
                            {/* <li><a href="/categories">Categories</a></li> */}
                        </Navsidebar>
                    </Sidebar_>
                </div>
            );
        }

        return (
            <div></div>
        );
        
    }
}

// const SideBar = () => (
    
// );
export default SideBar;