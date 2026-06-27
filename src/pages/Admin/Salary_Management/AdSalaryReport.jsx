import React, { useEffect, useState } from "react";
import axios from "axios";
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

  // Fetching Data from Database
  const fetchSalaries = async () => {
    try {
      // Port 3000 update kar diya gaya hai
      const response = await axios.get("http://localhost:3000/api/salaries/getsalaries");
      const salaries = response.data.data || response.data;

      if (selectedMonth) {
        const targetMonth = parseInt(selectedMonth.split("-")[1]) - 1;
        const targetYear = parseInt(selectedMonth.split("-")[0]);

        const filtered = salaries.filter((item) => {
          const rawDate = item.Date || item.date;
          if (!rawDate) return false;
          const salaryDate = new Date(rawDate);
          return (
            salaryDate.getMonth() === targetMonth &&
            salaryDate.getFullYear() === targetYear
          );
        });
        setAllSalary(filtered);
      } else {
        setAllSalary(salaries);
      }
    } catch (error) {
      console.error("Error fetching salary data:", error);
    }
  };

  useEffect(() => {
    fetchSalaries();
  }, [selectedMonth]);

  // Calculations
  const salaryCounts = { totalcounts: allSalary.length };
  const totalstudents = allSalary.reduce((total, s) => total + parseFloat(s.AttendStudents || s.attendStudents || 0), 0);
  const totalfreecardAmount = allSalary.reduce((total, s) => total + parseFloat(s.FreeCardAmount || s.freeCardAmount || 0), 0);
  const totalinstutitepayment = allSalary.reduce((total, s) => total + parseFloat(s.InstitutePayment || s.institutePayment || 0), 0);
  const totalmothlysalry = allSalary.reduce((total, s) => total + parseFloat(s.MonthlySalary || s.monthlySalary || 0), 0);

  const styles = StyleSheet.create({
    page: { padding: 30, backgroundColor: "#ffffff" },
    headerSection: { borderBottomWidth: 2, borderBottomColor: "#063a67", paddingBottom: 12, marginBottom: 20, alignItems: "center" },
    logo: { width: 180, height: 55, marginBottom: 6 },
    academyName: { fontSize: 18, fontWeight: "bold", color: "#063a67" },
    tableHeader: { flexDirection: "row", backgroundColor: "#063a67", padding: 8, borderRadius: 4 },
    tableHeaderText: { color: "#ffffff", fontSize: 8, fontWeight: "bold", flex: 1, textAlign: "center" },
    row: { flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#e1e8ed", padding: 8, alignItems: "center" },
    cell: { flex: 1, fontSize: 8, color: "#333333", textAlign: "center" },
    statisticsContainer: { marginTop: 25, padding: 12, backgroundColor: "#f4f7f9", borderRadius: 4, borderLeftWidth: 5, borderLeftColor: "#063a67" },
    statisticsTitle: { fontSize: 11, fontWeight: "bold", color: "#063a67" },
    statisticsText: { fontSize: 9, color: "#444444", marginTop: 2 }
  });

  const MyDocument = ({ allSalary }) => (
    <Document>
      <Page size="A4" orientation="landscape" style={styles.page}>
        <View style={styles.headerSection}>
          <Image src={logo} style={styles.logo} />
          <Text style={styles.academyName}>STEP 2 SCIENTIST ACADEMY</Text>
        </View>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>Name</Text>
          <Text style={styles.tableHeaderText}>ID</Text>
          <Text style={styles.tableHeaderText}>Subject</Text>
          <Text style={styles.tableHeaderText}>Salary</Text>
        </View>
        {allSalary.map((s, i) => (
          <View key={i} style={styles.row}>
            <Text style={styles.cell}>{s.TeacherName || s.teacherName}</Text>
            <Text style={styles.cell}>{s.TeacherID || s.teacherID}</Text>
            <Text style={styles.cell}>{s.SubjectName || s.subjectName}</Text>
            <Text style={styles.cell}>{s.MonthlySalary || s.monthlySalary}</Text>
          </View>
        ))}
      </Page>
    </Document>
  );

  return (
    <div className="font-sans p-5 ml-[315px] mb-5">
      <div className="w-[1250px] mx-auto text-center p-5 bg-[#e6eff6] rounded-[20px] border-2 border-[#063a67]">
        <h1 className="text-2xl font-bold text-[#063a67]">Teacher Salary Report</h1>
        <p>{selectedMonth ? `Billing Term: ${selectedMonth}` : "All Records"}</p>
      </div>

      <div className="w-[1250px] mx-auto mt-6">
        <PDFDownloadLink document={<MyDocument allSalary={allSalary} />} fileName="salary_report.pdf" className="bg-[#063a67] text-white p-3 rounded">
          {({ loading }) => (loading ? "Loading..." : "Download Salary PDF")}
        </PDFDownloadLink>
      </div>

      <div className="w-[1250px] mx-auto mt-4 overflow-x-auto border-2 border-[#063a67] rounded-[15px] bg-white">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#063a67] text-white">
              <th className="p-4">Name</th><th className="p-4">ID</th><th className="p-4">Subject</th><th className="p-4">Net Salary</th>
            </tr>
          </thead>
          <tbody>
            {allSalary.map((s, i) => (
              <tr key={i} className="border-b">
                <td className="p-4 text-center">{s.TeacherName || s.teacherName}</td>
                <td className="p-4 text-center">{s.TeacherID || s.teacherID}</td>
                <td className="p-4 text-center">{s.SubjectName || s.subjectName}</td>
                <td className="p-4 text-center">{s.MonthlySalary || s.monthlySalary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalaryReport;