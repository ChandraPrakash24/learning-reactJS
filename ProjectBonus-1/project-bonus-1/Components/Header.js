"use client";
import Link from "next/link";
import React from "react";

const Header = (props) => {
  // console.log(props);
  const handleParentButtonCall = () => {
    if (props.onButtonClickPrentProp) {
      props.onButtonClickPrentProp('Data from Child');
    }
  };

    // const onButtonClickPrentProp = () => {
    //   props.onButtonClickPrentProp('Data from Child');
    // }

  return (
    <>
      <div className="header bg-green-300 flex items-center justify-between h-14 px-2">
        <h1 className="text-2xl font-bold">{props.lg ?? "logo"}</h1>
        <div className="nav-item flex gap-3">
          <h4>Home</h4>
          <Link href="/Blog">Blog</Link>
          <h4>Contact</h4>
          <h4>Career</h4>
          <button className="bg-green-800 text-white p-2 rounded-lg" onClick={handleParentButtonCall}>
            Click Me
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;


// "use client";
// import React from "react";

// const Header = (props) => (
//   <>
//     <div className="header bg-green-300 flex items-center justify-between h-14 px-2">
//       <h1 className="text-2xl font-bold">{props.lg ?? "logo"}</h1>
//       <div className="nav-item flex gap-3">
//         <h4>Home</h4>
//         <h4>Blog</h4>
//         <h4>Contact</h4>
//         <h4>{props.ed ?? "Career"}</h4>
//       </div>
//     </div>
//   </>
// );

// export default Header;
