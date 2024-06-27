import React from 'react'
import style from "./transaction.module.css"
const transaction = () => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>Latest Transactions</h2>
      <table className={style.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={style.userImage}>
              <img
                src="/noavatar.png"
                class="img-fluid rounded-top"
                alt=""
                width={40} height={40}
                className={style.userimage}
              />
                Jhon joe  
                </div>          
            </td>
            <td>
              <span className={`${style.status} ${style.pending}`} >Pending</span>
            </td>
            <td>14:02:2022</td>
            <td>$300</td>
          </tr>
          <tr>
            <td>
              <div className={style.userImage}>
              <img
                src="/noavatar.png"
                class="img-fluid rounded-top"
                alt=""
                width={40} height={40}
                className={style.userimage}
              />
                Jhon joe      
                </div>      
            </td>
            <td>
              <span className={`${style.status} ${style.Done}`} >Done</span>

            </td>
            <td>14:02:2022</td>
            <td>$300</td>
          </tr>
          <tr>
            <td>
              <div className={style.userImage}>
              <img
                src="/noavatar.png"
                class="img-fluid rounded-top"
                alt=""
                width={40} height={40}
                className={style.userimage}
              />
                Jhon joe   
                </div>         
            </td>
            <td>
              <span className={`${style.status} ${style.cancelled}`} >Cancelled</span>

            </td>
            <td>14:02:2022</td>
            <td>$300</td>
          </tr>
          <tr>
            <td>
              <div className={style.userImage}>
              <img
                src="/noavatar.png"
                class="img-fluid rounded-top"
                alt=""
                width={40} height={40}
                className={style.userimage}
              />
                Jhon joe    
                </div>        
            </td>
            <td>
              <span className={`${style.status} ${style.pending}`} >Pending</span>
            </td>
            <td>14:02:2022</td>
            <td>$300</td>
          </tr>
          <tr>
            <td>
              <div className={style.userImage}>
              <img
                src="/noavatar.png"
                class="img-fluid rounded-top"
                alt=""
                width={40} height={40}
                className={style.userimage}
              />
                Jhon joe   
                </div>         
            </td>
            <td>
              <span className={`${style.status} ${style.Done}`} >Done</span>
            </td>
            <td>14:02:2022</td>
            <td>$300</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default transaction