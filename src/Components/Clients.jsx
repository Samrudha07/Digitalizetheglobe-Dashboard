import React from "react";
import ClientCard from "./ClientCard";
import Header2 from "./Header2";


const Clients = () => {
  return (
    <div>
      <div className="w-full h-full overflow-auto">
        <div className="w-full overflow-x-auto">
          <Header2/>
          <div className="flex flex-col gap-8 w-max ">
            <div className="grid grid-cols-4 gap-y-4">
              <ClientCard btnColor="#FFF155" btnText="In Process" />
              <ClientCard btnColor="#7FDC7F" btnText="New" />
              <ClientCard btnColor="#7FDC7F" btnText="New" />
              <ClientCard btnColor="#FFF155" btnText="In Process" />
            </div>

            <div className="grid grid-cols-4 gap-4">
              <ClientCard btnColor="#7FDC7F" btnText="In Process" />
              <ClientCard btnColor="#7DB5FD" btnText="Active" />
              <ClientCard btnColor="#D083D6" btnText="In Process" />
              <ClientCard btnColor="#7DB5FD" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
