import React, { useState } from "react";
import Tree from "./tree";

const TreeExample: React.FC = (props) => {
  const [array] = useState([
    {
      text: "你好1",
      value: "1",
      children: [
        {
          text: "你好1.1",
          value: "1.1",
          children: [
            { text: "你好1.1.1", value: "1.1.1" },
            { text: "你好1.1.2", value: "1.1.2" },
          ],
        },
        { text: "你好1.2", value: "1.2" },
      ],
    },
    {
      text: "你好11",
      value: "11",
    },
    {
      text: "你好2",
      value: "2",
      children: [
        { text: "你好2.1", value: "2.1" },
        { text: "你好2.2", value: "2.2" },
      ],
    },
  ]);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  return (
    <div>
      Tree selectedValues: {selectedValues.join(" , ")}
      <div style={{ width: 200 }}>
        <Tree
          defaultExpandAll={true}
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
