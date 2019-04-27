import React, { Component } from 'react'
import Card from '../../Card'
import CardLinks from '../../CardLinks'
import CardStyle from '../../Card/style.module.css'

const worklet = 'https://unpkg.com/extra.css/sparkles/worklet.js'
const properties = 'https://unpkg.com/extra.css/sparkles/properties.js'

export default class Sparkles extends Component {
  state = {
    number: 30,
    hue: Math.floor(Math.random() * 360),
    heightVariance: 9,
    widthVariance: 12,
    weightVariance: 2
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
        <h2 className={CardStyle.name}>Sparkles</h2>
        <div className={CardStyle.demoArea}>
          <h1 className={CardStyle.demoText} contentEditable style={{
             '--extra-sparkleHue': this.state.hue,
             '--extra-sparkleNumber': this.state.number,
             '--extra-sparkleWidthVariance': this.state.widthVariance,
             '--extra-sparkleHeightVariance': this.state.heightVariance,
             '--extra-sparkleWeightVariance': this.state.weightVariance,
             background: 'paint(extra-sparkles)'
            }}
            > extra.css </h1>
        </div>
        <ul className={CardStyle.customProps}>
          <li>
            <label htmlFor="--extra-sparkleNumber">--extra-sparkleNumber:</label>
            <div>
              <div className={CardStyle.inputVal}>{this.state.number}</div>
              <input className={CardStyle.rangeSlider} type="range" value={this.state.number} id="--extra-sparkleNumber" ref={this.number} onChange={e => this.setState({ number: e.target.value })}/>
            </div>
          </li>
          <li>
            <label htmlFor="--extra-sparkleHue">--extra-sparkleHue:</label>
            <div>
              <div className={CardStyle.inputVal}>{this.state.hue}</div>
              <input className={CardStyle.rangeSlider} type="range" min="0" max="360" value={this.state.hue} id="--extra-sparkleHue"
                onChange={e => this.setState({ hue: e.target.value })} />
              </div>
          </li>
          <li>
            <label htmlFor="--extra-sparkleWidthVariance">--extra-sparkleWidthVariance:</label>
            <div>
              <div className={CardStyle.inputVal}>{this.state.widthVariance}</div>
              <input className={CardStyle.rangeSlider} type="range" value={this.state.widthVariance} id="--extra-sparkleWidthVariance"
                onChange={e => this.setState({ widthVariance: e.target.value })} />
              </div>
          </li>
          <li>
            <label htmlFor="--extra-sparkleHeightVariance">--extra-sparkleHeightVariance:</label>
            <div>
              <div className={CardStyle.inputVal}>
              {this.state.heightVariance}</div>
              <input className={CardStyle.rangeSlider} type="range" value={this.state.heightVariance} id="--extra-sparkleHeightVariance"
                onChange={e => this.setState({ heightVariance: e.target.value })} />
            </div>
          </li>
          <li>
            <label htmlFor="--extra-sparkleWeightVariance">--extra-sparkleWeightVariance:</label>
            <div>
              <div className={CardStyle.inputVal}>{this.state.weightVariance}</div>
              <input className={CardStyle.rangeSlider} type="range" min="0" max="10" value={this.state.weightVariance} id="--extra-sparkleWeightVariance" ref={this.weightVariance} onChange={e => this.setState({ weightVariance: e.target.value })}/>
            </div>
          </li>
        </ul>
        <CardLinks name='sparkles' penLink='MRxgNN'/>
      </Card>
    )
  }
}