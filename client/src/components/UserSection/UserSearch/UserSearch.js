import React from 'react'
import UserNav from '../UserNav/UserNav'
import { Link } from "react-router-dom";
import "./search.css";
import ProviderData from '../ProviderData'
import SearchBar from "material-ui-search-bar";
import { useState } from 'react';
const UserSearch = () => {
  
  const [searchText, setsearchText] = useState()
  const [data, setData] = useState(ProviderData)
  
  const handleChange=(val)=>{
      setsearchText(val);
      let searchedVal=val;
      const filteredRows = ProviderData.filter((row) => {
        return row.name.toLowerCase().includes(searchedVal.toLowerCase());
      });
      setData(filteredRows);
      /* console.log(val); */
      
  }
  const handleSearch=(e)=>{
    setsearchText("");
    setData(ProviderData);
  }
  return (
    <>
    <UserNav />
    <div className="s-bar">
    <SearchBar
      style={{borderRadius:"50px"}}
      placeholder="Search here..."
      autoFocus
      value={searchText}
      onChange={handleChange}
      onRequestSearch={handleSearch}
    />
    </div>
    
    <div className="container">
      <ul className="list">
        {data.map(item => (
          <li key={item.id} id={item.id} className="list-item">
          
            <Link to={`/resource/${item.id}`}><img src={item.img} alt={item.name} />{item.name}</Link>
            <h4>₹{item.cost}/month</h4>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default UserSearch