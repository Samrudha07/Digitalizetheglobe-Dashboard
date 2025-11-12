
import React from "react";
import myImage from "../Images/logocrm.png";

function Sidenav({selectedTab, setSelectedTab}) {
  const navData = [
    { btnName: "Dashboard", link: "/dashboard" },
    { btnName: "Clients", link: "/profile" },
    { btnName: "Subscription Plans", link: "/settings" },
    { btnName: "Leads", link: "/logout" },
    { btnName: "Reports & Analytic", link: "/logout" },
    { btnName: "Billing & Payments", link: "/logout" },
    { btnName: "Revenue", link: "/logout" },
    { btnName: "Maintenance & Tickets", link: "/logout" },
    {
      btnName: (
        <>
          User & Role
          <br />
          Management
        </>
      ),
      link: "/role-management",
    },
    { btnName: "Setting", link: "/logout" },
    { btnName: "Profile", link: "/logout" },
  ];

  return (
    <div className=" font-['DM_Sans']">
      <div className="pb-4 pl-6  ">
        <img src={myImage} alt="Logo" className="w-[147px] h-[63px]" />
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col space-y-1 text-start mt-4">
        {navData.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelectedTab(item.btnName)}
            className={`ml-2 px-4 py-2 pt-2 text-[15px] font-medium text-black text-left rounded-l-full  transition-all duration-300 
              hover:bg-white hover:shadow-sm hover:rounded-l-full ${
                item.btnName === selectedTab ? "bg-white shadow-sm" : ""
              }`}
          >
            {item.btnName}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Sidenav;
