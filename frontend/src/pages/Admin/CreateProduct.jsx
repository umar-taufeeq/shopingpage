// import { nanoid } from "nanoid";
// import { useForm } from "react-hook-form";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { asynccreateproduct } from "../../store/actions/productActions";

// const CreateProduct = () => {
//     const { register, reset, handleSubmit } = useForm();
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const CreateProductHandler = (product) => {
//         product.id = nanoid();
//         console.log(product);
//         dispatch(asynccreateproduct(product));
//         navigate("/");
//     };
//     return (
//         <form
//             onSubmit={handleSubmit(CreateProductHandler)}
//             className="flex flex-col w-1/2 justify-start items-start"
//         >
//             <input
//                 {...register("image")}
//                 className="mb-3 outline-0 border-b p-2 text-4xl"
//                 type="url"
//                 placeholder="image url"
//             />
//             <input
//                 {...register("title")}
//                 className="mb-3 outline-0 border-b p-2 text-4xl"
//                 type="text"
//                 placeholder="title"
//             />
//             <input
//                 {...register("price")}
//                 className="mb-3 outline-0 border-b p-2 text-4xl"
//                 type="number"
//                 placeholder="0.00"
//             />
//             <textarea
//                 {...register("description")}
//                 className="mb-3 outline-0 border-b p-2 text-4xl"
//                 placeholder="enter description here..."
//             ></textarea>
//             <input
//                 {...register("category")}
//                 className="mb-3 outline-0 border-b p-2 text-4xl"
//                 type="text"
//                 placeholder="category"
//             />
//             <button className="mt-5 px-4 py-2 bg-blue-400 rounded">
//                 Create Product
//             </button>
//         </form>
//     );
// };

// export default CreateProduct;
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { asynccreateproduct } from "../../store/actions/productActions";

const CreateProduct = () => {
  const { register, reset, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const CreateProductHandler = (product) => {
    product.id = nanoid();
    console.log(product);

    dispatch(asynccreateproduct(product));
    toast.success("✅ Product created successfully!", {
      position: "top-center",
      autoClose: 2000,
    });

    reset(); // clear form after submit
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit(CreateProductHandler)}
        className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-md flex flex-col"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Create New Product
        </h1>

        <input
          {...register("image")}
          className="mb-4 border border-gray-300 rounded-lg p-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="url"
          placeholder="Image URL"
        />
        <input
          {...register("title")}
          className="mb-4 border border-gray-300 rounded-lg p-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Product Title"
        />
        <input
          {...register("price")}
          className="mb-4 border border-gray-300 rounded-lg p-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="number"
          step="0.01"
          placeholder="0.00"
        />
        <textarea
          {...register("description")}
          className="mb-4 border border-gray-300 rounded-lg p-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter product description..."
          rows={4}
        ></textarea>
        <input
          {...register("category")}
          className="mb-4 border border-gray-300 rounded-lg p-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Category"
        />

        <button
          type="submit"
          className="mt-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all"
        >
          Create Product
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
