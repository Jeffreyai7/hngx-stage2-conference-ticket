import { Link, useLocation, useNavigate } from "react-router-dom";
import links from "../services/constants";
import Button from "./Button";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center bg-(--primaryColor) h-[68px] md:h-[76px] px-2 w-[95%] max-w-[800px] mx-auto sticky top-0 z-30">
      <div className="flex">
        <img src="/images/thumb.png" alt="logo" />
        <Link to={"/"}>
          <img className="cursor-pointer" src="/images/ticz.png" alt="ticz" />
        </Link>
      </div>
      <div className="hidden md:flex justify-between items-center gap-4 text-[#B3B3B3] jeju-text transition-all ">
        {links.map((link, index) => {
          return (
            <span
              key={index}
              className={`hover:text-white cursor-pointer ${
                location.pathname === link.path && "text-white"
              } `}
            >
              <Link to={link.path}>{link.name}</Link>
            </span>
          );
        })}
      </div>
      <button
        type="button"
        className="relative z-50 md:hidden inline-block text-gray-900 dark:text-gray-200 transition-all duration-300 ease-in-out"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 right-0 bg-(--selectColor) text-black z-30 w-full rounded-lg shadow-lg p-4">
          {links.map((link, index) => {
            return (
              <span
                key={index}
                className={`block py-2 px-4 hover:bg-gray-200 rounded-2xl cursor-pointer ${
                  location.pathname === link.path && "bg-gray-200"
                } `}
              >
                <Link to={link.path}>{link.name}</Link>
              </span>
            );
          })}
        </div>
      )}
      <Button
        onClick={() => navigate("/mytickets")}
        className="bg-white hidden text-[14px] md:flex items-center px-[1em] py-[0.75em] rounded-[10px] text-[#0A0C11] jeju-text hover:bg-(--secondaryColor)  hover:text-white cursor-pointer transition-colors "
      >
        MY TICKET <ArrowRight className=" hover:rotate-x-45" size={24} />
      </Button>
    </nav>
  );
};

export default NavBar;
