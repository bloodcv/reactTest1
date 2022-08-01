import hoc from "@/components/ListComponents/HocList/HocList";
import PageCommon from "@/components/ListComponents/PageCommon/PageCommon";
import React, { Component } from "react";

class PageA extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      colums: []
    }
  }

  render() {
    // console.log(this.props);
    return <PageCommon {...this.props} colums={this.state.colums} />
  }
}

export default hoc(PageA, '/api/A');