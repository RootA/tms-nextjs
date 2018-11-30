import React from 'react'
import axios from 'axios'
import Router from 'next/router'

class AddCategory extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            description: ''
        }
    }


    handleSubmit = (event) => {
        event.preventDefault();
        var apiBaseUrl = "http://localhost:5000/api/v1/post/categories";
        var payload = {
            "name": event.target.elements.name.value,
            "description": event.target.elements.desc.value
        }
        
        axios.post(apiBaseUrl, payload).then((response) => {
            if(response.status == 200){
                Router.push('/categories');
            }
        });
        
    }

    render(){
        return(
            <div className="container">
                <div className="row" style={{marginTop:100 + 'px'}}>
                        <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
                            <form role="form" onSubmit={this.handleSubmit}>
                                <fieldset>
                                    <h2>Fill in the form</h2>
                                    <hr className="colorgraph"/>
                                    <div className="form-group">
                                        <input type="text" name="name" id="name" ref={node => (this.inputNode = node)} className="form-control input-lg" placeholder="Name" ref="name" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="desc" id="desc"  ref={node => (this.inputNode = node)} className="form-control input-lg" placeholder="Descrption"  ref="desc" required  />
                                    </div>
                                    <div className="col-xs-6 col-sm-6 col-md-6">
                                            <input type="submit" className="btn btn-lg btn-success btn-block" value="Sign In"/>
                                        </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
            </div>
        );
    }
}

export default AddCategory;