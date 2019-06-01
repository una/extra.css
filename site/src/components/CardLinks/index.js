import React, {Component} from 'react'
import CardStyle from '../Card/style.module.css'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import classnames from 'classnames'

export default class CardLinks extends Component {
  state = {
    copied: ''
  }

  render(props) {
    return (
    <ul className={CardStyle.links}>
      <li><a className={CardStyle.cardAction} href={`https://codepen.io/una/pen/${this.props.penLink}`} target="_blank" rel="noopener noreferrer">Demo</a></li>
      <li>
        <CopyToClipboard text={`https://unpkg.com/extra.css/${this.props.name}.js`} onCopy={() => this.setState({copied: 'props'})}>
          <button className={classnames(CardStyle.cardAction, this.state.copied === 'props' && CardStyle.copied)}>CDN Link</button>
        </CopyToClipboard>
      </li>
    </ul>
  )
}
}