const ShimmerUi = () => {
  return (
    <div className="restaurant-lists">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-card"></div>
        ))}
    </div>
  );
};

export default ShimmerUi;
