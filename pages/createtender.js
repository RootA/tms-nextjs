import Script from './components/dash/script'
import Layout from './components/dash/layout'
import NavBar from './components/dash/navbar'
import SideBar from './components/dash/sidebar'
import CreateTender from  './components/dash/createtender'
import React from 'react';

const CreateTenderPage = (props) => (
    <div style={{paddingTop: 50 + 'px'}}>
    <Layout>
        <NavBar></NavBar>
        <div className="container-fluid">
            <div className="row">
                <SideBar></SideBar>
                <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                    <CreateTender categories={props.categories} types={props.types}></CreateTender>
                </div>
            </div>
        </div>
    </Layout>
    <Script></Script>
</div>
)

CreateTenderPage.getInitialProps = async function () {
    const res = await fetch(`http://0.0.0.0:5000/api/v1/`)
    const categories = await res.json()
    const res1 = await fetch(`http://0.0.0.0:5000/api/v1/types`)
    const types = await res1.json()
    return {categories: categories, types: types}
}

export default CreateTenderPage