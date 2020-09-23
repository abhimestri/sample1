import React, { Component } from 'react';
import axios from 'axios'
import './displayBlock.css'

class MainBlock extends Component{

    state = {
        petName : null,
        petId : null,
        message : null
    }

    recheckingSubmission = (id) => {
        axios.get("https://petstore.swagger.io/v2/pet"+id)
            .then(el => console.log(el))
            .catch(err => console.log(err))
        }

    submitData = () => {
        let data = {
            petName : this.state.petName,
            petId : this.state.petId
        }   
        if((data.petName && data.petId) === null || (data.petName && data.petId) === "" ){
            this.setState({message : "Please enter the details"})
        }else{
        axios.post("https://petstore.swagger.io/v2/pet", data)
                .then(el => {
                    console.log(JSON.parse(el.config.data))
                    console.log(el.status);
                    if(el.status !== 200){
                        this.recheckingSubmission(data.petId);
                    }
                })
                .then(() => this.setState({message : "Data successfully submited!"}))
                .catch(err => this.setState({message : "Data submission unsuccessful : " + err.message}));
        }
    }

    render(){
        return(
            <div className="container">
                <input className="petNameInput" type="text" onChange={(e) => this.setState({petName : e.target.value })} placeholder="pet name" /><br/>
                <input className="petNameID" type="text" onChange={(e) => this.setState({petId : e.target.value })} placeholder="pet id" /><br/>
                <button className="SubmitBtn" onClick={this.submitData} >submit</button>
                <p className="errorMessage">{this.state.message}</p>
            </div>
        )
    }
}

export default MainBlock