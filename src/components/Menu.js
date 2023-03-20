import React, { Component } from "react"

export default class Menu extends Component {
  constructor(props) {
    super(props)
    console.log(props.items)
  }

  render() {
    return <div>Hello from menu</div>
  }
}
