import React, { Component } from "react";
// withHeaderAndFooter<T>(Component: React.ComponentType<T>)
const hoc = (WrappedComponent: React.ComponentClass<HocComParam>, api: string) => {
  return class extends Component<any, any> {
    constructor(props:any){
      super(props)
      this.state = {
        query: {
          aId: '',
          bId: '',
          aName: '',
          bName: '',
        },
        dataSource: []
      }
  }
    


    onChange = (params: any) => {
      this.setState((state: { query: any; }) => ({
        query: {
          ...state.query,
          ...params
        }
      }))
      // 请求接口  得到data
      const data: [] = []
      setTimeout(() => {
        this.setState({dataSource: [...data]})
      }, 3000);
    }

    componentDidMount() {
      this.onChange(this.state.query);
    }

    render() {
      // console.log('hoc', this.state)
      return <WrappedComponent {...this.props} {...this.state} onChange={this.onChange} />
    }
  }
}

export default hoc;