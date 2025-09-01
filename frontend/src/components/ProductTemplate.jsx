import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asyncupdateuser } from "../store/actions/userActions";
import { toast } from "react-toastify"; 

const ProductTemplate = ({ product }) => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.userReducer.users);
    const AddtoCartHandler = (product) => {
        const copyuser = { ...users, cart: [...users.cart] };
        const x = copyuser.cart.findIndex((c) => c?.product?.id == product.id);

        if (x == -1) {
            copyuser.cart.push({ product, quantity: 1 });
            toast.success(`${product.title} added to cart successfully!`);
        } else {
            copyuser.cart[x] = {
                product,
                quantity: copyuser.cart[x].quantity + 1,
            };
        }
        dispatch(asyncupdateuser(copyuser.id, copyuser));
    };
    return (
        // <div className="w-[31%] mr-3 mb-3 border shadow" key={product.id}>
        //     <img
        //         className="w-full h-[50vh] object-cover"
        //         src={product.image}
        //         alt=""
        //     />
        //     <h1>{product.title}</h1>
        //     <small>{product.description.slice(0, 100)}..</small>
        //     <div className="p-3 mt-3 flex justify-between items-center">
        //         <p>{product.price}</p>
        //         <button onClick={() => AddtoCartHandler(product)}>
        //             Add to Cart
        //         </button>
        //     </div>
        //     <Link className="block m-auto w-1/2" to={`/product/${product.id}`}>
        //         More Info
        //     </Link>
        // </div>
        <div
  key={product.id}
  className="w-[100%] sm:w-[31%] mr-3 mb-3 bg-white  rounded-md shadow hover:shadow-lg transition duration-300"
>
  {/* Product Image */}
  <div className="overflow-hidden">
    <img
      className="w-full h-[35vh] object-cover transform hover:scale-105 transition duration-300"
      src={product.image}
      alt={product.title}
    />
  </div>

  {/* Product Info */}
  <div className="p-2">
    <h1 className="text-lg font-semibold text-gray-800 truncate">
      {product.title}
    </h1>
    <p className="text-sm text-gray-600 mt-1">
      {product.description.slice(0, 40)}...
    </p>

    {/* Price & Add to Cart */}
    <div className="mt-4 flex justify-between items-center">
      <p className="text-lg font-bold text-pink-500">₹{product.price}</p>
      <button
        onClick={() => AddtoCartHandler(product)}
        className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition"
      >
        Add to Cart
      </button>
    </div>

    {/* More Info */}
    <Link
      to={`/product/${product.id}`}
      className="mt-2 block text-center text-sm font-medium text-gray-700 border border-gray-300 rounded-md py-2 hover:bg-gray-100 transition"
    >
      More Info
    </Link>
  </div>
</div>

    );
};

export default ProductTemplate;