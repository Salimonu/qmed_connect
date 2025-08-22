import {
  BsHouse,
  BsGear,
  BsCurrencyDollar,
  BsQuestionCircle,
  BsTelephone,
  BsXSquare,
  BsList,
} from "react-icons/bs";
import { House, LogIn, UserPlus, AlignJustify, Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router";
import qmed_logo from "../assets/img/qmed_connect_logo-plain.png";

function NavBar({ sideBar, setSideBar }) {
  const isRegistered = true;

  return (
    <div>
      <div className="flex justify-between bg-blue-200 p-4 lg:items-center">
        <img className="h-16" src={qmed_logo} alt="QMED_Web_Logo" />

        <nav>
          <ul className="hidden lg:flex">
            <li className="group mr-4 flex items-center gap-1">
              <House className="h-5 w-5 text-blue-900 group-hover:text-blue-600" />
              <NavLink
                to="/"
                className="text-xl font-semibold text-blue-900 group-hover:text-blue-600 group-hover:underline"
              >
                Home
              </NavLink>
            </li>
            <li className="group mr-4 flex items-center gap-1">
              <BsGear className="h-5 w-5 text-blue-900 group-hover:text-blue-600" />
              <NavLink
                to="/services"
                className="text-xl font-semibold text-blue-900 group-hover:text-blue-600 group-hover:underline"
              >
                Services
              </NavLink>
            </li>
            <li className="group mr-4 flex items-center gap-1">
              <BsCurrencyDollar className="h-5 w-5 text-blue-900 group-hover:text-blue-600" />
              <NavLink
                to="/pricing"
                className="text-xl font-semibold text-blue-900 group-hover:text-blue-600 group-hover:underline"
              >
                Pricing
              </NavLink>
            </li>
            <li className="group mr-4 flex items-center gap-1">
              <BsTelephone className="h-5 w-5 text-blue-900 group-hover:text-blue-600" />
              <NavLink
                to="/cta"
                className="text-xl font-semibold text-blue-900 group-hover:text-blue-600 group-hover:underline"
              >
                Contact Us
              </NavLink>
            </li>
            <li className="group mr-4 flex items-center gap-1">
              <BsQuestionCircle className="h-5 w-5 text-blue-900 group-hover:text-blue-600" />{" "}
              <NavLink
                to="/faq"
                className="text-xl font-semibold text-blue-900 group-hover:text-blue-600 group-hover:underline"
              >
                FAQ
              </NavLink>
            </li>
            {isRegistered ? (
              <li className="group mr-4 flex items-center gap-1">
                <NavLink
                  to="/"
                  data-aos="fade-up"
                  className="pulsate inline-block rounded-md bg-blue-500 px-3 py-2 text-xl font-semibold text-white hover:bg-blue-700"
                >
                  Login
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink
                  to="/"
                  data-aos="fade-up"
                  className="pulsate inline-block rounded-md bg-blue-500 px-3 py-2 text-xl font-semibold text-white hover:bg-blue-700"
                >
                  Get Started
                </NavLink>
              </li>
            )}
          </ul>
          {sideBar ? (
            <NavLink
              to="/faq"
              className="block lg:hidden"
              onClick={() => setSideBar(false)}
            >
              <BsXSquare size={40} />
            </NavLink>
          ) : (
            <NavLink
              to="/faq"
              className="block lg:hidden"
              onClick={() => setSideBar(true)}
            >
              <BsList size={40} />
            </NavLink>
          )}
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
