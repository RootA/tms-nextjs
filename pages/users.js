import fetch from 'isomorphic-unfetch'
import Layout from './components/dash/layout'
import NavBar from './components/dash/navbar'
import SideBar from './components/dash/sidebar'
import Script from './components/dash/script'
import Users from './components/dash/users'

const UsersPage = (props) => 
    <body style={{paddingTop: 20 + 'px'}}>
        <Layout>
            <NavBar></NavBar>
            <div className="container-fluid">
                <div className="row">
                    <SideBar></SideBar>
                    <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                        <Users users={props.users}></Users>
                    </div>
                </div>
            </div>
        </Layout>
        <Script></Script>
    </body>

UsersPage.getInitialProps = async function() {
    const res = await fetch('http://0.0.0.0:5000/api/v1/users')
    const data = await res.json()	
    return {
        users: data
    }
}

export default UsersPage

