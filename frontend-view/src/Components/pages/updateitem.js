import { Component } from 'react'
import '../../index.css'
import InventoryServices from '../../Services/inventoryService'



class UpdateItem extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            id: this.props.match.params.id,
            name: '',
            description: '',
            size: '',
            price: '',
            sku: '',
        }
        console.log(this.props.match.params.id);
        this.idHandler = this.idHandler.bind(this)
        this.updateItem = this.updateItem.bind(this)
    }

    updateItem(event){
        let items = {
            name: this.state.name,
            description: this.state.description,
            size: this.state.size,
            price: this.state.price,
            sku: this.state.sku,
        }
        console.log(items);
        console.log(this.state.id);
        InventoryServices.getUpdateItem(items, this.state.id).then((resback) =>  {
            alert("updated")
        })
    }

    idHandler(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

  
    render() {
        
    return (
        <div className="container inventory-container">
            <form className="id-col-for1">
                    <label className="row id-col-form">Enter id:</label>
                    <input placeholder="id" type="text" name="id" className="col id-col" value={this.state.id} onChange={this.idHandler}></input>
                    <label className="row id-col-form">Enter name:</label>
                    <input placeholder="name" type="text" name="name" className="col id-col" value={this.state.name} onChange={this.idHandler}></input>
                    <label className="row id-col-form">Enter description:</label>
                    <input placeholder="description" type="text" name="description" className="col id-col" value={this.state.description} onChange={this.idHandler}></input>
                    <label className="row id-col-form">Enter size:</label>
                    <input placeholder="size" type="text" name="size" className="col id-col" value={this.state.size} onChange={this.idHandler}></input>
                    <label className="row id-col-form">Enter price:</label>
                    <input placeholder="price" type="currency" name="price" className="col id-col" value={this.state.price} onChange={this.idHandler}></input>
                    <label className="row id-col-form">Enter sku:</label>
                    <input placeholder="sku" type="text" name="sku" className="col id-col" value={this.state.sku} onChange={this.idHandler}></input>


                <button name="submit" onClick={this.updateItem} class="btn btn-primary id-col" id="button" value="Submit Form">Update Item</button>
            </form>  
        </div>
        )
    }
    

}
export default UpdateItem