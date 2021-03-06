import Script from './components/dash/script'
import fetch from 'isomorphic-unfetch'
import Layout from './components/dash/layout'
import NavBar from './components/dash/navbar'
import SideBar from './components/dash/sidebar'
import Bids from  './components/dash/bids'

const BidsPage = (props) =>
    <div style={{paddingTop: 50 + 'px'}}>
        <Layout>
            <NavBar></NavBar>
            <div className="container-fluid">
                <div className="row">
                    <SideBar></SideBar>
                    <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                        <Bids all_bids={props.all_bids}></Bids>
                    </div>
                </div>
            </div>
        </Layout>
        <Script></Script>
    </div>

BidsPage.getInitialProps = async function() {
    const res = await fetch('http://0.0.0.0:5000/api/v1/bids');
    const data = await res.json();
    return {
        all_bids: data
    }
}
export default BidsPage