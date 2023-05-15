import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, name, details, photo } = product;
  return (
    <div className="border border-gray-300 p-2 shadow rounded">
      <img src={photo} alt="" />
      <div className="flex justify-between items-center">
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm">{details}</p>
        </div>
        <div>
          <Link
            className="text-warning hover:font-semibold hover:underline hover:text-orange-500"
            to={`products/${_id}`}
          >
            Detais
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
