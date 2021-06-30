import React, { useEffect,  useState} from 'react'
// const mysql = require('mysql');
// import DB from './db'
// import List from './db/list'
import axios from 'axios';

 
function Query(){

    const [click, setClick] = useState(false);
    const handleCick = () => setClick(!click);
    const routeToAllList = () => setClick(false)

    


    // const con = mysql.createPool({
    //     host: '127.0.0.1',
    //     port: 3306,
    //     user: 'root',
    //     password: 'teIOj784*fdd1',
    //     database: 'finalproject'
    //   });
    //   con.getConnection((err) => {
    //     if (err) throw err;
    //     console.log('Connected!');
    //   });
      
    //   function query(e) {


    //       e.preventDefaul()
    //       con.query('Select * FROM inventory2', (err, rows) => {
    //       if(err) throw err;
      
    //       console.log('data received from sql');
    //       console.log(rows);
          
    //   })
    // }

      return (
          <div>
              <form onSubmit="" name='itemaddform' id="itemaddform" className="id-col-for1">
                        <p/>
            </form>
            
          </div>
      )

}

export default Query
