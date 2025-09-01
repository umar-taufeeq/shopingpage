// import { useDispatch, useSelector } from "react-redux";
// import { asyncupdateuser } from "../store/actions/userActions";

// const Cart = () => {
//     const dispatch = useDispatch();
//     const users = useSelector((state) => state.userReducer.users);
//     // const products = useSelector((state) => state.productReducer.products);

//     const IncreaseQuantityHandler = (index, product) => {
//         const copyuser = { ...users, cart: [...users.cart] }; //deep copy

//         copyuser.cart[index] = {
//             ...copyuser.cart[index],
//             quantity: copyuser.cart[index].quantity + 1,
//         };
//         dispatch(asyncupdateuser(copyuser.id, copyuser));
//     };

//     // const DecreaseQuantityHandler = (index, product) => {
//     //     const copyuser = { ...users, cart: [...users.cart] };

//     //     if (users.cart[index].quantity > 0) {
//     //         copyuser.cart[index] = {
//     //             ...copyuser.cart[index],
//     //             quantity: copyuser.cart[index].quantity - 1,
//     //         };
//     //     } else {
//     //         copyuser.cart.splice(index, 1);
//     //     }
//     //     dispatch(asyncupdateuser(copyuser.id, copyuser));
//     // };
//     const DecreaseQuantityHandler = (index, product) => {
//     const copyuser = { ...users, cart: [...users.cart] };

//     // Decrease quantity
//     copyuser.cart[index] = {
//         ...copyuser.cart[index],
//         quantity: copyuser.cart[index].quantity - 1,
//     };

//     // Remove if quantity is 0
//     if (copyuser.cart[index].quantity === 0) {
//         copyuser.cart.splice(index, 1);
//     }

//     dispatch(asyncupdateuser(copyuser.id, copyuser));
// };


//     const cartItems = users.cart.map((c, index) => {
//         return (
//             <li
//                 className="flex items-center justify-between mb-10 bg-gray-700 p-2 rounded"
//                 key={c.product.id}
//             >
//                 <img
//                     className="mr-10 w-[7vmax] h-[7vmax] object-cover"
//                     src={c.product.image}
//                     alt=""
//                 />
//                 <span>{c.product.title}</span>
//                 <span>{c.product.price}</span>
//                 <p>
//                     <button
//                         onClick={() => DecreaseQuantityHandler(index, c)}
//                         className="text-xl"
//                     >
//                         -
//                     </button>
//                     <span className="mx-3 p-1 rounded bg-gray-700">
//                         {" "}
//                         {c.quantity}{" "}
//                     </span>
//                     <button
//                         onClick={() => IncreaseQuantityHandler(index, c)}
//                         className="text-lg"
//                     >
//                         +
//                     </button>
//                 </p>
//             </li>
//         );
//     });

//     return <ul>{cartItems}</ul>;
// };

// export default Cart;
import { useDispatch, useSelector } from "react-redux";
import { asyncupdateuser } from "../store/actions/userActions";
import { toast } from "react-toastify";

const Cart = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);

  const IncreaseQuantityHandler = (index, product) => {
    const copyuser = { ...users, cart: [...users.cart] };
    copyuser.cart[index] = {
      ...copyuser.cart[index],
      quantity: copyuser.cart[index].quantity + 1,
    };
    dispatch(asyncupdateuser(copyuser.id, copyuser));
  };

  const DecreaseQuantityHandler = (index, product) => {
    const copyuser = { ...users, cart: [...users.cart] };

    copyuser.cart[index] = {
      ...copyuser.cart[index],
      quantity: copyuser.cart[index].quantity - 1,
    };

    if (copyuser.cart[index].quantity === 0) {
      copyuser.cart.splice(index, 1);
    }

    dispatch(asyncupdateuser(copyuser.id, copyuser));
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Your Cart</h1>

      {users.cart.length === 0 ? (
        <p className="text-center text-gray-600">🛒 Your cart is empty</p>
      ) : (
        <ul className="space-y-4">
          {users.cart.map((c, index) => (
            <li
              key={c.product.id}
              className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              {/* Product Image */}
              <div className="flex items-center gap-4 flex-1">
                <img
                  className="w-20 h-20 object-cover rounded-md shadow"
                  src={c.product.image}
                  alt={c.product.title}
                />
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
                    {c.product.title}
                  </h2>
                  <p className="text-pink-600 font-bold">₹{c.product.price}</p>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() =>{
                   DecreaseQuantityHandler(index, c)
                    toast.error(`${c.product.title} removed from cart successfully!`);
                }}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 text-gray-800 text-xl font-bold"
                >
                  -
                </button>
                <span className="text-lg font-semibold">{c.quantity}</span>
                <button
                  onClick={() => {
                    IncreaseQuantityHandler(index, c)
                    toast.success(`${c.product.title} added to cart successfully!`);
                }}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-pink-500 hover:bg-pink-600 text-white text-xl font-bold"
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Total Section */}
      {users.cart.length > 0 && (
        <div className="mt-6 p-4 bg-gray-100 rounded-xl flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Total</h2>
          <p className="text-2xl font-bold text-pink-600">
            ₹
            {users.cart.reduce(
              (total, item) => total + item.product.price * item.quantity,
              0
            ) .toFixed(2)} 
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
