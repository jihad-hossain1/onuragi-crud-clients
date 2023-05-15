import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const ManageProductCard = () => {
  const product = useLoaderData();
  console.log(product);
  const { name, photo, details, _id } = product;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedProducts = {
      name,
      details,
      photo,
    };
    console.log(updatedProducts);
    fetch(`http://localhost:5000/products/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedProducts),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product has been updated",
            showConfirmButton: false,
            timer: 1500,
          });
          // form.reset();
        }
      });
  };
  return (
    <div>
      <div className="mx-auto text-center my-7">
        <h3 className="text-xl py-2">
          <span className="font-semibold underline">Product of : </span> {name}
        </h3>
        <form
          onSubmit={handleUpdate}
          className="space-y-5 shadow border py-6 border-gray-300"
        >
          <input
            className="w-[50%] border border-gray-600  px-2  rounded shadow mb-2 py-2"
            type="text"
            name="name"
            defaultValue={name}
          />{" "}
          <br />
          <input
            className="w-[50%] border border-gray-600  px-2  rounded shadow mb-2 py-2"
            type="text"
            name="details"
            defaultValue={details}
          />{" "}
          <br />
          <input
            className="w-[50%] border border-gray-600  px-2  rounded shadow mb-2 py-2"
            type="text"
            name="photo"
            defaultValue={photo}
          />{" "}
          <br />
          <input
            className="border cursor-pointer shadow px-3 hover:shadow-md"
            type="submit"
            value="update product"
          />{" "}
          <br />
        </form>
      </div>
    </div>
  );
};

export default ManageProductCard;
