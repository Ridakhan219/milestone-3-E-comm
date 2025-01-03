// src/app/buyNow/page.tsx

'use client'; 

import React, { useState, ChangeEvent, FormEvent } from 'react';
import Navbar from '../components/navbar/page';



// Define types for product and cart
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  availableColors: string[];
  availableSizes: string[];
  material: string;
}

interface CartItem extends Product {
  selectedColor: string;
  selectedSize: string;
}

interface UserDetails {
  name: string;
  email: string;
  address: string;
}

const BuyNowPage: React.FC = () => {
  // Define the product (Furniture example: Sofa)
  const product: Product = {
    id: 1,
    name: 'Modern Sofa',
    description: 'A stylish and comfortable 3-seater sofa, perfect for living rooms.',
    price: 799.99,
    image: 'https://plus.unsplash.com/premium_photo-1681046751108-a516bea00570?q=80&w=1465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Use actual furniture images here
    availableColors: ['Beige', 'Grey', 'Blue'],
    availableSizes: ['Small', 'Medium', 'Large'],
    material: 'Leather',
  };

  // State to hold the cart items
  const [cart, setCart] = useState<CartItem[]>([]);

  // State to hold user details for checkout
  const [userDetails, setUserDetails] = useState<UserDetails>({
    name: '',
    email: '',
    address: '',
  });

  // States for product customization (color, size)
  const [selectedColor, setSelectedColor] = useState<string>(product.availableColors[0]);
  const [selectedSize, setSelectedSize] = useState<string>(product.availableSizes[0]);

  // Function to handle adding product to cart
  const handleAddToCart = (): void => {
    const newProduct: CartItem = { ...product, selectedColor, selectedSize };
    setCart((prevCart) => [...prevCart, newProduct]);
  };

  // Function to handle removing item from cart
  const handleRemoveFromCart = (productId: number): void => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Function to handle form input changes
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  // Calculate the total price of items in the cart
  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

  // Handle form submission (e.g., checkout)
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    alert('Order placed successfully!');
  };

  return (
   
    <div className="container mx-auto p-8">
         <Navbar/>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Buy Now</h1>
        <div>
          <button className="p-2 bg-blue-600 text-white rounded-lg">
            View Cart ({cart.length})
          </button>
        </div>
      </div>

      {/* Product Card */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-white shadow-lg rounded-lg p-6 space-y-6 md:space-y-0">
        <img src={product.image} alt={product.name} className="w-full md:w-1/2 h-64 object-cover rounded-lg" />
        <div className="w-full md:w-1/2 md:pl-8">
          <h2 className="text-2xl font-semibold">{product.name}</h2>
          <p className="text-gray-600 mt-2">{product.description}</p>

          <div className="mt-4">
            <h3 className="text-lg font-semibold">Price: ${product.price}</h3>
          </div>

          {/* Color Selection */}
          <div className="mt-4">
            <h3 className="font-semibold">Choose Color:</h3>
            <div className="flex gap-4 mt-2">
              {product.availableColors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  className={`w-10 h-10 rounded-full border-2 ${color === selectedColor ? 'border-blue-600' : 'border-gray-400'}`}
                  style={{ backgroundColor: color.toLowerCase() }}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mt-4">
            <h3 className="font-semibold">Choose Size:</h3>
            <div className="flex gap-4 mt-2">
              {product.availableSizes.map((size, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border-2 rounded-md ${size === selectedSize ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className="mt-6">
            <button
              onClick={handleAddToCart}
              className="w-full p-3 bg-blue-600 text-white rounded-lg"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Cart Summary */}
      {cart.length > 0 && (
        <div className="mt-12 bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Cart</h2>
          <div>
            {cart.map((item, index) => (
              <div key={index} className="flex justify-between items-center mb-4">
                <span>{item.name} - {item.selectedColor} - {item.selectedSize}</span>
                <span>${item.price}</span>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="flex justify-between font-bold text-lg mt-4">
              <span>Total:</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}

      {/* Checkout Form (Optional) */}
      {cart.length > 0 && (
        <div className="mt-12 bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-lg font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={userDetails.name}
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={userDetails.email}
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-semibold">Shipping Address</label>
              <input
                type="text"
                name="address"
                value={userDetails.address}
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex justify-center mt-6">
              <button type="submit" className="p-3 bg-green-600 text-white rounded-lg">
                Complete Purchase
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
    
  );
};

export default BuyNowPage;
