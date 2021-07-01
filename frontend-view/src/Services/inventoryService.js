import axios from "axios";

const baseapi = "http://localhost:8081/api"


class InventoryServices{

    
    getInventory(){
        return axios.get(baseapi+"/allinventory")
    }
    
    getsearchById(id){
        return axios.get(baseapi+"/inventory/"+id)
    }

    getsearchByName(name){
        return axios.get(baseapi+"/inventories/"+name)
    }

    //delete method
    deleteItem(id){
        return axios.delete(baseapi+"/delete/"+id)
    }

    //add and put methods
    getAddByItem(){
        return axios.post(baseapi+"/additem")
    }
    getUpdateItem(items, id){
        return axios.put(baseapi+"/updateitem/"+id, items)// items part is the json form thrown to the api
    }
}

export default new InventoryServices();