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
import logo from "../../../assets/step2 scientist logo.jpeg";

const UserReport = () => {
  const [allusers, setAllUsers] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedMonth = queryParams.get("month");

  // Integration: Backend se data fetch karne ka function
  const fetchUsers = async () => {
    try {
      // Backend route jo port 3000 par data provide kar raha hai
      const response = await axios.get("http://localhost:3000/api/students/getstudents");
      const studentsList = response.data.data || response.data;

      if (selectedMonth) {
        const targetMonth = parseInt(selectedMonth.split("-")[1]) - 1;
        const targetYear = parseInt(selectedMonth.split("-")[0]);

        const filteredUsers = studentsList.filter((user) => {
          const userDate = user.createdAt ? new Date(user.createdAt) : new Date();
          return (
            userDate.getMonth() === targetMonth && 
            userDate.getFullYear() === targetYear
          );
        });
        setAllUsers(filteredUsers);
      } else {
        setAllUsers(studentsList);
      }
    } catch (error) {
      console.error("Data ingestion error:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [selectedMonth]);

  const usercounts = { totalcounts: allusers.length };

  // PDF Styles & Document (Same as before, sirf data mapping update ki hai)
  const styles = StyleSheet.create({
    page: { padding: 40, backgroundColor: "#ffffff" },
    row: { flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#e5e7eb", alignItems: "center", minHeight: 30, paddingVertical: 6 },
    tableHeader: { flexDirection: "row", borderBottomWidth: 2, borderBottomColor: "#063a67", backgroundColor: "#f8fafc", paddingVertical: 6 },
    headerText: { fontSize: 18, fontWeight: "bold", color: "#063a67", textAlign: "center", marginBottom: 20 },
    headerCell: { flex: 1, fontSize: 10, fontWeight: "bold", color: "#1e293b" },
    cell: { flex: 1, fontSize: 9, color: "#475569" },
    logo: { alignSelf: "center", width: 180, height: 55, marginBottom: 10 },
  });

  const MyDocument = ({ allusers }) => (
    <Document>
      <Page size="A4" style={styles.page}>
        <Image src={logo} style={styles.logo} />
        <Text style={styles.headerText}>Student Enrollment Report - {selectedMonth || "All"}</Text>
        <View style={styles.tableHeader}>
          <Text style={styles.headerCell}>Name</Text>
          <Text style={styles.headerCell}>Phone</Text>
          <Text style={styles.headerCell}>Grade</Text>
          <Text style={styles.headerCell}>ID</Text>
        </View>
        {allusers.map((u, i) => (
          <View key={i} style={styles.row}>
            <Text style={styles.cell}>{u.name}</Text>
            <Text style={styles.cell}>{u.contactnumber}</Text>
            <Text style={styles.cell}>{u.grade}</Text>
            <Text style={styles.cell}>{u.stdid}</Text>
          </View>
        ))}
      </Page>
    </Document>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-[#063a67]">User Enrollment Report</h1>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4">Name</th><th className="p-4">Phone</th><th className="p-4">Grade</th><th className="p-4">ID</th>
              </tr>
            </thead>
            <tbody>
              {allusers.map((u, i) => (
                <tr key={i} className="border-b">
                  <td className="p-4">{u.name}</td>
                  <td className="p-4">{u.contactnumber}</td>
                  <td className="p-4">{u.grade}</td>
                  <td className="p-4">{u.stdid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <PDFDownloadLink document={<MyDocument allusers={allusers} />} fileName="user_report.pdf">
          {({ loading }) => <button className="mt-5 bg-[#063a67] text-white p-3 rounded-xl">{loading ? "Wait..." : "Download PDF"}</button>}
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default UserReport;