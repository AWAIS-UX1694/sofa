import React, { useState } from "react";
import product1 from "./../../images/product-1.png";
import product2 from "./../../images/product-2.png";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: product1,
      name: "Product 1",
      price: 49.0,
      quantity: 1,
    },
    {
      id: 2,
      image: product2,
      name: "Product 2",
      price: 59.0,
      quantity: 1,
    },
  ]);

  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);

  // Calculate subtotal
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  // Calculate total after discount
  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    return (subtotal - discount).toFixed(2);
  };

  // Handle quantity update
  const updateQuantity = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
      )
    );
  };

  // Handle item removal
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Apply coupon
  const applyCoupon = () => {
    if (couponCode === "DISCOUNT10") {
      setDiscount(10); // Example: $10 discount
    } else {
      setDiscount(0);
      alert("Invalid coupon code");
    }
  };

  return (
    <div className="py-20 md:px-32 lg:px-32 px-0">
      <div className="container mx-auto px-4">
        {/* Cart Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full bg-white  rounded-lg shadow-sm">
            <thead className="border-b-2 border-black">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Image</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Product</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Price</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Quantity</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Total</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Remove</th>
              </tr>
            </thead>
            <tbody className="border-b">
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="px-6 py-4">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
                  </td>
                  <td className="px-6 py-4">
                    <h2 className="text-sm font-semibold text-gray-800">{item.name}</h2>
                  </td>
                  <td className="px-6 py-4">${item.price.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <button
                        className="px-2 py-1 border border-gray-300 text-gray-700"
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        value={item.quantity}
                        readOnly
                        className="w-12 mx-2 text-center border border-gray-300 rounded"
                      />
                      <button
                        className="px-2 py-1 border border-gray-300 text-gray-700"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4">${(item.price * item.quantity).toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => removeItem(item.id)}
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Actions and Summary */}
        <div className="flex flex-col lg:flex-row mt-10 gap-8">
          <div className="flex-1">
            <div className="mt-8">
              <label htmlFor="coupon" className="block text-lg font-medium text-gray-800">
                Coupon
              </label>
              <p className="text-sm text-gray-500">Enter your coupon code if you have one.</p>
              <div className="flex mt-4 gap-4">
                <input
                  type="text"
                  id="coupon"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Coupon Code"
                  className="flex-1 border rounded px-4 py-3"
                />
                <button className="bg-black text-white px-6 py-3 rounded" onClick={applyCoupon}>
                  Apply Coupon
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-white p-6 border rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-3">Cart Totals</h3>
            <div className="flex justify-between items-center mt-6">
              <span className="text-gray-700">Subtotal</span>
              <span className="text-gray-800 font-medium">${calculateSubtotal()}</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-gray-700">Discount</span>
              <span className="text-gray-800 font-medium">-${discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-gray-700">Total</span>
              <span className="text-gray-800 font-medium">${calculateTotal()}</span>
            </div>
            <button
              className="w-full mt-6 bg-black text-white py-3 rounded-lg"
              onClick={() => alert("Proceeding to checkout")}
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
