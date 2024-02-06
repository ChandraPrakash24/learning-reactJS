"use client";
// Import necessary modules and components
import React, { useState } from "react";
import Header from "@/Components/Header";
import axios from "axios";

const Page = () => {
  const [images, setImages] = useState([]);

  // Function to fetch random images from the API
  const getImage = async () => {
    try {
      const randomPageNumber = Math.floor(Math.random() * 200) + 1;
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${randomPageNumber}&limit=15`
      );
      const imageData = response.data;
      setImages(imageData);
    } catch (error) {
      console.error("Error fetching images: " + error);
    }
  };

  return (
    <div className="bg-gradient-to-t from-purple-50 to-pink-200 min-h-screen">
      <Header />
      <button
  className="text-indigo-700 border border-indigo-600 py-3 px-8 md:px-24 mt-9 mb-7 rounded-lg mx-auto opacity-80 flex items-center justify-center"
  type="button"
  onClick={getImage}
>
  Get Image
</button>


<div className="flex flex-wrap justify-center gap-7">
  {images.map((image, index) => (
    <div
      key={image.id}
      className={`relative overflow-hidden cursor-pointer transform transition-transform duration-500 ease-in-out delay-${
        index * 100
      } hover:scale-110 sm:hover:animate-bounce md:hover:scale-110 lg:hover:scale-100 xl:hover:scale-110 ${
        index % 2 === 0 ? "w-96 h-72" : "w-48 h-96"
      }`}
    >
      <img
        className="w-full h-full object-cover rounded-lg shadow-md"
        src={image.download_url}
        alt={image.author}
      />
      <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300"></div>
      <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold hover:text-opacity-0">
        {image.author}
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default Page;
