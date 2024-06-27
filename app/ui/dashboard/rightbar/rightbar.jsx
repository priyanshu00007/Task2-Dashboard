import React from 'react';
import style from './rightbar.module.css';
import { MdPlayCircleFilled } from 'react-icons/md';

const Rightbar = () => {
  return (
    <div className={style.container}>
      <div className={`${style.item} ${style.item1}`}>
        <div className={style.bgContainer}>
          {/* <img
            src="/astronaut.png"
            className={style.bg}
            alt="Astronaut"
          /> */}
        </div>
        <div className={style.texts}>
          <div className={style.notifications}>🔥 Available</div>
          <div className={style.title}>How to use the new version<br /> of admin dashboard?</div>
          <div className={style.subtitle}>Take $ mins to learn</div>
          <p className={style.desc}>
            Lorem ipsum dolor sit, amet consectetur<br /> adipisicing elit. Delectus natus enim repellat blanditiis dolore praesentium magnam accusantium libero dolorum ea, facilis, assumenda eveniet illum doloribus molestiae quod sapiente, velit eum?
          </p>
          <button className={style.button}>
            <MdPlayCircleFilled />
            Watch Now
          </button>
        </div>
      </div>

      {/* <div className={style.item}>
        <div className={style.bgContainer}>
        </div>
        <div className={style.texts}>
          <div className={style.notifications}>🔥 Available</div>
          <div className={style.title}>How to use the new version of admin dashboard?</div>
          <div className={style.subtitle}>Take $ mins to learn</div>
          <p className={style.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus natus enim repellat blanditiis dolore praesentium magnam accusantium libero dolorum ea, facilis, assumenda eveniet illum doloribus molestiae quod sapiente, velit eum?
          </p>
          <button className={style.button}>
            <MdPlayCircleFilled />
            Watch Now
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default Rightbar;
