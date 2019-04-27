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
      <li><a className={CardStyle.cardAction} href="#">Usage</a></li>
      <li>
        <CopyToClipboard text={`https://unpkg.com/extra.css/${this.props.name}/worklet.js`} onCopy={() => this.setState({copied: 'worklet'})}>
          <button className={classnames(CardStyle.cardAction, this.state.copied === 'worklet' && CardStyle.copied)}>Worklet Link</button>
        </CopyToClipboard>
      </li>
      <li>
        <CopyToClipboard text={`https://unpkg.com/extra.css/${this.props.name}/properties.js`} onCopy={() => this.setState({copied: 'props'})}>
          <button className={classnames(CardStyle.cardAction, this.state.copied === 'props' && CardStyle.copied)}>Custom Props Link</button>
        </CopyToClipboard>
      </li>
    </ul>
  )
}
}