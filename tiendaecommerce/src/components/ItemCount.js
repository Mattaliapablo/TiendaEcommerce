import {useState} from 'react'


const ItemCount = ({stock, initial = 1, onAdd}) => {
	const [count, setCount] = useState(initial)

  const sumar = () => {
    if(count < stock){
      setCount(count + 1)
    }
}

const restar = () => {
  if(count > initial){
setCount(count - 1)
}}

	return (
		<>
			<div>
				<button className="btn btn-danger" disabled={stock === 0 || count <= 1} onClick={restar}>-</button>
				<span>{count}</span>
				<button className="btn btn-primary" disabled={stock === 0 || count >= stock } onClick={sumar}>+</button>
			</div>
			<button className="btn btn-primary mt-3" disabled={stock === 0 || count <= 0 || count > stock} onClick={() => onAdd(count)}>Agregar al carrito</button>
		</>
	)
}


export default ItemCount