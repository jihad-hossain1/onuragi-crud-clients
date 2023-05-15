import React, { useEffect, useState } from "react";
import ProductCard from "./productCard/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold">
        Total Product:
        {products.length}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
