// import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import {
//     asyncdeleteuser,
//     asynclogoutuser,
//     asyncupdateuser,
// } from "../../store/actions/userActions";

// const UserProfile = () => {
//     const { users } = useSelector((state) => state.userReducer);

//     const { register, reset, handleSubmit } = useForm({
//         defaultValues: {
//             username: users?.username,
//             email: users?.email,
//             password: users?.password,
//         },
//     });
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const UpdateUserHandler = (user) => {
//         dispatch(asyncupdateuser(users.id, user));
//     };

//     const LogoutUserHandler = () => {
//         dispatch(asynclogoutuser());
//         navigate("/login");
//     };

//     const DeleteHandler = () => {
//         dispatch(asyncdeleteuser(users.id));
//         navigate("/login");
//     };

//     // return users ? (
//     //     <div>
//     //         <h1 className="font-thin text-5xl text-gray-700">
//     //             {users.username}
//     //         </h1>
//     //         <h1 className="font-thin text-xl text-gray-700">{users.email}</h1>
//     //         <hr className="my-10" />
//     //         <form
//     //             onSubmit={handleSubmit(UpdateUserHandler)}
//     //             className="w-full flex flex-col justify-start items-start"
//     //         >
//     //             <input
//     //                 {...register("username")}
//     //                 className="mb-3 outline-0 border-b p-2 text-4xl"
//     //                 type="text"
//     //                 placeholder="John-Doe"
//     //             />
//     //             <input
//     //                 {...register("email")}
//     //                 className="mb-3 outline-0 border-b p-2 text-4xl"
//     //                 type="email"
//     //                 placeholder="john@doe.com"
//     //             />
//     //             <input
//     //                 {...register("password")}
//     //                 className="mb-3 outline-0 border-b p-2 text-4xl"
//     //                 type="password"
//     //                 placeholder="********"
//     //             />

//     //             <button className="mt-5 px-4 py-2 bg-blue-400 rounded">
//     //                 Update User
//     //             </button>

//     //             <button
//     //                 type="button"
//     //                 onClick={LogoutUserHandler}
//     //                 className="mt-5 px-4 py-2 bg-red-400 rounded"
//     //             >
//     //                 Logout User
//     //             </button>

//     //             <button
//     //                 type="button"
//     //                 onClick={DeleteHandler}
//     //                 className="mt-5 px-4 py-2 bg-red-600 rounded"
//     //             >
//     //                 Delete User
//     //             </button>
//     //         </form>
//     //     </div>
//     // ) : (
//     //     "Loading..."
//     // );

//     return users ? (
//   <div className="max-w-2xl mx-auto p-6">
//     {/* Profile Info */}
//     <div className="text-center mb-10">
//       <h1 className="font-light text-4xl sm:text-5xl text-gray-800">
//         {users.username}
//       </h1>
//       <h2 className="font-light text-lg sm:text-xl text-gray-500">
//         {users.email}
//       </h2>
//     </div>

//     <hr className="my-8" />

//     {/* Form */}
//     <form
//       onSubmit={handleSubmit(UpdateUserHandler)}
//       className="w-full flex flex-col gap-5"
//     >
//       <input
//         {...register("username")}
//         className="w-full border-b border-gray-400 p-3 text-xl focus:outline-none focus:border-blue-500 transition"
//         type="text"
//         placeholder="John-Doe"
//       />

//       <input
//         {...register("email")}
//         className="w-full border-b border-gray-400 p-3 text-xl focus:outline-none focus:border-blue-500 transition"
//         type="email"
//         placeholder="john@doe.com"
//       />

//       <input
//         {...register("password")}
//         className="w-full border-b border-gray-400 p-3 text-xl focus:outline-none focus:border-blue-500 transition"
//         type="password"
//         placeholder="********"
//       />

//       {/* Buttons */}
//       <div className="flex flex-col sm:flex-row sm:justify-between gap-3 mt-6">
//         <button
//           type="submit"
//           className="flex-1 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
//         >
//           Update User
//         </button>

//         <button
//           type="button"
//           onClick={LogoutUserHandler}
//           className="flex-1 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
//         >
//           Logout
//         </button>

//         <button
//           type="button"
//           onClick={DeleteHandler}
//           className="flex-1 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
//         >
//           Delete
//         </button>
//       </div>
//     </form>
//   </div>
// ) : (
//   <p className="text-center text-gray-500">Loading...</p>
// );


// };

// export default UserProfile;
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  asyncdeleteuser,
  asynclogoutuser,
  asyncupdateuser,
} from "../../store/actions/userActions";
import { toast } from "react-toastify";

const UserProfile = () => {
  const { users } = useSelector((state) => state.userReducer);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: users?.username,
      email: users?.email,
      password: users?.password,
    },
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const UpdateUserHandler = (user) => {
    dispatch(asyncupdateuser(users.id, user));
    toast.success("Profile updated successfully!");
  };

  const LogoutUserHandler = () => {
    dispatch(asynclogoutuser());
    navigate("/login");
    toast.info("Logged out successfully!");
  };

  const DeleteHandler = () => {
    dispatch(asyncdeleteuser(users.id));
    navigate("/login");
    toast.error("Account deleted!");
  };

  return users ? (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-lg bg-white shadow-md rounded-xl p-8">
        {/* Profile Header */}
        <div className="text-center mb-10">
          <div className="w-20 h-20 mx-auto rounded-full bg-pink-500 text-white flex items-center justify-center text-2xl font-bold">
            {users.username?.charAt(0).toUpperCase()}
          </div>
          <h1 className="mt-4 text-3xl font-semibold text-gray-800">
            {users.username}
          </h1>
          <p className="text-gray-500">{users.email}</p>
        </div>

        <hr className="mb-8" />

        {/* Form */}
        <form
          onSubmit={handleSubmit(UpdateUserHandler)}
          className="flex flex-col gap-6"
        >
          <input
            {...register("username")}
            className="border-b border-gray-300 focus:border-pink-500 outline-none p-2 text-lg"
            type="text"
            placeholder="Enter your username"
          />

          <input
            {...register("email")}
            className="border-b border-gray-300 focus:border-pink-500 outline-none p-2 text-lg"
            type="email"
            placeholder="Enter your email"
          />

          <input
            {...register("password")}
            className="border-b border-gray-300 focus:border-pink-500 outline-none p-2 text-lg"
            type="password"
            placeholder="Enter your password"
          />

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button
              type="submit"
              className="flex-1 py-3 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition"
            >
              Update Profile
            </button>

            <button
              type="button"
              onClick={LogoutUserHandler}
              className="flex-1 py-3 bg-gray-100 text-gray-700 font-semibold rounded-full hover:bg-gray-200 transition"
            >
              Logout
            </button>

            <button
              type="button"
              onClick={DeleteHandler}
              className="flex-1 py-3 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <p className="text-center text-gray-500">Loading...</p>
  );
};

export default UserProfile;
