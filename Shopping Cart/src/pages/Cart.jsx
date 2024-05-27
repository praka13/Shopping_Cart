import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";



const Cart = () => {

  const {cart}=useSelector((state)=>state);
  //console.log(cart);
  const [totalAmount,setTotalAmount]=useState(0);
  function setPrice(){
    let price=0;
    for(let i=0;i<cart.length;i++){
        price+=cart[i].price
    }
    setTotalAmount(price);
  }

  useEffect(()=>{
   setPrice();
  },[cart]);
  return(
    <div className="gap-10">
      {
        cart.length>0?(
          <div className="flex">
        <div className="h-[100vh] w-[65vw]">
          {
            cart.map((item,index)=>
              <CartItem item={item} key={index}/>
            )
          }

        </div>
        <div className="h-[100vh] w-[35vw] mt-10 grid">
          <div className="flex flex-col">
            <div className="text-green-600 uppercase">Your Cart</div>
            <div className="uppercase text-5xl text-green-500 ">Summary</div>
            <p className="mt-5">
              <span>Total Items: {cart.length}</span>
            </p>
          </div>

          <div className="gap-y-123">
            <p>Total Amount:<span className="font-bold">${(totalAmount).toFixed(2)}</span></p>
            <button className="bg-green-500 text-center w-full h-[40px] rounded-lg font-bold">
                CheckOut Now
            </button>
          </div>
          
        </div>
        </div>):(
        <div className="h-screen w-screen flex flex-col items-center justify-center">
          <h2>Cart Empty</h2>
          <Link to="/">
            <button>
              Shop Now
            </button>
          </Link>
        </div>)
      }

    </div>
  );
};

export default Cart;
