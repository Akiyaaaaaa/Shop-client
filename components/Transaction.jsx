import React from "react";

const Transaction = ({ transaction }) => {
  const createTime = new Date(transaction.created_at).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return (
    <div
      className="flex flex-col p-6 justify-center items-start text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl w-[350px] group"
      key={transaction.id}
    >
      <div className="w-full border-b border-black-100 border-dashed">
        <h2 className="text-[18px] leading-[26px] font-bold capitalize">
          Reference Number : {transaction.reference_no}
        </h2>
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex flex-col w-full justify-between text-grey gap-3">
          <div className="flex justify-between items-center gap-2">
            <p className="text-[18px] leading-[17px]">Price :</p>
            <p className="text-[18px] leading-[17px]">{transaction.price}</p>
          </div>
          <div className="flex justify-between items-center gap-2">
            <p className="text-[18px] leading-[17px]">Quantity :</p>
            <p className="text-[18px] leading-[17px]">
              {transaction.payment_amount}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between items-center border-t border-black-100 border-dashed my-2">
        <p className="text-[14px] leading-[17px]">Created At :</p>
        <p className="text-[14px] leading-[17px]">{createTime}</p>
      </div>
    </div>
  );
};

export default Transaction;
