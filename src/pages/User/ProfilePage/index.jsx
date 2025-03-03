import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button, Input, message } from "antd";
import { CameraOutlined } from "@ant-design/icons";
import { useQueryHandlerUser } from "../../../hook/useQuery";
import defUser from "../../../shared/assets/images/defUser.png";
import { usePatchUserMutation } from "../../../hook/useQuery/useQueryAction";
import { useNavigate } from "react-router-dom";
const profileSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
});

const ProfilePage = () => {
  let User = JSON.parse(localStorage.getItem("user"))[0];
  console.log(User);
  const [profileImage, setProfileImage] = useState(User?.profileImage);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: User.firstName,
      lastName: User.lastName,
      phone: User.phone,
      email: User.email,
    },
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const { mutate } = usePatchUserMutation();

  const onSubmit = (data) => {
    let chanagedUser = [{ ...User, ...data, profileImage: profileImage }];
    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Form data:");
      mutate({ id: User.id, data: chanagedUser });
      localStorage.setItem("user", JSON.stringify(chanagedUser));
      message.success("Profile updated successfully!");

      setIsSubmitting(false);
    }, 1000);
  };
  const navigate = useNavigate();
  return (
    <div className=" mx-auto p-6 relative">
      <Button
        type="primary"
        onClick={() => navigate("/")}
        className="!bg-[#152540] !fixed !bottom-61 !right-70 hover:!bg-[#2a3b5bc1] h-12 px-6 rounded"
        size="large">
        Go To HomePage
      </Button>
      <div className="flex flex-col md:flex-row w-full justify-around gap-8 items-start">
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="w-[200px] h-[200px] rounded-full overflow-hidden bg-gray-100">
              <img
                src={profileImage || defUser}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <label
              htmlFor="profile-image"
              className="absolute bottom-2 right-2 w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-md">
              <CameraOutlined className="text-gray-600 text-xl" />
              <input
                type="file"
                id="profile-image"
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
          </div>
        </div>

        <div className=" !w-[60%]">
          <h1 className="text-3xl font-medium mb-8">My profile</h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">First Name</label>
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    className="w-full p-3 bg-gray-50 rounded"
                    size="large"
                  />
                )}
              />
              {errors.firstName && (
                <p className="text-red-500 mt-1">{errors.firstName.message}</p>
              )}
              <p className="text-gray-400 mt-1">
                Please enter your first name.
              </p>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Last Name</label>
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    className="w-full p-3 bg-gray-50 rounded"
                    size="large"
                  />
                )}
              />
              {errors.lastName && (
                <p className="text-red-500 mt-1">{errors.lastName.message}</p>
              )}
              <p className="text-gray-400 mt-1">Please enter your last name.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Phone</label>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      className="w-full p-3 bg-gray-50 rounded"
                      size="large"
                    />
                  )}
                />
                {errors.phone && (
                  <p className="text-red-500 mt-1">{errors.phone.message}</p>
                )}
                <p className="text-gray-400 mt-1">
                  Please enter your phone number.
                </p>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      className="w-full p-3 bg-gray-50 rounded"
                      size="large"
                    />
                  )}
                />
                {errors.email && (
                  <p className="text-red-500 mt-1">{errors.email.message}</p>
                )}
                <p className="text-gray-400 mt-1">
                  Please enter your email address.
                </p>
              </div>
            </div>

            <div className="flex justify-end mt-8">
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
    </div>
  );
};

export default ProfilePage;
