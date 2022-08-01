interface HocComParam {
  onChange?: (params: any) => void
}

interface IPageCListQuery {
  sguCode: string,
  sguId: string,
}

interface IPageCColumnsItem {
  name: string,
}

export type IchangeData = Partial<IPageCListQuery>

interface IOnchangeFn {
  (changeData: IchangeData): void;
}

interface WrapperComponentIProps {
  query: IPageCListQuery;
  onChange: IOnchangeFn;
}
