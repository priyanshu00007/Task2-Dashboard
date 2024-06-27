import React from 'react'
import style from "./card.module.css"
import { MdSuperscript, MdSupervisedUserCircle } from 'react-icons/md'
const Card = () => {
  return (
    <div className={style.container}>
      <MdSupervisedUserCircle size={24}/>
      <div className={style.texts}>
        <span className={style.title}>Total users</span>
        <span className={style.numbers}>10.273
        </span>
        <span className={style.details}>
          <span className={style.positive}>12%</span>more percents
        </span>
      </div>
    </div>
  )
}

export default Card