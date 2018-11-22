import Script from './components/dash/script'
import Layout from './components/dash/layout'
import NavBar from './components/dash/navbar'
import SideBar from './components/dash/sidebar'
import MyBid from  './components/dash/mybids'
import React from 'react';

class MyBids extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         public_id: '',
    //         url_: '',
    //         dataset: []
    //     };
    // }

    // componentDidMount(){
    //     console.log('mounting');
    //     var public_id_l = localStorage.getItem('public_id');
    //     let public_id = public_id_l.replace(/^"(.+)"$/,'$1');
    //     this.setState({public_id: public_id})
    //     this.fetchBids(public_id)
    // }

    // fetchBids(public_id){
    //     console.log('we are at update');
    //     var all_bids_array = [];
    //     let dataurl = 'http://0.0.0.0:5000/api/v1/my/bids/' + public_id;
    //     axios.get(dataurl).then(response => {
    //         all_bids_array.push(response.data);
    //         this.setState({dataset: all_bids_array});
    //         localStorage.setItem('bids',all_bids_array );
    //     });
    // }



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
                                <MyBid></MyBid>
                            </div>
                        </div>
                    </div>
                </Layout>
                <Script></Script>
            </div>
        );
    }
}

// const MyBids = (props) =>
//     <div style={{paddingTop: 50 + 'px'}}>
//         <Layout>
//             <NavBar></NavBar>
//             <div className="container-fluid">
//                 <div className="row">
//                     <SideBar></SideBar>
//                     <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
//                         <MyBid all_bids={this.props.all_bids}></MyBid>
//                     </div>
//                 </div>
//             </div>
//         </Layout>
//         <Script></Script>
//     </div>


// MyBids.getInitialProps = async function() {
//     const res = await fetch('http://0.0.0.0:5000/api/v1/my/bids/' + sessionStorage.getItem('public_id'));
//     const data = await res.json();
//     console.log(data.data);
//     return {
//         all_bids: data
//     }
// }

export default MyBids


