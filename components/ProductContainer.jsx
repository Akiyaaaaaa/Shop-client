"use client";
import axios from "@/api/axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Product from "./Product";
// ... (previous imports)
import ProductModal from "./ProductModal";
import TransactionModal from "./TransactionModal";
import RouteGuard from "./RouteGuard";

const ProductContainer = ({ initialProducts }) => {
  const [products, setProducts] = useState(initialProducts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);
  const [initialProduct, setInitialProduct] = useState({
    name: "",
    price: 0,
    stock: 0,
    description: "",
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const openEditModal = (product) => {
    setInitialProduct(product);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openTransactionModal = (product) => {
    setInitialProduct(product);
    setIsTransactionModalOpen(true);
  };
  const closeTransactionModal = () => {
    setIsTransactionModalOpen(false);
  };
  const getProduct = async () => {
    try {
      const response = await axios.get("/product");
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleProductSubmit = async (productData) => {
    try {
      const response = await axios.post("/product", productData);
      setProducts((prevProducts) => {
        // Replace the existing product with the updated one in the state
        const updatedProducts = prevProducts.map((product) =>
          product.id === productData.id ? response.data.product : product
        );
        return updatedProducts;
      });
      closeModal();
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  const handleEditProduct = async (producData) => {
    try {
      const response = await axios.put(`/product/${producData.id}`, producData);
      setProducts([...products, response.data.product]);
      closeModal();
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`/product/${productId}`);
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== productId)
      );
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleAddTransaction = async (transactionData) => {
    try {
      // Make an API request to add a new transaction
      const response = await axios.post("/transaction", transactionData);
      // Update the product list with the new transaction data
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === response.data.product_id
            ? { ...product, stock: product.stock - transactionData.quantity }
            : product
        )
      );
      // Close the transaction modal
      closeTransactionModal();
    } catch (error) {
      console.error("Error creating transaction:", error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center max-w-[1440px] padding-x padding-y">
      {isModalOpen && (
        <>
          <ProductModal
            isOpen={isModalOpen}
            onClose={closeModal}
            onSubmit={handleProductSubmit}
            onEdit={handleEditProduct}
            initialProduct={initialProduct}
            className="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </>
      )}

      {isTransactionModalOpen && (
        <>
          <TransactionModal
            isOpen={isTransactionModalOpen}
            onClose={closeTransactionModal}
            onAddTransaction={handleAddTransaction}
            product={initialProduct}
            className="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </>
      )}
      <div className="relative flex justify-between w-full">
        <h1>Product List</h1>
        <button
          onClick={() => openModal()}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        >
          Add New Product
        </button>
      </div>
      <div className="relative grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14 z-10">
        {products?.map((product) => (
          <Product
            key={product.id}
            product={product}
            onEdit={() => openEditModal(product)}
            onDelete={() => handleDeleteProduct(product.id)}
            onAddTransaction={() => openTransactionModal(product)}
          />
        ))}
      </div>
      {/* Add pagination logic here */}
    </div>
  );
};

ProductContainer.getInitialProps = async () => {
  try {
    const response = await axios.get("/product");
    const initialProducts = response.data.products;
    return { initialProducts };
  } catch (error) {
    console.error("Error fetching initial products:", error);
    return { initialProducts: [] };
  }
};

export default ProductContainer;
