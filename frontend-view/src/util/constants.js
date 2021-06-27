import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import '../../index.css'
// import axios from 'axios'
import InventoryServices from '../../Services/inventoryService'


const SearchItems = () => {

    const [listData1, setsearchById] = useState([]);


    useEffect(() => {
        InventoryServices.getsearchById().then((dataset) => setsearchById (dataset.data))
    }, [])

    // useEffect(() => {

    // })
    console.log(listData1);
    const dataObject = Object(listData1)
    console.log(dataObject);
    const dataParseForSingleSearchValue = Object.values(listData1)
    const dataParseForSingleSearchKeys = Object.keys(listData1)
    console.log(dataParseForSingleSearchValue[0]);
    console.log(dataParseForSingleSearchKeys);

    // const mapIndex = listData1.keys[0]
    // console.log(mapIndex);
    const RENDERLIST1 = dataParseForSingleSearchValue.length((searchbyid) => {
    // const name = searchbyid;
    console.log(searchbyid);
    // console.log(searchbyid[2]);
    // console.log(searchbyid[1]);
    // let valId = searchbyid.values[0]
        return (
            <div className="container inventory-container">
                <div className="row">  
                    <div className="col-sm id-col">
                        Item id: 
                    </div>
                    <div className="col id-col">
                       Item name : 
                    </div>
                    <div className="col id-col">
                        Item description: 
                    </div>
                    <div className="col id-col">
                        Item size: 
                    </div>
                    <div className="col id-col">
                        Item Cost: 
                    </div>
                    <div className="col id-col">
                        Item Sku: 
                    </div>
                    
               </div>
        
            </div>
        )    
    });
    return <>{RENDERLIST1}</>;
}


export default SearchItems