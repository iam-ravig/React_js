import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from "./CoreConcept.jsx";
import coreimg from "../assets/components.png";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {/* {CORE_CONCEPTS.map((item) => {
              <CoreConcept {...item}></CoreConcept>;
            })} */}

        <CoreConcept
          title="Components"
          image={coreimg}
          description={CORE_CONCEPTS[0].description}
        />
        <CoreConcept {...CORE_CONCEPTS[1]} />
        <CoreConcept {...CORE_CONCEPTS[2]} />
        <CoreConcept {...CORE_CONCEPTS[3]} />
      </ul>
    </section>
  );
}
