import React from 'react'
import style from './style.module.css'

export default function Card(props) {
  return (
    <div className={style.card}>
      {props.children}
    </div>
  )
}