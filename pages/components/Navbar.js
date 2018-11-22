import Link from 'next/link';
import styled from 'styled-components'
import React from 'react'

const Nav= styled.nav`
  padding-top: 15px;
  padding-bottom: 15px;
  border: 0;
  border-radius: 0;
  margin-bottom: 0;
  font-size: 12px;
  letter-spacing: 5px;
`

class Navbar extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: Boolean,
      usertype: '',
      uselink: ''
    }
  }

  componentDidMount(){
    if(!localStorage.getItem('user_type')){
      console.log('not logged in');
      this.setState({isLoggedIn: false, uselink:'login'})
      console.log('user logged in', this.state.uselink)
    } else {
      console.log('user logged in');
      let usertype_ = localStorage.getItem('user_type')
      this.setState({isLoggedIn: true, uselink: 'dash' ,usertype: usertype_.replace(/^"(.+)"$/,'$1')})
    }
  }
  render(){
    return(
      <Nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
            <a className="navbar-brand" href="/">TMS</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <Link className="nav-item active">
                  <a className="nav-link" href="/">Home
                    <span className="sr-only">(current)</span>
                  </a>
                </Link>
                <Link className="nav-item" as={`/about`}>
                  <a className="nav-link" href="/about">About</a>
                </Link>
                <Link className="nav-item" as={`/`}>
                  <a className="nav-link" href="/">Tenders</a>
                </Link>
                <Link className="nav-item" as={this.state.uselink}>
                    <a className="nav-link" href={this.state.uselink}>{this.state.uselink}</a>
                </Link>
              </ul>
            </div>
        </div>
      </Nav>
    );
  }
}

// const Navbar = () => (

// );

export default Navbar;