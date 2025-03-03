import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button, Input, message, Divider } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { usePatchUserMutation } from "../../../hook/useQuery/useQueryAction";
import { useNavigate } from "react-router-dom";

const passwordSchema = z
  .object({
    email: z.string().email("Invalid email address"),
    currentPassword: z
      .string()
      .min(6, "Password must be at least 6 characters"),
    newPassword: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const SecurityPage = () => {
  let User = JSON.parse(localStorage.getItem("user"))[0];
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      email: User.email,
    },
  });
  const { mutate } = usePatchUserMutation();
  console.log(User);

  const onSubmit = (data) => {
    let chanagedUser = [
      { ...User, password: data.Newpass123, email: data.email },
    ];

    if (User.password == data.currentPassword) {
      setIsSubmitting(true);

      setTimeout(() => {
        console.log("Form data:", data);
        mutate({ id: User.id, data: chanagedUser });
        message.success("Password changed successfully!");
        setIsSubmitting(false);
        localStorage.setItem("user", JSON.stringify(chanagedUser));
      }, 1000);
    } else {
      message.error("Current Password Incorrect");
    }
  };
  const navigate = useNavigate();
  return (
    <div className="w-[70%] mx-auto p-6">
      <Button
        type="primary"
        onClick={() => navigate("/")}
        className="!bg-[#152540] !fixed !bottom-40 !right-100 hover:!bg-[#2a3b5bc1] h-12 px-6 rounded"
        size="large">
        Go To HomePage
      </Button>
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-medium py-10">
          Change Or Recover Your Password:
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  className="w-full p-3 !bg-gray-200 rounded"
                  size="large"
                />
              )}
            />
            {errors.email && (
              <p className="text-red-500 mt-1">{errors.email.message}</p>
            )}
            <p className="text-gray-400 mt-1">Please enter your first Email.</p>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Current password</label>
            <Controller
              name="currentPassword"
              control={control}
              render={({ field }) => (
                <Input.Password
                  {...field}
                  className="w-full p-3 !bg-gray-200 rounded"
                  size="large"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                  placeholder="********"
                />
              )}
            />
            {errors.currentPassword && (
              <p className="text-red-500 mt-1">
                {errors.currentPassword.message}
              </p>
            )}
            <p className="text-gray-400 mt-1">Please enter your password.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">New Password</label>
              <Controller
                name="newPassword"
                control={control}
                render={({ field }) => (
                  <Input.Password
                    {...field}
                    className="w-full p-3 !bg-gray-200 rounded"
                    size="large"
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                    placeholder="********"
                  />
                )}
              />
              {errors.newPassword && (
                <p className="text-red-500 mt-1">
                  {errors.newPassword.message}
                </p>
              )}
              <p className="text-gray-400 mt-1">
                Please enter your new password.
              </p>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Confirm Password
              </label>
              <Controller
                name="confirmPassword"
                control={control}
                render={({ field }) => (
                  <Input.Password
                    {...field}
                    className="w-full p-3 !bg-gray-200 rounded"
                    size="large"
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                    placeholder="********"
                  />
                )}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
              <p className="text-gray-400 mt-1">
                Please confirm your new password.
              </p>
            </div>
          </div>

          <Divider className="my-8" />

          <div className="flex justify-end">
            <Button
              type="primary"
              htmlType="submit"
              loading={isSubmitting}
              className="!bg-[#152540] hover:!bg-[#2a3b5bc1] h-12 px-6 rounded"
              size="large">
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SecurityPage;
