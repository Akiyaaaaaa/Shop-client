import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

const Product = ({ product, onEdit, onDelete, onAddTransaction }) => {
  return (
    <div
      className="flex flex-col p-6 justify-center items-start text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl w-[300px] group"
      key={product.id}
    >
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/product.svg"
          alt="product"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="w-full flex items-center justify-center gap-2">
        <h2 className="text-[22px] leading-[26px] font-bold capitalize">
          {product.name}
        </h2>
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-grey">
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-[14px] leading-[17px]">Stock :</p>
            <p className="text-[14px] leading-[17px]">{product.stock}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/dollar.svg" width={20} height={20} alt="price" />
            <p className="text-[14px] leading-[17px]">{product.price}</p>
          </div>
        </div>

        <div className="hidden group-hover:flex flex-col absolute bottom-0 w-full z-10">
          <CustomButton
            title="Check Out"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={onAddTransaction}
          />
          <div className="w-full flex justify-between mt-2">
            <CustomButton
              title="Delete"
              containerStyles="w-[40%] py-[12px] rounded-full bg-red-700"
              textStyles="text-white text-[14px] font-semibold"
              handleClick={onDelete}
            />
            <CustomButton
              title="Edit"
              containerStyles="w-[40%] py-[12px] rounded-full bg-yellow-500"
              textStyles="text-white text-[14px] font-semibold"
              handleClick={onEdit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
