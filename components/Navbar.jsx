"use client";

import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const handleSignIn = () => {
    router.push("/signin");
  };
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 border-b border-gray-900">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <div className="flex gap-3 justify-between items-center text-[20px] ">
          <Link href="/" className="font-semibold hover:font-bold">
            Product
          </Link>
          <Link href="/transaction" className="font-semibold hover:font-bold">
            Transaction
          </Link>
        </div>
        <CustomButton
          title="Sign in"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
          handleClick={handleSignIn}
        />
      </nav>
    </header>
  );
};

export default Navbar;
