import ProductCard from "./productCard";
import { useState, useEffect } from "react";

// const products = [
//   { title: "Green Dress", price: "1800", img: "/green.jpg" },
//   { title: "Orange Dress", price: "1500", img: "/dress2.jpg" },
//   { title: "White Dress", price: "1200", img: "/white.jpg" },
//   { title: "Floral Print Dress", price: "1000", img: "/dress4.jpg" }
// ];


function Productlist() {

  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(null);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    fetch("http://localhost:3000/getProducts/")
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error:', error))
  }, []);

  // console.log(product);


  return (

    <div className="Plist">

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <input className="search" placeholder="Search...." onChange={e => setSearch(e.target.value)} />
        <div className="dropdown">
          <button className="dropbtn" style={{ width: "260px" }}>Filter</button>
          <div className="dropdown-content">
            <button onClick={() => setFilter("under500")}>Under ₹500</button>
            <button onClick={() => setFilter("500-1000")}>₹500 – ₹1000</button>
            <button onClick={() => setFilter("1000-2000")}>₹1000 – ₹2000</button>
            <button onClick={() => setFilter("2000-5000")}>₹2000 – ₹5000</button>
            <button onClick={() => setFilter(null)}>All</button>
          </div>
        </div>
      </div>

      <div style={{ textAlign: "center", margin: "20px" }} className="cat">
        <span onClick={() => setCategory("all")}>All</span>
        <span onClick={() => setCategory("Women's Wear")}>Women</span>
        <span onClick={() => setCategory("Men's Wear")}>Men</span>
        <span onClick={() => setCategory("Accessories")}>Accessories</span>
      </div>

      <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", gap: "30px" }}>
        {product
          .filter(p => {
            const matchSearch = p.title
              .toLowerCase()
              .includes(search.toLowerCase());

            let matchFilter = true;

            if (filter === "under500") matchFilter = p.price < 500;
            if (filter === "500-1000")
              matchFilter = p.price >= 500 && p.price <= 1000;
            if (filter === "1000-2000")
              matchFilter = p.price >= 1000 && p.price <= 2000;
            if (filter === "2000-5000")
              matchFilter = p.price >= 2000 && p.price <= 5000;

            const matchCategory =
              category === "all" || p.Category === category;

            return matchSearch && matchFilter && matchCategory;
          })
          .map(p => (
            <ProductCard key={p._id} props={p} />
          ))}


        {/* {product.map((v1, v2, v3) => {
          return <ProductCard props={v1} />
        })} */}

      </div>
    </div>
  )
}


export default Productlist;


