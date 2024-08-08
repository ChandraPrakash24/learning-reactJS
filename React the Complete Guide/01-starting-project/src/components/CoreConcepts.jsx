import { CORE_CONCEPTS } from "../utils/data.js";
import CoreConcept from "./CoreConcept.jsx";
import Section from "./Sections.jsx";

export default function CoreConcepts() {
  return (
    <Section title={"Core Concepts"} id="core-concepts">
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
    </Section>
  );
}
