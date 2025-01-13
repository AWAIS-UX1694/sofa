// import logo from './logo.svg';
import "./App.css";
import Home from "./Store/pages/home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inventory from "./Store/pages/inventory/Inventry";
import About from "./Store/pages/about/About";
import Contact from "./Store/pages/contact/Contact";
import SignUpPage from "./Store/pages/login/signup";
import Navbar from "./Store/component/Navbar";
import Footer from "./Store/component/footer";
import SignInPage from "./Store/pages/login/signin";
import Cart from "./Store/component/cart";

export default function App() {
  return (
    <>
      {/* <Home/> */}

      <BrowserRouter>
      <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    {/* <Route path="/home" element={<Home />} /> */}
    <Route path="/inventory" element={<Inventory />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/signin" element={<SignInPage />} />
    <Route path="/signup" element={<SignUpPage />} />
    <Route path="/cart" element={<Cart />} />
  </Routes>
  <Footer />
</BrowserRouter>

    </>
  );
}
