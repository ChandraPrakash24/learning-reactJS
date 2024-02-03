"use client";
import React, { useEffect, useState } from "react";
import Header from "@/Components/Header";
import Button from "@/Components/Click";
import Link from "next/link";
import axios from "axios";

const page = () => {

  const [logo, setLogo] = useState("Sisu");
  const [editor, setEditor] = useState()
  
  const updateLogo = (newLogo) => {
    setLogo(newLogo);
  };
  
  const handleChildButtonClick = (dataFromChild) => console.log(`Data from Header: ${dataFromChild}`);
  
  const [images, setImages] = useState([]);

  const getImage = async () => {
    try {
      const randomPageNumber = Math.floor(Math.random() * 200) + 1;
      console.log(randomPageNumber);
      const response = await axios.get(`https://picsum.photos/v2/list?page=${randomPageNumber}&limit=15`);
      const imageData = response.data;
      setImages(imageData);
      // console.log(images);
      //    insted
      setImages(() => {
        return imageData;
      });
      console.log(imageData);
    } catch (error) {
      console.error('Error fetching images: ' + error);
    }
  };

  // useEffect(() => {
  //   getImage(); // Call the function when the component mounts
  // }, []); // Empty dependency array to ensure it runs only once on mount

  // useEffect(() => {
  //   console.log(images); // Log images whenever the images state is updated
  // }, [images]); // Run this effect whenever images change

  return (
    <>
      <Header lg={logo} ed={editor} onButtonClickPrentProp={handleChildButtonClick}/>
      <Button ul={updateLogo} />
      <Link href="/About">About</Link>
      <button className="bg-slate-400 text-white p-2 rounded-lg mx-8 mt-8 border border-pink-400" type="button" onClick={getImage}>Get Image</button>
      {/* <div className="p-10">
        {
          images.map((el)=>{
            return <img key={el.id} rc={el.url}  />
          })
        }
      </div> */}
      {/* <div>
      {images.map((image) => (
        <img key={image.id} src={image.download_url} alt={image.author} />
      ))}
    </div> */}
    <div className="flex flex-wrap justify-center gap-4 ">
      {images.map((image) => (
        <img
          className=" w-96  h-72 mb-10 mt-10 rounded-lg shadow-md inline-block "
          key={image.id}
          src={image.download_url}
          alt={image.author}
          // width={300}
          // height={400}
        />
      ))}
    </div>
    </>
  )
}

export default page

// const Hello = () => {
//   // let marks = 80
//   const [marks, setMarks] = useState(80);
//   return (
//     <>
//       <h1 className="font-bold text-xl text-red-400 ml-2">
//         My marks is {marks}
//       </h1>
//       <button className="bg-slate-600 p-2 ml-2 mt-2 text-white" onClick={()=>{
//         setMarks(33)
//       }}>Button</button>
//     </>
//   );
// };

// export default Hello;
