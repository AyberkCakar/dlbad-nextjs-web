export interface ICheckboxList {
  data: ICheckboxListData[];
  title: string;
  defaultCheckedIds?: number[];
  disabled?: boolean;
  setCheckedIds: (checkedIds: number[]) => void;
}

export interface ICheckboxListData {
  id: number;
  name: string;
}
