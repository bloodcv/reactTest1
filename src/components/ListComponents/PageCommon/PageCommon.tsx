import React from "react";
import SrchCom from "../SrchCom/SrchCom";
import TableCom from "../TableCom/TableCom";

const PageCommon = ({ query, dataSource, onChange, columns }: any) => {
  return (
    <>
      <SrchCom value={query} onChange={onChange} />
      <TableCom columns={columns} dataSource={dataSource} />
    </>
  );
};

export default PageCommon;
