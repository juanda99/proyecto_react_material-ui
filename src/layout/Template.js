import React, {Component} from 'react'

export default class Template extends Component {
  render() {
    return (
      <div>
        <header><h1>Sitio web de mis cervezas</h1></header>
        <main>{this.props.children}</main>
        <footer>Realizado por juanda</footer>
      </div>
    )
  }
}
