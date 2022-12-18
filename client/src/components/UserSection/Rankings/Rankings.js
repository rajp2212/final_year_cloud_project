import React from 'react'
import UserNav from '../UserNav/UserNav'
import './ranking.css'
import data from '../ProviderData'
import { Link } from 'react-router-dom'


const Rankings = () => {

  data.sort(function(a, b){return a.cost>b.cost});

  return (
    <>
    <UserNav/>
    <div className="container">
      <ul className="list">
        {data.map( (item) => (
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

export default Rankings