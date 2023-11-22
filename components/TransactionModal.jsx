// TransactionModal.js

import { useState } from "react";
import CustomButton from "./CustomButton";

const TransactionModal = ({ isOpen, onClose, onAddTransaction, product }) => {
  const [transactionData, setTransactionData] = useState({
    quantity: 1,
    product_id: product.id,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransactionData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTransaction(transactionData);
  };

  return (
    <div className={`modal ${isOpen ? "block" : "hidden"}`}>
      <div className="modal-overlay"></div>

      <div className="modal-container bg-white w-full md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        {/* Modal content */}
        <div className="modal-content py-4 text-left px-6">
          {/* Modal header */}
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold">Add Transaction</p>
            <button
              onClick={onClose}
              className="modal-close cursor-pointer z-50"
            >
              <svg
                className="fill-current text-black"
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

          {/* Modal body */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                value={transactionData.quantity}
                onChange={handleChange}
                className="border rounded w-full py-2 px-3"
                placeholder="Enter quantity"
                required
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Add Transaction
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TransactionModal;
