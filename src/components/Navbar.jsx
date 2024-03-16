import { IoCart } from "react-icons/io5";
import { selectCartItems } from "./../store/cart/CartSlice";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector(selectCartItems);
  return (
    <nav className="bg-gray-800 text-zinc-100 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <h1>Shopping Cart</h1>
          <input
            type="text"
            placeholder="Search a Product"
            className="w-96 h-7  rounded-sm"
          />
          <button className="flex justify-between items-center gap-1 bg-green-900 p-2 rounded-sm">
            <i>
              <IoCart className="size-5" />
            </i>
            {cartItems?.length}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
