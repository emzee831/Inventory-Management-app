import React, { Component } from 'react'
import '../../index.css'
import InventoryServices from '../../Services/inventoryService'

const initialState ={
        id: '',
        name1: '',
        description: '',
        size: '',
        price: '',
        sku: '',
}


class SearchName extends Component {
    constructor(props) {
        super(props)
        this.state = initialState 
    
        this.handleChange = this.handleChange.bind(this)
        this.findByName = this.findByName.bind(this)
        this.resetStateWithUpdates = this.resetStateWithUpdates.bind(this)
        }

      
        findByName(event){
            event.preventDefault()
            console.log(this.state);
            InventoryServices.getsearchByName(this.state.name1).then((res) =>{
            console.log(res.data[0]);
            const objectReturn = res.data[0]
            this.setState({id: objectReturn.id});
            this.setState({name: objectReturn.name1});
            this.setState({description: objectReturn.description});
            this.setState({size: objectReturn.size});
            this.setState({price: objectReturn.price});
            this.setState({sku: objectReturn.sku});
            console.log(this.state);
            this.resetStateWithUpdates({ res })
            console.log(this.state);
        });
        }


        resetStateWithUpdates(stateUpdates = {}) {
            this.setState({ ...this.initialState, ...stateUpdates });
          }
 

        handleChange = event => {
            this.setState({
            [event.target.name]: event.target.value 
            })
        }

        
    
        render(){
        return (
        <div className="container inventory-container">
            <form className="container-sm">
                <label className="col id-col-form">Enter Item name:</label>
                <input className="col" type="text" name="name1" value={this.state.name1} onChange={this.handleChange}></input>
                <br></br>
                <button type="button" onClick={this.findByName} class="btn btn-primary">Search</button>
            </form>

            <div> 
                <h2></h2>
            </div>
                <div className="row">  
                    <div className="col-sm id-col">
                        Item id: {this.state.id}
                    </div>
                    <div className="col id-col">
                       Item name : {this.state.name1}
                    </div>
                    <div className="col id-col">
                        Item description: {this.state.description}
                    </div>
                    <div className="col id-col">
                        Item size: {this.state.size}
                    </div>
                    <div className="col id-col">
                        Item Cost: {this.state.price}
                    </div>
                    <div className="col id-col">
                        Item Sku: {this.state.sku}
                    </div>
               </div>
            </div>
        )
    }
}

export default SearchName