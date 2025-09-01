import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncloginuser } from "../store/actions/userActions";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const LoginHandler = (user) => {
    dispatch(asyncloginuser(user));
    navigate("/");
  };

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
          Login to your account
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Enter your email and password to continue
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(LoginHandler)} className="space-y-5">
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
            LOGIN
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-2 text-gray-400 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to="/register" className="text-pink-500 font-medium hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
