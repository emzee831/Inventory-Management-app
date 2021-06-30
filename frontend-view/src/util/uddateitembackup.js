import React, { useState, useEffect } from "react";
import '../../index.css'
import axios from "axios";
import { Link } from "react-router-dom";
import ListItems from "./listitems";

function UpdateItem() {
    const URL = "http://localhost:8081/api/inventory"
    // const URL2 = "http://localhost:8081/api/allinventory"
    // button route const
    const [click, setClick] = useState(false);
    const handleCick = () => setClick(!click);
    const routeToAllList = () => setClick(false)

    const [data, setData] = useState({
            id: '',
            name: '',
            description: '',
            size: '',
            price: '',
            sku: '',    
        })

        //e target id only works if id's in div area are the same as the state above
        function handle(e) {
            // console.log(e)   
            if(e === "") {
                alert("empty")
            }else {
            const newdata = {...data}
            newdata[e.target.id] = e.target.value
            setData(newdata)
            }
            e.preventDefault()
            // console.log(newdata);
        }


        function submit(e) {
            // e.preventDefault()
            if(e === "") {
                console.log("test");
            }else {
            axios.put(URL+'id', {
                id: parseInt(data.id),
                name: data.name,
                description: data.description,
                size: data.size,
                price: parseInt(data.price),
                sku: data.sku,  

            })
            .then(res => {
                console.log(res.data)
            })}
           
        }

        return (
            <div className="container inventory-container">
                {/* form section */}
                <div >
                    <form onSubmit={(e) => submit(e)} name='itemaddform' id="itemaddform" className="id-col-for1">
                        <p/>
                        <label for="itemid" className="row id-col-form">Enter item id:</label>
                        <input onChange={(e) => handle(e)} type="text" id="id" placeholder="Item" value={data.id} className="col child of .row-cols-md-6 id-col"/>
                        <p/>
                        <label for="itemname" className="row id-col-form">Enter item name</label>
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
                        <input onChange={(e) => handle(e)} value={data.sku} type="text" id="sku" placeholder="sku" className="col child of .row-cols-md-6 id-col"/>
                        <button name="submit" class="btn btn-primary id-col" id="button" value="Submit Form">Update Item</button>
                    </form>
            </div>
            <Link to="/inventory" className='nav-links'onClick={routeToAllList}>
            <button name="refresh" class="btn btn-primary id-col" id="button" value="refresh list">View updated Items</button>
            </Link>
            <ListItems/>

        </div>
        )
        
}


export default UpdateItem