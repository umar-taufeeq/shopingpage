// import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";
// import {
//     asyncdeleteproduct,
//     asyncupdateproduct,
// } from "../../store/actions/productActions";

// const ProductDetails = () => {
//     const { id } = useParams();
//     const {
//         productReducer: { products },
//         userReducer: { users },
//     } = useSelector((state) => state);
//     const product = products?.find((product) => product.id == id);

//     const { register, reset, handleSubmit } = useForm({
//         defaultValues: {
//             image: product?.image,
//             title: product?.title,
//             price: product?.price,
//             category: product?.category,
//             description: product?.description,
//         },
//     });
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const UpdateProductHandler = (product) => {
//         dispatch(asyncupdateproduct(id, product));
//     };

//     const DeleteHandler = () => {
//         dispatch(asyncdeleteproduct(id));
//         navigate("/products");
//     };

//     return product ? (
//         <>
//             <div className="w-full flex">
//                 <img
//                     className="w-1/2 h-1/2 object-cover"
//                     src={product.image}
//                     alt=""
//                 />
//                 <div className="px-3 w-1/2 h-1/2">
//                     <h1 className="font-thin text-5xl">{product.title}</h1>
//                     <h2 className="mb-5 text-2xl text-green-400">
//                         ${product.price}
//                     </h2>
//                     <p className="mb-5 ">{product.description}</p>
//                     <button>Add to cart</button>
//                 </div>
//             </div>
//             <hr />
//             {users && users?.isAdmin && (
//                 <form
//                     onSubmit={handleSubmit(UpdateProductHandler)}
//                     className="w-full flex flex-col justify-start items-start"
//                 >
//                     <input
//                         {...register("image")}
//                         className="mb-3 outline-0 border-b p-2 text-4xl"
//                         type="url"
//                         placeholder="image url"
//                     />
//                     <input
//                         {...register("title")}
//                         className="mb-3 outline-0 border-b p-2 text-4xl"
//                         type="text"
//                         placeholder="title"
//                     />
//                     <input
//                         {...register("price")}
//                         className="mb-3 outline-0 border-b p-2 text-4xl"
//                         type="number"
//                         placeholder="0.00"
//                     />
//                     <textarea
//                         {...register("description")}
//                         className="mb-3 outline-0 border-b p-2 text-4xl"
//                         placeholder="enter description here..."
//                     ></textarea>
//                     <input
//                         {...register("category")}
//                         className="mb-3 outline-0 border-b p-2 text-4xl"
//                         type="text"
//                         placeholder="category"
//                     />
//                     <button className="mt-5 px-4 py-2 bg-blue-400 rounded">
//                         Update Product
//                     </button>
//                     <button
//                         type="button"
//                         onClick={DeleteHandler}
//                         className="mt-5 px-4 py-2 bg-red-400 rounded"
//                     >
//                         Delete Product
//                     </button>
//                 </form>
//             )}
//         </>
//     ) : (
//         "Loading..."
//     );
// };

// export default ProductDetails
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  asyncdeleteproduct,
  asyncupdateproduct,
} from "../../store/actions/productActions";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams();
  const {
    productReducer: { products },
    userReducer: { users },
  } = useSelector((state) => state);
  const product = products?.find((product) => product.id == id);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      image: product?.image,
      title: product?.title,
      price: product?.price,
      category: product?.category,
      description: product?.description,
    },
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const UpdateProductHandler = (product) => {
    dispatch(asyncupdateproduct(id, product))
    .then(() => {
      toast.success("Product updated successfully!");
    })
    .catch(() => {
      toast.error(" Failed to update product!");
    });
  };

  const DeleteHandler = () => {
    dispatch(asyncdeleteproduct(id));
    navigate("/products");
  };

  return product ? (
    <div className="max-w-7xl mx-auto p-6">
      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Product Image */}
        <div className="flex items-center justify-center bg-gray-100 rounded-lg p-4">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-[70vh] w-auto object-contain"
          />
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col justify-start">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
            {product.title}
          </h1>
          <p className="text-lg text-gray-500 mt-2">{product.category}</p>

          <h2 className="text-2xl md:text-3xl font-bold text-pink-600 mt-4">
            ₹{product.price}
          </h2>

          <p className="text-gray-700 mt-4 leading-relaxed">
            {product.description}
          </p>

          {/* Add to Cart & Buy Now */}
          <div className="flex gap-4 mt-6">
            <button className="flex-1 bg-pink-500 text-white py-3 rounded-lg font-medium hover:bg-pink-600 transition">
              Add to Cart
            </button>
            <button className="flex-1 border-2 border-pink-500 text-pink-600 py-3 rounded-lg font-medium hover:bg-pink-50 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Admin Controls */}
      {/* {users && users?.isAdmin && (
        <div className="mt-12 border-t pt-6">
          <h2 className="text-xl font-semibold mb-4">Admin Panel</h2>
          <form
            onSubmit={handleSubmit(UpdateProductHandler)}
            className="space-y-4"
          >
            <input
              {...register("image")}
              className="w-full border rounded p-3"
              type="url"
              placeholder="Image URL"
            />
            <input
              {...register("title")}
              className="w-full border rounded p-3"
              type="text"
              placeholder="Title"
            />
            <input
              {...register("price")}
              className="w-full border rounded p-3"
              type="number"
              placeholder="0.00"
            />
            <textarea
              {...register("description")}
              className="w-full border rounded p-3"
              placeholder="Enter description..."
            ></textarea>
            <input
              {...register("category")}
              className="w-full border rounded p-3"
              type="text"
              placeholder="Category"
            />
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Update Product
              </button>
              <button
                type="button"
                onClick={DeleteHandler}
                className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Delete Product
              </button>
            </div>
          </form>
        </div>
      )} */}
      {users && users?.isAdmin && (
  <div className="flex justify-center items-center mt-12">
    <div className="w-full max-w-2xl  rounded-xl shadow-lg p-8 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        ⚙️ Admin Panel
      </h2>
      <form
        onSubmit={handleSubmit(UpdateProductHandler)}
        className="space-y-5"
      >
        {/* Image URL */}
        <input
          {...register("image")}
          className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          type="url"
          placeholder="Image URL"
        />

        {/* Title */}
        <input
          {...register("title")}
          className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          type="text"
          placeholder="Title"
        />

        {/* Price */}
        <input
          {...register("price")}
          step="0.01"
          className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          type="number"
          placeholder="0.00"
        />

        {/* Description */}
        <textarea
          {...register("description")}
          rows="4"
          className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          placeholder="Enter description..."
        ></textarea>

        {/* Category */}
        <input
          {...register("category")}
          className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          type="text"
          placeholder="Category"
        />

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            type="submit"
            className="flex-1 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Update Product
          </button>

          <button
            type="button"
            onClick={() => {
              DeleteHandler();
              toast.error("🗑️ Product deleted successfully!");
            }}
            className="flex-1 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Delete Product
          </button>
        </div>
      </form>
    </div>
  </div>
)}

    </div>
  ) : (
    <p className="text-center py-10">Loading...</p>
  );
};

export default ProductDetails;
