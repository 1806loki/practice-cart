/* eslint-disable react/prop-types */

const Rating = ({ onClick, rating }) => {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div>
      {stars.map((star, index) => {
        return (
          <span
            key={star}
            onClick={() => onClick(index)}
            className={`cursor-pointer p-1 ${
              index <= rating ? "text-blue-600" : "none"
            }`}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
