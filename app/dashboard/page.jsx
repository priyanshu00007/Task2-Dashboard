import Card from "../ui/dashboard/card/card";
import Transaction from "../ui/dashboard/transaction/transaction";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Chart from "../ui/dashboard/Chart/chart";
import style from "../ui/dashboard/dashboard.module.css";
const Homepage = () => {
  return (
    <div className={style.Wrapper}>
      <div className={style.main}>
        <div className={style.card}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transaction />
        <Chart />
      </div>
      <div className={style.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default Homepage;
