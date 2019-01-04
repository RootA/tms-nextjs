import fetch from 'isomorphic-unfetch'
import Layout from './components/dash/layout'
import NavBar from './components/dash/navbar'
import SideBar from './components/dash/sidebar'
import Script from './components/dash/script'
import OrgBid from './components/dash/orgbids'



const OrgBids = (props) => 
    <body style={{paddingTop: 20 + 'px'}}>
        <Layout>
            <NavBar></NavBar>
            <div className="container-fluid">
                <div className="row">
                    <SideBar></SideBar>
                    <OrgBid tender={props.bids}></OrgBid>
                    {/* <ReadMore tender={props.tender}></ReadMore> */}
                </div>
            </div>
        </Layout>
        <Script></Script>
    </body>

OrgBids.getInitialProps = async function (context) {
	const {public_id} = context.query
	const res = await fetch(`http://0.0.0.0:5000/api/v1/tenders/${public_id}`)
    const bids = await res.json()
	return { bids: bids }
}

export default OrgBids
