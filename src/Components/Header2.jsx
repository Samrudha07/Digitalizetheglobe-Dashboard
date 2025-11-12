import React from "react";
import notification from "../Images/notification-01.png";
import profile from "../Images/profile-img.png";
import arrow from "../Images/arrow-down.png";
import downloadimg from "../Images/import-img.png";
import calendarimg from "../Images/calendar-img.png";
import searchimg from "../Images/search-img.png";
import filterimg from "../Images/filter2-img.png";
const Header2 = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-between ">
        <div className="flex items-center gap-6 w-[280px] h-[45px] bg-[#F1F1F1] rounded-full px-[16px] ">
          <img src={searchimg} alt="search" className="w-[17px] h-[17px]" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-[#6B6B6B] placeholder-[#7F7F7F] text-[12px] w-full font-poppins"
          />
        </div>

        <div className="flex flex-row items-center gap-4">
          <a href="" className="w-6 h-6">
            <img src={notification} alt="bell img" />
          </a>
          <a href="" className="w-10 h-10  ">
            <img src={profile} alt="profile img" />
          </a>
          <p className="text-[13px] text-[#000000]">Annie</p>
          <button>
            <img src={arrow} alt="arrow img" className="w-[18px] h-[18px]" />
          </button>
        </div>
      </div>
      <div className=" bg-slate-500 w-full h-[1px] mt-[20px]"></div>

      <div className=" bg-gray-200 mb-3 mt-[15px]"></div>
      <div className=" flex items-center justify-between mb-[20px] ">
        <h4 className="text-[24px] font-medium">Client</h4>
        <div className=" flex items-center gap-3">
          <button
            className="bg-[#F1F1F1] font-semibold text-[16px] w-[52px] h-[45px] rounded-xl 
             flex items-center justify-center hover:bg-[#E5E5E5] transition"
          >
            <img src={filterimg} alt="Filter" className="w-[18px] h-[18px]" />
          </button>

          <button className="flex items-center text-[16px] justify-center gap-6 bg-[#3887EE] text-white font-bold pt-[12px] pb-[14px] py-[10px] px-[24px] rounded-full">
            <span>Export</span>
            <img
              src={downloadimg}
              alt="download"
              className="w-[20px] h-[20px]"
            />
          </button>

          <button className="flex items-center justify-between gap-2 w-[144px] h-[45px] bg-[#F1F1F1] text-[#6B6B6B]  px-[16px] pt-[12px] pb-[14px] rounded-full">
            <span className="text-[#7F7F7F] font-bold ">Date</span>
            <img
              src={calendarimg}
              alt="calendar"
              className="w-[18px] h-[18px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header2;
