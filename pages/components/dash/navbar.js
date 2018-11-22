

class Navbar extends React.Component{

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

  logOut() {
    // console.log('log out');
  }

  render(){
    return(
      <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/">TMS {(this.state.user_type).replace(/^"(.+)"$/,'$1')}</a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-right">
            {/* {/* <li><a href="#">Dashboard</a></li> */}
            {/* <li><a href="#">Settings</a></li> */}
            <li><a href="#">{(this.state.full_name).replace(/^"(.+)"$/,'$1')}</a></li>
            <li><a onClick={this.logOut()}>Logout</a></li>
          </ul>
          {/* <form className="navbar-form navbar-right">
            <input type="text" className="form-control" placeholder="Search..."/>
          </form> */}
      </div>
      </div>
    </nav>
    );
  }
}

// const Navbar = (props) => (
  
// );



export default Navbar;