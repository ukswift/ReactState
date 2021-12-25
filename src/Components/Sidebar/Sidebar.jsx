import React, { useState, useEffect, useContext } from "react";
import "./Sidebar.css";
import {Contexts} from "../../ContextAPI/Context";

import DatePicker from "react-datepicker";
import Form from "react-bootstrap/Form";
function Sidebar() {
  const { getConVal, setConVal, getKeyVal, setKeyVal } =
    useContext(Contexts);

    const url = "";
  const view = () => {
    console.log();
  };

  const handleA = (e) => {
    let temp = getConVal;

    console.log(e.target.value);
    if (temp.includes(e.target.value)) {
      temp = temp.filter((v) => v !== e.target.value);
    } else {
      temp.push(e.target.value);
    }
    console.log(temp);
    setConVal(temp);
  };

  useEffect(() => {
    // console.log(""),getVal;
  }, [getConVal]);

  const handleB = (e) => {
    console.log(e.target.checked);
  };

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  // const getCheckedVal = (data) =>{
  //   if(getVal.includes(data)){
  //     getVal = getVal.filter((e) => e !== data);
  //   }else {
  //     getVal.push(data);
  //   }
  // }

  return (
    <div>
      <div className="sidebar-header">
        <div className="lg:w-56 sidebar-bg-1 lg:block transition ease-in duration-700">
          <div className="flex items-center justify-center">
            <span className="text-4xl my-8 text-white font-semibold heading">
              <h1>Filter</h1>
            </span>
          </div>
          {/* Show date */}
          <div className="child">
            <div className="date">
              <h1 className="filter-header">Date</h1>
              <DatePicker
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => {
                  setDateRange(update);
                }}
                isClearable={true}
                className="customdatepicker"
              />
            </div>
            {/* Show toggle button */}
            <div className="pdf">
              <h1 className="filter-header">Yes No</h1>

              <Form>
                <Form.Check
                  className="custom-toggle"
                  type="switch"
                  id="custom-switch"
                  label="Yes"
                />
              </Form>
              {/* <ToggleButtonGroup type="checkbox" className="toggle-button">
                <ToggleButton id="tbg-btn-1" className="custom-toggle">
                  YES
                </ToggleButton>
                <ToggleButton id="tbg-btn-2" className="custom-toggle">
                  NO
                </ToggleButton>
              </ToggleButtonGroup> */}
            </div>

            {/* Show conference checkboxes */}

            <div className="conference">
              <h1 className="filter-header">Checkbox type 1</h1>

              <Form.Check
                className="customcheckbox"
                type="checkbox"
                id=""
                label="Value1"
                value="Value1"
                onChange={(e) => handleA(e)}
              />
              <Form.Check
                className="customcheckbox"
                type="checkbox"
                id=""
                label="Value2"
                value="Value2"
                onChange={(e) => handleA(e)}
              />
              <Form.Check
                className="customcheckbox"
                type="checkbox"
                id=""
                label="Value3"
                value="Value3"
                onChange={(e) => handleA(e)}
              />
              <Form.Check
                className="customcheckbox"
                type="checkbox"
                id=""
                label="Value4"
                value="Value4"
                onChange={(e) => handleA(e)}
              />
              <Form.Check
                className="customcheckbox"
                type="checkbox"
                id=""
                label="Value5"
                value="Value5"
                onChange={(e) => handleA(e)}
              />
              {/* <Form.Check
                className="customcheckbox"
                type="checkbox"
                id=""
                label="Value6"
                onChange={(e) => handleA(e)}
              />
              <Form.Check
                className="customcheckbox"
                type="checkbox"
                id=""
                label="Value7"
                onChange={(e) => handleA(e)}
              />
              <Form.Check
                className="customcheckbox"
                type="checkbox"
                id=""
                label="Value8"
                onChange={(e) => handleA(e)}
              />
              <Form.Check
                className="customcheckbox"
                type="checkbox"
                id=""
                label="Value9"
                onChange={(e) => handleA(e)}
              /> */}
            </div>

            {/* Show Keywords checkboxes */}

            <div className="keyword">
              <h1 className="filter-header">Checkbox type 2</h1>
              <Form.Check
                className="customcheckbox"
                type="checkbox"
                id=""
                label="Value"
                onChange={(e) => handleB(e)}
              />
              <Form.Check
                className="customcheckbox"
                type="checkbox"
                id=""
                label="Value"
                onChange={(e) => handleB(e)}
              />
              <Form.Check
                className="customcheckbox"
                type="checkbox"
                id=""
                label="Value"
                onChange={(e) => handleB(e)}
              />
              <Form.Check
                className="customcheckbox"
                type="checkbox"
                id=""
                label="Value"
                onChange={(e) => handleB(e)}
              />
              <Form.Check
                className="customcheckbox"
                type="checkbox"
                id=""
                label="Value"
                onChange={(e) => handleB(e)}
              />
              <Form.Check
                className="customcheckbox"
                type="checkbox"
                id=""
                label="Value"
                onChange={(e) => handleB(e)}
              />
              <Form.Check
                className="customcheckbox"
                type="checkbox"
                id=""
                label="Value"
                onChange={(e) => handleB(e)}
              />
              <Form.Check
                className="customcheckbox"
                type="checkbox"
                id=""
                label="Value"
                onChange={(e) => handleB(e)}
              />
              <Form.Check
                className="customcheckbox"
                type="checkbox"
                id=""
                label="Value"
                onChange={(e) => handleB(e)}
              />
              <Form.Check
                className="customcheckbox"
                type="checkbox"
                id=""
                label="Value"
                onChange={(e) => handleB(e)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
