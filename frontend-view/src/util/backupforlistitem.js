import React, { useState, useEffect } from "react"
import '../../index.css'
import InventoryServices from '../../Services/inventoryService'
import axios from "axios";
import DeleteItems from "./delete";
import deleteItem2 from './delete'



const ListItems = (props) => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [idToDelete, setId] = useState("")

    const [listData, setInventory] = useState([]);
    // const [arr, setarr] = useState([])

    useEffect(() => {
        InventoryServices.getInventory().then((dataset) => setInventory (dataset.data))
    }, [])


    const deleteButton = () => {
        // console.log({idToDelete});
        
        axios.delete("http://localhost:8081/api/delete/" + listData.id,  {
            id: idToDelete,
        }).then(() => {
            alert("succesful delete")
        }).catch(function (error){
            // console.log(error)
            // console.log(idToDelete);
        })
    }
    

    
    
    // console.log(listData);
    const RENDERLIST = listData.map((fullInventory) => {
    const {id, name, description, size, price, sku} = fullInventory;
        
        // const arr = []
        // console.log(listData) 
        // for (let i = 0, i < listData.length, i++){
            
        //     console.log(i);
        // }
        
        // console.log(listData[0].id)
        
        // const idtodelete3 = listData.length()
        // const idToDelete = Object.keys(listData)
        // const idToDelete2 = Object.values(listData)
        // const idToDelete3 = idToDelete
        // console.log(idToDelete2);
        // console.log(idToDelete3);

        return (
            <div className="container inventory-container">
                <button name="submit" onChange={(e) => {setId(e.target.deleteButton)}} onClick={deleteButton} class="btn btn-primary id-col" id="button" value="Submit Form">Delete Item</button>
                <div className="row">
                    <div className="col id-col">
                        Item id: {id}
                    </div>
                    <div className="col id-col">
                        Item name: {name}
                    </div>
                    <div className="col id-col">
                        Item description: {description}
                    </div>
                    <div className="col id-col">
                        Item size: {size}
                    </div>
                    <div className="col id-col">
                        Item price: {price}
                    </div>
                    <div className="col id-col">
                        Item sku: {sku}
                    </div>

                </div>
        
            </div>
        )    
    });
    return <>{RENDERLIST}</>;

    return (
        <DeleteItems/>
    )
}


export default ListItems