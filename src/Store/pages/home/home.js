import React from "react";
import img1 from "./../../../images/slider2.jpg";
import MainComponent from "./homecomponent/tabbar";
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import product1 from "./../../../images/product-1.png"
import product2 from "./../../../images/product-2.png"
import product3 from "./../../../images/product-3.png"
import post2 from "./../../../images/post-2.jpg"
import Carticon from "../../component/carticon";
export default function Home() {
  return (
    <>
      <m.div className="container mx-auto py-8">
        <div className=" overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-2/3 lg:order-last flex justify-center items-center mt-7 lg:mt-24 lg:mb-20">
            <m.img
              initial={{ opacity: 0, marginLeft: "600px" }}
              animate={{ opacity: 1, marginLeft: "0" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              src={img1}
              alt=""
              className=" w-80 md:w-2/3 h-auto "
            />
          </div>
          <div className="lg:w-1/2 lg:order-first p-4 flex flex-col justify-center lg:mt-2 lg:mb-20 lg:text-start sm:text-center items-center lg:items-start">
            <m.h1 
              initial={{ opacity: 0, marginBottom: "200px" }}
              animate={{ opacity: 1, marginBottom: "0" }}
              transition={{ duration: 1, ease: "easeInOut" }}
            className="text-2xl text-gray-800 lg:ml-28 mb-1">
              Best Seller
            </m.h1>
            <m.h1
              initial={{ opacity: 0, marginBottom: "50px" }}
              animate={{ opacity: 1, marginBottom: "0" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-4xl font-bold text-gray-800 lg:ml-28 mb-2 lg:text-6xl">
              Creative Sofa.
            </m.h1>
            <m.p
                initial={{ opacity: 0, marginBottom: "50px" }}
                animate={{ opacity: 1, marginBottom: "0" }}
              transition={{ duration: 1, ease: "easeInOut" }}
            className="text-gray-700 mb-4 w-full lg:ml-28">
              Details text area goes here. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Assumenda nesciunt ipsa magni
              maiores.
            </m.p>
            <Link
              initial={{ opacity: 0, marginTop: "100px" }}
              animate={{ opacity: 1, marginTop: "0" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              to="/login"
            className="px-4 py-2 lg:h-12 lg:text-lg font-bold text-base text-white hover:text-orange-500 lg:ml-28 bg-orange-500 hover:bg-gray-800 text-center hover:text-orange lg:w-28 w-28">
              Login
            </Link>
          </div>
        </div>
      </m.div>
      <div className="lg:py-28 lg:px-32 md:px-28  ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {/* Column 1 */}
          <div className="w-full lg:w-1/4 mb-10 lg:mb-0">
            <h2 className="md:text-2xl text-4xl font-bold mb-6">Crafted with excellent material.</h2>
            <p className="mb-6 text-gray-700">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <p>
              <a href="shop.html" className="btn bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700">
                Explore
              </a>
            </p>
          </div>

          {/* Column 2 */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-10 md:mb-0">
            <a
              href="cart.html"
              className="block text-center relative group"
            >
              <img
                src={product1}
                alt="Nordic Chair"
                className="mb-8 mx-auto transform transition-transform duration-300 group-hover:-translate-y-6"
              />
              <h3 className="text-lg font-semibold">Nordic Chair</h3>
            
            </a>
          </div>

          {/* Column 3 */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-10 md:mb-0">
            <a
              href="cart.html"
              className="block text-center relative group"
            >
              <img
                src={product2}
                alt="Kruzo Aero Chair"
                className="mb-8 mx-auto transform transition-transform duration-300 group-hover:-translate-y-6"
              />
              <h3 className="text-lg font-semibold">Kruzo Aero Chair</h3>
      
            </a>
          </div>

          {/* Column 4 */}
          <div className="w-full md:w-1/2 lg:w-1/4">
            <a
              href="cart.html"
              className="block text-center relative group"
            >
              <img
                src={product3}
                alt="Ergonomic Chair"
                className="mb-8 mx-auto transform transition-transform duration-300 group-hover:-translate-y-6"
              />
              <h3 className="text-lg font-semibold">Ergonomic Chair</h3>

             
            </a>
          </div>
        </div>
      </div>
    </div>
    <MainComponent />

   {/* why chice us */}
   <section className="py-28 md:px-32 lg:px-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Text Section */}
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0">
            <h2 className="text-4xl font-semibold mb-6">Why Choose Us</h2>
            <p className="text-gray-600 mb-10">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {/* Feature 1 */}
              <div className="feature">
              <div className="icon rounded-full bg-gray-100 w-14 h-14   p-3 mb-5 relative">
              <i
                  width="24"
                  height="24"
                    className="fa fa-ship w-24 pl-1"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Fast & Free Shipping
                </h3>
                <p className="text-sm text-gray-600">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="feature">
              <div className="icon rounded-full bg-gray-100 w-14 h-14   p-3 mb-5 relative">
              <i
                  width="24"
                  height="24"
                    className="fa fa-shop w-24 pl-1"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Easy to Shop
                </h3>
                <p className="text-sm text-gray-600">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="feature">
                <div className="icon rounded-full bg-gray-100 w-14 h-14   p-3 mb-5 relative">
                <i
                  width="24"
                  height="24"
                    className="fa fa-clock pl-1"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  24/7 Support
                </h3>
                <p className="text-sm text-gray-600">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="feature">
              <div className="icon rounded-full bg-gray-100 w-14 h-14   p-3 mb-5 relative">
              <i
                  width="24"
                  height="24"
                    className="fa fa-recycle w-24 pl-1"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Hassle Free Returns
                </h3>
                <p className="text-sm text-gray-600">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/3 w-full relative">
            <div className="relative">
              <img
                src={post2}
                alt="Why Choose Us"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/*  */}
   <Carticon/>
 
    </>
  );
}
