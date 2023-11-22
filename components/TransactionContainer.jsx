"use client";
import React, { useEffect, useState } from "react";
import axios from "@/api/axios";
import Transaction from "@/components/Transaction";

const TransactionContainer = ({ initialTransactions }) => {
  const [transactions, setTransactions] = useState(initialTransactions);

  const getTransactions = async () => {
    try {
      const response = await axios.get("/transaction");
      setTransactions(response.data.transactions);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center max-w-[1440px] p-6">
      <h1 className="text-3xl font-bold mb-4">Transaction List</h1>
      <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 w-full pt-4">
        {transactions?.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </div>
  );
};

TransactionContainer.getInitialProps = async () => {
  try {
    const response = await axios.get("/transaction");
    const initialTransactions = response.data.transactions;
    return { initialTransactions };
  } catch (error) {
    console.error("Error fetching initial transactions:", error);
    return { initialTransactions: [] };
  }
};

export default TransactionContainer;
