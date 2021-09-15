import './NavBar.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';




function NavBar() {
    return (
      
    
      <AppBar position="static" >
        <Toolbar className="main-navbar">
          <Typography variant="h6" >
            EcomMattalia
          </Typography>
          <div className="fin">
          <ul className="nabvar-list">
          <Button color="inherit">Inicio</Button>
          <Button color="inherit">Categorias</Button>
          <Button color="inherit">Productos</Button>
          <Button color="inherit">Ayuda</Button>
          </ul>
          </div>
        </Toolbar>
      </AppBar>
      
      
    );
  }
  
  export default NavBar;
  