import { lazy, Suspense, } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import useInfiniteProducts from "../utils/useInfiniteProducts";
const ProductTemplate = lazy(() => import("../components/ProductTemplate"));

const Products = () => {

  const { products, hasMore, fetchProducts } = useInfiniteProducts();
  

  //add to cart  and product design is moved to product template

  //fetch product and its use ffect fn is merge into a custom hook

    return (
        

         <InfiniteScroll
            dataLength={products.length}
            next={fetchProducts}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}    
            endMessage={
                <p style={{ textAlign: "center" }}>
                    <b>Yay! You have seen it all</b>
                </p>
            }
        >
            <div className="flex flex-col sm:flex-row sm:flex-wrap">
                {products.map((product) => (
                    <Suspense    //used for lazy loading  it requires it componnebnt should also be lazy
                        key={product.id}
                        fallback={
                            <h1 className="text-center text-5xl text-yellow-500">
                                LOADING...
                            </h1>
                        }
                    >
                        <ProductTemplate product={product} />
                    </Suspense>
                ))}
            </div>
        </InfiniteScroll>
    ) 
};

export default Products;