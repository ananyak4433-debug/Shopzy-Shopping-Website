import { useEffect, useState } from "react";

const useFetchProduct = (_id) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!_id) return;

    fetch(`http://localhost:3000/getProduct/${_id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error fetching product:", err));
  }, [_id]);

  return product;
};

export default useFetchProduct;