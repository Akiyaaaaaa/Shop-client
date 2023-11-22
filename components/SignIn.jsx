"use client";

import Image from "next/image";
import { useState } from "react";
import axios from "@/api/axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignInForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const router = useRouter();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/login", formData);
      console.log("Logged in:", response.data.user);
      router.push("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen max-w-[1440px]">
      <div className="w-[560px] p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl">
        <div className="w-full flex flex-col items-center justify-center gap-3">
          <Image src="/logo.svg" alt="logo" width={118} height={18} />
          <h2 className="text-2xl font-bold text-gray-900 text-center">
            Please Sign In First
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="Username"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Your Username"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                name="remember"
                type="checkbox"
                className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                required
              />
            </div>
            <div className="ms-3 text-sm">
              <label htmlFor="remember" className="font-medium text-gray-500">
                Remember this device
              </label>
            </div>
            <a
              href="#"
              className="ms-auto text-sm font-medium text-blue-600 hover:underline"
            >
              Lost Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto"
          >
            Login to your account
          </button>
          <div className="text-sm font-medium text-gray-900">
            Not registered yet?{" "}
            <Link
              href="/register"
              className="text-blue-600 hover:underline cursor-pointer"
            >
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
