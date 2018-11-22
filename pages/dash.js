import fetch from 'isomorphic-unfetch'
import Layout from './components/dash/layout'
import NavBar from './components/dash/navbar'
import SideBar from './components/dash/sidebar'
import Overview from './components/dash/overview'
import Script from './components/dash/script'


const DashPage = (props) => 
    <body style={{paddingTop: 20 + 'px'}}>
        <Layout>
            <NavBar></NavBar>
            <div className="container-fluid">
                <div className="row">
                    <SideBar></SideBar>
                    <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                        <Overview tenders={props.tenders} ></Overview>
                    </div>
                </div>
            </div>
        </Layout>
        <Script></Script>
    </body>

DashPage.getInitialProps = async function() {
    const res = await fetch('http://0.0.0.0:5000/api/v1/all/tenders');
    const data = await res.json();
    return {
        tenders: data
    }
}


export default DashPage

