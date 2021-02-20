import React from "react";
import "./tree.scss";
import TreeItem from "./tree-item";

const Tree: React.FC<TreeProps> = (props) => {
  const onItemChange = (values: string[] | string) => {
    console.log("onItemChange", values);
    if (props.multiple) {
      props.onChange(Array.from(new Set(values)) as string[]);
    } else {
      props.onChange(values as string);
    }
  };

  return (
    <div>
      {props.sourceData?.map((item) => (
        <TreeItem
          onItemChange={onItemChange}
          key={item.value}
          treeProps={props}
          item={item}
          level={1}
        />
      ))}
    </div>
  );
};

export default Tree;
