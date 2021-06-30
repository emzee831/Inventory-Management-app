import '../../index.css'
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
            .then(res => {
                alert(res +"succesfully deleted");
            })
        }
            
            
    
        render(){
        return (
            <div className="container inventory-container">
                <div >
                    <form onSubmit={this.deleteitem} value="" name='itemdeleteform' id="itemdeleteform" className="id-col-for1">
                        <p/>
                        <label for="itemid" className="row id-col-form">Enter item id:</label>
                        <input onChange={this.idHandler} name="id" value={this.state.id} type="text" id="id" placeholder="Item" className="col child of .row-cols-md-6 id-col"/>
                        <p/>
                        <button name="submit" class="btn btn-primary id-col" onClick={this.deleteitem} >Delete Item</button>
                    </form>
            </div>
            <ListItems deleteItem2={this.deleteitem}/>

            </div>
            )
        
    }
}


export default DeleteItems 