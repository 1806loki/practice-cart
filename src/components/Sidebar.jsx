import { useState } from "react";
import Rating from "./Rating";

const Sidebar = () => {
  const [ascending, setAscending] = useState(false);
  const [descending, setDescending] = useState(false);
  const [includeOutOfStock, setIncludeOutOfStock] = useState(false);
  const [fastDeliveryOnly, setFastDeliveryOnly] = useState(false);
  const [rating, setRating] = useState(0);

  const handleAscendingChange = () => {
    setAscending(!ascending);
  };

  const handleDescendingChange = () => {
    setDescending(!descending);
  };

  const handleIncludeOutOfStockChange = () => {
    setIncludeOutOfStock(!includeOutOfStock);
  };

  const handleFastDeliveryOnlyChange = () => {
    setFastDeliveryOnly(!fastDeliveryOnly);
  };

  const handleClearFilters = () => {
    setAscending(false);
    setDescending(false);
    setIncludeOutOfStock(false);
    setFastDeliveryOnly(false);
  };

  const handleRating = (rating) => {
    setRating(rating);
    console.log(rating)
  };

  return (
    <div className="w-[200px] bg-green-900 p-4 h-screen text-white">
      <h2 className="text-white text-lg font-semibold mb-4">Filter Products</h2>
      <div className="">
        <div className="block">
          <input
            type="radio"
            id="ascending"
            name="order"
            checked={ascending}
            onChange={handleAscendingChange}
          />
          <label htmlFor="ascending" className="ml-2 text-white">
            Ascending
          </label>
        </div>
        <div className="block">
          <input
            type="radio"
            id="descending"
            name="order"
            checked={descending}
            onChange={handleDescendingChange}
            className=" "
          />
          <label htmlFor="descending" className="ml-2 text-white">
            Descending
          </label>
        </div>
      </div>
      <div className="mb-4">
        <input
          type="checkbox"
          id="includeOutOfStock"
          checked={includeOutOfStock}
          onChange={handleIncludeOutOfStockChange}
        />
        <label htmlFor="includeOutOfStock" className="ml-2 text-white">
          Include out of Stock
        </label>
      </div>
      <div className="mb-4">
        <input
          type="checkbox"
          id="fastDeliveryOnly"
          checked={fastDeliveryOnly}
          onChange={handleFastDeliveryOnlyChange}
        />
        <label htmlFor="fastDeliveryOnly" className="ml-2 text-white">
          Fast Delivery Only
        </label>
      </div>
      <div className="mb-4  flex gap-2">
        <p className="inline">Rating</p>
        <Rating onClick={handleRating} rating={rating} />
      </div>
      <button
        className="bg-white text-green-900 px-3 py-1 rounded"
        onClick={handleClearFilters}
      >
        Clear Filters
      </button>
    </div>
  );
};

export default Sidebar;
