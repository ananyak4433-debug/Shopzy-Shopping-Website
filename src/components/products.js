import Productlist from "./productList.js";


function Product() {  
    return (
        <div id="product">
            <h1 style={{ textAlign: "center", fontSize: "54px", color: "#1e3b68", height:"50px" }}>Products</h1>
            <Productlist />
        </div>
    )
}


export default Product;