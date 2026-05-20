import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import logo from "../photos/logofull.png";

const SalaryReport = () => {
  const [allSalary, setAllSalary] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedMonth = queryParams.get("month");

  useEffect(() => {
    // Pure Frontend System: Read data directly from local storage instead of backend API
    const savedSalaries = localStorage.getItem("s2s_salaries");
    const salaries = savedSalaries ? JSON.parse(savedSalaries) : [];

    if (selectedMonth && salaries.length > 0) {
      const filteredSalary = salaries.filter((item) => {
        const salaryDate = new Date(item.Date);
        const targetMonth = parseInt(selectedMonth.split("-")[1]) - 1;
        const targetYear = parseInt(selectedMonth.split("-")[0]);
        return (
          salaryDate.getMonth() === targetMonth &&
          salaryDate.getFullYear() === targetYear
        );
      });
      setAllSalary(filteredSalary);
    } else {
      setAllSalary(salaries);
    }
  }, [selectedMonth]);

  const salrycounts = {
    totalcounts: allSalary.length,
  };

  const totalstudents = allSalary.reduce(
    (total, salary) => total + parseFloat(salary.AttendStudents || 0),
    0,
  );
  const totalfreecardAmount = allSalary.reduce(
    (total, salary) => total + parseFloat(salary.FreeCardAmount || 0),
    0,
  );
  const totalinstutitepayment = allSalary.reduce(
    (total, salary) => total + parseFloat(salary.InstitutePayment || 0),
    0,
  );
  const totalmothlysalry = allSalary.reduce(
    (total, salary) => total + parseFloat(salary.MonthlySalary || 0),
    0,
  );

  // PDF Document Configuration Styling — Step 2 Scientist Blueprint
  const styles = StyleSheet.create({
    page: {
      padding: 30,
      backgroundColor: "#ffffff",
    },
    headerSection: {
      borderBottomWidth: 2,
      borderBottomColor: "#063a67",
      paddingBottom: 12,
      marginBottom: 20,
      alignItems: "center",
    },
    logo: {
      width: 180,
      height: 55,
      marginBottom: 6,
    },
    academyName: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#063a67",
      letterSpacing: 1,
    },
    reportTitle: {
      fontSize: 11,
      color: "#555555",
      marginTop: 4,
    },
    tableHeader: {
      flexDirection: "row",
      backgroundColor: "#063a67",
      padding: 8,
      borderRadius: 4,
    },
    tableHeaderText: {
      color: "#ffffff",
      fontSize: 8,
      fontWeight: "bold",
      flex: 1,
      textAlign: "center",
    },
    row: {
      flexDirection: "row",
      borderBottomWidth: 1,
      borderBottomColor: "#e1e8ed",
      padding: 8,
      alignItems: "center",
    },
    cell: {
      flex: 1,
      fontSize: 8,
      color: "#333333",
      textAlign: "center",
    },
    statisticsContainer: {
      marginTop: 25,
      padding: 12,
      backgroundColor: "#f4f7f9",
      borderRadius: 4,
      borderLeftWidth: 5,
      borderLeftColor: "#063a67",
    },
    statisticsTitle: {
      fontSize: 11,
      fontWeight: "bold",
      color: "#063a67",
      marginBottom: 4,
    },
    statisticsText: {
      fontSize: 9,
      color: "#444444",
      marginTop: 2,
    },
  });

  const MyDocument = ({ allSalary }) => (
    <Document>
      <Page size="A4" orientation="landscape" style={styles.page}>
        <View style={styles.headerSection}>
          <Image src={logo} style={styles.logo} />
          <Text style={styles.academyName}>STEP 2 SCIENTIST ACADEMY</Text>
          <Text style={styles.reportTitle}>
            Teacher Salary Statement Report — {selectedMonth || "All Records"}
          </Text>
        </View>

        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>Teacher Name</Text>
          <Text style={styles.tableHeaderText}>Teacher ID</Text>
          <Text style={styles.tableHeaderText}>Subject</Text>
          <Text style={styles.tableHeaderText}>Grade</Text>
          <Text style={styles.tableHeaderText}>Students</Text>
          <Text style={styles.tableHeaderText}>Free Card Rs.</Text>
          <Text style={styles.tableHeaderText}>Institute Rs.</Text>
          <Text style={styles.tableHeaderText}>Month Salary</Text>
          <Text style={styles.tableHeaderText}>Date</Text>
        </View>

        {allSalary.length === 0 ? (
          <View style={{ padding: 20, textAlign: "center" }}>
            <Text style={{ fontSize: 10, color: "#888888" }}>
              No logs tracked for this specific pipeline.
            </Text>
          </View>
        ) : (
          allSalary.map((salary, index) => (
            <View key={index} style={styles.row}>
              <Text style={styles.cell}>{salary.TeacherName}</Text>
              <Text style={styles.cell}>{salary.TeacherID}</Text>
              <Text style={styles.cell}>{salary.SubjectName}</Text>
              <Text style={styles.cell}>{salary.Grade}</Text>
              <Text style={styles.cell}>{salary.AttendStudents}</Text>
              <Text style={styles.cell}>
                {parseFloat(salary.FreeCardAmount).toFixed(2)}
              </Text>
              <Text style={styles.cell}>
                {parseFloat(salary.InstitutePayment).toFixed(2)}
              </Text>
              <Text style={styles.cell}>
                {parseFloat(salary.MonthlySalary).toFixed(2)}
              </Text>
              <Text style={styles.cell}>{salary.Date}</Text>
            </View>
          ))
        )}

        <View style={styles.statisticsContainer}>
          <Text style={styles.statisticsTitle}>Salary Summary Insights</Text>
          <Text style={styles.statisticsText}>
            Total Users Tracked: {salrycounts.totalcounts}
          </Text>
          <Text style={styles.statisticsText}>
            Aggregate Total Students: {totalstudents}
          </Text>
          <Text style={styles.statisticsText}>
            Total Free Card Dispensation Amount: Rs.{" "}
            {totalfreecardAmount.toFixed(2)}
          </Text>
          <Text style={styles.statisticsText}>
            Total Institute Collection Margin: Rs.{" "}
            {totalinstutitepayment.toFixed(2)}
          </Text>
          <Text style={styles.statisticsText}>
            Total Disbursed Net Salary Pool: Rs. {totalmothlysalry.toFixed(2)}
          </Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <div className="font-sans p-5 ml-[315px] mb-5 scale-90">
      {/* Step 2 Scientist Premium Jumbotron */}
      <div className="w-[1250px] p-[25px] bg-[#e6eff6] text-[#063a67] rounded-[20px] text-center border-2 border-[#063a67] mx-auto flex flex-col items-center justify-center">
        <img src={logo} alt="S2S Logo" className="w-[180px] h-auto mb-1" />
        <h1 className="m-0 text-2xl font-bold">Teacher Salary Report</h1>
        <p className="text-sm text-gray-600 mt-1">
          {selectedMonth
            ? `Billing Term: ${selectedMonth}`
            : "All Consolidated Financial Batches"}
        </p>
      </div>

      {/* Document Downloader Framework Toolbar */}
      <div className="w-[1250px] mx-auto flex justify-end mt-6 mb-2">
        <PDFDownloadLink
          document={<MyDocument allSalary={allSalary} />}
          fileName={`S2S_Salary_Report_${selectedMonth || "all"}.pdf`}
          className="text-white cursor-pointer bg-[#063a67] text-center rounded-[12px] p-[10px_25px] outline-none transition-all duration-250 text-[15px] font-bold border-2 border-white hover:bg-gradient-to-r hover:from-[#da4a0c] hover:to-[#e60b45] hover:scale-105 shadow-md no-underline"
        >
          {({ loading, error }) =>
            loading
              ? "Assembling Ledger..."
              : error
                ? "Export Faulted"
                : "Download Salary PDF"
          }
        </PDFDownloadLink>
      </div>

      {/* Ledger Datatable Viewport */}
      <div className="w-[1250px] mx-auto mt-4 overflow-x-auto border-2 border-[#063a67] rounded-[15px] bg-white shadow-sm">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#063a67] text-white">
              <th className="p-4 text-left font-bold text-base">
                Teacher Name
              </th>
              <th className="p-4 text-left font-bold text-base">ID</th>
              <th className="p-4 text-left font-bold text-base">Subject</th>
              <th className="p-4 text-left font-bold text-base">Grade</th>
              <th className="p-4 text-left font-bold text-base">Students</th>
              <th className="p-4 text-left font-bold text-base">Free Card</th>
              <th className="p-4 text-left font-bold text-base">
                Institute Fee
              </th>
              <th className="p-4 text-left font-bold text-base">Net Salary</th>
              <th className="p-4 text-left font-bold text-base">Date</th>
            </tr>
          </thead>
          <tbody>
            {allSalary.length === 0 ? (
              <tr>
                <td
                  colSpan="9"
                  className="p-10 text-center text-gray-400 text-base"
                >
                  No audited financial entries documented for this workspace
                  cycle.
                </td>
              </tr>
            ) : (
              allSalary.map((salary, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 border-b border-gray-200 transition-colors"
                >
                  <td className="p-4 text-[14px] font-bold text-black">
                    {salary.TeacherName}
                  </td>
                  <td className="p-4 text-[14px] font-bold text-gray-600">
                    {salary.TeacherID}
                  </td>
                  <td className="p-4 text-[14px] font-bold text-black">
                    {salary.SubjectName}
                  </td>
                  <td className="p-4 text-[14px] font-bold text-black">
                    {salary.Grade}
                  </td>
                  <td className="p-4 text-[14px] font-bold text-center text-black">
                    {salary.AttendStudents}
                  </td>
                  <td className="p-4 text-[14px] font-bold text-red-600">
                    Rs. {parseFloat(salary.FreeCardAmount || 0).toFixed(2)}
                  </td>
                  <td className="p-4 text-[14px] font-bold text-blue-700">
                    Rs. {parseFloat(salary.InstitutePayment || 0).toFixed(2)}
                  </td>
                  <td className="p-4 text-[14px] font-bold text-green-600">
                    Rs. {parseFloat(salary.MonthlySalary || 0).toFixed(2)}
                  </td>
                  <td className="p-4 text-[13px] font-bold text-gray-500 whitespace-nowrap">
                    {salary.Date}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Step 2 Scientist Interactive Analytics Box Panels */}
      <div className="w-[1250px] mx-auto mt-8 p-6 bg-[#e6eff6] rounded-[20px] border-2 border-[#063a67]">
        <h2 className="text-xl font-bold text-[#063a67] mb-4 uppercase tracking-wide">
          System Financial Overview
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-center">
            <p className="text-xs text-gray-400 font-bold uppercase">
              Total Users
            </p>
            <p className="text-xl font-bold text-black mt-1">
              {salrycounts.totalcounts}
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-center">
            <p className="text-xs text-gray-400 font-bold uppercase">
              Total Students
            </p>
            <p className="text-xl font-bold text-[#063a67] mt-1">
              {totalstudents}
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-center">
            <p className="text-xs text-gray-400 font-bold uppercase">
              Free Card Pool
            </p>
            <p className="text-xl font-bold text-red-600 mt-1">
              Rs. {totalfreecardAmount.toFixed(0)}
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-center">
            <p className="text-xs text-gray-400 font-bold uppercase">
              Institute Share
            </p>
            <p className="text-xl font-bold text-blue-700 mt-1">
              Rs. {totalinstutitepayment.toFixed(0)}
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-center">
            <p className="text-xs text-gray-400 font-bold uppercase">
              Net Salary Pool
            </p>
            <p className="text-xl font-bold text-green-600 mt-1">
              Rs. {totalmothlysalry.toFixed(0)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalaryReport;
