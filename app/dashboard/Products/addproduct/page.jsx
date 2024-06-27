import React from 'react'
import style from "@/app/ui/dashboard/product/addProduct.module.css"
import { addProducts } from '@/app/lib/actions';
const addproductpage = () => {
  return (
    <div className={style.container}>
      <form action={addProducts} className={style.form}> 
        <input type="text" placeholder='title' name="title" required />
        <select name="cat" id="cat">
          <option value="general">general</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input type="number"  placeholder='price' name='price' />
        <input type="number" placeholder='stock'  name='stock' />
        <input type="text" placeholder='color'  name='color' />
        <input type="text" placeholder='size'  name='size' />
        <textarea name="desc" id="desc" rows="16" placeholder='Description'></textarea>
        <button type='submit'>SUBMIT</button>
      </form>
    </div>
  );
};

export default addproductpage 