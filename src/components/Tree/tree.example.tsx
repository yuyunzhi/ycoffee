import React, { useState } from "react";
import Tree from "./tree";

const TreeExample: React.FC = (props) => {
  const [array] = useState([
    {
      text: "1",
      value: "1",
      children: [
        {
          text: "1.1",
          value: "1.1",
          children: [
            { text: "1.1.1", value: "1.1.1" },
            { text: "1.1.2", value: "1.1.2" },
          ],
        },
        { text: "1.2", value: "1.2" },
      ],
    },
    {
      text: "11",
      value: "11",
    },
    {
      text: "2",
      value: "2",
      children: [
        { text: "2.1", value: "2.1" },
        { text: "2.2", value: "2.2" },
      ],
    },
  ]);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  return (
    <div>
      Tree selectedValues: {selectedValues.join(" , ")}
      <div style={{ width: 200 }}>
        <Tree
          sourceData={array}
          selected={selectedValues}
          onChange={(value: string[]) => setSelectedValues(value)}
          multiple={true}
        />
      </div>
    </div>
  );
};

export default TreeExample;
