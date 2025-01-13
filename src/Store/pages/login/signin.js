import React, { useState } from 'react';
import img1 from "./../../../images/slider2.jpg" // Import useHistory
import { Link } from 'react-router-dom';
import { motion as m } from "framer-motion";

// import home from "./../../pages/home/home";
const SignInPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setIsFormValid(
      formData.email !== '' &&
      formData.password !== ''
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your sign-up logic
    console.log('Form submitted:', formData);
    
    // Redirect to the home page
// Modify the path according to your application setup
  };
  

  return (
    <m.div className="flex justify-center items-center bg-white h-screen">
      <div className="items-center lg:w-2/3 gap-10 px-10 py-8  bg-white  flex">
        <div className="w-1/2 mr-4 items-center " >
          <div className="flex justify-center flex-col items-center mb-8">
            <div className="w-full h-auto" ></div>
            <m.h1
            initial={{opacity:0,}}
            animate={{opacity:1 }}
            transition={{duration:1, ease:"easeInOut"}}
            className='text-6xl font-bold mb-3'>Welcome..</m.h1>

            <m.div
             initial={{opacity:0,}}
             animate={{opacity:1 }}
            transition={{delay:1,duration:1, ease:"easeInOut"}}
            className='absolute h-80 w-80 bg-white'></m.div>

            <m.h1
            initial={{opacity:0,}}
            animate={{opacity:1 }}
            transition={{delay:2,duration:1, ease:"easeInOut"}}
            className='absolute text-6xl font-bold mb-3'>SignIn.</m.h1>

            
            <m.div
            initial={{opacity:0,}}
            animate={{opacity:1 }}
            transition={{delay:4,duration:1, ease:"easeInOut"}}
            className='absolute lg:h-80 lg:w-80 bg-white'></m.div>

            <m.img
            initial={{opacity:0, marginLeft:"-100px"}}
            animate={{opacity:1, marginLeft:"0"}}
            transition={{delay:5,duration:1, ease:"easeInOut"}}
            className='absolute lg:h-80 h-52  drop-shadow-2xl'

            src={img1} alt="" />
          </div>
        </div>
        <div className="w-1/2">
          <form onSubmit={handleSubmit}>
           
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange}
                className="w-full px-3 py-2  outline outline-1 outline-gray-300 rounded-lg focus:outline-none focus:outline-1 focus:outline-orange-500"
                placeholder="Enter your email address" 
                required 
              />
            </div>
           
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                value={formData.password} 
                onChange={handleChange}
                className="w-full px-3 py-2  outline outline-1 outline-gray-300 rounded-lg focus:outline-none focus:outline-1 focus:outline-orange-500"
                placeholder="Enter your password" 
                required 
              />
            </div>
            <div className="flex justify-center">
              <Link 
                type="submit" 
                to="/"
                className={`px-4 py-2 text-center bg-orange-500 hover:bg-gray-900 text-white w-full rounded-lg focus:outline-none ${isFormValid ? '' : ' cursor-not-allowed'}`}
                disabled={!isFormValid}
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </m.div>
  );
};

export default SignInPage;
