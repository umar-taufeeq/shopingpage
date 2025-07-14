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
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

const Nav = () => {
    const user = useSelector((state) => state.userReducer.users);

    return (
        <nav className="mb-10 flex justify-center items-center gap-x-5 p-5">
            <NavLink to="/">Home</NavLink>
            {user ? (
                <>
                    {user && user?.isAdmin && (
                        <NavLink to="/admin/create-product">
                            Create Product
                        </NavLink>
                    )}

                    <NavLink to="/admin/user-profile">Settings</NavLink>
                      <NavLink to="/cart">Cart</NavLink>
                </>
            ) : (
                <>
                    <NavLink to="/login">Login</NavLink>
                </>
            )}
        </nav>
    );
};

export default Nav;