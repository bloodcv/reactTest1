import { IOnchangeFn, IPageCColumnsItem, IPageCListQuery } from "@/type/data";
import React, { ReactElement } from "react";
import SearchCom from "../SearchCom";
import TbCom from "../TbCom";

interface IProps {
  query: IPageCListQuery,
  columns: IPageCColumnsItem[],
  onChange: IOnchangeFn,
}

const PageCom: React.FC<IProps> = ({
  query,
  columns,
  onChange,
}): ReactElement => {
  return (
    <div className="page-com-wrap">
      <SearchCom onChange={onChange} query={query} />
      <TbCom />
    </div>
  )
}
export default PageCom;