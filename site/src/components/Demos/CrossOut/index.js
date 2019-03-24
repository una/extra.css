import React, { Component } from 'react'
import Card from '../../Card'
import CardStyle from '../../Card/style.module.css'
import { randomHex } from '../../utils'

const worklet = '/samples/crossOut/worklet.js'
const properties = '/samples/crossOut/properties.js'


export default class CrossOut extends Component {
  state = {
    spread: 40,
    color: randomHex(),
    width: 4
  }

  componentDidMount () {
    const script1 = document.createElement("script")
    const script2 = document.createElement("script")

    script1.innerHTML = `if ('paintWorklet' in CSS) {
      CSS.paintWorklet.addModule('${worklet}');
    }`
    script1.async = true
    script2.src = properties
    script2.async = true

    document.body.appendChild(script1)
    document.body.appendChild(script2)
  }

  render() {
    return (
      <Card>
        <h2 className={CardStyle.name}>Cross-Out</h2>
        <div className={CardStyle.demoArea}>
          <h1 className={CardStyle.demoText} contentEditable style={{
             '--extra-crossColor': this.state.color,
             '--extra-crossWidth': this.state.width,
             '--extra-crossSpread': this.state.spread,
             background: 'paint(extra-crossOut)'
            }}
            > extra.css </h1>
        </div>
        <ul className={CardStyle.customProps}>
          <li>
            <label htmlFor="--extra-crossSpread">--extra-crossSpread:</label> <input type="number" value={this.state.spread} id="--extra-crossSpread" ref={this.spread} onChange={e => this.setState({ spread: e.target.value })}/>
          </li>
          <li>
            <label htmlFor="--extra-crossWidth">--extra-crossWidth:</label> <input type="number" value={this.state.width} id="--extra-crossWidth" ref={this.width} onChange={e => this.setState({ width: e.target.value })}/>
          </li>
          <li>
            <label htmlFor="--extra-crossColor">--extra-crossColor:</label> <input type="color" value={this.state.color} id="--extra-crossColor"
              onChange={e => this.setState({ color: e.target.value })} />
          </li>
        </ul>
        <ul className={CardStyle.links}>
            <li><a href="https://github.com/una/extra.css/blob/master/samples/crossOut/index.html">HTML</a></li>
            <li><a href="https://github.com/una/extra.css/blob/master/samples/crossOut/worklet.js">Worklet</a></li>
            <li><a href="https://github.com/una/extra.css/blob/master/samples/crossOut/properties.js">Custom Props</a></li>
            <li><a href="https://github.com/una/extra.css/blob/master/samples/crossOut/style.css">CSS</a></li>
          </ul>
      </Card>
    )
  }
}