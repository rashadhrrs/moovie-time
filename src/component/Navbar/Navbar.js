import React from 'react'
import SearchBar from '../elements/SearchBar'
import './Navbar.css'
import logo from '../../assets/moovietime-logo.svg'
import gridlogo from '../../assets/grid-icon.svg'
import { useHomeFetch } from '../hooks/useHomeFetch';

import {
    API_URL,
    API_KEY,
    IMAGE_BASE_URL,
    POSTER_SIZE,
    BACKDROP_SIZE,
  } from '../../config';

export default function Navbar() {
    
    const [{ state, loading }, fetchData] = useHomeFetch();

    const searchMovies = search => {
        const endpoint = `${API_URL}${search && 'search/'}movie${
          search ? '' : '/popular'
        }?api_key=${API_KEY}&query=${search}`;
    
        fetchData(endpoint);
      };

    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo}></img>
            </div>
            <div className="searchbar" style={{height:"20px"}}>
                <SearchBar callback={searchMovies}/>
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
