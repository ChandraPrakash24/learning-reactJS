import { useState } from 'react';

const Section = ({ title, discreption, isVisible, setIsVisible, setHide }) => {
  return (
    <div className="border border-black p-2 m-2 ">
      <h2>{title}</h2>
      {isVisible ? (
        <button className="underline" type="button" onClick={() => setHide()}>
          Hide
        </button>
      ) : (
        <button className="underline" type="button" onClick={() => setIsVisible()}>
          Show
        </button>
      )}
      {isVisible && <p>{discreption}</p>}
    </div>
  );
};

const Instamart = () => {
  const [sectionConfig, setSectionConfig] = useState("Team");
  
  return (
    <div>
      <h1 className="font-bold text-3xl m-2 p-2" >Instamart</h1>
      <Section title={"About"} isVisible={sectionConfig === "About"} discreption={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, doloremque!"} setIsVisible={() => setSectionConfig("About")} setHide={() => setSectionConfig("None")} />
      <Section title={"Team"} isVisible={sectionConfig === "Team"} discreption={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, doloremque!"} setIsVisible={() => setSectionConfig("Team")} setHide={() => setSectionConfig("None")}/>
      <Section title={"Career"} isVisible={sectionConfig === "Career"} discreption={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, doloremque!"} setIsVisible={() => setSectionConfig("Career")} setHide={() => setSectionConfig("None")}/>
      <Section title={"Product"} isVisible={sectionConfig === "Product"} discreption={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, doloremque!"} setIsVisible={() => setSectionConfig("Product")} setHide={() => setSectionConfig("None")}/>
      <Section title={"Detail"} isVisible={sectionConfig === "Detail"} discreption={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, doloremque!"} setIsVisible={() => setSectionConfig("Detail")} setHide={() => setSectionConfig("None")}/>
    </div>
  );
};

export default Instamart;