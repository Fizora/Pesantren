import { useState } from "react";
import Sidebar from "./Components/Sidebar.jsx";
import Navbar from "./Components/Navbar.jsx";
import Card from "./Components/Card.jsx";
import Charts from "./Components/Charts.jsx";
import { Chart as ChartJS, registerables } from "chart.js";
import { Chart } from "react-chartjs-2";
import { lazy, Suspense } from "react";

// Register all Chart.js components
ChartJS.register(...registerables);

function App() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const chartData = {
    labels: [
      "Naufal Rehan",
      "Muhammad Absyi",
      "Yellow",
      "Green",
      "Purple",
      "Orange",
    ],
    datasets: [
      {
        label: "Range Tertinggi",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: ["oklch(72.3% 0.219 149.579)"], // Single color for now
        borderColor: ["oklch(72.3% 0.219 149.579)"],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: "#ffffff" },
        grid: { display: false },
      },
      x: { ticks: { color: "#ffffff" }, grid: { display: false } },
    },
    plugins: { legend: { position: "top", labels: { color: "#ffffff" } } },
    responsive: true,
    maintainAspectRatio: false,
  };

  const modules = ["dashboard"]; // Dinamis berdasarkan manifest
  const DashboardComponent = lazy(() =>
    import("./modules/dashboard/components/Dashboard.jsx")
  );

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-900 text-white">
      <Sidebar>
        <Sidebar.Logo>
          <img src="/logo.png" alt="Logo" className="size-20" />
        </Sidebar.Logo>
        <Sidebar.Nav>
          <Sidebar.NavChil
            href="#"
            active={activeItem === "Dashboard"}
            onClick={() => setActiveItem("Dashboard")}
          >
            <LayoutGrid size={20} /> Dashboard
          </Sidebar.NavChil>
          {/* Tambahkan NavChil lain sesuai kebutuhan */}
        </Sidebar.Nav>
        <Sidebar.Account>
          <div className="p-4 text-black rounded-xl bg-green-500">
            <p>Powered By</p>
            <a href="https://ubig.co.id/" className="text-xl font-bold">
              FutureStack.Id
            </a>
          </div>
        </Sidebar.Account>
      </Sidebar>

      <div className="flex-1">
        <Navbar>
          <Navbar.Group>
            <Navbar.Brand>Dashboards</Navbar.Brand>
            <Navbar.RightNav>
              <a
                href="#"
                className="hover:bg-gray-800 p-2 rounded-md duration-300"
              >
                Dashboards
              </a>
              <a
                href="#"
                className="hover:bg-gray-800 p-2 rounded-md duration-300"
              >
                Data Santri
              </a>
              <a
                href="#"
                className="hover:bg-gray-800 p-2 rounded-md duration-300"
              >
                Register Kartu
              </a>
              <a
                href="#"
                className="hover:bg-gray-800 p-2 rounded-md duration-300"
              >
                Akun Santri
              </a>
            </Navbar.RightNav>
          </Navbar.Group>
          <Navbar.LeftNav>
            <a href="">
              <Inbox />
            </a>
            <a href="">
              <HandHeart />
            </a>
            <a
              href=""
              className="rounded-md flex items-center gap-2 p-2 border border-gray-700"
            >
              Divisi Pendidikan <ChevronDown size={20} />
            </a>
          </Navbar.LeftNav>
        </Navbar>
        <div className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <div className="flex justify-between items-center">
                <div>
                  <Card.Title>Total Saldo</Card.Title>
                  <Card.Content>Rp. 245.468.800</Card.Content>
                </div>
                <DollarSign size={50} />
              </div>
            </Card>
            {/* Tambahkan kartu lain */}
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <DashboardComponent />
          </Suspense>
          <Charts>
            <Charts.Title>Ranking Saldo Santri</Charts.Title>
            <Charts.Data>
              <div className="h-48 sm:h-64 md:h-72">
                <Chart type="bar" data={chartData} options={chartOptions} />
              </div>
            </Charts.Data>
          </Charts>
        </div>
      </div>
    </div>
  );
}

export default App;
