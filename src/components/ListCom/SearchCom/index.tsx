import { IOnchangeFn, IPageCListQuery } from "@/type/data";
import { Button, Col, Input, InputRef, Row, Select, SelectProps } from "antd";
import React, { ReactElement, useRef } from "react";
import './index.less';

interface IProps {
  query: IPageCListQuery;
  onChange: IOnchangeFn;
}

const SearchCom: React.FC<IProps> = ({
  query,
  onChange,
}): ReactElement => {
  
  const sguCodeRef = useRef<InputRef | null>(null);

  const changeHandle = (): void => {
    onChange({
      sguCode: sguCodeRef!.current!.input!.value
    })
  }

  const handleChange = (value: any) => {
    console.log(value);
  }

  const options: SelectProps['options'] = [];
  for (let i = 0; i < 100000; i++) {
    const value = `${i.toString(36)}${i}`;
    options.push({
      label: value,
      value,
      disabled: i === 10,
    });
  }

  return (
    <div className="search-com-wrap">
      <Row className="row-part" gutter={[16, 16]}>
        <Col className="col-part" span={8}>
          <div className="col-content">
            <span className="label-span">SGU代码</span>
            <Input placeholder="Basic usage1" ref={sguCodeRef} />
          </div>
        </Col>
        <Col className="col-part" span={8}>
          <div className="col-content">
            <span className="label-span">SGU-ID</span>
            <Input placeholder="Basic usage2"/>
          </div>
        </Col>
        <Col className="col-part" span={8}>
          <div className="col-content">
            <span className="label-span">SGU-Sec</span>
            <Select
              mode="multiple"
              style={{ width: '100%' }}
              placeholder="Please select"
              onChange={handleChange}
              options={options}
            />
          </div>
        </Col>
        <Col className="col-part" span={8}>
          <div className="col-content col-act">
            <Button type="primary" onClick={changeHandle}>查询</Button>
          </div>
        </Col>
      </Row>
    </div>
  )
}
export default SearchCom;