import React, { Component } from 'react'
import style from './style.module.css'
// import worklet from '../../../../samples/crossOut/worklet.js'
// import properties from '../../../../samples/crossOut/properties.js'


export default class Card extends Component {
  state = {
    spread: 2,
    color: '#ff0000',
    weight: 2
  }

  // componentDidMount () {
  //   const script1 = document.createElement("script")
  //   const script2 = document.createElement("script")

  //   script1.src = worklet;
  //   script1.async = true;
  //   script2.src = properties;
  //   script2.async = true;

  //   document.body.appendChild(script1);
  //   document.body.appendChild(script2);
  // }

  render() {
    return (
      <div className={style.card}>
        <div className="demoArea">
          <h1 style={{
             color: this.state.color,
             '--extra-crossColor': this.state.color,
             '--extra-crossWeight': this.state.weight,
             '--extra-crossSpread': this.state.spread,
            }}
            > extra.css </h1>
        </div>
        <ul className="customProps">
          <li>
            <label htmlFor="--extra-crossSpread">--extra-crossSpread</label> <input type="number" value={this.state.spread} id="--extra-crossSpread" ref={this.spread} onChange={e => this.setState({ spread: e.target.value })}/>
          </li>
          <li>
            <label htmlFor="--extra-crossWeight">--extra-crossWeight</label> <input type="number" value={this.state.weight} id="--extra-crossWeight" ref={this.weight} onChange={e => this.setState({ weight: e.target.value })}/>
          </li>
          <li>
            <label htmlFor="--extra-crossColor">--extra-crossColor</label> <input type="color" value={this.state.color} id="--extra-crossColor"
              onChange={e => this.setState({ color: e.target.value })} />
          </li>
        </ul>
      </div>
    )
  }
}