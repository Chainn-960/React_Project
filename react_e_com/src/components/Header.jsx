//import { useContext } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//import { Link } from "react-router-dom";

function Header() {
 // const { cart } = useContext(CartContext);

  return (
    <header className="header">
      <h2>MyShop</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        
        
      </nav>
    </header>
  );
}

export default Header;
