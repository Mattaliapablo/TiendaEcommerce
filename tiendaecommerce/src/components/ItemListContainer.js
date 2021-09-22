import './NavBar.css';
 import NavImg from '../../src/assets/logo-ecommerce.png'
import ItemCount from './ItemCount';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function ItemListContainer() {
    return (
        <div className="container row mt-5">
            <div className="col-3">
                <div class="card" >
                    <img src={NavImg} alt="imagen"/>
                    <div class="card-body">
                      <h5 class="card-title">TITULO</h5>
                      <p class="card-text">$1300</p>
                      <ItemCount/>
                      <a href="" class="btn btn-primary mt-3">Agregar al carrito</a>
                    </div>
                </div>
            </div>
        </div>
        
    
    );
  }
  
  export default ItemListContainer;
