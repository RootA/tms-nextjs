import fetch from 'isomorphic-unfetch'
import Layout from './components/MyLayout.js'
import Signup from './components/signup.js'

const SignupPage = (props) => 
    <Layout>
        <Signup categories={props.categories} usertypes={props.usertypes}></Signup>
    </Layout>


SignupPage.getInitialProps = async function () {
    const res = await fetch(`http://0.0.0.0:5000/api/v1/`)
    const res1 = await fetch(`http://0.0.0.0:5000/api/v1/usertypes`)
    const usertypes = await res1.json()
    const categories = await res.json()
    console.log('users',usertypes)
    return {categories: categories, usertypes: usertypes}
}



export default SignupPage