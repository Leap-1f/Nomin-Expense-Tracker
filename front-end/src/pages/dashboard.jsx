import { Header } from "../components/header";
export default function DashboardFunction() {
  return (
    <div className="max-w-screen  ">
      <Header></Header>

      <div>
        <div className="card-blue"></div>
        <div className="income"></div>
        <div className="expense"></div>
      </div>

      <div className="chart-data">
        <div className="income-graph"></div>
        <div className="expense-chart"></div>
      </div>

      <div className="last-record"></div>
    </div>
  );
}
