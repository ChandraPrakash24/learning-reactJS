import { useState } from 'react';

const Section = ({ title, discreption, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2 ">
      <h2>{title}</h2>
      {isVisible ? (
        <button className="underline" type="button" onClick={() => setIsVisible()}>
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
  const [sectionConfig, setSectionConfig] = useState({
    showABout: false,
    showTeam: false,
    showCareer: false,
    showProduct: false,
    showDetails: false
  });
  
  return (
    <div>
      <h1 className="font-bold text-3xl m-2 p-2" >Instamart</h1>
      <Section title={"About"} discreption={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, doloremque!"} isVisible={sectionConfig.showABout} setIsVisible={() => setSectionConfig({
        showABout: true,
        showTeam: false,
        showCareer: false,
        showProduct: false,
        showDetails: false
      })} />
      <Section title={"Team"} discreption={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, doloremque!"} isVisible={sectionConfig.showTeam} setIsVisible={() => setSectionConfig({
        showABout: false,
        showTeam: true,
        showCareer: false,
        showProduct: false,
        showDetails: false
      })} />
      <Section title={"Career"} discreption={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, doloremque!"} isVisible={sectionConfig.showCareer} setIsVisible={() => setSectionConfig({
        showABout: false,
        showTeam: false,
        showCareer: true,
        showProduct: false,
        showDetails: false
      })} />
      <Section title={"Product"} discreption={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, doloremque!"} isVisible={sectionConfig.showProduct} setIsVisible={() => setSectionConfig({
        showABout: false,
        showTeam: false,
        showCareer: false,
        showProduct: true,
        showDetails: false
      })} />
      <Section title={"Detail"} discreption={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, doloremque!"} isVisible={sectionConfig.showDetails} setIsVisible={() => setSectionConfig({
        showABout: false,
        showTeam: false,
        showCareer: false,
        showProduct: false,
        showDetails: true
        
      })} />
    </div>
  );
};

export default Instamart;