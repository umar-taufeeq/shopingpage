import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asynccreateproduct } from "../../store/actions/productActions";

const CreateProduct = () => {
    const { register, reset, handleSubmit } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const CreateProductHandler = (product) => {
        product.id = nanoid();
        console.log(product);
        dispatch(asynccreateproduct(product));
        navigate("/");
    };
    return (
        <form
            onSubmit={handleSubmit(CreateProductHandler)}
            className="flex flex-col w-1/2 justify-start items-start"
        >
            <input
                {...register("image")}
                className="mb-3 outline-0 border-b p-2 text-4xl"
                type="url"
                placeholder="image url"
            />
            <input
                {...register("title")}
                className="mb-3 outline-0 border-b p-2 text-4xl"
                type="text"
                placeholder="title"
            />
            <input
                {...register("price")}
                className="mb-3 outline-0 border-b p-2 text-4xl"
                type="number"
                placeholder="0.00"
            />
            <textarea
                {...register("description")}
                className="mb-3 outline-0 border-b p-2 text-4xl"
                placeholder="enter description here..."
            ></textarea>
            <input
                {...register("category")}
                className="mb-3 outline-0 border-b p-2 text-4xl"
                type="text"
                placeholder="category"
            />
            <button className="mt-5 px-4 py-2 bg-blue-400 rounded">
                Create Product
            </button>
        </form>
    );
};

export default CreateProduct;