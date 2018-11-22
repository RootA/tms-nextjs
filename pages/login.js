import Layout from './components/MyLayout.js'
import Login from './components/login.js'
import React from 'react';


class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state={
          fromLocal:'',
          full_name: ''
        }
      }

      componentDidMount(){
        let newSearchColumns = localStorage.getItem('auth_token');
        let name = localStorage.getItem('full_name');
        this.setState({fromLocal: newSearchColumns})
        this.setState({full_name: name})
      }
      
    render(){
        return (
            <Layout>
                <Login></Login>
            </Layout>
        );  
    }
}
   
export default LoginPage