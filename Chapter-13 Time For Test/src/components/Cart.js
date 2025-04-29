import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./Itemlist";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <div className="m-2 p-2 text-center">
      <h1 className="font-bold text-2xl">Cart</h1>
      <div className="mx-40">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg cursor-pointer"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        <Itemlist items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
