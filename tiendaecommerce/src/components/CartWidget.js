import './NavBar.css';
//import NavImg from '../../src/assets/logo-ecommerce.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@material-ui/core';

function CartWidget() {
    return (
 
        <Button>
        <FontAwesomeIcon className="cart-widget" icon={faShoppingCart}/>
        <p className="contador-carrito">1</p>
        </Button>
      
      
    );
  }
  
  export default CartWidget;
  