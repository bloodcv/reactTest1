import PageCom from "@/components/ListCom/PageCom";
import React, { ReactElement } from "react";
import HocFn from '@/components/ListCom/HocFn';
import { IPageCColumnsItem, IPageCListQuery, WrapperComponentIProps } from "@/type/data";

const query: IPageCListQuery = {
  sguCode: '',
  sguId: ''
}

const PageC: React.FC<WrapperComponentIProps> = ({
  query,
  onChange
}): ReactElement => {
  const columns: IPageCColumnsItem[] = []

  return <PageCom query={query} columns={columns} onChange={onChange} />
}

export default HocFn(PageC, {
  query,
  api: '/api/PageC'
});