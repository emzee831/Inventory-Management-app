import '../../index.css'
import InventoryServices from '../../Services/inventoryService'
import { Component } from 'react';


class ListItems extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            id: this.id,
            name: this.name,
            description: this.description,
            size: this.size,
            price: this.price,
            sku: this.sku,
            items: this.items,
        }

        this.idHandler = this.idHandler.bind(this)
        this.deleteitem = this.deleteitem.bind(this)
        
    }

    componentDidMount(){
        InventoryServices.getInventory().then((res) =>{
            this.setState({items:res.data})
            this.setState({id:res.data.id})
            // console.log(Object.values(res.data))
        })

    }

    idHandler(event) {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    editItem(id)
    {
        this.props.history.push(`/updateitem/${id}`)
    }


    deleteitem(id)
    {
        InventoryServices.deleteItem(id).then(res => {
            this.setState({
                items: this.state.items.filter(item => item.id !== id)
            })
        })
        }

        
    render() {
        
    return (
            
        <div>
            {
                this.state.items && 
                this.state.items.map(value => {
                return <div className="container inventory-container">
                     <button name="submit" onClick={() => this.deleteitem(value.id)} class="btn btn-primary id-col" id="button" value="Submit Form">Delete Item</button>
                <div className="row">
                <div className="col id-col">{value.id}</div>
                <div className="col id-col">{value.name}</div>
                <div className="col id-col">{value.description}</div>
                <div className="col id-col">{value.size}</div>
                <div className="col id-col">{value.price}</div>
                <div className="col id-col">{value.sku}</div>
                </div>
                <button name="submit" onClick={() => this.editItem(value.id)} class="btn btn-primary id-col" id="button" value="Submit Form">Update Item</button>
                
                </div>
            })}
        </div>)
    }
    

}
export default ListItems