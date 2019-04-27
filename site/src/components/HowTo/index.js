import React from 'react'
import style from './style.module.css'
import CardStyle from '../Card/style.module.css'

export default function HowTo() {
  return (
    <div className={style.howTo}>
      <div className={style.container}>
        <h2>How to Use This Library</h2>
        <p>We're currently using <a href="https://unpkg.com/">unpkg</a> to serve these files. There is no build step requirement, but you must register the worklet and its custom properties.</p>
        <p>There are 3 steps to using it:</p>
        <ol>
          <li><span className={style.fileTag}>HTML</span> Register the worklet to the CSS interface: <code>CSS.paintWorklet.addModule('&lt;WorkletFile&gt;')</code></li>
          <li><span className={style.fileTag}>HTML</span> Register the necessary custom properties: <code>&lt;script src='&lt;PropertiesFile&gt;'&gt;&lt;/script&gt;</code></li>
          <li><span className={style.fileTag}>CSS</span> Access the paint worklet with <code>background: paint(&lt;workletName&gt;);</code></li>
        </ol>
        <p>
          The URLs are in the following format: <code>https://unpkg.com/extra.css/&lt;PackageName&gt;/&lt;FileName&gt;</code>You can grab any of the proper URLs by clicking on the links above for <strong class={CardStyle.cardAction}>worklet link</strong> and <strong class={CardStyle.cardAction}>custom props link</strong>. The <strong class={CardStyle.cardAction}>Usage</strong> tab will open up an explanatory Codepen project with everything properly hooked up.
        </p>
        <p> 
          Here is an example of what your HTML and CSS could look like for the <code>Cross Out</code> example:
        </p>
        <iframe height="265" className={style.codepen} scrolling="no" title="Extra.CSS Example" src="//codepen.io/una/embed/WWPVjG/?height=265&theme-id=light&default-tab=css,result&editable=true" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/una/pen/WWPVjG/'>Extra.CSS Example</a> by Una Kravets
  (<a href='https://codepen.io/una'>@una</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
        <p>This is a WIP method! I'm working on figuring out the best way to include these as individual modules, but running into issues with the registration step and initializing the worklet as a module. Check back for more soon.
        </p>
      </div>
    </div>
  )
}