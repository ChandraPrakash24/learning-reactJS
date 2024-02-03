"use client";
import React, { useState } from "react";
import Header from "@/Components/Header";
import Button from "@/Components/Click";
import Link from "next/link";


const page = () => {

  const [logo, setLogo] = useState("Sisu");
  const [editor, setEditor] = useState()

  const updateLogo = (newLogo) => {
    setLogo(newLogo);
  };

  const handleChildButtonClick = (dataFromChild) => console.log(`Data from Header: ${dataFromChild}`);


  return (
    <>
      <Header lg={logo} ed={editor} onButtonClickPrentProp={handleChildButtonClick}/>
      <Button ul={updateLogo} />
      <Link href="/About">About</Link>
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
