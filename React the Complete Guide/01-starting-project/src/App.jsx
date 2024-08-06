import { useState } from "react";

import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("please click any of the above btn");
  
  // let text = "please click any of the above btn";
  function onSelect(btnSelected) {
    setSelectedTopic(btnSelected); // scheduling update (setSelectedTopic is asynchronous in nature) (React batches state updates and processes them at a later time to optimize performance.)
    console.log(selectedTopic);
  }
  console.log(selectedTopic); // imidately
  
  // console.log('app rendered');

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            {/* youre made attribute must be same to the actual data key name */}
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept
              image={CORE_CONCEPTS[3].image}
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => onSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => onSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => onSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => onSelect("state")}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
