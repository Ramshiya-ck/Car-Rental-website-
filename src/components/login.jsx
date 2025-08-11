import React from "react";
import { useForm } from "react-hook-form";
import img1 from '/images/img1.png'
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
  
      <div style={{
        backgroundImage: `url(${img1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
      }}>
    
        <div className="min-h-screen  flex items-center justify-center px-4">
      <div className=" bg-[#ffffffb6] shadow-2xl rounded-2xl p-8 w-full max-w-md border border-gray-100">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Join with us</h2>
        <form  onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label htmlFor="email" className="block mb-1 text-gray-600">Email</label>
            <input
              id="email"
              type="email"
              className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 ${
                errors.email ? "border-red-400 focus:ring-red-300" : "border-gray-300 focus:ring-blue-300"
              }`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format"
                }
              })}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 text-gray-600">Password</label>
            <input
              id="password"
              type="password"
              className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 ${
                errors.password ? "border-red-400 focus:ring-red-300" : "border-gray-300 focus:ring-blue-300"
              }`}
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters" }
              })}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full text-white bg-black hover:bg-black-700 hover:text-white  py-2 rounded-lg font-semibold transition duration-200"
          >
            LOGIN
          </button>

          <p className="text-center text-sm text-gray-500 mt-3">
            Not an account? <Link to={"/signup"}><span  className="text-blue-600 hover:underline">Sign Up</span></Link>
          </p>
        </form>
      </div>
    </div>
      </div>
  );
};

export default Login;
