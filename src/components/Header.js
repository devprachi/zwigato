import { Link } from "react-router-dom";
import { HEADER_ROUTES, LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="flex justify-between items-center shadow-xl h-[95px] w-screen fixed top-0 bg-white">
      <div>
        <img className="w-[100px]" src={LOGO_URL} loading="lazy" />
      </div>
      <div className="px-5 py-0">
        <ul className="flex text-2xl list-none">
          {Object.entries(HEADER_ROUTES).map(([menu, path]) => (
            <li key={menu} className="m-2.5 p-2.5">
              <Link to={path}>{menu}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
