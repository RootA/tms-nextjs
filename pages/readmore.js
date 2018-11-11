import fetch from 'isomorphic-unfetch'
import Layout from './components/dash/layout'
import NavBar from './components/dash/navbar'
import SideBar from './components/dash/sidebar'
import Script from './components/dash/script'

import styled from 'styled-components'

const Panel = styled.div`
    margin-top: 50px;
`

const Readmore = (props) => 
    <body style={{paddingTop: 20 + 'px'}}>
        <Layout>
            <NavBar></NavBar>
            <div className="container-fluid">
                <div className="row">
                    <SideBar></SideBar>
                    <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                        <Panel className="panel panel-primary">
                            <div className="panel-heading">{props.tender.title}</div>
                            <div className="panel-body">
                                <ul>
                                    <li><strong>Application Start Date :</strong> {props.tender.application_start_date}</li>
                                    <li><strong>Application Close Date :</strong> {props.tender.application_close_date}</li>
                                    <li><strong># of Bids :</strong> {props.tender.num_of_bids}</li>
                                    <li><strong>Category:</strong> {props.tender.category}</li>
                                    <li><strong>TENDER CODE :</strong> {props.tender.public_id}</li>
                                </ul>
                                {props.tender.description}
                            </div>
                            <div className="panel-footer" style={{backgroundColor:'#FFF'}}>
                            <h3>BIDS ({props.tender.num_of_bids})</h3>
                            {props.tender.bids.map((data) => (
                                <div className="well">
                                    <p>Applied at: {data.applied_at}</p>
                                    <p>Amount: {data.amount}</p>
                                    <p>Duration: {data.duration} Days</p>
                                    <p>Supplier : {data.supplier.company}</p>
                                </div>
                            ))}
                            </div>
                        </Panel>
                    </div>
                </div>
            </div>
        </Layout>
        <Script></Script>
    </body>

Readmore.getInitialProps = async function (context) {
	const {public_id} = context.query
	const res = await fetch(`http://0.0.0.0:5000/api/v1/tenders/${public_id}`)
	const tender = await res.json()
    console.log(`Fetched tender: ${tender.title}`)
    console.log(tender);
	return { tender }
}

export default Readmore
