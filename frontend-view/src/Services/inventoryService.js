import axios from "axios";

const allInventory ="http://localhost:8081/api/allinventory";
const searchByIdnventory ="http://localhost:8081/api/inventory/102"
const searchByName = "http://localhost:8081/api/inventories/Wrestle Mania 1999"
const additem = "http://localhost:8081/api/additem"


class InventoryServices{

    
    getInventory(){
        return axios.get(allInventory)
    }

    // both search by id and name to search component later, tie it in by passing a variable that passes through the id and name. component should have a button where do calls for both these methods based on user input
    getsearchById(){
        return axios.get(searchByIdnventory)
    }

    getsearchByName(){
        return axios.get(searchByName)
    }


    //add and put methods
    getAddByItem(){
        return axios.post(additem)
    }
}

export default new InventoryServices();