import Layout from './components/MyLayout.js'
import JumboTron from './components/Jumbotron.js'
import Footer from './components/Footer.js'

export default () => (  
    <div className="container-fluid"> 
        <Layout>
            <JumboTron></JumboTron>
        <p>This is the about page</p>
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
)