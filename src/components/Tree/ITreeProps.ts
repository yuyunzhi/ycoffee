export interface SourceDataItem {
  text: string;
  value: string;
  children?: SourceDataItem[];
}

export type ITreeProps = {
  sourceData: SourceDataItem[];
} & (
  | {
      multiple: true;
      selected: string[];
      onChange: (values: string[]) => void;
    }
  | {
      multiple?: false;
      selected: string;
      onChange: (values: string) => void;
    }
);

export interface ITreeItemProps {
  item: SourceDataItem;
  level: number;
  treeProps: ITreeProps;
  onItemChange: (values: string[]) => void;
}
