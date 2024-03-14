import { useState } from 'react';

const Section = ({ title, discreption }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="border border-black p-2 m-2 ">
      <h2>{title}</h2>
      {isVisible ? (
        <button className="underline" type="button" onClick={() => setIsVisible(false)}>
          Hide
        </button>
      ) : (
        <button className="underline" type="button" onClick={() => setIsVisible(true)}>
          Show
        </button>
      )}
      {isVisible && <p>{discreption}</p>}
    </div>
  );
};

const Instamart = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl m-2 p-2" >Instamart</h1>
      <Section title={"About"} discreption={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, doloremque!"} />
      <Section title={"Team"} discreption={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, doloremque!"} />
      <Section title={"Career"} discreption={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, doloremque!"} />
    </div>
  );
};

export default Instamart;