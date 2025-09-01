import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { Link, useNavigate } from "react-router-dom";
import { asyncregisteruser } from "../store/actions/userActions";
import { useDispatch } from "react-redux";

const Register = () => {
    const { register, reset, handleSubmit } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const RegisterHandler = (user) => {
        user.id = nanoid();
        user.isAdmin = false;
        user.cart = [];
       dispatch(asyncregisteruser(user));
        navigate("/login");
        console.log(user);
        
    };
    // return (
    //     <form
    //         onSubmit={handleSubmit(RegisterHandler)}
    //         className="flex flex-col w-1/2 justify-start items-start"
    //     >
    //         <input
    //             {...register("username")}
    //             className="mb-3 outline-0 border-b p-2 text-4xl"
    //             type="text"
    //             placeholder="john-doe"
    //         />
    //         <input
    //             {...register("email")}
    //             className="mb-3 outline-0 border-b p-2 text-4xl"
    //             type="email"
    //             placeholder="john@doe.com"
    //         />
    //         <input
    //             {...register("password")}
    //             className="mb-3 outline-0 border-b p-2 text-4xl"
    //             type="password"
    //             placeholder="********"
    //         />
    //         <button className="mt-5 px-4 py-2 bg-blue-400 rounded">
    //             Register User
    //         </button>
    //         <p className="mt-5">
    //             Already have an account?
    //             <Link className="text-blue-400" to="/login">
    //                 Login
    //             </Link>
    //         </p>
    //     </form>
    // );

      return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      {/* Card Container */}
      <div className="bg-white w-full max-w-md p-10 rounded-md shadow-md">
        {/* Myntra Logo */}
        <div className="flex justify-center mb-6">
          <img
             src="https://cdn.iconscout.com/icon/free/png-256/free-myntra-icon-svg-png-download-2249158.png"
            alt="Myntra Logo"
            className="h-12"
          />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Create an Account
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Sign up to explore and shop with Myntra
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(RegisterHandler)} className="space-y-5">
          <input
            {...register("username")}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none"
            type="text"
            placeholder="Username"
          />

          <input
            {...register("email")}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none"
            type="email"
            placeholder="Email address"
          />

          <input
            {...register("password")}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none"
            type="password"
            placeholder="Password"
          />

          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-3 rounded-md font-medium hover:bg-pink-600 transition"
          >
            REGISTER
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-2 text-gray-400 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Login Redirect */}
        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-pink-500 font-medium hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );

};

export default Register;