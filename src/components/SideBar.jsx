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

function SideBar() {
  const isRegistered = false;

  return (
    <div className="fixed top-0 left-0 h-screen w-60 bg-gray-400">
      <nav>
        <ul className="">
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
      </nav>
    </div>
  );
}

export default SideBar;
