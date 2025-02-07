import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const menuItems = ["Home", "About", "Cart", "ContactUs"];
  return (
    <div className="flex justify-between items-center shadow-xl h-[95px] w-screen fixed top-0 bg-white">
      <div>
        <img
          className="w-[100px]"
          src={LOGO_URL}
          // loading="lazy"
        />
      </div>
      <div className="px-5 py-0">
        <ul className="flex text-2xl list-none">
          {menuItems.map((menu) => (
            <li className="m-2.5 p-2.5">{menu}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
