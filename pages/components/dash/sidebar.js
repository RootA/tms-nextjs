import styled from 'styled-components'

const Navsidebar=styled.ul`
    margin-right: -21px;
    margin-bottom: 20px;
    margin-left: -20px;
`

const Sidebar_ = styled.div` 
    position: fixed;
    width:200px;
    top: 51px;
    padding-top: 50px;
    bottom: 0;
    left: 0;
    z-index: 1000;
    display: block;
    padding-left: 40px;
    overflow-x: hidden;
    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
    background-color: #f5f5f5;
    border-right: 1px solid #eee;
`
const na = styled.a`
    padding-top: 40px;
    padding-right: 20px;
    padding-left: 20px;
`

const SideBar = () => (
    <Sidebar_ className="col-sm-3 col-md-2">
        <Navsidebar className="nav">
            <li className="active"><a href="/dash">Overview <span className="sr-only">(current)</span></a></li>
            {/* <li><a href="#"></a></li> */}
            <li><a href="/bids">Bids</a></li>
            <li><a href="/users">Users</a></li>
        </Navsidebar>
    </Sidebar_>
);
export default SideBar;