import { useDispatch, useSelector } from "react-redux";
import axios from "../api/axiosconfig";
import { useEffect, useState } from "react";
import { loadlazyproduct } from "../store/reducers/productSlice";

const useInfiniteProducts = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.productReducer);
    const [hasMore, sethasMore] = useState(true);

    const fetchProducts = async () => {
        try {
            const { data } = await axios.get(
                `/products?_limit=6&_start=${products.length}`
            );
            if (data.length === 0) {
                sethasMore(false);
            } else {
                sethasMore(true);
                dispatch(loadlazyproduct(data));
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return { products, hasMore, fetchProducts };
};

export default useInfiniteProducts;