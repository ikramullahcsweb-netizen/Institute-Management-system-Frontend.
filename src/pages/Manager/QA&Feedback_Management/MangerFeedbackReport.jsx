import React, { useState } from "react";
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

function FeedbackReport() {
  // STATIC DATA
  const [allFeedbacks] = useState([
    {
      sid: "SID001",
      grade: "Grade 10",
      feedback: "Teacher explains very well.",
      date: "2026-05-10",
    },
    {
      sid: "SID002",
      grade: "Grade 9",
      feedback: "Need more practical sessions.",
      date: "2026-05-12",
    },
    {
      sid: "SID003",
      grade: "Grade 8",
      feedback: "Class timings are good.",
      date: "2026-05-15",
    },
  ]);

  const selectedMonth = "2026-05";

  // TOTAL
  const feedbackcounts = {
    totalfeedbacks: allFeedbacks.length,
  };

  // PDF STYLES
  const styles = StyleSheet.create({
    page: {
      padding: 30,
      backgroundColor: "#ffffff",
    },

    logo: {
      width: 180,
      height: 60,
      marginBottom: 20,
      alignSelf: "center",
    },

    title: {
      fontSize: 22,
      fontWeight: "bold",
      textAlign: "center",
      color: "#384D6C",
      marginBottom: 25,
    },

    tableHeader: {
      flexDirection: "row",
      backgroundColor: "#C9E8EA",
      border: "1px solid black",
      padding: 10,
    },

    tableRow: {
      flexDirection: "row",
      border: "1px solid black",
      padding: 10,
    },

    cell: {
      flex: 1,
      fontSize: 11,
    },

    stats: {
      marginTop: 25,
      fontSize: 14,
      fontWeight: "bold",
      color: "#384D6C",
    },
  });

  // PDF DOCUMENT
  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <Image src={logo} style={styles.logo} />

        <Text style={styles.title}>Feedback Report - {selectedMonth}</Text>

        {/* TABLE HEADER */}
        <View style={styles.tableHeader}>
          <Text style={styles.cell}>Student ID</Text>

          <Text style={styles.cell}>Grade</Text>

          <Text style={styles.cell}>Feedback</Text>

          <Text style={styles.cell}>Date</Text>
        </View>

        {/* TABLE ROWS */}
        {allFeedbacks.map((feedback, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.cell}>{feedback.sid}</Text>

            <Text style={styles.cell}>{feedback.grade}</Text>

            <Text style={styles.cell}>{feedback.feedback}</Text>

            <Text style={styles.cell}>{feedback.date}</Text>
          </View>
        ))}

        {/* TOTAL */}
        <Text style={styles.stats}>
          Total Feedbacks: {feedbackcounts.totalfeedbacks}
        </Text>
      </Page>
    </Document>
  );

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="ml-[270px]">
        {/* HEADER */}
        <div className="bg-[#C9E8EA] border-2 border-black rounded-3xl p-6 shadow-md mb-8">
          <h1 className="text-3xl font-bold text-[#384D6C]">
            Feedback Report - {selectedMonth}
          </h1>

          <p className="text-gray-700 mt-2">
            Download and view all feedback records.
          </p>

          {/* PDF BUTTON */}
          <div className="mt-6">
            <PDFDownloadLink
              document={<MyDocument />}
              fileName="feedback-report.pdf"
            >
              {({ loading }) => (
                <button className="bg-[#384D6C] hover:bg-[#1DB6D9] text-white font-bold px-6 py-3 rounded-2xl duration-300">
                  {loading ? "Loading PDF..." : "Download PDF"}
                </button>
              )}
            </PDFDownloadLink>
          </div>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto bg-white border-2 border-black rounded-3xl shadow-md">
          <table className="w-full">
            <thead className="bg-[#384D6C] text-white">
              <tr>
                <th className="p-4 text-left">Student ID</th>

                <th className="p-4 text-left">Grade</th>

                <th className="p-4 text-left">Feedback</th>

                <th className="p-4 text-left">Date</th>
              </tr>
            </thead>

            <tbody>
              {allFeedbacks.map((feedback, index) => (
                <tr key={index} className="border-b border-[#384D6C]">
                  <td className="p-4">{feedback.sid}</td>

                  <td className="p-4">{feedback.grade}</td>

                  <td className="p-4">{feedback.feedback}</td>

                  <td className="p-4">{feedback.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* TOTAL */}
        <div className="mt-6 bg-[#C9E8EA] border-2 border-black rounded-2xl p-4 w-fit">
          <h2 className="text-xl font-bold text-[#384D6C]">
            Total Feedbacks: {feedbackcounts.totalfeedbacks}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default FeedbackReport;
