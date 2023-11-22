"use client";
import { useState } from "react";

const ProductModal = ({
  isOpen,
  onClose,
  onSubmit,
  onEdit,
  initialProduct,
}) => {
  const [product, setProduct] = useState(initialProduct);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (initialProduct) {
      onEdit(product);
    } else {
      onSubmit(product);
    }
  };

  return (
    <div className={`modal ${isOpen ? "block" : "hidden"}`}>
      <div className="modal-overlay"></div>
      <div className="modal-container bg-white w-full md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold">Create New Product</p>
            <button
              onClick={onClose}
              className="modal-close cursor-pointer z-50"
            >
              <svg
                className="fill-current text-black dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.586 5.586a2 2 0 112.828-2.828L9 6.172l1.586-1.586a2 2 0 112.828 2.828L11.828 9l1.586 1.586a2 2 0 11-2.828 2.828L9 11.828l-1.586 1.586a2 2 0 11-2.828-2.828L6.172 9 4.586 7.414a2 2 0 01-.293-2.827zM9 16a7 7 0 100-14 7 7 0 000 14z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={product.name}
                onChange={handleChange}
                className="border rounded w-full py-2 px-3"
                placeholder="Type product name"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Price
              </label>
              <input
                type="number"
                name="price"
                value={product.price}
                onChange={handleChange}
                className="border rounded w-full py-2 px-3"
                placeholder="Enter product price"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Stock
              </label>
              <input
                type="number"
                name="stock"
                value={product.stock}
                onChange={handleChange}
                className="border rounded w-full py-2 px-3"
                placeholder="Enter product stock"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={product.description}
                onChange={handleChange}
                rows="4"
                className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write product description here"
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
