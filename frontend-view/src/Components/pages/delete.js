import '../../index.css'
import axios from "axios";
import { Link } from "react-router-dom";
import ListItems from "./listitems";
import InventoryServices from '../../Services/inventoryService'
import { Component } from 'react';
import history from 'react-router'

class DeleteItems extends Component {
    constructor(props)
    {
        super(props)

                this.state={
                    id: this.id
                }

                this.idHandler = this.idHandler.bind(this)
                this.deleteitem = this.deleteitem.bind(this)
                // this.viewlist = this.viewlist.bind(this)
            }

        idHandler(event) {
            this.setState({
                [event.target.id]: event.target.value
            })
        }

    
        deleteitem()
        {
            let itemId = this.state.id
            InventoryServices.deleteItem(`${itemId}`)
            }
            
    
        render(){
        return (
            <div className="container inventory-container">
                {/* form section */} 
                <div >
                    <form onSubmit={this.deleteitem} value="" name='itemdeleteform' id="itemdeleteform" className="id-col-for1">
                        <p/>
                        <label for="itemid" className="row id-col-form">Enter item id:</label>
                        <input onChange={this.idHandler} name="id" value={this.state.id} type="text" id="id" placeholder="Item" className="col child of .row-cols-md-6 id-col"/>
                        <p/>
                        {/* <label for="itemname" className="row id-col-form">Enter item name</label>
                        <input onChange={(e) => handle(e)} value={data.name} type="text" id="name" placeholder="name" className="col child of .row-cols-md-6 id-col"/>
                        <p/>
                        <label for="itemtype" className="row id-col-form">Enter item type:</label>
                        <input onChange={(e) => handle(e)} value={data.description} type="text" id="description" placeholder="type" className="col child of .row-cols-md-6 id-col"/>
                        <p/>
                        <label for="itemsize" className="row id-col-form">Enter item size:</label>
                        <input onChange={(e) => handle(e)} value={data.size} type="text" id="size" placeholder="size" className="col child of .row-cols-md-6 id-col"/>
                        <p/>
                        <label for="itemprice" className="row id-col-form">Enter item price:</label>
                        <input onChange={(e) => handle(e)} value={data.price} type="text" id="price" placeholder="price" className="col child of .row-cols-md-6 id-col"/>
                        <p/>
                        <label for="itemsku" className="row id-col-form">Enter item sku:</label>
                        <input onChange={(e) => handle(e)} value={data.sku} type="text" id="sku" placeholder="sku" className="col child of .row-cols-md-6 id-col"/> */}
                        <button name="submit" class="btn btn-primary id-col" onClick={this.deleteitem} >Delete Item</button>
                    </form>
            </div>
            {/* <Link to="/inventory" className='nav-links'onClick={routeToAllList}>
            <button name="refresh" class="btn btn-primary id-col" id="button" value="refresh list">View Items</button>
            </Link> */}
            <ListItems deleteItem2={this.deleteitem}/>

            </div>
            )
        
    }
}


export default DeleteItems 