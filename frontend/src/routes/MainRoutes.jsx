import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Home from "../pages/Home";
const UserProfile = lazy(() => import("../pages/user/UserProfile"));
const Products = lazy(() => import("../pages/Products"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const CreateProduct = lazy(() => import("../pages/Admin/CreateProduct"));
const ProductDetails = lazy(() => import("../pages/Admin/ProductDetails"));
const AuthWrapper = lazy(() => import("./AuthWrapper"));
const Cart = lazy(() => import("../pages/Cart"));
const UnauthWrapper=lazy(()=> import("./UnauthWrapper"))
// import UnauthWrapper from "../routes/UnauthWrapper"
// import Home from "../pages/Home";
// import Products from "../pages/Products";
// import Login from "../pages/Login";
// import Register from "../pages/Register";
// import CreateProduct from "../pages/Admin/CreateProduct";
// import ProductDetails from "../pages/Admin/ProductDetails";
// import AuthWrapper from "./AuthWrapper";
// import UserProfile from "../pages/user/UserProfile"
// import Cart from "../pages/Cart";


const Mainroutes = () => {
    return (
        // <Routes>
        //     <Route path="/" element={<Home />} />
        //     <Route path="/products" element={<Products />} />
        //     <Route path="/login" element={<Login />} />
        //     <Route path="/register" element={<Register />} />
        //       <Route path="/admin/create-product" element={<CreateProduct />} />
        //     <Route path="/product/:id" element={<ProductDetails />} />
        // </Routes>
         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<Products />} />

            <Route path="/login" element={ <UnauthWrapper>
                        <Login />
                    </UnauthWrapper>} />
            <Route path="/register" element={ <UnauthWrapper>
                        <Register />
                    </UnauthWrapper>} />

            <Route
                path="/admin/create-product"
                element={
                    <AuthWrapper>
                        <CreateProduct />
                    </AuthWrapper>
                }
            />
            <Route
                path="/admin/user-profile"
                element={
                    <AuthWrapper>
                        <UserProfile />
                    </AuthWrapper>
                }
            />
            <Route
                path="/product/:id"
                element={
                    <AuthWrapper>
                        <ProductDetails />
                    </AuthWrapper>
                }
            />
             <Route
                path="/cart"
                element={
                    <AuthWrapper>
                        <Cart />
                    </AuthWrapper>
                }
            />

            {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
    );
};

export default Mainroutes;