import Link from 'next/link';
import styled from 'styled-components'

const NavColor = styled.nav`
  padding-top: 15px;
  padding-bottom: 15px;
  border: 0;
  border-radius: 0;
  margin-bottom: 0;
  font-size: 12px;
  letter-spacing: 5px;
`

const Navbar = () => (
  <NavColor className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
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
            <Link className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </Link>
          </ul>
        </div>
    </div>
  </NavColor>
);

export default Navbar;