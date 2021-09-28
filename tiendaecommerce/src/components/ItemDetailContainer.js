import React,{useState,useEffect} from "react";

import ItemDetail from "./ItemDetail";



function ItemDetailContainer() {
const [infoProduct,setInfoProduct] = useState()
const getProduct = new Promise ((resolve)=>{

    setTimeout(()=>{
        const mockProduct = {
                                id: '1',
                                title: 'Remera Nike',
                                description:'aaaaa aas sdasd assd',
                                price: 1300,
                                stock:5,
                                pictureUrl: ''
                            }
        resolve(mockProduct)
    },2000)
})

useEffect(()=>{
    getProduct.then((response)=>{
        setInfoProduct(response);
    })
},[])









    return (

        <div className="detail-container">
           <h2>----------CONTENEDOR DETALLE---------</h2>
            {console.log("infoProduct",infoProduct)}
            <ItemDetail data={infoProduct}/>
        </div>
            
    );
  }


   export default ItemDetailContainer;
  