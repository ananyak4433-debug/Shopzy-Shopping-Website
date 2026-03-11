import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {

    const items = useSelector((state) => state.cartItem.items);

    return (
        <div className="Nav">
            <div className="logo">
                <img src="/logo.jpeg" alt="logo" width="70px"></img>
            </div>
            <div className="navItems">
                <ul className="ul">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <li><a href="#product">Products</a></li>
                    <a href=" "><li>Login</li></a>
                    <a href=" "><li>Signup</li></a>
                    {/* <a href=" "><li>Cart:{items.length}</li></a> */}
                    <Link to ="/cart"><i class="fa-solid fa-cart-arrow-down">:{items.length}</i></Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;