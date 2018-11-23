import Layout from './components/MyLayout.js'
import fetch from 'isomorphic-unfetch'
import Footer from './components/Footer.js'
import JumboTron from './components/Jumbotron.js'
import styled from 'styled-components'
import Link from 'next/link'
import React from 'react'
import Router from 'next/router'


const Heading = styled.h1`
	font-weight: bold;
	text-transform: capitalize;
`

const Heading2 = styled.h4`
	font-size: 14px;
	font-weight: bold;
	text-transform: capitalize;
	text-color : gray;
`

const Heading3 = styled.a`
	font-size: 14px;
	font-weight: bold;
	text-transform: capitalize;
	text-color : gray;
`

const Caps = styled.p`
text-transform: capitalize;
`

const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid gray;
  position: relative;
`

const List = styled.li`
  text-decoration: None;
`


const Tender = (props) => 
	<div className="container">
			<JumboTron></JumboTron>
			<div className="row">
				<div className="col-md-12">
					<Layout>
						<Heading>{props.tender.title}</Heading>
						<Heading2>Company : {props.tender.company_name}</Heading2>
						<Link as={`/category/tenders`} href={`/category?public_id=${props.tender.category_id}`}><Heading3>Category : {props.tender.category} </Heading3></Link>
						<Caps>Tender Code : {props.tender.tender_code} </Caps>
						<br/>
						<Line></Line>
						<br/>
						<ul>
								<List><strong>Application Start Date : </strong> {props.tender.application_start_date} </List>
								<List><strong>Application Close Date : </strong> {props.tender.application_close_date}</List>
						</ul>
						<p>{props.tender.description.replace(/<[/]?p>/g, '')}</p>
						<div className="panel panel-warning">
								<div className="panel-heading">Docs</div>
								<div className="panel-body">
								<ul>
									{props.tender.docs.map((urls) => (
										<li>{urls.doc_url}</li>
									))}
								</ul>
								</div>
						</div>
						<Link as={`/apply/${props.tender.public_id}`}  href={`/apply?public_id=${props.tender.public_id}`} onClick={onClick}><a className="btn btn-warning">Apply Now</a></Link>
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

function onClick() {
	if(!localStorage.getItem('auth_token')){
		alert('You have to login first');
		Router.push("/login");
	}
}

Tender.getInitialProps = async function (context) {
	const {public_id} = context.query
	const res = await fetch(`http://0.0.0.0:5000/api/v1/tenders/${public_id}`)
	const tender = await res.json()
	return { tender }
}

export default Tender