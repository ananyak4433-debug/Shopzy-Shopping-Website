// import { ProductDetails } from "./ProductDetails";
import { Link } from "react-router-dom";

function ProductCard(props) {
  
  const { title, price, photo,_id } = props.props;
  console.log(props);
  
  return (
    <div className="card">
      <img src={photo} alt={title} style={{width:"100%", height:"60%",objectFit:"cover"}} /> 
      <h3>{title}</h3>
      <p>₹ {price}</p>
      <Link to={`/ProductDetails/${_id}`}>
        <button>VIEW</button>
      </Link>
      </div>

  );
}

export default ProductCard;