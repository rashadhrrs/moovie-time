import React from 'react'
import SearchBar from '../elements/SearchBar'
import './Navbar.css'
import logo from '../../assets/moovietime-logo.svg'
import gridlogo from '../../assets/grid-icon.svg'

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo}></img>
            </div>
            <div className="searchbar" style={{height:"20px"}}>
                <SearchBar/>
            </div>
            <div className="navbar-list content">
                <ul>
                    <li><img className="gridlogo" src={gridlogo}></img>CATEGORIES</li>
                    <li>MOVIES</li>
                    <li>TV SHOWS</li>
                    <li>LOGIN</li>
                </ul>
            </div>
        </div>
    )
}
