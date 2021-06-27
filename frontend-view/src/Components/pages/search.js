import React, { Component } from 'react'
import '../../index.css'
// import axios from 'axios'
import InventoryServices from '../../Services/inventoryService'

class SearchItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
        searchItems: [],    
        id: '',
        name: '',
        description: '',
        size: '',
        price: '',
        sku: '',
        };
      }

      componentDidMount() {
        InventoryServices.getsearchById().then((res) =>{
            console.log(res.data);
            this.setState({id:res.data.id});
            this.setState({name:res.data.name});
            this.setState({description:res.data.description});
            this.setState({size:res.data.size});
            this.setState({price:res.data.price});
            this.setState({sku:res.data.sku});
            
        });
      }
      
    render(){
        return (
        <div className="container inventory-container">
            <form className="container-sm">
                Search your item by id or item name:
                <input></input>
                <br></br>
                <button type="button" class="btn btn-primary">Search</button>
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