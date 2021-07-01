import React, { Component } from 'react'
import '../../index.css'
import InventoryServices from '../../Services/inventoryService'
import SearchName from './searchname'

const initialState ={
        id: '',
        name: '',
        description: '',
        size: '',
        price: '',
        sku: '',
}


class SearchItems extends Component {
    constructor(props) {
        super(props)
        this.state = initialState 
    
        this.handleChange = this.handleChange.bind(this)
        this.findById = this.findById.bind(this)
        // this.findByname = this.findByname.bind(this)
        this.resetStateWithUpdates = this.resetStateWithUpdates.bind(this)
        }

      
        findById(event){
            event.preventDefault()
            console.log(this.state);
            InventoryServices.getsearchById(this.state.id).then((res) =>{
            console.log(res.data);
            this.resetStateWithUpdates({ res })
            this.setState({id:res.data.id});
            this.setState({name:res.data.name});
            this.setState({description:res.data.description});
            this.setState({size:res.data.size});
            this.setState({price:res.data.price});
            this.setState({sku:res.data.sku});
            // console.log(this.state);
            this.resetStateWithUpdates({})
            // console.log(this.state);
        });
        }


        resetStateWithUpdates(stateUpdates = {}) {
            // Rest operators ensure a new object with merged properties and values.
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
            <SearchName name={this.props}/>
            <form className="container-sm">
                <label className="col id-col-form">Enter id:</label>
                <input className="col" type="text" name="id" value={this.state.id} onChange={this.handleChange}></input>
                <br></br>
                <button type="button" onClick={this.findById} class="btn btn-primary">Search</button>
            </form>

            <div> 
                <h2></h2>
            </div>
                <div className="row">  
                    <div className="col-sm id-col">
                        Item id: {this.state.id}
                    </div>
                    <div className="col id-col">
                       Item name : {this.state.name}
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

export default SearchItems