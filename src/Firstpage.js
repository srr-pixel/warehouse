
import Dropdown from './dropdown' 
import data from './warehouses.json'
import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'


export default function Firstpage() {
    const [value, setValue] = useState(null)
    let history = useHistory();

    
    return(
        <div className="top">
            <div className="head">
                <div className="title">
                    <h1>Warehouse.</h1>
                </div>
                <div className="navbar">
                    <ul>
                        <li>HOME</li>
                        <li>ABOUT US</li>
                        <li>CONTACT</li>
                        <li>CART</li>
                    </ul>

                </div>
            
            </div>
            
                <Dropdown  
                prompt='Select Name...'
                options={data}
                id="id"
                label="name"
                value= {value}
                onchange={val => setValue(val) } />
            <div className="search-block">
                
                <Dropdown  
               prompt='Select City..'
               options={data}
               id="id"
               label="city"
               value= {value}
               onchange={val => setValue(val) } />
           </div>
           <div className="btn">
               <button className="btnz" onClick={() => history.push('/Secondpage')}>Search</button>

           </div>

            
            
            
        </div>
    )
}