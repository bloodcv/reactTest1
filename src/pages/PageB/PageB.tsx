import hoc from "@/components/ListComponents/HocList/HocList";
import React, { Component } from "react";

class PageA extends Component {
  render() {
    return (
      <h2>PageA</h2>
    )
  }
}

export default hoc(PageA, '/api/A');