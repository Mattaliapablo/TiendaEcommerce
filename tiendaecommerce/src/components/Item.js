import React, {useState} from 'react'
import ItemCount from './ItemCount'


const Item = ({
  id,
  title,
  description,
	price,
	pictureUrl,
	stock
	}) => (


    <div className="card col-5" >
        <img src={pictureUrl} alt="imagen"/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p>{description}</p>
          <p className="card-text">{price}</p>
          <p>Stock: {stock}</p>  
          <ItemCount stock={10}/>               
        </div>
    </div>


)

export default Item