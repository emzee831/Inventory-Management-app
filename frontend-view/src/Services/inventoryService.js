import axios from "axios";

const baseapi = "http://localhost:8081/api"
// const allInventory ="http://localhost:8081/api/allinventory";
// const searchByIdnventory ="http://localhost:8081/api/inventory/102"
// const searchByName = "http://localhost:8081/api/inventories/Wrestle Mania 1999"
// const additem = "http://localhost:8081/api/additem"
// const deleteItem = "http://localhost:8081/api/delete"


class InventoryServices{

    
    getInventory(){
        return axios.get(baseapi+"/allinventory")
    }

    // both search by id and name to search component later, tie it in by passi ng a variable that passes through the id and name. component should have a button where do calls for both these methods based on user input
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