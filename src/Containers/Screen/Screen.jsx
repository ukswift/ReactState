import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Content from "../../Components/MainContent/Content";
import Navbar from "../../Components/Navbar/Navbar";
import Subnav from "../../Components/SubNavbar/Subnav";
import Sidenav from "../../Components/SideNav/Sidenav";
import DataContextProvider from "../../ContextAPI/Context";
import "./Screen.css";

function Screen() {
  return (
    <DataContextProvider>
      <div className="row navbar">
        <Navbar />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-4 col-sm-4">
            <Sidebar />
            {/* <Sidenav /> */}
          </div>
          <div className="col-10">
            <Subnav />
            <Content />
          </div>

          
        </div>
      </div>

      {/* <div className="containers">
                <div className="row">
                    <div className="nav-header">
                        <Navbar />
                    </div>
                </div>

                <div className="row">
                    <div className="col-2">
                        <Sidebar />
                    </div>

                    <div className="col-10">
                        <Subnav />
                        <Content />
                    </div>
                </div>
            </div> */}
    </DataContextProvider>
  );
}

export default Screen;
