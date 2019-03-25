import React from 'react'
import style from './style.module.css'

export default function HowTo() {
  return (
    <div className={style.howTo}>
      <div className={style.container}>
        <h2>How to Use This Library</h2>
        <p>This is a CSS Houdini Library. There are 3 steps to using it:</p>
        <ol>
          <li><span className={style.fileTag}>HTML</span> Register the worklet to the CSS interface: <code>CSS.paintWorklet.addModule('./&lt;WorkletFile&gt;.js')</code></li>
          <li><span className={style.fileTag}>HTML</span> Register the necessary custom properties: <code>&lt;script src='&lt;PropertiesFile&gt;.js'&gt;&lt;/script&gt;</code></li>
          <li><span className={style.fileTag}>CSS</span> Access the paint worklet with <code>background: paint(&lt;workletName&gt;);</code></li>
        </ol>
        <p>
          This is a WIP method! I'm working on figuring out the best way to include these as individual modules, but running into issues with the registration step and initializing the worklet as a module. Check back for more soon.
        </p>
      </div>
    </div>
  )
}