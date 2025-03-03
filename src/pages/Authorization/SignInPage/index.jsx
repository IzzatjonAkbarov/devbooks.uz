import React, { useState } from "react";
import signIn from "../../../shared/assets/icons/signIn.svg";
import { useForm } from "react-hook-form";
import { map, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { useQueryHandlerUser } from "../../../hook/useQuery";
import { message, notification } from "antd";
const signInSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});

const SignInPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { data, isLoading } = useQueryHandlerUser({
    pathname: "todo",
    url: "devbooksUser",
  });
  // console.log(data);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
  });
  const navigate = useNavigate();
  3;
  const onSubmit = async (UserInfo) => {
    setIsSubmitting(true);
    let successfulUser = data?.filter(
      (value) =>
        value.email == UserInfo.email && value.password == UserInfo.password
    );
    if (successfulUser.length) {
      localStorage.setItem("user", JSON.stringify(successfulUser));
      setIsSubmitting(false);

      message.success("Login Successfull"), reset();
      navigate("/");
    } else {
      setTimeout(setIsSubmitting(false), 1000);
      message.error("Incorrect Email or Password"), reset();
    }
    // try {
    //   console.log("Form data:", UserInfo);

    //   // Here you would typically send the data to your API
    //   await new Promise((resolve) => setTimeout(resolve, 1000));
    //   notification.success({
    //     message: "successfully loged in",
    //     placement: "top",
    //   });
    // } catch (error) {
    //   console.error("Error submitting form:", error);
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  return (
    <div className="w-screen h-screen flex items-center ">
      <div className="w-[50%] bg-[#CCB294] h-screen flex items-center justify-center ">
        <img src={signIn} alt="" />
      </div>
      <div className="w-[50%]">
        <div className=" w-[70%] mx-auto p-6">
          <h1 className="text-5xl w-full font-bold mb-4">Sign in</h1>

          <p className="mb-8">
            Do not you have an account?{" "}
            <Link
              to={"/authorization/signup-page"}
              className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
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

            <div>
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

export default SignInPage;
