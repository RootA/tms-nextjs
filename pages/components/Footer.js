import styled from 'styled-components'

const Footer_ = styled.footer`
    margin-top: 20px;
    z-index: 10;
    height: 3em;
`

class Footer extends React.Component {
    render(){
        return(
            <Footer_ className="py-5 bg-dark">
                <div className="container-fluid">
                    <p className="m-0 text-center text-white">Copyright &copy; TMS 2017</p>
                </div>
            </Footer_>
        );
    }
}
export default Footer