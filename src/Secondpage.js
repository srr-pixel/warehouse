import React,{useState} from 'react'
import JSONDATA from "./warehouses.json"


export default function Secondpage() {
    const[find, setFind] = useState([]);
   
    return (
        <div className="open">
            <div className="second">
                <div className="cont">
                    <div className="table">
                        <p>Name</p>
                        <p>Code</p>
                        <p>ID</p>
                        <p>City</p>
                        <p>Space Available</p>
                        <p>Type</p>
                    </div>
                    {JSONDATA.map((val) => {
                        
                        return (
                            <div className="sudo">
                                
                                <p>{val.name}</p>
                                <p>{val.code}</p>
                                <p>{val.id}</p>
                                <p>{val.city}</p>
                                <p>{val.space_available}</p>
                                <p>{val.type}</p>
                                
                            </div>
                        )
                    })}

                </div>
                
            </div>
            

        </div>
    )
}