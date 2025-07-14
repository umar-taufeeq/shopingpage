import axios from './api/axiosconfig';
import React, { useEffect } from 'react'
import Mainroutes from './routes/MainRoutes';
import Nav from './components/Nav';
import { useDispatch, useSelector } from 'react-redux';
import { asynccurrentuser } from './store/actions/userActions';
import { asyncloadproducts } from './store/actions/productActions';

const App = () => {
  const dispatch = useDispatch();
   const { users } = useSelector((state) => state.userReducer);
    // const { products } = useSelector((state) => state.productReducer);

     useEffect(() => {
        !users && dispatch(asynccurrentuser());
    }, [users]);

 
  //  useEffect(() => {
  //       dispatch(asynccurrentuser());
  //         dispatch(asyncloadproducts());
  //   }, []);

  // useEffect(() => {
  //       products.length == 0 && dispatch(asyncloadproducts());
  //   }, [products]);

  return (
    <div className="  px-[10%] text-white font-thin w-full h-auto bg-gray-800">
            <Nav />
            <Mainroutes />
        </div>
  )
}

export default App