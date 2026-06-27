import React, { useEffect, useState } from "react";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import axios from "axios";
import logo from "../photos/logofull.png";

function FeedbackReport() {
  const [allFeedbacks, setAllFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const selectedMonth = "2026-05"; // Aap ise dynamic bhi kar sakte hain

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      // Backend se data fetch karein (Ensure route match karta ho)
      const response = await axios.get("http://localhost:3000/feedbacksShow");
      setAllFeedbacks(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  // PDF STYLES
  const styles = StyleSheet.create({
    page: { padding: 30, backgroundColor: "#ffffff" },
    logo: { width: 180, height: 60, marginBottom: 20, alignSelf: "center" },
    title: { fontSize: 22, fontWeight: "bold", textAlign: "center", color: "#384D6C", marginBottom: 25 },
    tableHeader: { flexDirection: "row", backgroundColor: "#C9E8EA", border: "1px solid black", padding: 10 },
    tableRow: { flexDirection: "row", border: "1px solid black", padding: 10 },
    cell: { flex: 1, fontSize: 11 },
    stats: { marginTop: 25, fontSize: 14, fontWeight: "bold", color: "#384D6C" },
  });

  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <Image src={logo} style={styles.logo} />
        <Text style={styles.title}>Feedback Report - {selectedMonth}</Text>
        
        <View style={styles.tableHeader}>
          <Text style={styles.cell}>Student ID</Text>
          <Text style={styles.cell}>Grade</Text>
          <Text style={styles.cell}>Feedback</Text>
          <Text style={styles.cell}>Date</Text>
        </View>

        {allFeedbacks.map((item, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.cell}>{item.sid || "N/A"}</Text>
            <Text style={styles.cell}>{item.grade}</Text>
            <Text style={styles.cell}>{item.feedback}</Text>
            <Text style={styles.cell}>{item.date}</Text>
          </View>
        ))}

        <Text style={styles.stats}>Total Feedbacks: {allFeedbacks.length}</Text>
      </Page>
    </Document>
  );

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="ml-[270px]">
        <div className="bg-[#C9E8EA] border-2 border-black rounded-3xl p-6 shadow-md mb-8">
          <h1 className="text-3xl font-bold text-[#384D6C]">Feedback Report - {selectedMonth}</h1>
          <div className="mt-6">
            {!loading && (
              <PDFDownloadLink document={<MyDocument />} fileName="feedback-report.pdf">
                {({ loading }) => (
                  <button className="bg-[#384D6C] hover:bg-[#1DB6D9] text-white font-bold px-6 py-3 rounded-2xl duration-300">
                    {loading ? "Preparing PDF..." : "Download PDF"}
                  </button>
                )}
              </PDFDownloadLink>
            )}
          </div>
        </div>

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
              {allFeedbacks.map((item, index) => (
                <tr key={index} className="border-b border-[#384D6C]">
                  <td className="p-4">{item.sid}</td>
                  <td className="p-4">{item.grade}</td>
                  <td className="p-4">{item.feedback}</td>
                  <td className="p-4">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 bg-[#C9E8EA] border-2 border-black rounded-2xl p-4 w-fit">
          <h2 className="text-xl font-bold text-[#384D6C]">Total Feedbacks: {allFeedbacks.length}</h2>
        </div>
      </div>
    </div>
  );
}

export default FeedbackReport;