import React, { FC } from "react";
import "./tree.scss";
import TreeItem from "./tree-item";
import { ITreeProps } from "./ITreeProps";

const Tree: FC<ITreeProps> = (props) => {
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
