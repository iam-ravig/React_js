import TabButton from "./TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "../data.js";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
  const [getval, setval] = useState();

  function handleClick(prop) {
    setval(prop);
    console.log(prop);
  }
  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={getval === "components"}
              onClick={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={getval === "jsx"}
              onClick={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={getval === "props"}
              onClick={() => handleClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={getval === "state"}
              onClick={() => handleClick("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {!getval ? (
          <p>Please select a topic from above tabs</p>
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[getval].title}</h3>
            <p>{EXAMPLES[getval].description}</p>
            <pre>
              <code>{EXAMPLES[getval].code}</code>
            </pre>
          </div>
        )}
      </Tabs>
    </Section>
  );
}
