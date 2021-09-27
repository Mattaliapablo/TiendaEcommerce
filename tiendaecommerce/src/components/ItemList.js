import React, {useState,useEffect} from 'react'
import Item from './Item'

      const data = [{
          id: '1',
          title: 'Esteban Quito',
          description:'aaaaa aas sdasd assd',
          price: 1300,
          stock:5,
          pictureUrl: ''
        },
        {id: '2',
          title: 'Esteban Quito',
          description:'aaaaa aas sdasd assd',
          price: 1200,
          stock:10,
          pictureUrl: ''
        }, 
        { id: '3',
        title: 'Esteban Quito',
        description:'aaaaa aas sdasd assd',
        price: 300,
        stock:15,
        pictureUrl: ''
      }
      ]
  

const ItemList = () => {

    const listProducts = new Promise((resolve) => {
        setTimeout(() => {
          resolve(data);
        }, 2000);
      });
      
      listProducts.then((res) => {
        console.log('respuesta: ', res);
      });
      

  return (

    <>
			 {
				data
					? data.length
						? data.map(data => <Item key={data.id} {...data} />)
						: <p>No hay productos disponibles</p>
					: <p>Cargando productos...</p>
			} 
    </>
  )
}

export default ItemList