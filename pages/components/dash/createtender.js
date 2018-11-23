import React from 'react'
import axios from 'axios';
import Select from 'react-select';
import Router from 'next/router'

const categories = []
const types = []


class CreateTender extends React.Component {

    state = {
        selectedOption: null,
      }
    stae1 = {
        selectedOption1: null
      }
      

      handleChange1 = (selectedOption1) => {
        this.setState({ type_id: selectedOption1.value });
      }

      handleChange = (selectedOption) => {
        this.setState({ category_id: selectedOption.value });
      }

    constructor(props){
        super(props);
        this.state = {
            category_id: '',
            type_id: '',
            description: '',
            public_id: ''
        }

        this.handleareaChange = this.handleareaChange.bind(this);

        const data = this.props.categories
        for (let a = 0;a < data.length; a++){
            categories.push({ value: data[a].public_id, label: data[a].name })
        }

        const data1 = this.props.types
        for (let a = 0;a < data1.length; a++){
            types.push({ value: data1[a].public_id, label: data1[a].name })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        var apiBaseUrl = "http://localhost:5000/api/v1/create/tender";

        var payload = {
            "category_id":this.state.category_id,
            "type_id": this.state.type_id,
            'owner_id' : (localStorage.getItem('public_id')).replace(/^"(.+)"$/,'$1'),
            'title' : event.target.elements.title.value,
            'application_start_date' : event.target.elements.start_date.value,
            'application_close_date' : event.target.elements.close_date.value,
            'description' : this.state.description,
        }

        axios.post(apiBaseUrl, payload).then(res => {
            if(res.status == 200){
                alert(res.data.message);
                this.fetchTenders(this.state.public_id);
                Router.push("/org");
            } else {
                alert('Something went wrong');
            }
        });
    }


    fetchTenders(public_id){
        var all_tenders_array = [];
        let dataurl = 'http://0.0.0.0:5000/api/v1/org/tenders/' + public_id.replace(/^"(.+)"$/,'$1');
        axios.get(dataurl).then(response => {
            all_tenders_array.push(response.data);
            localStorage.setItem('tenders', JSON.stringify(response.data));
        });    
    }

    handleareaChange(event) {
        console.log(event.target.value);
        this.setState({description: event.target.value});
      }

    componentDidMount(){
        let public_id = localStorage.getItem('public_id');
        this.setState({public_id: public_id})
        // tinymce.init({
        //     selector: "textarea",
        //     plugins: "a11ychecker, advcode, linkchecker, media mediaembed, powerpaste, tinydrive, tinymcespellchecker",
        //     toolbar: "a11ycheck, code, insertfile"
        //  });
    }

    render(){
        const { selectedOption } = this.state;
        const { Option1 } = this.stae1;


        return(
            <div className="container">
            <div className="row" style={{marginTop:100 + 'px'}}>
                <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
                    <form role="form"  onSubmit={this.handleSubmit}>
                        <fieldset>
                            <h2>Fill in the Following...</h2>
                            <hr className="colorgraph"/>
                            <label>Tender Title</label>
                            <div className="form-group">
                                <input type="text" name="title" className="form-control input-lg" placeholder="Build the new sgr from ..." ref="title" ref={node => (this.inputNode = node)}  />
                            </div>
                            <label>Application start date</label>
                            <div className="form-group">
                                <input type="date" name="start_date" className="form-control input-lg" placeholder="Doe"  ref="start_date" ref={node => (this.inputNode = node)} />
                            </div>
                            <label>Application Close Date</label>
                            <div className="form-group">
                                <input type="date" name="close_date" className="form-control input-lg" placeholder="YYYY/MM/DD"  ref="close_date" ref={node => (this.inputNode = node)} />
                            </div>
                            <label>Describe the tender</label>
                            <div className="form-group">
                                <textarea type="text" name="description" className="form-control input-lg" placeholder="What does your company do??"  ref="description" value={this.state.value} onChange={this.handleareaChange} />
                            </div>
                            <label>Select the best Category that describes what you do</label>
                            <div className="form-group">
                                <Select
                                    value={selectedOption}
                                    onChange={this.handleChange}
                                    options={categories}
                                    id="category_id"
                                />
                            </div>
                            <label>Types</label>
                            <div className="form-group">
                                <Select
                                    value={Option1}
                                    onChange={this.handleChange1}
                                    options={types}
                                    id="user_type"
                                />
                            </div>
                            <hr className="colorgraph"/>
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <input type="submit" className="btn btn-lg btn-success btn-block" value="Add Tender"/>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
        );
    }
}

export default CreateTender