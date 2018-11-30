import Script from './components/dash/script'
import NavBar from './components/dash/navbar'
import fetch from 'isomorphic-unfetch'
import Layout from './components/dash/layout'
import SideBar from './components/dash/sidebar'
import AddCategory from './components/add_category'


const Categories = (props) => 
    <div style={{paddingTop: 50 + 'px'}}>
        <Layout>
        <NavBar></NavBar>
            <div className="container-fluid">
                <div className="row">
                    <SideBar></SideBar>
                    <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                       <AddCategory></AddCategory>
                    </div>
                </div>
            </div>
        </Layout>
        <Script></Script>
    </div>

Categories.getInitialProps = async function() {
    const res = await fetch('http://0.0.0.0:5000/api/v1/')
    const data = await res.json()	
    return {
        categories: data
    }
}

export default Categories;