import React from 'react';
import ThreeDots from '../Images/three-dots.png';
import GreenArrow from '../Images/green-up-arrow.png';
import WhiteArrowRight from '../Images/white-arrow-right.png';



const ViewReportCard = ({title=''}) => {
  return (
    <div className='max-w-[255px] rounded-3xl shadow-xl cursor-pointer hover:scale-105 transition-all duration-500 overflow-hidden'>
      <div className="p-5 pb-6 bg-white">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
             <p className="text-[16px] font-medium text-left text-[#464646] ">{title}</p>
              <img src={ThreeDots} alt="" className='w-6 h-6' />
          </div>
          <h4 className='font-medium text-left text-[24px]'>12,832</h4>
          <div className='flex items-baseline w-full'>
              <img src={GreenArrow} alt="" className='w-3.5 h-3.5' />
              <div className="flex justify-between w-full">
                 <p className="text-[16px] font-medium text-left text-[#0AAB06] ">+20.1%</p>
                 <p className="text-[16px] font-medium text-left text-[#464646] ">+2,123 today</p>
              </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between py-3 px-5 bg-[#3887EE] items-center w-full">
          <p className="text-[16px] font-medium text-left text-white ">View Report</p>
          <img src={WhiteArrowRight} alt="" className='w-5 h-5' />
      </div>
      
    </div>
  )
}

export default ViewReportCard
