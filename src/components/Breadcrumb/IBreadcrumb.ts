import { CSSProperties, ReactChild } from "react";

export type Renderer = (
  item: IBreadcrumbItem,
  index: number,
  items: IBreadcrumbItem[]
) => ReactChild;

export interface IBreadcrumbItem {
  text: string;
  link: string;
}

export interface IProps {
  routes?: IBreadcrumbItem[];
  separator?: ReactChild;
  renderer?: Renderer;
  className?: string;
  style?: CSSProperties;
}
