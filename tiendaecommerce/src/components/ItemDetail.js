import React,{useState,useEffect} from "react";
import ItemCount from "./ItemCount";


function ItemDetail(props) {


    return (

        <div className="detail-item">
            {console.log("detail-item", props.data)}
            <div>
               <h2>{props.data.title}</h2> 
               <p>${props.data.price}</p> 
               <p>{props.data.description}</p>
               <ItemCount/>
            </div>
        </div>
            
    );
  }


   export default ItemDetail;
  