import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 p-16 m-2 rounded-xl">
      <div className="container mx-auto flex flex-wrap justify-between my]">
        {/* About Us Column */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-auto mb-8 max-w-72 ">
          <h3 className="text-gray-100 font-semibold text-lg mb-4 uppercase">About Us</h3>
          <p className="text-gray-400 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia odit sed maxime. Perferendis, ipsa?</p>
          {/* Social Links */}
          <div className="flex space-x-4 mt-3">
            <a href="/home" className="text-gray-400 hover:text-orange-500 ">
              Facebook
            </a>
            <a href="/home" className="text-gray-400 hover:text-orange-500">
              Twitter
            </a>
            <a href="/home" className="text-gray-400 hover:text-orange-500">
              Instagram
            </a>
          </div>
        </div>

        {/* Information Column */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-auto mb-8">
          <h3 className="text-gray-100 font-semibold text-lg mb-4 uppercase">Information</h3>
          <ul className="text-gray-400 flex-row space-y-2">
            <li><Link className='text-gray-400 hover:text-orange-500 hover:ml-1 transition-all duration-200'  to="/home">Home</Link></li>
            <li><Link className='text-gray-400 hover:text-orange-500 hover:ml-1 transition-all duration-200'  to="/inventory">Inventory</Link></li>
            <li><Link className='text-gray-400 hover:text-orange-500 hover:ml-1 transition-all duration-200'  to="/about">About Us</Link></li>
            <li><Link className='text-gray-400 hover:text-orange-500 hover:ml-1 transition-all duration-200'  to="/contact">Contact Us</Link></li>
            {/* Add more page links as needed */}
          </ul>
        </div>

        {/* My Account Column */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-auto mb-8">
          <h3 className="text-gray-100 font-semibold text-lg mb-4 uppercase">My Account</h3>
          <ul className="text-gray-400 flex-row space-y-2">
            <li><a className='text-gray-400 hover:text-orange-500 hover:ml-1 transition-all duration-200'  href="/home">My Account</a></li>
            <li><a className='text-gray-400 hover:text-orange-500 hover:ml-1 transition-all duration-200' href="/home">Wishlist</a></li>
            <li><a className='text-gray-400 hover:text-orange-500 hover:ml-1 transition-all duration-200' href="/login">Login</a></li>
            <li><a className='text-gray-400 hover:text-orange-500 hover:ml-1 transition-all duration-200' href="/home">My Cart</a></li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-auto mb-8">
          <h3 className="text-gray-100 font-semibold text-lg mb-4 uppercase">Newsletter</h3>
          <form className="items-center flex-row space-y-3">
            <input type="email" placeholder="Your email" className="bg-white py-2 px-4 rounded-l-md  focus:bg-white focus:text-gray-900 focus:outline-none " />
            <button type="submit" className="bg-orange-500 hover:bg-gray-900 hover:text-orange-500 text-white py-2 px-4 rounded-r-md transition-all duration-150">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
