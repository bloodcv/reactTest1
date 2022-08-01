import { Button } from "antd";
import React, { Component } from "react";

class SrchCom extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      aId: '',
      aName: '',
    }
  }

  render() {
    console.log('srch', this.props, this.state);
    return (
      <>
        <Button type="primary" onClick={() => this.props.onChange({
          aId: new Date().getTime(),
          aName: '2',
        })}>SrchCom</Button>
      </>
    )
  }
}

export default SrchCom;