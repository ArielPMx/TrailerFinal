import React from 'react';
import { NavLink } from 'react-router-dom';

const Exit = () =>{
    localStorage.setItem('Entrada','0')
    
}
const loginbutton = () =>{
  localStorage.setItem('Loginkey','2')
}

debugger
const Header = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink className="navlink" to="/Trailer">
            Trailers
          </NavLink>
        </li>
        {localStorage.getItem('Entrada')=='1' && 
          <li>
            <NavLink className="navlink" to="/agregar">
              Agregar
            </NavLink>
          </li>
          
        }
        {localStorage.getItem('Entrada')=='1' && 
          <li>
          <NavLink className="navlink" to="/lista">
            Lista
          </NavLink>
          </li>
          
          
        }
        
        {localStorage.getItem('Entrada')=='0' && 
          <li>
          <NavLink className="navlink" to="/Login">
            login
          </NavLink>
          </li>
          
        }
        
        {localStorage.getItem('Entrada')=='1' && 
          <li>
          <button className="btn" type="submit" onClick={Exit}>
            LogOut
          </button>
          
        </li>
          
         }

      </ul>    
    </nav>
  );
};
export default Header;
