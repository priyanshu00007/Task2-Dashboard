import React from 'react'
import style from "@/app/ui/login/login.module.css"
const page = () => {
  return (
    <div className={style.container}>
    <form action="" className={style.form}>
    <h1>Login</h1>
      <input type="text"  placeholder='username'/>
      <input type="password" placeholder='password' />
    <button>Login</button>
    </form>
   </div> 
  )
}

export default page