import React, { Component } from 'react'
import Card from '../../Card'
import CardLinks from '../../CardLinks'
import CardStyle from '../../Card/style.module.css'

export default class Confetti extends Component {
  state = {
    number: 30,
    lengthVariance: 15,
    weightVariance: 4
  }

  componentDidMount () {
    const workletScript = document.createElement("script")
    workletScript.src = `https://unpkg.com/extra.css/confetti.js`
    document.body.appendChild(workletScript)
  }

  render() {
    return (
      <Card>
        <h2 className={CardStyle.name}>Confetti</h2>
        <div className={CardStyle.demoArea}>
          <h1 className={CardStyle.demoText} contentEditable style={{
             '--extra-confettiNumber': this.state.number,
             '--extra-confettiLengthVariance': this.state.lengthVariance,
             '--extra-confettiWeightVariance': this.state.weightVariance,
             background: 'paint(extra-confetti)'
            }}
            > extra.css </h1>
        </div>
        <ul className={CardStyle.customProps}>
          <li>
            <label htmlFor="--extra-confettiNumber">--extra-confettiNumber:</label>
            <div>
              <div className={CardStyle.inputVal}>{this.state.number}</div>
              <input className={CardStyle.rangeSlider} type="range" value={this.state.number} id="--extra-confettiNumber" ref={this.number} onChange={e => this.setState({ number: e.target.value })}/>
            </div>
          </li>
          <li>
            <label htmlFor="--extra-confettiLengthVariance">--extra-confettiLengthVariance:</label>
            <div>
              <div className={CardStyle.inputVal}>
              {this.state.lengthVariance}</div>
              <input className={CardStyle.rangeSlider} min="1" max="30" type="range" value={this.state.lengthVariance} id="--extra-confettiLengthVariance"
                onChange={e => this.setState({ lengthVariance: e.target.value })} />
            </div>
          </li>
          <li>
            <label htmlFor="--extra-confettiWeightVariance">--extra-confettiWeightVariance:</label>
            <div>
              <div className={CardStyle.inputVal}>{this.state.weightVariance}</div>
              <input className={CardStyle.rangeSlider} type="range" min="1" max="10" value={this.state.weightVariance} id="--extra-confettiWeightVariance" ref={this.weightVariance} onChange={e => this.setState({ weightVariance: e.target.value })}/>
            </div>
          </li>
        </ul>
        <CardLinks name='sparkles' penLink='mgoXMO'/>
      </Card>
    )
  }
}