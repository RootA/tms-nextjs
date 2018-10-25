import Layout from './components/MyLayout.js'
import fetch from 'isomorphic-unfetch'
import BannerHeader from './components/Header.js'
import Footer from './components/Footer.js'
import JumboTron from './components/Jumbotron.js'


const Tender = (props) => 
	<div className="container">
		{/* <BannerHeader></BannerHeader> */}
			<JumboTron></JumboTron>
			<Layout>
				<h1>{props.tender.title}</h1>
				<p>{props.tender.description.replace(/<[/]?p>/g, '')}</p>
			</Layout>
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

Tender.getInitialProps = async function (context) {
	const {public_id} = context.query
	const res = await fetch(`http://0.0.0.0:6000/api/v1/tenders/${public_id}`)
	const tender = await res.json()
	console.log(`Fetched tender: ${tender.title}`)
	return { tender }
}

export default Tender