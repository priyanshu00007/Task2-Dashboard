import React from 'react'
import style from "@/app/ui/dashboard/product/singleuser.module.css"
import { updateUser } from '@/app/lib/actions';
import {  fetchUsers } from '@/app/lib/data';

const Singleuserspage = async({params}) => {
const {id} = params;
const users = await fetchUsers(id);
  return (
    <div className={style.container}>
      <div className={style.infocontainer}>
        <div className={style.image}>
          <img
             src={users.img || "/noavatar.png"}
            className="img-fluid rounded-top"
            alt="image"
          />
        <p className={style.usersname}>{users.usersname}</p>
        </div>
      </div>
      <div className={style.formcontainer}>
        <form action={updateUser} className={style.form}>
          <label htmlFor="usersname">usersname</label>
          <input type="text" name='usersname' placeholder={users.username} />

          <label htmlFor="email">Email</label>
          <input type="email" name='email' placeholder={users.email} /> 

          <label htmlFor="password">Password</label>
          <input type="password" name='password' placeholder={users.password} /> 

          <label htmlFor="phone">Phone</label>
          <input type="number" name='phone' placeholder={users.phone} /> 

          <label htmlFor="address">Address</label>
          <textarea name='address' placeholder={users.address} rows="3"></textarea>

          <label htmlFor="isAdmin">Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected={users.isAdmin}>Yes</option>        
            <option value={false} selected={!users.isAdmin}>No</option>        
          </select>

          <label htmlFor="isActive">Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>        
            <option value={false}>No</option>        
          </select>
          
          <button type='submit'>SUBMIT</button>
        </form>
      </div>
    </div>
  )
}

export default Singleuserspage
