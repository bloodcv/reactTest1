import { IchangeData, IPageCListQuery, WrapperComponentIProps } from "@/type/data";
import React, { ReactElement, useState } from "react";

interface IProps {
  query: IPageCListQuery;
  api: string;
}

const HocFn = (WrapperComponent: React.FC<WrapperComponentIProps>, props: IProps): React.FC => {
  const HocCom: React.FC = (): ReactElement => {

    const [query, setQuery] = useState({ ...props.query });

    const onChange = (changeData: IchangeData): void => {
      setQuery(query => ({...query, ...changeData}))
    }

    return <WrapperComponent onChange={onChange} query={query} />
  }
  return HocCom
}

export default HocFn;