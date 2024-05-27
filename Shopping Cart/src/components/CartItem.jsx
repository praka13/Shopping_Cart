import {toast} from "react-hot-toast";
import {FcDeleteDatabase} from "react-icons/fc";
import { useDispatch } from "react-redux";
import {remove} from "../redux/Slices/cartSlice";


const CartItem = ({item}) => {

  const dispatch=useDispatch();


  const removeFromCart=()=>{
    dispatch(remove(item.id));
    toast.error("Item Removed")

  }
  return(
  



      <div className="flex mt-5 border rounded-md ">



        <div className="max-h-[150px] max-w-[150px] ">
          <img className="h-full w-full" src={item.image} ></img>
        </div>

        <div >
          <h1 className="text-gray-700 font-semibold text-lg text-left  w-50 mt-1">{item.title}</h1>
          <h1  className="w-1000 text-gray-400 font-normal text-[10px] text-left">{item.description.split(' ').slice(0,10).join(" ")+"..."}</h1>
          <div className="flex justify-between">
            <p className="text-green-600 font-semibold gap-12 items-center w-full mt-5">${item.price}</p>
            <div onClick={removeFromCart}>
              <FcDeleteDatabase className="bg-red-400 rounded-full mt-5 h-[20px] w-[20px] cursor-pointer"/>
            </div>
          </div>
        </div>



      </div>

    
  );
};

export default CartItem;
