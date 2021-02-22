import React, { ChangeEventHandler, useRef, useState } from "react";
import { SourceDataItem, ITreeItemProps, ITreeProps } from "./ITreeProps";
import classNames from "classnames";
import useToggle from "../../hooks/useToggle";
import Transition from "../Transition";
import down from "../../assets/down.png";

interface RecursiveArray<T> extends Array<T | RecursiveArray<T>> {}

const TreeItem: React.FC<ITreeItemProps> = (props) => {
  const { item, level, treeProps } = props;
  const { checkable, defaultExpandAll } = treeProps as ITreeProps;

  const { value: expanded, expand, collapse } = useToggle(
    defaultExpandAll ? defaultExpandAll : false
  );
  const [displayInitIcon, setDisplayInitIcon] = useState<boolean>(true);

  const treeItemClassName = classNames({
    [`yc-tree-level-${level}`]: true,
    "yc-tree-item": true,
  });

  const toggleClassName = classNames("yc-tree-down", { expanded });

  const toggleInitialClassName = classNames("yc-tree-init-down", {
    right: treeProps.defaultExpandAll,
    down: !treeProps.defaultExpandAll,
    none: !item.children,
  });

  const isCheckedBox = treeProps.multiple
    ? treeProps.selected.indexOf(item.value) >= 0
    : treeProps.selected === item.value;

  const inputRef = useRef<HTMLInputElement>(null);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const childrenValues = collectChildrenValues(item);
    if (treeProps.multiple) {
      if (e.target.checked) {
        props.onItemChange([
          ...treeProps.selected,
          item.value,
          ...childrenValues,
        ]);
      } else {
        props.onItemChange(
          treeProps.selected.filter(
            (value) =>
              value !== item.value && childrenValues.indexOf(value) === -1
          )
        );
      }
    } else {
      if (e.target.checked) {
        treeProps.onChange(item.value);
      } else {
        treeProps.onChange("");
      }
    }
  };

  const onItemChange = (values: string[]) => {
    console.log("values", values);
    const childrenValues = collectChildrenValues(item);
    console.log("childrenValues", childrenValues);
    const common = intersect(values, childrenValues);
    if (common.length !== 0) {
      props.onItemChange(Array.from(new Set(values.concat(item.value))));
      inputRef.current!.indeterminate = common.length !== childrenValues.length;
    } else {
      props.onItemChange(values.filter((v) => v !== item.value));
      inputRef.current!.indeterminate = false;
    }
  };

  const changeToggle = () => {
    setDisplayInitIcon(false);
    expanded ? collapse() : expand();
  };

  return (
    <div key={item.value} className={treeItemClassName}>
      <div className="yc-tree-text">
        {/*初始化第一次假的，点击后就影藏*/}
        {item.children && displayInitIcon && (
          <img
            onSelect={(e) => e.preventDefault()}
            className={toggleInitialClassName}
            src={down}
            alt=""
            onClick={changeToggle}
          />
        )}

        {/*占位符*/}
        {!item.children && (
          <img
            onSelect={(e) => e.preventDefault()}
            className={toggleInitialClassName}
            src={down}
            alt=""
          />
        )}

        {item.children && !displayInitIcon && (
          <img
            onSelect={(e) => e.preventDefault()}
            className={toggleClassName}
            src={down}
            alt=""
            onClick={changeToggle}
          />
        )}

        {checkable && (
          <input
            ref={inputRef}
            type="checkbox"
            className="yc-tree-checkbox"
            onChange={onChange}
            checked={isCheckedBox}
          />
        )}
        <span className="yc-tree-checkbox-text">{item.text}</span>
      </div>

      <Transition in={expanded} timeout={150} wrapper animation="zoom-in-top">
        {item.children?.map((sub) => (
          <TreeItem
            key={sub.value}
            item={sub}
            level={level + 1}
            onItemChange={onItemChange}
            treeProps={treeProps}
          />
        ))}
      </Transition>
    </div>
  );
};

export default TreeItem;

function collectChildrenValues(item: SourceDataItem): string[] {
  return flatten(
    item.children?.map((i) => [i.value, collectChildrenValues(i)])
  );
}

function flatten(array?: RecursiveArray<string>): string[] {
  if (!array) {
    return [];
  }
  return array.reduce<string[]>(
    (result, current) =>
      result.concat(typeof current === "string" ? current : flatten(current)),
    []
  );

  // const result = [];
  // for (let i = 0; i < array.length; i++) {
  //   if (array[i] instanceof Array) {
  //     result.push(...flatten(array[i] as RecursiveArray<string>));
  //   } else {
  //     result.push(array[i] as string);
  //   }
  // }
  // return result;
}

function intersect<T>(array1: T[], array2: T[]): T[] {
  const result: T[] = [];
  for (let i = 0; i < array1.length; i++) {
    if (array2.indexOf(array1[i]) >= 0) {
      result.push(array1[i]);
    }
  }
  return result;
}
