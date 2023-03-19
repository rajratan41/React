const ShimmerUi = () => {
  return (
    <div className=" pt-12 px-7 mt-20 flex items-center justify-center flex-wrap gap-5">
      {Array(15)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className="h-[18rem] w-[15rem] rounded-lg bg-slate-300  "
          ></div>
        ))}
    </div>
  );
};

export default ShimmerUi;
