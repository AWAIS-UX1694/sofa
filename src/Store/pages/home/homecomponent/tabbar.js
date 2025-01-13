import React, { useState } from "react";
import img5 from "./../../../../images/5.jpg";
import img6 from "./../../../../images/6.jpg";
import img7 from "./../../../../images/7.jpg";
import img8 from "./../../../../images/8.jpg";
import img9 from "./../../../../images/9.jpg";
import img10 from "./../../../../images/10.jpg";
import { motion as m } from "framer-motion";

const MainComponent = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["New Arrival", "Featured", "On Sale", "Trending"]; // Updated tab names
  const cards = [
    [
      { id: 1, name: "Product 1", price: 20, image: img5 },
      { id: 2, name: "Product 2", price: 30, image: img6 },
      { id: 3, name: "Product 1", price: 20, image: img7 },
      { id: 4, name: "Product 2", price: 30, image: img8 },
      { id: 5, name: "Product 1", price: 20, image: img9 },
      { id: 6, name: "Product 2", price: 30, image: img10 },
      // Add more card data for New Arrival as needed
    ],
    [
      { id: 7, name: "Product 3", price: 25, image: img7 },
      { id: 8, name: "Product 4", price: 35, image: img8 },
      { id: 9, name: "Product 3", price: 25, image: img7 },
      { id: 10, name: "Product 4", price: 35, image: img8 },
      { id: 12, name: "Product 3", price: 25, image: img7 },
      { id: 13, name: "Product 4", price: 35, image: img8 },
      // Add more card data for Featured as needed
    ],
    [
      { id: 14, name: "Product 5", price: 22, image: img9 },
      { id: 15, name: "Product 6", price: 32, image: img10 },
      { id: 16, name: "Product 5", price: 22, image: img9 },
      { id: 17, name: "Product 6", price: 32, image: img10 },
      { id: 18, name: "Product 5", price: 22, image: img9 },
      { id: 19, name: "Product 6", price: 32, image: img10 },
      // Add more card data for On Sale as needed
    ],
    [
      { id: 20, name: "Product 7", price: 28, image: img5 },
      { id: 21, name: "Product 8", price: 38, image: img6 },
      { id: 22, name: "Product 7", price: 28, image: img5 },
      { id: 23, name: "Product 8", price: 38, image: img6 },
      { id: 24, name: "Product 7", price: 28, image: img5 },
      { id: 25, name: "Product 8", price: 38, image: img6 },
      // Add more card data for Trending as needed
    ],
  ];

  return (
    <div className="container lg:w-4/5 text-center flex-col justify-center items-center">
      <m.div
        animate={{ opacity: 0, marginTop: "100px" }}
        whileInView={{ opacity: 1, marginTop: "0" }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        className="w-full items-center mb-10"
      >
        <h1 className="font-semibold text-4xl mb-2 ">Our Product</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quaerat
          beatae deleniti itaque?
        </p>
      </m.div>
      <m.div
        animate={{ opacity: 0, marginTop: "100px" }}
        whileInView={{ opacity: 1, marginTop: "0" }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        className="flex justify-center mb-4"
      >
        {" "}
        {/* Center the tab bar */}
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 ${
              activeTab === index
                ? "text-orange-500 font-semibold  lg:text-xl"
                : " font-semibold text lg:text-xl"
            }`}
            onClick={() => setActiveTab(index)}
            style={{ transition: "0.7s" }} // Apply transition
          >
            {tab}
          </button>
        ))}
      </m.div>
      <m.div
        // onViewportEnter={{opacity:0, marginTop:'200px'}}

        animate={{ opacity: 0, marginTop: "100px" }}
        whileInView={{ opacity: 1, marginTop: "0" }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        className="flex sm:gap-1 lg:gap-12 md:gap-12  flex-wrap  justify-center "
      >
        {/* Center the card items */}
        {cards[activeTab].map((card) => (
          <div key={card.id} className="lg:w-60 lg:p-4 ">
            <div className="  items-start justify-start w-48  lg:h-80 md:h-80 lg:w-64 md:w-64 text-center">
              <img
                src={card.image}
                alt={card.name}
                className="bg-gray-100 w-full rounded-xl "
              />
              <div className="mt-4">
                <div className="text-lg font-semibold">{card.name}</div>
                <div className="text-gray-600">${card.price}</div>
                {/* <button className="bg-blue-500 text-white px-4 py-2 mt-2">
                  Add to Cart
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </m.div>
    </div>
  );
};

export default MainComponent;
