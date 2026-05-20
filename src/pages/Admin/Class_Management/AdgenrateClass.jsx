 import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Head from '../../Admin/Header/Header';

function AdGenerate() {
  const [selectedMonth, setSelectedMonth] = useState("");
  const navigate = useNavigate();

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleGenerate = (event) => {
    event.preventDefault();
    if (selectedMonth) {
      navigate(`/adreportclass?month=${selectedMonth}`);
    }
  };

  return (
    <div>
      <Head />
      <div className="mainadgen">
        <div className="containergr">
          <h1 className="h1gr">Generate Report</h1>
          <form className="paygr" onSubmit={handleGenerate}>
            <div className="form-groupgr">
              <label htmlFor="from" className="label1gr">
                Select Month:
              </label>
              <input
                type="month"
                id="from"
                name="from"
                className="text1gr"
                value={selectedMonth}
                onChange={handleMonthChange}
                required
              />
            </div>
            <button type="submit" className="button7gr">
              Generate
            </button>
          </form>
        </div>
      </div>       
    </div>
  );
}

export default AdGenerate;