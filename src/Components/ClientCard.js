import React from "react";
import personimg from "../Images/person-img.png";
import dottedimg from "../Images/dotted-img.png";

function ClientCard({ btnColor, btnText }) {
  return (
    <section className="  w-['25%] ">
      <div className="w-[341px] h-[372px] bg-white shadow-md p-5 border border-[#D7E3FC] rounded-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-5">
            <img src={personimg} alt="person" className="w-[48px] h-[48px]" />
            <div>
              <h6 className="text-[16px] font-semibold text-center text-gray-800">
                Andrew Peterson
              </h6>
              <p className="text-[13px] text-left text-[#7F7F7F]">
                Today 10:30PM
              </p>
            </div>
          </div>
          <button>
            <img src={dottedimg} alt="dotted" className="w-[4px] h-[14px]" />
          </button>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-200 mb-2"></div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto text-gray-700 text-left ">
          <div className="flex flex-col text-[12px] text-[#1A1A1A] ">
            <div className="">
              <h6 className=" font-bold">Name</h6>
              <p className="  font-medium">Elias Thorne</p>
            </div>
            <div className="pt-2">
              <h6 className=" font-bold">Number</h6>
              <p className="font-medium ">(555) 123-4567</p>
            </div>
            <div className="pt-2">
              <h6 className=" font-bold">Email</h6>
              <p className="font-medium ">elias.thorne@fictionalmail.com</p>
            </div>
            <div className="pt-2">
              <h6 className=" font-bold">City</h6>
              <p className="font-medium ">Boulder, Colorado</p>
            </div>
            <div className="pt-2">
              <h6 className="font-bold">Pin Code</h6>
              <p className="font-medium ">80302</p>
            </div>
            <div className="flex items-center justify-between pt-2">
              <div>
                <h6 className=" font-bold">Monthly Electrical Bill</h6>
                <p>$115.50</p>
              </div>
              <button
                className={`py-2 px-5 rounded-lg text-gray-800 font-medium`}
                style={{ backgroundColor: btnColor }}
              >
                {btnText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientCard;
