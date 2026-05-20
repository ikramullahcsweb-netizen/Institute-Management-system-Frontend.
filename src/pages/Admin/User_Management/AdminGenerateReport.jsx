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
import logo from "../../../assets/step2 scientist logo.jpeg";

const UserReport = () => {
  const [allusers, setAllUsers] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedMonth = queryParams.get("month"); // Expected format: 'YYYY-MM'

  useEffect(() => {
    const fetchUsers = () => {
      try {
        // LocalStorage Mock Pipeline Layer
        const savedStudents = localStorage.getItem("s2s_students");
        const studentsList = savedStudents ? JSON.parse(savedStudents) : [];

        if (selectedMonth) {
          const targetMonth = parseInt(selectedMonth.split("-")[1]) - 1; // 0-indexed month

          const filteredUsers = studentsList.filter((user) => {
            // Agar aapke local objects mein 'createdAt' na ho, toh fallback default current date use karega
            const userDate = user.createdAt
              ? new Date(user.createdAt)
              : new Date();
            return userDate.getMonth() === targetMonth;
          });

          setAllUsers(filteredUsers);
        } else {
          setAllUsers(studentsList);
        }
      } catch (error) {
        console.error("Local data ingestion stream broken:", error);
      }
    };

    fetchUsers();
  }, [selectedMonth]);

  const usercounts = {
    totalcounts: allusers.length,
  };

  // PDF Render Document Architecture Styling Block
  const styles = StyleSheet.create({
    page: {
      padding: 40,
      backgroundColor: "#ffffff",
    },
    row: {
      flexDirection: "row",
      borderBottomWidth: 1,
      borderBottomColor: "#e5e7eb",
      alignItems: "center",
      minHeight: 30,
      paddingVertical: 6,
    },
    tableHeader: {
      flexDirection: "row",
      borderBottomWidth: 2,
      borderBottomColor: "#063a67",
      backgroundColor: "#f8fafc",
      alignItems: "center",
      minHeight: 35,
      paddingVertical: 6,
    },
    headerText: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#063a67",
      textAlign: "center",
      marginTop: 10,
      marginBottom: 20,
    },
    headerCell: {
      flex: 1,
      fontSize: 10,
      fontWeight: "bold",
      color: "#1e293b",
    },
    cell: {
      flex: 1,
      fontSize: 9,
      color: "#475569",
    },
    logo: {
      alignSelf: "center",
      width: 180,
      height: 55,
      marginBottom: 10,
    },
    statisticsContainer: {
      marginTop: 35,
      padding: 15,
      backgroundColor: "#f8fafc",
      borderRadius: 8,
      borderWidth: 1,
      borderColor: "#e2e8f0",
    },
    statisticsText: {
      fontSize: 12,
      fontWeight: "bold",
      color: "#063a67",
    },
  });

  // PDF Document Layout Module
  const MyDocument = ({ allusers }) => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          {logo && <Image src={logo} style={styles.logo} />}
          <Text style={styles.headerText}>
            Student Enrollment Report - {selectedMonth || "All Months"}
          </Text>
        </View>

        {/* Table Header Row */}
        <View style={styles.tableHeader}>
          <Text style={styles.headerCell}>Student Name</Text>
          <Text style={styles.headerCell}>Phone</Text>
          <Text style={styles.headerCell}>Grade</Text>
          <Text style={styles.headerCell}>Username</Text>
          <Text style={styles.headerCell}>Student ID</Text>
          <Text style={styles.headerCell}>Gender</Text>
        </View>

        {/* Table Body Mapping */}
        {allusers.map((user, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.cell}>{user.name || "N/A"}</Text>
            <Text style={styles.cell}>{user.contactnumber || "N/A"}</Text>
            <Text style={styles.cell}>{user.grade || "N/A"}</Text>
            <Text style={styles.cell}>{user.username || "N/A"}</Text>
            <Text style={styles.cell}>{user.stdid || "N/A"}</Text>
            <Text style={styles.cell}>{user.gender || "N/A"}</Text>
          </View>
        ))}

        {/* Summary Box */}
        <View style={styles.statisticsContainer}>
          <Text style={styles.statisticsText}>Summary Dashboard Metrics</Text>
          <Text
            style={[
              styles.statisticsText,
              { marginTop: 5, fontWeight: "normal", color: "#334155" },
            ]}
          >
            Total Records Compiled: {usercounts.totalcounts}
          </Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
        {/* Dashboard Action Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b-2 border-gray-100 pb-5 mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-[#063a67] m-0 tracking-tight">
              User Enrollment Report
            </h1>
            <p className="text-sm text-gray-500 font-medium mt-1">
              Current Batch Filter Profile:{" "}
              <span className="text-[#063a67] font-bold">
                {selectedMonth || "Global Unified Metrics"}
              </span>
            </p>
          </div>

          {/* Premium PDF Engine Controller Button */}
          <div className="inline-block">
            <PDFDownloadLink
              document={<MyDocument allusers={allusers} />}
              fileName={`User_Report_${selectedMonth || "all"}.pdf`}
            >
              {({ loading, error }) => (
                <button className="w-full md:w-auto bg-[#063a67] hover:bg-gradient-to-r hover:from-[#da4a0c] hover:to-[#e60b45] text-white px-6 py-3 rounded-xl text-sm font-bold shadow-md transition-all duration-200 hover:scale-105 cursor-pointer border-none outline-none">
                  {loading
                    ? "Compiling Document Streams..."
                    : error
                      ? "PDF Stream Error"
                      : "📥 Download Premium PDF"}
                </button>
              )}
            </PDFDownloadLink>
          </div>
        </div>

        {/* Responsive Analytical Grid Data Grid View */}
        <div className="w-full overflow-x-auto rounded-xl border border-gray-200 shadow-inner mb-6">
          <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-4 font-bold text-gray-700 uppercase tracking-wider text-[12px] border-b border-gray-200"
                >
                  Student Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 font-bold text-gray-700 uppercase tracking-wider text-[12px] border-b border-gray-200"
                >
                  Phone Number
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 font-bold text-gray-700 uppercase tracking-wider text-[12px] border-b border-gray-200"
                >
                  Grade Level
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 font-bold text-gray-700 uppercase tracking-wider text-[12px] border-b border-gray-200"
                >
                  Username
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 font-bold text-gray-700 uppercase tracking-wider text-[12px] border-b border-gray-200"
                >
                  Student ID
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 font-bold text-gray-700 uppercase tracking-wider text-[12px] border-b border-gray-200"
                >
                  Gender
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              {allusers.length > 0 ? (
                allusers.map((user, index) => (
                  <tr
                    key={index}
                    className="hover:bg-blue-50/30 transition-colors"
                  >
                    <td className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap">
                      {user.name || "—"}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-600">
                      {user.contactnumber || "—"}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#063a67] border border-blue-100">
                        Grade {user.grade || "—"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600 font-mono text-xs">
                      {user.username || "—"}
                    </td>
                    <td className="px-6 py-4 text-[#063a67] font-bold font-mono">
                      {user.stdid || "—"}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-bold ${user.gender === "Male" ? "bg-green-50 text-green-700" : "bg-purple-50 text-purple-700"}`}
                      >
                        {user.gender || "—"}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="px-6 py-12 text-center text-sm font-semibold text-gray-400"
                  >
                    No active student enrollment matrices recorded for this
                    specific time block.
                  </td>
                  end
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer Insight Analytics Panel */}
        <div className="flex justify-between items-center p-4 bg-[#e6eff6] rounded-xl border border-blue-100">
          <p className="text-[#063a67] font-bold m-0 text-sm tracking-wide uppercase">
            Core System Metrics Summary
          </p>
          <div className="bg-white px-4 py-2 rounded-lg border border-blue-200 shadow-sm">
            <p className="text-gray-600 font-semibold m-0 text-sm">
              Total Processed Students:{" "}
              <span className="text-[#063a67] text-base font-extrabold ml-1">
                {usercounts.totalcounts}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReport;
