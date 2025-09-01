// import { useDispatch, useSelector } from "react-redux";
// import { NavLink, useNavigate } from "react-router-dom";
// import { asynclogoutuser } from "../store/actions/userActions";

// const Nav = () => {

//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const user = useSelector((state) => state.userReducer.users);

//     const LogoutHandler = () => {
//         dispatch(asynclogoutuser());
//         navigate("/");
//     };
//     return (
//         <nav className="mb-10 flex justify-center items-center gap-x-5 p-5">
//             <NavLink to="/">Home</NavLink>
//             <NavLink to="/products">Products</NavLink>
//              {user ? (
//                 <>
//                     <NavLink to="/admin/create-product">Create Product</NavLink>
//                     <button onClick={LogoutHandler}>Logout</button>
//                 </>
//             ) : (
//                 <>
//                     <NavLink to="/login">Login</NavLink>
//                 </>
//             )}
//         </nav>
//     );
// };

// export default Nav;
// import { useSelector } from "react-redux";
// import { NavLink, useNavigate } from "react-router-dom";

// const Nav = () => {
//     const user = useSelector((state) => state.userReducer.users);

//     return (
//         <nav className="mb-10 flex justify-center items-center gap-x-5 p-5">
//             <NavLink to="/">Home</NavLink>
//             {user ? (
//                 <>
//                     {user && user?.isAdmin && (
//                         <NavLink to="/admin/create-product">
//                             Create Product
//                         </NavLink>
//                     )}

//                     <NavLink to="/admin/user-profile">Settings</NavLink>
//                       <NavLink to="/cart">Cart</NavLink>
//                 </>
//             ) : (
//                 <>
//                     <NavLink to="/login">Login</NavLink>
//                 </>
//             )}
//         </nav>
//     );
// };

// export default Nav;
// import { useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";

// const Nav = () => {
//   const user = useSelector((state) => state.userReducer.users);

//   return (
//     <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
//       {/* Logo */}
//       <div className="flex items-center">
//         <NavLink to="/">
//           <img
//             src="https://constant.myntassets.com/pwa/assets/img/MyntraWebLogo.png"
//             alt="Myntra Logo"
//             className="h-8"
//           />
//         </NavLink>
//       </div>

//       {/* Nav Links */}
//       <div className=" md:flex items-center gap-x-6 text-gray-700 font-medium">
//         <NavLink
//           to="/"
//           className={({ isActive }) =>
//             isActive ? "text-pink-500" : "hover:text-pink-500"
//           }
//         >
//           Home
//         </NavLink>

//         {user ? (
//           <>
//             {user?.isAdmin && (
//               <NavLink
//                 to="/admin/create-product"
//                 className={({ isActive }) =>
//                   isActive ? "text-pink-500" : "hover:text-pink-500"
//                 }
//               >
//                 Create Product
//               </NavLink>
//             )}

//             <NavLink
//               to="/admin/user-profile"
//               className={({ isActive }) =>
//                 isActive ? "text-pink-500" : "hover:text-pink-500"
//               }
//             >
//               Settings
//             </NavLink>

//             <NavLink
//               to="/cart"
//               className={({ isActive }) =>
//                 isActive ? "text-pink-500" : "hover:text-pink-500"
//               }
//             >
//               Cart
//             </NavLink>
//           </>
//         ) : (
//           <NavLink
//             to="/login"
//             className={({ isActive }) =>
//               isActive ? "text-pink-500" : "hover:text-pink-500"
//             }
//           >
//             Login
//           </NavLink>
//         )}
//       </div>

//       {/* Mobile Menu (Hamburger)
//       <div className="md:hidden">
//         <button className="text-gray-700 hover:text-pink-500">
//           ☰
//         </button>
//       </div> */}
//     </nav>
//   );
// };

// export default Nav;
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const user = useSelector((state) => state.userReducer.users);
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    isActive ? "text-pink-500" : "hover:text-pink-500";

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white relative">
      {/* Logo */}
      <div className="flex items-center">
        <NavLink to="/">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/free-myntra-icon-svg-png-download-2249158.png"
            alt="Myntra Logo"
            className="h-8"
          />
        </NavLink>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center gap-x-6 text-gray-700 font-medium">
        <NavLink to="/products" className={linkClasses}>
          products
        </NavLink>

        {user ? (
          <>
            {user?.isAdmin && (
              <NavLink to="/admin/create-product" className={linkClasses}>
                Create Product
              </NavLink>
            )}

            <NavLink to="/admin/user-profile" className={linkClasses}>
              Settings
            </NavLink>

            <NavLink to="/cart" className={linkClasses}>
              Cart
            </NavLink>
          </>
        ) : (
          <NavLink to="/login" className={linkClasses}>
            Login
          </NavLink>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 hover:text-pink-500 text-2xl"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start px-6 py-4 gap-y-4 md:hidden text-gray-700 font-medium">
          <NavLink to="/" className={linkClasses} onClick={() => setIsOpen(false)}>
            Home
          </NavLink>

          {user ? (
            <>
              {user?.isAdmin && (
                <NavLink
                  to="/admin/create-product"
                  className={linkClasses}
                  onClick={() => setIsOpen(false)}
                >
                  Create Product
                </NavLink>
              )}

              <NavLink
                to="/admin/user-profile"
                className={linkClasses}
                onClick={() => setIsOpen(false)}
              >
                Settings
              </NavLink>

              <NavLink
                to="/cart"
                className={linkClasses}
                onClick={() => setIsOpen(false)}
              >
                Cart
              </NavLink>
            </>
          ) : (
            <NavLink
              to="/login"
              className={linkClasses}
              onClick={() => setIsOpen(false)}
            >
              Login
            </NavLink>
          )}
        </div>
      )}
    </nav>
  );
};

export default Nav;

