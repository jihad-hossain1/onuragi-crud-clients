import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import ManageProduct from "./manageProduct/ManageProduct";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  const handleUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const products = { name, details, photo };
    console.log(products);
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(products),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product has been added",
            showConfirmButton: false,
            timer: 1500,
          });
          // form.reset();
        }
      });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const name = form.name.value;
  //   const email = form.email.value;
  //   const photoUrl = form.photoUrl.value;
  //   const details = form.details.value;
  //   const seller = form.sellar.value;
  //   const phone = form.phone.value;
  //   const addProducts = {
  //     name,
  //     email,
  //     // photoUrl,
  //     // details,
  //     // seller,
  //     // phone,
  //   };
  //   console.log(addProducts);
  //   fetch("http://localhost:5000/products", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application.json",
  //     },
  //     body: JSON.stringify(addProducts),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // };

  return (
    <>
      {/* add product  */}
      <div className="mx-auto text-center my-7">
        <h3 className="text-xl font-semibold py-2">Product add on Home page</h3>
        <form
          onSubmit={handleUser}
          className="space-y-5 shadow border py-6 border-gray-300"
        >
          <input
            className="w-[50%] border border-gray-600  px-2  rounded shadow mb-2 py-2"
            type="text"
            name="name"
            placeholder="Product Name"
          />{" "}
          <br />
          <input
            className="w-[50%] border border-gray-600  px-2  rounded shadow mb-2 py-2"
            type="text"
            name="details"
            placeholder="Details"
          />{" "}
          <br />
          <input
            className="w-[50%] border border-gray-600  px-2  rounded shadow mb-2 py-2"
            type="text"
            name="photo"
            placeholder="photo url"
          />{" "}
          <br />
          <input
            className="border cursor-pointer shadow px-3 hover:shadow-md"
            type="submit"
            value="add product"
          />{" "}
          <br />
        </form>
      </div>

      {/* manage your product  */}
      <div className="mx-auto my-7">
        <h3 className="text-xl font-semibold py-2">Manage your products</h3>
        <div className="space-y-5 shadow border py-6 border-gray-300">
          {products.map((product) => (
            <ManageProduct key={product._id} product={product}></ManageProduct>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
