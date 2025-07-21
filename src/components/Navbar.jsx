import qmed_logo from "../assets/img/qmed_connect_logo-plain.png";
import {
  House,
  Wrench,
  CircleDollarSign,
  PhoneCall,
  LogIn,
  UserPlus,
  AlignJustify,
  Menu,
  X,
} from "lucide-react";

function NavBar({ sideBar, setSideBar }) {
  const isRegistered = false;

  return (
    <div>
      <div className="flex justify-between bg-blue-100 p-4 pt-6 lg:items-center">
        <img className="h-16" src={qmed_logo} alt="QMED_Web_Logo" />

        <nav>
          <ul className="hidden lg:flex">
            <li className="group mr-4 flex items-center gap-1">
              <House className="h-5 w-5 text-blue-900 group-hover:text-blue-600" />
              <a
                className="text-xl font-semibold text-blue-900 group-hover:text-blue-600 group-hover:underline"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="group mr-4 flex items-center gap-1">
              <Wrench className="h-5 w-5 text-blue-900 group-hover:text-blue-600" />
              <a
                className="text-xl font-semibold text-blue-900 group-hover:text-blue-600 group-hover:underline"
                href="#"
              >
                Services
              </a>
            </li>

            <li className="group mr-4 flex items-center gap-1">
              <CircleDollarSign className="h-5 w-5 text-blue-900 group-hover:text-blue-600" />
              <a
                className="text-xl font-semibold text-blue-900 group-hover:text-blue-600 group-hover:underline"
                href="#"
              >
                Pricing
              </a>
            </li>
            <li className="group mr-4 flex items-center gap-1">
              <PhoneCall className="h-5 w-5 text-blue-900 group-hover:text-blue-600" />
              <a
                className="text-xl font-semibold text-blue-900 group-hover:text-blue-600 group-hover:underline"
                href="#"
              >
                Contact Us
              </a>
            </li>
            {isRegistered ? (
              <li className="group mr-4 flex items-center gap-1">
                <LogIn className="h-5 w-5 text-blue-900 group-hover:text-blue-600" />
                <a
                  className="text-xl font-semibold text-blue-900 group-hover:text-blue-600 group-hover:underline"
                  href="#"
                >
                  Login
                </a>
              </li>
            ) : (
              <li>
                <a
                  data-aos="fade-up"
                  className="pulsate inline-block rounded-md bg-blue-500 px-3 py-2 text-xl font-semibold text-white hover:bg-blue-700"
                  href="#"
                >
                  Get Started
                </a>
              </li>
            )}
          </ul>
          {sideBar ? (
            <a className="block lg:hidden" onClick={() => setSideBar(false)}>
              <X size={40} />
            </a>
          ) : (
            <a className="block lg:hidden" onClick={() => setSideBar(true)}>
              <AlignJustify size={40} />
            </a>
          )}
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
