import React from "react";
import Sidenav from "../Components/Sidenav.jsx";
import ellipse from "../Images/ellipse-img.png";
import meterimg from "../Images/meter-img.png";
import filterimg from "../Images/filter-img.png";
import customerimgone from "../Images/customer-img-one.png";
import customerimgtwo from "../Images/customer-img-two.png";
import Clients from "./Clients.jsx";
import ViewReportCard from "./ViewReportCard.jsx";
import RevenueChart from "./Charts/RevenueChart.jsx";
import Header1 from "./Header1.jsx";
function Dashboard() {
  const [selectedTab, setSelectedTab] = React.useState("Dashboard");
  const customers = [
    {
      img: customerimgone,
      id: "#74568320",
      retained: "5 min ago",
      amount: "$10,000",
      status: "Member",
    },
    {
      img: customerimgtwo,
      id: "#7568510",
      retained: "10 min ago",
      amount: "$5000",
      status: "SignedUp",
    },
    {
      img: customerimgtwo,
      id: "#7568510",
      retained: "10 min ago",
      amount: "$5000",
      status: "SignedUp",
    },
    {
      img: customerimgtwo,
      id: "#7568510",
      retained: "10 min ago",
      amount: "$5000",
      status: "SignedUp",
    },
  ];
  return (
    <div className="flex min-h-screen bg-[radial-gradient(68.02%_68.02%_at_51.42%_0%,_#FFFFFF_0%,_#B3E1FF_50%,_#3887EE_100%)] p-6 pl-2 ">
      {/* Sidebar */}
      <aside classNSignedUpame="w-[17%] rounded-2xl  overflow-hidden">
        <Sidenav selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </aside>

      {/* Main Section */}
      <main className=" flex-1 bg-white rounded-3xl p-7 pl-10 overflow-x-hidden  ">
        {selectedTab === "Dashboard" && (
          <div>
            <Header1/>

            {/* Contents */}
            <div className="flex flex-col gap-6 ">
              {/* Top Grid Boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="grid grid-cols-2 gap-y-7 gap-x-2 max-w-[560px]  ">
                  <ViewReportCard title={"Total Leads"} />
                  <ViewReportCard title={"Active Leads"} />
                  <ViewReportCard title={"Subscription"} />
                  <ViewReportCard title={"Clients"} />
                </div>
                <div className="grid grid-cols-1  gap-7 w-full shadow-lg rounded-3xl">
                  <RevenueChart/>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-6">
                <div className="bg-white p-4 sm:p-6 rounded-3xl w-full lg:w-[65%] shadow-2xl">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-4 px-2 sm:px-4">
                    <h2 className="text-[18px] sm:text-[20px] font-semibold">
                      Recent Activity
                    </h2>
                    <a href="">
                      <img
                        src={filterimg}
                        className="w-[28px] sm:w-[35px] h-[28px] sm:h-[32px]"
                        alt="filter"
                      />
                    </a>
                  </div>

                  {/* Table */}
                  <div className="overflow-auto">
                    <table className="min-w-full text-left text-xs sm:text-sm border-collapse">
                      <thead className="text-[12px] sm:text-[13px] font-semibold">
                        <tr>
                          <th className="py-2 sm:py-3 px-2 sm:px-4">
                            Customer
                          </th>
                          <th className="py-2 sm:py-3 px-2 sm:px-4">Status</th>
                          <th className="py-2 sm:py-3 px-2 sm:px-4">
                            Customer ID
                          </th>
                          <th className="py-2 sm:py-3 px-2 sm:px-4">
                            Retained
                          </th>
                          <th className="py-2 sm:py-3 px-2 sm:px-4">Amount</th>
                        </tr>
                      </thead>

                      <tbody className="text-[12px] sm:text-[13px]">
                        {customers.map((item, index) => (
                          <tr key={index}>
                            <td className="py-2 px-2 sm:px-4">
                              <img
                                src={item.img}
                                alt={`Customer ${index + 1}`}
                                className="w-[140px] sm:w-[180px] h-[28px] sm:h-[32px]"
                              />
                            </td>

                            <td className="py-2 px-2 sm:px-4">
                              <button
                                className={`w-[65px] sm:w-[73px] h-[22px] sm:h-[25px] rounded-lg text-[10px] sm:text-[11px] font-medium text-center text-[#4E4E4E] ${
                                  {
                                    Member: "bg-[#FFF15599]",
                                    SignedUp: "bg-[#7FDC7F]",
                                    Inactive: "bg-red-200",
                                  }[item.status] || "bg-blue-200"
                                }`}
                              >
                                {item.status}
                              </button>
                            </td>

                            <td className="py-2 px-2 sm:px-4 text-[10px] sm:text-[11px]">
                              {item.id}
                            </td>
                            <td className="py-2 px-2 sm:px-4">
                              {item.retained}
                            </td>
                            <td className="py-2 px-2 sm:px-4">{item.amount}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Box 4 */}
                <div className="bg-white p-4 sm:p-6 rounded-3xl w-full lg:w-[35%] h-auto min-h-[321px] shadow-2xl">
                  <h2 className="text-[20px] sm:text-[20px] font-semibold  text-left">
                    Seals Navigator
                  </h2>

                  <div className="flex justify-between items-center pt-">
                    <div className="w-[214px] h-[220px] mx-auto">
                      <div className="relative w-full h-[180px] flex items-center justify-center">
                        {/* Ellipse background */}
                        <img
                          src={ellipse}
                          alt="ellipse"
                          className="absolute inset-0 w-full h-[80%] object-contain"
                        />

                        {/* Meter needle inside ellipse */}
                        <img
                          src={meterimg}
                          alt="meter needle"
                          className="relative w-[60px] h-[110px] object-contain translate-y-4"
                        />
                      </div>

                      {/* Text Section */}
                      <div className="text-[24px] font-bold text-center leading-tight mt-2">
                        <p>63%</p>
                        <p className="text-[13px] font-medium text-[#464646]">
                          Sales percentage
                        </p>
                      </div>
                    </div>

                    <div className="text-[13px] text-[#464646]">
                      <p>Online Store 60%</p>
                      <p>Offline Store 40%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Clientside bar */}
        {selectedTab === "Clients" && <Clients />}
      </main>
    </div>
  );
}

export default Dashboard;
