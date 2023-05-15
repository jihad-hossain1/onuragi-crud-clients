import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageProduct = ({ product }) => {
  const { name, details, _id, photo } = product;

  const handleDelete = (_id) => {
    // console.log("delete are catch", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire("Deleted!", "Your file has been deleted.", "success");
        fetch(`http://localhost:5000/products/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your product has been deleted.",
                "success"
              );
            }
          });
      }
    });
  };

  return (
    <div className="p-2 mx-10 rounded-md shadow flex justify-between items-center">
      <div className="flex items-center">
        <img className="w-10" src={photo} alt="" />
        <div className="ml-4">
          <h4>{name}</h4>
          <p>{details}</p>
        </div>
      </div>
      <div>
        <ul className="space-x-2 ">
          <li className="border border-green-500 rounded-md px-3 py-1 hover:shadow-md hover:font-semibold cursor-pointer inline-block text-sm">
            <Link to={`/products/${_id}`}>Update</Link>
          </li>
          <li
            onClick={() => handleDelete(_id)}
            className="border border-orange-500 rounded-md px-3 py-1 hover:shadow-md hover:font-semibold cursor-pointer inline-block text-sm"
          >
            Delete
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ManageProduct;
