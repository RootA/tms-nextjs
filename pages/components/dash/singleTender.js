import styled from 'styled-components'
import Link from 'next/link'


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


const SingleTender = (props) => 
	<div className="">
		<div>{props}</div>
	</div>

export default SingleTender