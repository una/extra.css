import React, { Component } from 'react'
import Card from '../../Card'
import CardStyle from '../../Card/style.module.css'
const worklet = '/samples/scallopedBorder/worklet.js'
const properties = '/samples/scallopedBorder/properties.js'


export default class ScallopedBorder extends Component {
  state = {
    radius: 10,
    color: '#ff0000',
    weight: 2
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
        <div className={CardStyle.demoArea}>
          <h1 className={CardStyle.demoText} contentEditable style={{
             '--extra-scallopColor': this.state.color,
             '--extra-scallopWeight': this.state.weight,
             '--extra-scallopRadius': this.state.radius,
             background: 'paint(extra-scallopedBorder)'
            }}
            > extra.css </h1>
        </div>
        <ul className="customProps">
          <li>
            <label htmlFor="--extra-scallopRadius">--extra-scallopRadius:</label> <input type="number" value={this.state.radius} id="--extra-scallopRadius" ref={this.radius} onChange={e => this.setState({ radius: e.target.value })}/>
          </li>
          <li>
            <label htmlFor="--extra-scallopWeight">--extra-scallopWeight:</label> <input type="number" value={this.state.weight} id="--extra-scallopWeight" ref={this.weight} onChange={e => this.setState({ weight: e.target.value })}/>
          </li>
          <li>
            <label htmlFor="--extra-scallopColor">--extra-scallopColor:</label> <input type="color" value={this.state.color} id="--extra-scallopColor"
              onChange={e => this.setState({ color: e.target.value })} />
          </li>
        </ul>
        <ul className={CardStyle.links}>
            <li><a href="https://github.com/una/extra.css/blob/master/samples/scallopedBorder/index.html">HTML</a></li>
            <li><a href="https://github.com/una/extra.css/blob/master/samples/scallopedBorder/worklet.js">Worklet</a></li>
            <li><a href="https://github.com/una/extra.css/blob/master/samples/scallopedBorder/properties.js">Custom Props</a></li>
            <li><a href="https://github.com/una/extra.css/blob/master/samples/scallopedBorder/style.css">CSS</a></li>
          </ul>
      </Card>
    )
  }
}