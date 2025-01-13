import React, { Component } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import logo from "../../images/sofa.png"

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      scrolling: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 0) {
      this.setState({ scrolling: true });
    } else {
      this.setState({ scrolling: false });
    }
  };

  toggleMenu = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    const { isOpen, scrolling } = this.state;

    return (
      <nav
        className={`bg-gray-900 m-2 rounded-xl shadow-sm  transition-colors  ${
          scrolling ? "bg-opacity-10" : ""
        }  fixed top-0 left-0 right-0 z-20`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex gap-3 items-center">
              <img className="w-10 mb-2" src={logo} alt="" />
              <h1 className={`text-gray-100 font-bold text-2xl  ${
          scrolling ? "text-orange-500" : ""
        } `}>SOFA</h1>
            </div>
            <div className="flex justify-center flex-1 lg:justify-center">
              <div className="hidden lg:block sm:ml-6">
                <div className="flex space-x-4">
                <Link
                  to="/"
                  className="text-white hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/inventory"
                  className="text-white hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Inventory
                </Link>
                <Link
                  to="about"
                  className="text-white hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </Link>
                <Link
                  to="contact"
                  className="text-white hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </Link>
                <Link
                  to="signin"
                  className="text-white hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
                >
                  SignIn
                </Link>
                <Link
                  to="signup"
                  className="text-white hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
                >
                  signUp
                </Link>
                </div>
              </div>
            </div>
            <div className="flex lg:hidden">
              <button
                onClick={this.toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-grey-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="lg:hidden" ref={ref}>
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="/"
                  className="text-white hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/inventory"
                  className="text-white hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Inventory
                </Link>
                <Link
                  to="/about"
                  className="text-white hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="text-white hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    );
  }
}

export default Navbar;
