import React, { useState } from 'react';
import { motion as m } from "framer-motion";
import img5 from "./../../../images/5.jpg";
import img6 from "./../../../images/6.jpg";
import img7 from "./../../../images/7.jpg";
import img8 from "./../../../images/8.jpg";
import img9 from "./../../../images/9.jpg";
import img10 from "./../../../images/10.jpg";
import { motion } from "framer-motion";
import ReactPlayer from 'react-player';
// import video1 from "./clips/video1.mp4"
import video2 from "./clips/video2.mp4"


const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const cards = [
    { id: 1, name: 'Product 1', price: 20000, image: img5, category: 'Home' },
    { id: 2, name: 'Product 2', price: 39999, image: img6, category: 'Lounch' },
    { id: 3, name: 'Product 3', price: 25999, image: img7, category: 'Home' },
    { id: 4, name: 'Product 4', price: 35999, image: img8, category: 'Living Room' },
    { id: 5, name: 'Product 5', price: 2299, image: img9, category: 'Basement' },
    { id: 6, name: 'Product 6', price: 32889, image: img10, category: 'Living Room' },
    { id: 7, name: 'Product 1', price: 207890, image: img5, category: 'Home' },
    { id: 8, name: 'Product 2', price: 30898, image: img6, category: 'Lounch' },
    { id: 9, name: 'Product 3', price: 2589, image: img7, category: 'Home' },
    { id: 10, name: 'Product 4', price: 35789, image: img8, category: 'Living Room' },
    { id: 11, name: 'Product 5', price: 22789, image: img9, category: 'Basement' },
    { id: 12, name: 'Product 6', price: 32789, image: img10, category: 'Living Room' },
    { id: 13, name: 'Product 1', price: 20789, image: img5, category: 'Home' },
    { id: 14, name: 'Product 2', price: 3089, image: img6, category: 'Lounch' },
    { id: 15, name: 'Product 3', price: 2589, image: img7, category: 'Home' },
    { id: 16, name: 'Product 4', price: 3899, image: img8, category: 'Living Room' },
    { id: 17, name: 'Product 5', price: 22890, image: img9, category: 'Basement' },
    { id: 18, name: 'Product 6', price: 32890, image: img10, category: 'Living Room' },
    // Add more card data as needed
  ];

  const filteredCards = cards.filter(card => {
    return (
      card.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (categoryFilter ? card.category === categoryFilter : true)
    );
  }).sort((a, b) => {
    if (sortOption === 'priceLowToHigh') {
      return a.price - b.price;
    } else if (sortOption === 'priceHighToLow') {
      return b.price - a.price;
    } else {
      return 0;
    }
  });

  return (
    <>
    <div className='player-wrapper mt-20  ml-2 mr-2 rounded'>
          <ReactPlayer
            className='react-player rounded-2xl'
            url= {video2}
            width='100%'
            height={'100%'}
            // height='100%'
            volume={0}
          />
        </div>
    <div className="container mt-24 w-4/5 mx-auto">
      <div className="mt-8 mb-4 md:flex lg:flex  justify-between content-center items-center">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        />
        <select
          value={sortOption}
          onChange={e => setSortOption(e.target.value)}
          className="px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        >
          <option value="">Sort by</option>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
        </select>
        <select
          value={categoryFilter}
          onChange={e => setCategoryFilter(e.target.value)}
          className="px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-200"
        >
          <option value="">All Categories</option>
          <option value="Home">Home</option>
          <option value="Lounch">Lounch</option>
          <option value="Living Room">Living Room</option>
          <option value="Basement">Basement</option>
        </select>
      </div>
      <motion.div
      initial={{opacity:0,}}
      animate={{opacity:1 }}
      transition={{duration:1, ease:"easeInOut"}}
      className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-14 ">
        {filteredCards.map(card => (
          <m.div
            key={card.id}
            className="bg-white  rounded-md overflow-hidden text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={card.image} alt={card.name} className="justify-center  items-center   rounded-3xl" />
            <div className=" p-4">
              <h2 className="text-lg font-semibold mb-2">{card.name}</h2>
              <p className="text-gray-600 mb-2">PKR. {card.price}.00</p>
              <p className="text-gray-500">{card.category}</p>
            </div>
          </m.div>
        ))}
      </motion.div>
    </div>
    </>
  );
};

export default Inventory;
