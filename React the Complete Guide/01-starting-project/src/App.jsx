import { isValidElement, useState } from "react";

import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  // let text = "please click any of the above btn";
  function onSelect(btnSelected) {
    setSelectedTopic(btnSelected); // scheduling update (setSelectedTopic is asynchronous in nature) (React batches state updates and processes them at a later time to optimize performance.)
    // console.log(selectedTopic);
  }
  // console.log(selectedTopic); // imidately

  // console.log('app rendered');

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map(item => <CoreConcept key={item.title} {...item} />)}
            {/* {console.log(CORE_CONCEPTS.map(item => <CoreConcept {...item} />))} */}
            {/* <CoreConcept
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
            />
            {/* youre made attribute must be same to the actual data key name */}
            {/* <CoreConcept {...CORE_CONCEPTS[2]} /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              currActiveClass={selectedTopic === "components"}
              onSelect={() => onSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              currActiveClass={selectedTopic === "jsx"}
              onSelect={() => onSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              currActiveClass={selectedTopic === "props"}
              onSelect={() => onSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              currActiveClass={selectedTopic === "state"}
              onSelect={() => onSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {!selectedTopic && <p>Please select a topic.</p>}
          {selectedTopic &&
            <div id="tab-content">
              <h3>
                {EXAMPLES[selectedTopic].title}
              </h3>
              <p>
                {EXAMPLES[selectedTopic].description}
              </p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>}
        </section>
      </main>
    </div>
  );
}

export default App;
