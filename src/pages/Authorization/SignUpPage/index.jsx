import React, { useState } from "react";
import login from "../../../shared/assets/icons/signup.svg";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useQueryHandlerUser } from "../../../hook/useQuery";

import { message } from "antd";
import { usePostUserMutation } from "../../../hook/useQuery/useQueryAction";
const signUpSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number" }),
});

const SignUp = () => {
  const { data, isLoading } = useQueryHandlerUser({
    pathname: "todo",
    url: "devbooksUser",
  });
  console.log(data);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
    },
  });
  const navigate = useNavigate();
  const { mutate } = usePostUserMutation();
  const onSubmit = (data) => {
    mutate(
      { ...data, profileImage: "" },
      {
        onSuccess: () => {
          console.log("Form data:", data);
          message.success("Sign Up successful");
          reset();
          navigate("/authorization");
        },
        onError: () => {
          message.error("Sign Up failed");
          reset();
        },
      }
    );
  };

  return (
    <div className="w-screen h-screen flex  items-center">
      <div className="w-[50%] bg-[#CCB294] h-screen flex items-center justify-center ">
        <img src={login} alt="" />
      </div>
      <div className="w-[50%]">
        <div className="w-[70%] mx-auto p-6">
          <h1 className="text-5xl font-bold mb-4">Sign up</h1>

          <p className="mb-8">
            Already have an account?{" "}
            <Link
              to={"/authorization"}
              className="text-blue-500 hover:underline">
              Sign in
            </Link>
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
            <div className="w-full">
              <input
                type="text"
                placeholder="First name"
                className={`w-full p-4 border rounded-lg text-gray-500 focus:outline-none ${
                  errors.firstName ? "border-red-500" : "border-gray-200"
                }`}
                {...register("firstName")}
              />
              {errors.firstName && (
                <p className="mt-1 text-red-500 text-sm">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div className="w-full">
              <input
                type="text"
                placeholder="Last name"
                className={`w-full p-4 border rounded-lg text-gray-500 focus:outline-none ${
                  errors.lastName ? "border-red-500" : "border-gray-200"
                }`}
                {...register("lastName")}
              />
              {errors.lastName && (
                <p className="mt-1 text-red-500 text-sm">
                  {errors.lastName.message}
                </p>
              )}
            </div>

            <div className="w-full">
              <input
                type="tel"
                placeholder="Phone"
                className={`w-full p-4 border rounded-lg text-gray-500 focus:outline-none ${
                  errors.phone ? "border-red-500" : "border-gray-200"
                }`}
                {...register("phone")}
              />
              {errors.phone && (
                <p className="mt-1 text-red-500 text-sm">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div className="w-full">
              <input
                type="email"
                placeholder="Email"
                className={`w-full p-4 border rounded-lg text-gray-500 focus:outline-none ${
                  errors.email ? "border-red-500" : "border-gray-200"
                }`}
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1 text-red-500 text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="w-full">
              <input
                type="password"
                placeholder="Password"
                className={`w-full p-4 border rounded-lg text-gray-500 focus:outline-none ${
                  errors.password ? "border-red-500" : "border-gray-200"
                }`}
                {...register("password")}
              />
              {errors.password && (
                <p className="mt-1 text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 bg-[#1a2642] text-white font-medium rounded-full hover:bg-[#141d33] transition-colors duration-200 disabled:opacity-70">
              {isSubmitting ? "Processing..." : "Next step"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
