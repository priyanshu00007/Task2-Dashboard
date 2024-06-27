import React from 'react'
import style from "./footer.module.css"
const footer = () => {
  return (
    <div className={style.container}>
      <div className={style.logo}>Lama dev</div>
      <div className={style.text}>@All Rights are reserved </div>
    </div>
  )
}

export default footer