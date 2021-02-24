import React, { ReactChild } from "react";
import { Renderer, IProps } from "./IBreadcrumb";

const renderItem: Renderer = (item, index, array) =>
  index === array.length - 1 ? (
    <span className="yc-breadcrumb-item" key={item.link}>
      {item.text}
    </span>
  ) : (
    <a className="yc-breadcrumb-link" href={item.link} key={item.link}>
      {item.text}
    </a>
  );

const Breadcrumb: React.FC<IProps> = (props) => {
  const { routes, renderer, separator } = props;
  const createSeparator = (key: string | number, separator: ReactChild) => (
    <span className="yc-breadcrumb-separator" key={key}>
      {separator}
    </span>
  );

  const addSeparator: (
    sum: ReactChild[],
    item: ReactChild,
    index: number,
    array: ReactChild[]
  ) => ReactChild[] = (sum, item, index, array) =>
    sum.concat(
      array[index + 1] ? [item, createSeparator(index, separator!)] : [item]
    );
  const content = routes
    ?.map<ReactChild>(renderer!)
    .reduce<ReactChild[]>(addSeparator, []);

  return <div className="yc-breadcrumb">{content}</div>;
};

Breadcrumb.displayName = "Breadcrumb";
Breadcrumb.defaultProps = {
  separator: "/",
  renderer: renderItem,
};
Breadcrumb.propTypes = {};
export default Breadcrumb;
