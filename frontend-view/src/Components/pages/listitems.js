import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import '../../index.css'
import InventoryServices from '../../Services/inventoryService'




const ListItems = () => {


    const [listData, setInventory] = useState([]);


    useEffect(() => {
        InventoryServices.getInventory().then((dataset) => setInventory (dataset.data))
    }, [])

    // useEffect(() => {

    // })
    console.log(listData);
    const RENDERLIST = listData.map((fullInventory) => {
    const {id, name, description, size, price, sku} = fullInventory;
        return (
            <div className="container inventory-container">
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
}


export default ListItems