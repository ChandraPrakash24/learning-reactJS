const Shimmer = ({ count }) => {
  const shimmerEffects = Array.from({ length: count }, (_, index) => (
    <div className="shimmer-container" key={index}>
      <div className="shimmer-effect">
        {/* Shimmer Card */}
        <div className="shimmer-card">
          {/* Shimmer Image */}
          <div className="shimmer-image"></div>
          {/* Shimmer Content */}
          <div className="shimmer-content">
            <div className="shimmer-title"></div>
            <div className="shimmer-line"></div>
            <div className="shimmer-line"></div>
            <div className="shimmer-line"></div>
          </div>
        </div>
      </div>
    </div>
  ));

  return <>{shimmerEffects}</>;
};

export default Shimmer;


// const Shimmer = () => {
//   return (
//     <div className="shimmer-container">
//       <div className="shimmer-effect">
//         {/* Shimmer Card */}
//         <div className="shimmer-card">
//           {/* Shimmer Image */}
//           <div className="shimmer-image"></div>
//           {/* Shimmer Content */}
//           <div className="shimmer-content">
//             <div className="shimmer-title"></div>
//             <div className="shimmer-line"></div>
//             <div className="shimmer-line"></div>
//             <div className="shimmer-line"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Shimmer;


// const Shimmer = () => {
//   return (
//     <div className="shimmer-container">
//       <div className="shimmer-effect">
//         <h1>Loading....</h1>
//       </div>
//     </div>
//   );
// };

// export default Shimmer;