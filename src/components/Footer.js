import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="Footer" style={{ marginTop: "20px" }}>
      <h1 className="footerH1">Shopzy</h1>

      <ul className="ull">
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <li><a href="#product">Products</a></li>
        <a href=" "><li>Login</li></a>
        <a href=" "><li>Signup</li></a>
      </ul>

      <div className="footerIcon">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-square-instagram"></i>
        <i class="fa-brands fa-square-twitter"></i>
        <i class="fa-brands fa-square-youtube"></i>
      </div>

      <div>
        <p>© 2024 Shopzy. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
