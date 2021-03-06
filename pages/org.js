import Script from './components/dash/script'
import Layout from './components/dash/layout'
import NavBar from './components/dash/navbar'
import SideBar from './components/dash/sidebar'
import OrgTenders from  './components/dash/orgtenders'
import React from 'react';

class OrgPage extends React.Component {
    render(){
        // var dataset = this.state.dataset
        return(
            <div style={{paddingTop: 50 + 'px'}}>
                <Layout>
                    <NavBar></NavBar>
                    <div className="container-fluid">
                        <div className="row">
                            <SideBar></SideBar>
                            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                                <OrgTenders></OrgTenders>
                            </div>
                        </div>
                    </div>
                </Layout>
                <Script></Script>
            </div>
        );
    }
}

OrgPage.getInitialProps = async function (context) {
	const {public_id} = context.query
	const res = await fetch(`http://0.0.0.0:5000/api/v1/tenders/${public_id}`)
	const tender = await res.json()
	return { tender: tender }
}

export default OrgPage