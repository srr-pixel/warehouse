import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav() {
    return(
        <div>
            <ul className="nav">
                <li><Link to="/Firstpage">Home</Link></li>
                <li><Link to ="/Secondpage">Next</Link></li>
            </ul>

        </div>
    )
}