import qmed_logo from "../assets/img/qmed_connect_logo-plain.png";
import { NavLink } from "react-router";

function Footer() {
  return (
    <>
      <div className="bg-blue-200 px-8 py-16 text-slate-900 lg:px-16">
        <div className="gap-20 md:grid md:grid-cols-2">
          <div>
            {" "}
            <a href="/">
              <img
                src={qmed_logo}
                alt="Brand Logo"
                className="footer-logo mb-18"
              />
            </a>
          </div>
          <div className="container mx-auto">
            <form action="" className="form">
              <p className="mb-3 text-xl font-bold text-blue-600">
                Subscribe for our newsletter
              </p>
              <label htmlFor="email">Enter your email:</label>
              <input
                type="email"
                id="email"
                className="shadow-md outline-none"
                placeholder="example@gmail.com"
              />
              <button className="shadow-md">SUBSCRIBE</button>
            </form>
          </div>

          {/* <div className="gap-20 md:grid md:grid-cols-2"> */}

          <nav>
            <ul className="flex justify-between border-t-1 py-2 text-xl">
              <li className="inline-block duration-700 hover:scale-120">
                {" "}
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <a
                  href="/#Skills"
                  className="inline-block duration-700 hover:scale-120"
                >
                  {" "}
                  Skills
                </a>
              </li>
              <li className="inline-block duration-700 hover:scale-120">
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li>
                <a
                  href="/#About"
                  className="inline-block duration-700 hover:scale-120"
                >
                  {" "}
                  About{" "}
                </a>
              </li>
            </ul>
          </nav>

          <p className="border-t-1 py-2 text-xl">
            &copy; 2025.{" "}
            <a
              href="mailto:salimonuh@gmail.com"
              target="_blank"
              className="underline duration-1000 hover:font-semibold"
            >
              Qmed Connect.
            </a>{" "}
            All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
