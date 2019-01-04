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

    const categories_arr = [];
    const usertypes_arr = [];

    for (let a = 0;a < categories.length; a++){
        categories_arr.push({ value: categories[a].public_id, label: categories[a].name })
    }

    for (let i = 0;i < usertypes.length; i++){
        usertypes_arr.push({ value: usertypes[i].public_id, label: usertypes[i].name })
    }

    return {categories: categories_arr, usertypes: usertypes_arr}
}



export default SignupPage