import React, { Component } from 'react'
import Card from '../../Card'
import CardStyle from '../../Card/style.module.css'
const worklet = '/samples/superUnderline/worklet.js'
const properties = '/samples/superUnderline/properties.js'


export default class SuperUnderline extends Component {
  state = {
    number: 3,
    color: '#ff0000',
    spread: 20,
    width: 2
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
             '--extra-underlineColor': this.state.color,
             '--extra-underlineWidth': this.state.width,
             '--extra-underlineNumber': this.state.number,
             '--extra-underlineSpread': this.state.spread,
             background: 'paint(extra-superUnderline)'
            }}
            > extra.css </h1>
        </div>
        <ul className="customProps">
          <li>
            <label htmlFor="--extra-underlineNumber">--extra-underlineNumber:</label> <input type="number" value={this.state.number} id="--extra-underlineNumber" ref={this.number} onChange={e => this.setState({ number: e.target.value })}/>
          </li>
          <li>
            <label htmlFor="--extra-underlineWidth">--extra-underlineWidth:</label> <input type="number" value={this.state.width} id="--extra-underlineWidth" ref={this.width} onChange={e => this.setState({ width: e.target.value })}/>
          </li>
          <li>
            <label htmlFor="--extra-underlineColor">--extra-underlineColor:</label> <input type="color" value={this.state.color} id="--extra-underlineColor"
              onChange={e => this.setState({ color: e.target.value })} />
          </li>
          <li>
            <label htmlFor="--extra-underlineSpread">--extra-underlineSpread:</label> <input type="number" value={this.state.spread} id="--extra-underlineSpread" ref={this.spread} onChange={e => this.setState({ spread: e.target.value })}/>
          </li>
        </ul>
        <ul className={CardStyle.links}>
            <li><a href="https://github.com/una/extra.css/blob/master/samples/superUnderline/index.html">HTML</a></li>
            <li><a href="https://github.com/una/extra.css/blob/master/samples/superUnderline/worklet.js">Worklet</a></li>
            <li><a href="https://github.com/una/extra.css/blob/master/samples/superUnderline/properties.js">Custom Props</a></li>
            <li><a href="https://github.com/una/extra.css/blob/master/samples/superUnderline/style.css">CSS</a></li>
          </ul>
      </Card>
    )
  }
}