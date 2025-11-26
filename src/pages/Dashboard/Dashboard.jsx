import StatsCard from "../../components/Dashboard/StatsCard/StatsCard";
import BarChartCard from "../../components/Dashboard/BarChartCard/BarChartCard";
import RevenueChart from "../../components/Dashboard/RevenueChart/RevenueChart";
import LocationMap from "../../components/Dashboard/LocationMap/LocationMap";
import ProductsTable from "../../components/Dashboard/ProductTable/ProductTable";
import TotalSales from "../../components/Dashboard/TotalSales/TotalSales";
import "./styles.scss";

const statsData = [
  { title: "Customers", value: "3,781", change: "+11.01%", highlight: true },
  { title: "Orders", value: "1,219", change: "-0.03%" },
  { title: "Revenue", value: "$695", change: "+15.03%" },
  { title: "Growth", value: "30.1%", change: "+6.08%" },
];

const Dashboard = () => {
  return (
    <div className="dashboard">


      <div className="band band--top">
        <div className="band__left--top">
          <div className="stats-grid">
            {statsData.map((s, i) => (
              <StatsCard key={i} {...s} />
            ))}
          </div>
        </div>

        <div className="band__right">
          <BarChartCard />
        </div>
      </div>


      <div className="band band--middle">
        <div className=" band__left--middle">
          <RevenueChart />
        </div>

        <div className="band__right">
          <LocationMap />
        </div>
      </div>


      <div className="band band--bottom">
        <div className="band__left band__left--bottom">
          <ProductsTable />
        </div>

        <div className="band__right">
          <TotalSales />
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
