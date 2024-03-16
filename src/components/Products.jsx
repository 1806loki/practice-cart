import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart/CartSlice";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
         setProducts(data.products);
      } catch (error) {
        console.log(error);
        setError("Error fetching products. Please try again later.");
      }
    };
    getProducts();
  }, []);

  const handleProducts = (product) => {
    dispatch(addToCart(product));
    console.log("Product added")
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-wrap p-4 justify-between items-center">
      {products.map((product, index) => (
        <div key={index} className="w-1/4 p-4">
          <div className="border rounded-lg overflow-hidden">
            <img
              src={product.thumbnail}
              alt=""
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h1 className="text-xl font-semibold">{product.title}</h1>
              <p className="text-gray-600">
                {product.description.substring(0, 20) + "..."}
              </p>
              <p className="text-lg font-bold">${product.price}</p>
              <p className="text-sm text-gray-500">In Stock: {product.stock}</p>
              <button
                className="bg-green-700 px-4 py-1 mt-1 "
                onClick={() => handleProducts(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
