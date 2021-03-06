import Script from './components/dash/script'
import Layout from './components/dash/layout'
import NavBar from './components/dash/navbar'
import SideBar from './components/dash/sidebar'
import MyTenders from  './components/dash/mytenders'
import React from 'react';

class TenderPage extends React.Component {
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
                                <MyTenders></MyTenders>
                            </div>
                        </div>
                    </div>
                </Layout>
                <Script></Script>
            </div>
        );
    }
}
export default TenderPage


