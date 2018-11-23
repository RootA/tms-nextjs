import Layout from './components/MyLayout.js'
import Footer from './components/Footer.js'
import JumboTron from './components/Jumbotron.js'
import React from 'react'
import Apply from './components/Apply'

const ApplyPage = (props) => (
    <div className="container">
        <JumboTron></JumboTron>
			<div className="row">
				<div className="col-md-12">
                <Layout>
                    <Apply tender_id={props.public_id}></Apply>
                </Layout>
                </div>
            </div>
            <Footer></Footer>
		<style jsx global>{`
			body {
					padding-top: 54px;
					font: 12px "Montserrat", sans-serif;
					line-height: 1.8;
					color: #000;
			  }

			  p {font-size: 14px;}
			  
			  @media (min-width: 992px) {
				body {
				  padding-top: 56px;
				}
			  }
		`}</style>
    </div>
)

ApplyPage.getInitialProps = async function (context) {
    const {public_id} = context.query
    return { public_id }
}

export default ApplyPage