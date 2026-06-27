import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import logo from '../photos/logofull.png';

const LessonReport = () => {
    const [allLessons, setAllLessons] = useState([]);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const selectedMonth = queryParams.get('month');

    // Integration: Database se data lane ka function
    const fetchLessons = async () => {
        try {
            // Yahan apne backend ka sahi URL den
            const response = await axios.get('http://localhost:5000/api/lessons/getlessons');
            const lessons = response.data.data || response.data;

            if (selectedMonth) {
                const targetMonth = parseInt(selectedMonth.split('-')[1]) - 1;
                const targetYear = parseInt(selectedMonth.split('-')[0]);
                
                const filtered = lessons.filter(lesson => {
                    const d = new Date(lesson.lesson_date);
                    return d.getMonth() === targetMonth && d.getFullYear() === targetYear;
                });
                setAllLessons(filtered);
            } else {
                setAllLessons(lessons);
            }
        } catch (error) {
            console.error("Data fetch error:", error);
        }
    };

    useEffect(() => {
        fetchLessons();
    }, [selectedMonth]);

    const lessonCounts = {
        totalStudents: allLessons.length,
        ict: allLessons.filter(l => l.subject_name === 'ICT').length,
        history: allLessons.filter(l => l.subject_name === 'History').length,
        commerce: allLessons.filter(l => l.subject_name === 'Commerce').length,
    };

    const styles = StyleSheet.create({
        page: { padding: 40, backgroundColor: '#ffffff' },
        headerSection: { borderBottomWidth: 2, borderBottomColor: '#063a67', paddingBottom: 15, marginBottom: 20, alignItems: 'center' },
        logo: { width: 200, height: 60, marginBottom: 8 },
        academyName: { fontSize: 20, fontWeight: 'bold', color: '#063a67' },
        tableHeader: { flexDirection: 'row', backgroundColor: '#063a67', padding: 10, borderRadius: 4, marginTop: 15 },
        tableHeaderText: { color: '#ffffff', fontSize: 10, fontWeight: 'bold', flex: 1 },
        row: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#e1e8ed', padding: 10, alignItems: 'center' },
        cell: { flex: 1, fontSize: 9, color: '#333333' },
        statisticsContainer: { marginTop: 30, padding: 15, backgroundColor: '#f4f7f9', borderRadius: 6, borderLeftWidth: 5, borderLeftColor: '#063a67' },
        statisticsTitle: { fontSize: 12, fontWeight: 'bold', color: '#063a67', marginBottom: 6 },
        statisticsText: { fontSize: 10, color: '#444444', marginTop: 2 }
    });

    const MyDocument = ({ allLessons }) => (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.headerSection}>
                    <Image src={logo} style={styles.logo} />
                    <Text style={styles.academyName}>STEP 2 SCIENTIST ACADEMY</Text>
                    <Text>Lesson Material Report — {selectedMonth || "All Months"}</Text>
                </View>
                <View style={styles.tableHeader}>
                    <Text style={styles.tableHeaderText}>Grade</Text>
                    <Text style={styles.tableHeaderText}>Subject</Text>
                    <Text style={styles.tableHeaderText}>Teacher</Text>
                    <Text style={styles.tableHeaderText}>Date</Text>
                    <Text style={styles.tableHeaderText}>Topic</Text>
                    <Text style={styles.tableHeaderText}>File Type</Text>
                </View>
                {allLessons.map((l, i) => (
                    <View key={i} style={styles.row}>
                        <Text style={styles.cell}>{l.grade}</Text>
                        <Text style={styles.cell}>{l.subject_name}</Text>
                        <Text style={styles.cell}>{l.teachername}</Text>
                        <Text style={styles.cell}>{l.lesson_date}</Text>
                        <Text style={styles.cell}>{l.lesson_topic}</Text>
                        <Text style={styles.cell}>{l.lesson_fileType}</Text>
                    </View>
                ))}
                <View style={styles.statisticsContainer}>
                    <Text style={styles.statisticsTitle}>Lessons Analytics Summary</Text>
                    <Text style={styles.statisticsText}>Total Lessons: {lessonCounts.totalStudents}</Text>
                </View>
            </Page>
        </Document>
    );

    return (
        <div className="font-sans p-5 ml-[315px] mb-5 scale-90">
            <div className="w-[1250px] p-[30px] bg-[#e6eff6] rounded-[20px] text-center border-2 border-[#063a67] mx-auto">
                <img src={logo} alt="S2S Logo" className="w-[180px] h-auto mb-2 mx-auto" />
                <h1 className="text-3xl font-bold">Lesson Report</h1>
            </div>

            <div className="w-[1250px] mx-auto flex justify-end mt-6">
                <PDFDownloadLink document={<MyDocument allLessons={allLessons} />} fileName="lesson_report.pdf" 
                    className="text-white bg-[#063a67] p-[10px_25px] rounded-[12px] font-bold">
                    {({ loading }) => (loading ? 'Generating...' : 'Download PDF')}
                </PDFDownloadLink>
            </div>

            <div className="w-[1250px] mx-auto mt-4 overflow-x-auto border-2 border-[#063a67] rounded-[15px] bg-white">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-[#063a67] text-white">
                            <th className="p-4 text-left">Grade</th>
                            <th className="p-4 text-left">Subject</th>
                            <th className="p-4 text-left">Teacher</th>
                            <th className="p-4 text-left">Date</th>
                            <th className="p-4 text-left">Topic</th>
                            <th className="p-4 text-left">File Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allLessons.map((l, i) => (
                            <tr key={i} className="border-b hover:bg-gray-50">
                                <td className="p-4">{l.grade}</td>
                                <td className="p-4">{l.subject_name}</td>
                                <td className="p-4">{l.teachername}</td>
                                <td className="p-4">{l.lesson_date}</td>
                                <td className="p-4">{l.lesson_topic}</td>
                                <td className="p-4">{l.lesson_fileType}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LessonReport;




// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
// import logo from '../photos/logofull.png';

// const LessonReport = () => {
//     const [allLessons, setAllLessons] = useState([]);
//     const location = useLocation();
//     const queryParams = new URLSearchParams(location.search);
//     const selectedMonth = queryParams.get('month');

//     useEffect(() => {
//         // Backend API call (axios) ko khatam karke localStorage se frontend data readout set kiya hai
//         const savedMaterials = localStorage.getItem('s2s_lesson_materials');
//         const lessons = savedMaterials ? JSON.parse(savedMaterials) : [];

//         if (selectedMonth && lessons.length > 0) {
//             const filteredLessons = lessons.filter(lesson => {
//                 const lessonDate = new Date(lesson.lesson_date);
//                 const targetMonth = parseInt(selectedMonth.split('-')[1]) - 1;
//                 const targetYear = parseInt(selectedMonth.split('-')[0]);
//                 return lessonDate.getMonth() === targetMonth && lessonDate.getFullYear() === targetYear;
//             });
//             setAllLessons(filteredLessons);
//         } else {
//             setAllLessons(lessons);
//         }
//     }, [selectedMonth]);

//     const lessonCounts = {
//         totalStudents: allLessons.length,
//         ict: allLessons.filter(lesson => lesson.subject_name === 'ICT').length,
//         history: allLessons.filter(lesson => lesson.subject_name === 'History').length,
//         commerce: allLessons.filter(lesson => lesson.subject_name === 'Commerce').length,
//     };
    
//     // PDF Document Styling — Step 2 Scientist Theme
//     const styles = StyleSheet.create({
//         page: {
//             padding: 40,
//             backgroundColor: '#ffffff',
//         },
//         headerSection: {
//             borderBottomWidth: 2,
//             borderBottomColor: '#063a67',
//             paddingBottom: 15,
//             marginBottom: 20,
//             alignItems: 'center',
//         },
//         logo: {
//             width: 200,
//             height: 60,
//             marginBottom: 8,
//         },
//         academyName: {
//             fontSize: 20,
//             fontWeight: 'bold',
//             color: '#063a67',
//             letterSpacing: 1,
//         },
//         reportTitle: {
//             fontSize: 12,
//             color: '#555555',
//             marginTop: 4,
//         },
//         tableHeader: {
//             flexDirection: 'row',
//             backgroundColor: '#063a67',
//             padding: 10,
//             borderRadius: 4,
//             marginTop: 15,
//         },
//         tableHeaderText: {
//             color: '#ffffff',
//             fontSize: 10,
//             fontWeight: 'bold',
//             flex: 1,
//         },
//         row: {
//             flexDirection: 'row',
//             borderBottomWidth: 1,
//             borderBottomColor: '#e1e8ed',
//             padding: 10,
//             alignItems: 'center',
//         },
//         cell: {
//             flex: 1,
//             fontSize: 9,
//             color: '#333333',
//         },
//         statisticsContainer: {
//             marginTop: 30,
//             padding: 15,
//             backgroundColor: '#f4f7f9',
//             borderRadius: 6,
//             borderLeftWidth: 5,
//             borderLeftColor: '#063a67',
//         },
//         statisticsTitle: {
//             fontSize: 12,
//             fontWeight: 'bold',
//             color: '#063a67',
//             marginBottom: 6,
//         },
//         statisticsText: {
//             fontSize: 10,
//             color: '#444444',
//             marginTop: 2,
//         },
//     });

//     const MyDocument = ({ allLessons }) => (
//         <Document>
//             <Page size="A4" style={styles.page}>
//                 <View style={styles.headerSection}>
//                     <Image src={logo} style={styles.logo} />
//                     <Text style={styles.academyName}>STEP 2 SCIENTIST ACADEMY</Text>
//                     <Text style={styles.reportTitle}>Lesson Material Report — {selectedMonth || "All Months"}</Text>
//                 </View>
                
//                 <View style={styles.tableHeader}>
//                     <Text style={styles.tableHeaderText}>Grade</Text>
//                     <Text style={styles.tableHeaderText}>Subject</Text>
//                     <Text style={styles.tableHeaderText}>Teacher</Text>
//                     <Text style={styles.tableHeaderText}>Date</Text>
//                     <Text style={styles.tableHeaderText}>Topic</Text>
//                     <Text style={styles.tableHeaderText}>File Type</Text>
//                 </View>

//                 {allLessons.length === 0 ? (
//                     <View style={{ padding: 20, textAlign: 'center' }}>
//                         <Text style={{ fontSize: 10, color: '#888888' }}>No logs tracked for this specific month.</Text>
//                     </View>
//                 ) : (
//                     allLessons.map((lesson, index) => (
//                         <View key={index} style={styles.row}>
//                             <Text style={styles.cell}>{lesson.grade}</Text>
//                             <Text style={styles.cell}>{lesson.subject_name}</Text>
//                             <Text style={styles.cell}>{lesson.teachername}</Text>
//                             <Text style={styles.cell}>{lesson.lesson_date}</Text>
//                             <Text style={styles.cell}>{lesson.lesson_topic}</Text>
//                             <Text style={styles.cell}>{lesson.lesson_fileType}</Text>
//                         </View>
//                     ))
//                 )}

//                 <View style={styles.statisticsContainer}>
//                     <Text style={styles.styles?.statisticsTitle || styles.statisticsTitle}>Lessons Analytics Summary</Text>
//                     <Text style={styles.statisticsText}>Total Uploaded Lessons: {lessonCounts.totalStudents}</Text>
//                     <Text style={styles.statisticsText}>ICT Material Logs: {lessonCounts.ict}</Text>
//                     <Text style={styles.statisticsText}>History Material Logs: {lessonCounts.history}</Text>
//                     <Text style={styles.statisticsText}>Commerce Material Logs: {lessonCounts.commerce}</Text>
//                 </View>
//             </Page>
//         </Document>
//     );

//     return (
//         <div className="font-sans p-5 ml-[315px] mb-5 scale-90">
//             <div className="w-[1250px] p-[30px] bg-[#e6eff6] text-[#063a67] rounded-[20px] text-center border-2 border-[#063a67] mx-auto flex flex-col items-center justify-center">
//                 <img src={logo} alt="S2S Logo" className="w-[180px] h-auto mb-2" />
//                 <h1 className="m-0 text-3xl font-bold">Lesson Report — Step 2 Scientist</h1>
//                 <p className="text-sm text-gray-600 mt-1">{selectedMonth ? `Schedule Timeline: ${selectedMonth}` : 'All Tracked Semesters'}</p>
//             </div>

//             <div className="w-[1250px] mx-auto flex justify-end mt-6 mb-2">
//                 <PDFDownloadLink 
//                     document={<MyDocument allLessons={allLessons} />} 
//                     fileName={`S2S_Lesson_Report_${selectedMonth || 'all'}.pdf`}
//                     className="text-white cursor-pointer bg-[#063a67] text-center rounded-[12px] p-[10px_25px] outline-none transition-all duration-250 text-[15px] font-bold border-2 border-white hover:bg-gradient-to-r hover:from-[#da4a0c] hover:to-[#e60b45] hover:scale-105 shadow-md no-underline"
//                 >
//                     {({ loading, error }) => (
//                         loading ? 'Compiling Document...' : (error ? 'Export Failed' : 'Download Report PDF')
//                     )}
//                 </PDFDownloadLink>
//             </div>

//             <div className="w-[1250px] mx-auto mt-4 overflow-x-auto border-2 border-[#063a67] rounded-[15px] bg-white shadow-sm">
//                 <table className="w-full border-collapse">
//                     <thead>
//                         <tr className="bg-[#063a67] text-white">
//                             <th className="p-4 text-left font-bold text-lg">Grade</th>
//                             <th className="p-4 text-left font-bold text-lg">Subject</th>
//                             <th className="p-4 text-left font-bold text-lg">Teacher</th>
//                             <th className="p-4 text-left font-bold text-lg">Date</th>
//                             <th className="p-4 text-left font-bold text-lg">Topic</th>
//                             <th className="p-4 text-left font-bold text-lg">File Type</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {allLessons.length === 0 ? (
//                             <tr>
//                                 <td colSpan="6" className="p-10 text-center text-gray-400 text-base">No documented lesson entries found.</td>
//                             </tr>
//                         ) : (
//                             allLessons.map((lesson, index) => (
//                                 <tr key={index} className="hover:bg-gray-50 border-b border-gray-200 transition-colors">
//                                     <td className="p-4 text-[15px] font-bold text-black">{lesson.grade}</td>
//                                     <td className="p-4 text-[15px] font-bold text-black">{lesson.subject_name}</td>
//                                     <td className="p-4 text-[15px] font-bold text-black">{lesson.teachername}</td>
//                                     <td className="p-4 text-[15px] font-bold text-black">{lesson.lesson_date}</td>
//                                     <td className="p-4 text-[15px] font-bold text-black">{lesson.lesson_topic}</td>
//                                     <td className="p-4 text-[15px] font-bold text-black">
//                                         <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-semibold uppercase">{lesson.lesson_fileType}</span>
//                                     </td>
//                                 </tr>
//                             ))
//                         )}
//                     </tbody>
//                 </table>
//             </div>

//             <div className="w-[1250px] mx-auto mt-8 p-6 bg-[#e6eff6] rounded-[20px] border-2 border-[#063a67]">
//                 <h2 className="text-2xl font-bold text-[#063a67] mb-4">Lessons Analytics Overview</h2>
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                     <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
//                         <p className="text-sm text-gray-500 font-semibold">Total Lessons</p>
//                         <p className="text-2xl font-bold text-black">{lessonCounts.totalStudents}</p>
//                     </div>
//                     <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
//                         <p className="text-sm text-gray-500 font-semibold">ICT Track</p>
//                         <p className="text-2xl font-bold text-[#063a67]">{lessonCounts.ict}</p>
//                     </div>
//                     <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
//                         <p className="text-sm text-gray-500 font-semibold">History Track</p>
//                         <p className="text-2xl font-bold text-[#063a67]">{lessonCounts.history}</p>
//                     </div>
//                     <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
//                         <p className="text-sm text-gray-500 font-semibold">Commerce Track</p>
//                         <p className="text-2xl font-bold text-[#063a67]">{lessonCounts.commerce}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LessonReport;