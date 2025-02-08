const Shimmer = ({ itemCount = 8 }) => {
  const items = Array.from({ length: itemCount });
  return (
    <div className="grid grid-cols-[repeat(auto-fit,250px)] auto-rows-autop justify-evenly gap-7 p-4 overflow-hidden">
      {items.map((_, index) => (
        <div
          key={index}
          className="h-[370px] w-[250px] shadow-2xl rounded-xl bg-[#f0f0f0]"
        />
      ))}
    </div>
  );
};

export default Shimmer;
