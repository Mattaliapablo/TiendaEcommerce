import React, {useState} from 'react'

const ItemCount = () => {
  
  const [count, setCount] = useState(1);
  const [stock, setStock] = useState(10);
  const [disableButton, setDisableButton] = useState(false);


  const sumar = () => {
      if(count < stock){
        setCount(count + 1)
      }else{
          setDisableButton(true)
      }
    
  }

  const restar = () => {
      if(count > 1){
    setCount(count - 1)
    setDisableButton(false)
}
}


  return (

    <>
      <button  className="btn btn-danger" onClick={restar}>-</button>
      {count}
      <button disabled={disableButton} className="btn btn-primary" onClick={sumar}>+</button> 
    </>
  )
}

export default ItemCount