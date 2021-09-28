import React, {useState,useEffect} from 'react'
import Item from './Item'

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';



  

const ItemList = () => {
  const [products,setProducts]= useState([])
          
          const listProducts = new Promise((resolve) => {
          setTimeout(() => {
            const data = [{
              id: '1',
              title: 'Remera Nike',
              description:'aaaaa aas sdasd assd',
              price: 1300,
              stock:5,
              pictureUrl: ''
            },
            {id: '2',
              title: 'Remera Adidas',
              description:'aaaaa aas sdasd assd',
              price: 1200,
              stock:10,
              pictureUrl: ''
            }, 
            { id: '3',
            title: 'Remera Puma',
            description:'aaaaa aas sdasd assd',
            price: 300,
            stock:15,
            pictureUrl: ''
          }
          ]
            resolve(data);
          }, 2000);

      });

useEffect(() => {

  listProducts.then((res) => {
    console.log('respuesta: ', res);
    setProducts(res)
  });

}, [])
          
  return (

    <div className="container">
			 
				{products.length !==0 ? (
          products.map(products => <Item key={products.id} {...products} />)
        ) : (
          <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box> 
      ) }
					
					 

		</div>
    
  )
}

export default ItemList