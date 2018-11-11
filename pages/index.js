import Layout from './components/MyLayout.js'
import AllTenders from './components/AllTenders.js'
import fetch from 'isomorphic-unfetch'
import CallToAction from './components/CallToAction.js'
import Footer from './components/Footer.js'
import JumboTron from './components/Jumbotron.js'

const Index = (props) => 
	<div className="container">
		{/* <BannerHeader></BannerHeader> */}
		<JumboTron></JumboTron>
		<CallToAction></CallToAction>
		<Layout>
			<AllTenders tenders={props.tenders}></AllTenders>
		</Layout>
		<br/>
		<Footer></Footer>
		<style jsx global>{`
			body {
				padding-top: 54px;
				font: 12px "Montserrat", sans-serif;
				line-height: 1.8;
				color: #000;
			  }

			  p {font-size: 16px;}
			  
			  @media (min-width: 992px) {
				body {
				  padding-top: 56px;
				}
			  }
		`}</style>
	</div>
	
	Index.getInitialProps = async function() {
		const res = await fetch('http://0.0.0.0:5000/api/v1/tenders')
		const data = await res.json()	
		return {
			tenders: data
		}
	}
	
	export default Index