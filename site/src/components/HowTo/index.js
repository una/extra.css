import React from 'react'
import style from './style.module.css'
import CardStyle from '../Card/style.module.css'

export default function HowTo() {
  return (
    <div className={style.howTo}>
      <div className={style.container}>
        <h2>How to Use This Library</h2>
        <p>We're currently using <a href="https://unpkg.com/">unpkg</a> to serve these files. There is no build step requirement, but remember this is experimental and will not work in all browsers.</p>
        <p>There are 2 steps to using it:</p>
        <ol>
          <li><span className={style.fileTag}>HTML</span> Include the worklet and custom properties file <code>&lt;script src='&lt;packageName&gt;'&gt;&lt;/script&gt;</code></li>
          <li><span className={style.fileTag}>CSS</span> Access the paint worklet with <code>background: paint(&lt;workletName&gt;);</code></li>
        </ol>
        <p>
          The URLs are in the following format: <code>https://unpkg.com/extra.css/&lt;packageName&gt;.js</code>You can grab any of the proper URLs by clicking on the links above for <strong className={CardStyle.cardAction}>CDN Link</strong>. If you go to this link your URL bar, you will automatically be linked to the latest version number of the JS package which includes all of the registered custom properties and the worklet. This is a link to the latest version (i.e. <code>https://unpkg.com/extra.css@1.1.0/&lt;PackageName&gt;.js</code>), but if you always want the evergreen latest version, you can skip the version number. The <strong className={CardStyle.cardAction}>Demo</strong> tab will open up an explanatory Codepen project with everything properly hooked up.
        </p>
        <p> 
          Here is an example of what your HTML and CSS could look like for the <code>Cross Out</code> example:
        </p>
        <iframe height="445" className={style.codepen} scrolling="no" title="Extra.CSS Example" src="//codepen.io/una/embed/WWPVjG/?height=428&theme-id=36749&default-tab=css,result" frameBorder="no" allowtransparency="true" allowFullScreen="true">
        See the Pen <a href='https://codepen.io/una/pen/WWPVjG/'>Extra.CSS Example</a> by Una Kravets
        (<a href='https://codepen.io/una'>@una</a>) on <a href='https://codepen.io'>CodePen</a>.
      </iframe>
        <p>This is a WIP proof of concept for Houdini Paint Modules! I'd love to have you contribute your thoughts on <a href="https://github.com/una/extra.css">Github</a>.</p>
      </div>
    </div>
  )
}