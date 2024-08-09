import { useState } from "react";

import { EXAMPLES } from "../utils/data.js";
import TabButton from "./TabButton.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  function onSelect(btnSelected) {
    setSelectedTopic(btnSelected); // scheduling update (setSelectedTopic is asynchronous in nature) (React batches state updates and processes them at a later time to optimize performance.)
    // console.log(selectedTopic);
  }

  return (
    <section title="Examples" id="examples">
      <Tabs
        ButtonsContainer="menu"
        buttons={
          <>
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
          </>
        }
      >
        {!selectedTopic && <p>Please select a topic.</p>}
        {selectedTopic && (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )}
      </Tabs>
    </section>
  );
}
