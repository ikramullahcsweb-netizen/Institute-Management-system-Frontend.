// // import React, { useEffect, useState } from 'react';
// // import { useLocation } from 'react-router-dom';
// // import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
// // import logo from '../../../assets/step2 scientist logo.jpeg';

// // const ClassReport = () => {
// //     const [allClasses, setAllClasses] = useState([]);
// //     const location = useLocation();
// //     const queryParams = new URLSearchParams(location.search);
// //     const selectedMonth = queryParams.get('month');

// //     useEffect(() => {
// //         const savedClasses = localStorage.getItem('s2s_additional_classes');
// //         const classes = savedClasses ? JSON.parse(savedClasses) : [];

// //         if (selectedMonth && classes.length > 0) {
// //             const filteredClasses = classes.filter(item => {
// //                 const classDate = new Date(item.date);
// //                 const targetMonth = parseInt(selectedMonth.split('-')[1]) - 1;
// //                 const targetYear = parseInt(selectedMonth.split('-')[0]);
// //                 return classDate.getMonth() === targetMonth && classDate.getFullYear() === targetYear;
// //             });
// //             setAllClasses(filteredClasses);
// //         } else {
// //             setAllClasses(classes);
// //         }
// //     }, [selectedMonth]);

// //     const classcounts = {
// //         totalclasses: allClasses.length,
// //     };

// //     const styles = StyleSheet.create({
// //         page: {
// //             padding: 40,
// //             backgroundColor: '#ffffff',
// //         },
// //         headerSection: {
// //             borderBottomWidth: 2,
// //             borderBottomColor: '#063a67',
// //             paddingBottom: 15,
// //             marginBottom: 20,
// //             alignItems: 'center',
// //         },
// //         logo: {
// //             width: 200,
// //             height: 65,
// //             marginBottom: 8,
// //         },
// //         academyName: {
// //             fontSize: 20,
// //             fontWeight: 'bold',
// //             color: '#063a67',
// //             letterSpacing: 1,
// //         },
// //         reportTitle: {
// //             fontSize: 12,
// //             color: '#555555',
// //             marginTop: 4,
// //         },
// //         tableHeader: {
// //             flexDirection: 'row',
// //             backgroundColor: '#063a67',
// //             padding: 10,
// //             borderRadius: 4,
// //         },
// //         tableHeaderText: {
// //             color: '#ffffff',
// //             fontSize: 11,
// //             fontWeight: 'bold',
// //             flex: 1,
// //         },
// //         row: {
// //             flexDirection: 'row',
// //             borderBottomWidth: 1,
// //             borderBottomColor: '#e1e8ed',
// //             padding: 10,
// //             alignItems: 'center',
// //         },
// //         cell: {
// //             flex: 1,
// //             fontSize: 10,
// //             color: '#333333',
// //         },
// //         statsSection: {
// //             marginTop: 40,
// //             padding: 12,
// //             backgroundColor: '#f4f7f9',
// //             borderRadius: 4,
// //             borderLeftWidth: 5,
// //             borderLeftColor: '#063a67',
// //         },
// //         statsText: {
// //             fontSize: 12,
// //             fontWeight: 'bold',
// //             color: '#063a67',
// //         }
// //     });

// //     const MyDocument = ({ allClasses }) => (
// //         <Document>
// //             <Page size="A4" style={styles.page}>
// //                 <View style={styles.headerSection}>
// //                     <Image src={logo} style={styles.logo} />
// //                     <Text style={styles.academyName}>STEP 2 SCIENTIST ACADEMY</Text>
// //                     <Text style={styles.reportTitle}>Class Report — {selectedMonth || "All Records"}</Text>
// //                 </View>
                
// //                 <View style={styles.tableHeader}>
// //                     <Text style={styles.tableHeaderText}>Teacher</Text>
// //                     <Text style={styles.tableHeaderText}>Grade</Text>
// //                     <Text style={styles.tableHeaderText}>Subject</Text>
// //                     <Text style={styles.tableHeaderText}>Date</Text>
// //                     <Text style={styles.tableHeaderText}>Status</Text>
// //                 </View>

// //                 {allClasses.length === 0 ? (
// //                     <View style={{ padding: 30, textAlign: 'center' }}>
// //                         <Text style={{ fontSize: 11, color: '#888888' }}>No class logs available for this selection.</Text>
// //                     </View>
// //                 ) : (
// //                     allClasses.map((item, index) => (
// //                         <View key={index} style={styles.row}>
// //                             <Text style={styles.cell}>{item.teacher}</Text>
// //                             <Text style={styles.cell}>{item.grade}</Text>
// //                             <Text style={styles.cell}>{item.subject}</Text>
// //                             <Text style={styles.cell}>{item.date}</Text>
// //                             <Text style={styles.cell}>{item.status}</Text>
// //                         </View>
// //                     ))
// //                 )}

// //                 <View style={styles.statsSection}>
// //                     <Text style={styles.statsText}>Total Classes Summary: {classcounts.totalclasses}</Text>
// //                 </View>
// //             </Page>
// //         </Document>
// //     );

// //     return (
// //         <div className="p-10 bg-gray-50 min-h-screen">
// //             <div className="text-center mb-10">
// //                 <img src={logo} alt="Step 2 Scientist Academy" className="w-[220px] h-auto mx-auto mb-4" />
// //                 <h1 className="text-[#063a67] m-0 text-3xl font-bold">Class Report</h1>
// //                 <p className="text-gray-600 mt-1">{selectedMonth ? `Selected Schedule: ${selectedMonth}` : 'Complete Academic Records'}</p>
// //             </div>

// //             <div className="mb-6 flex justify-end">
// //                 <PDFDownloadLink 
// //                     document={<MyDocument allClasses={allClasses} />} 
// //                     fileName={`S2S_Class_Report_${selectedMonth || 'all'}.pdf`}
// //                     className="no-underline px-6 py-3 text-white bg-[#063a67] rounded-md font-semibold text-sm shadow-md hover:bg-[#052e52] transition-colors"
// //                 >
// //                     {({ loading }) => (loading ? 'Generating Document...' : 'Download Report PDF')}
// //                 </PDFDownloadLink>
// //             </div>

// //             <div className="overflow-x-auto bg-white rounded-lg shadow-sm border border-gray-100">
// //                 <table className="w-full border-collapse">
// //                     <thead>
// //                         <tr className="bg-[#063a67] text-white">
// //                             <th className="p-4 text-left text-sm font-semibold">Teacher</th>
// //                             <th className="p-4 text-left text-sm font-semibold">Grade</th>
// //                             <th className="p-4 text-left text-sm font-semibold">Subject</th>
// //                             <th className="p-4 text-left text-sm font-semibold">Date</th>
// //                             <th className="p-4 text-left text-sm font-semibold">Status</th>
// //                         </tr>
// //                     </thead>
// //                     <tbody>
// //                         {allClasses.length === 0 ? (
// //                             <tr>
// //                                 <td colSpan="5" className="p-10 text-center text-gray-400 text-base">No session management data found.</td>
// //                             </tr>
// //                         ) : (
// //                             allClasses.map((item, index) => (
// //                                 <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
// //                                     <td className="p-4 text-sm text-gray-700">{item.teacher}</td>
// //                                     <td className="p-4 text-sm text-gray-700">{item.grade}</td>
// //                                     <td className="p-4 text-sm text-gray-700">{item.subject}</td>
// //                                     <td className="p-4 text-sm text-gray-700">{item.date}</td>
// //                                     <td className={`p-4 text-sm font-semibold ${item.status === 'Completed' ? 'text-green-600' : 'text-orange-500'}`}>{item.status}</td>
// //                                 </tr>
// //                             ))
// //                         )}
// //                     </tbody>
// //                 </table>
// //             </div>

// //             <div className="mt-6 p-4 bg-blue-50/50 rounded-md border-l-4 border-[#063a67]">
// //                 <h3 className="m-0 text-[#063a67] text-base font-semibold">Total System Classes: {classcounts.totalclasses}</h3>
// //             </div>
// //         </div>
// //     );
// // };

// // export default ClassReport;


// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
// import logo from '../../../assets/step2 scientist logo.jpeg';

// const ClassReport = () => {
//     const [allClasses, setAllClasses] = useState([]);
//     const location = useLocation();
//     const queryParams = new URLSearchParams(location.search);
//     const selectedMonth = queryParams.get('month');

//     useEffect(() => {
//         // Multi-Key Fallback Strategy to ensure dashboard metrics always populate
//         const structuralAdditionalLogs = localStorage.getItem('s2s_additional_classes');
//         const structuralStandardLogs = localStorage.getItem('s2s_classes');
//         const globalFallbackLogs = localStorage.getItem('classes');

//         let rawCombinedArray = [];
//         if (structuralAdditionalLogs) rawCombinedArray = [...rawCombinedArray, ...JSON.parse(structuralAdditionalLogs)];
//         if (structuralStandardLogs) rawCombinedArray = [...rawCombinedArray, ...JSON.parse(structuralStandardLogs)];
//         if (globalFallbackLogs && rawCombinedArray.length === 0) rawCombinedArray = JSON.parse(globalFallbackLogs);

//         if (selectedMonth && rawCombinedArray.length > 0) {
//             const filteredClasses = rawCombinedArray.filter(item => {
//                 if (!item.date) return false;
//                 const classDate = new Date(item.date);
//                 const targetMonth = parseInt(selectedMonth.split('-')[1]) - 1;
//                 const targetYear = parseInt(selectedMonth.split('-')[0]);
//                 return classDate.getMonth() === targetMonth && classDate.getFullYear() === targetYear;
//             });
//             setAllClasses(filteredClasses);
//         } else {
//             setAllClasses(rawCombinedArray);
//         }
//     }, [selectedMonth]);

//     const styles = StyleSheet.create({
//         page: { padding: 40, backgroundColor: '#ffffff' },
//         headerSection: { borderBottomWidth: 2, borderBottomColor: '#063a67', paddingBottom: 15, marginBottom: 20, alignItems: 'center' },
//         logo: { width: 180, height: 55, marginBottom: 8 },
//         academyName: { fontSize: 18, fontWeight: 'bold', color: '#063a67', letterSpacing: 0.5 },
//         reportTitle: { fontSize: 11, color: '#555555', marginTop: 4, textTransform: 'uppercase' },
//         tableHeader: { flexDirection: 'row', backgroundColor: '#063a67', padding: 10, borderRadius: 4 },
//         tableHeaderText: { color: '#ffffff', fontSize: 10, fontWeight: 'bold', flex: 1 },
//         row: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#e1e8ed', padding: 10, alignItems: 'center' },
//         cell: { flex: 1, fontSize: 9, color: '#333333' },
//         statsSection: { marginTop: 30, padding: 12, backgroundColor: '#f4f7f9', borderRadius: 4, borderLeftWidth: 5, borderLeftColor: '#063a67' },
//         statsText: { fontSize: 11, fontWeight: 'bold', color: '#063a67' }
//     });

//     const MyDocument = ({ dataSummary }) => (
//         <Document>
//             <Page size="A4" style={styles.page}>
//                 <View style={styles.headerSection}>
//                     <Image src={logo} style={styles.logo} />
//                     <Text style={styles.academyName}>STEP 2 SCIENTIST ACADEMY</Text>
//                     <Text style={styles.reportTitle}>Class Ledger Metrics — {selectedMonth || "Complete Range"}</Text>
//                 </View>
                
//                 <View style={styles.tableHeader}>
//                     <Text style={styles.tableHeaderText}>Instructor</Text>
//                     <Text style={styles.tableHeaderText}>Grade</Text>
//                     <Text style={styles.tableHeaderText}>Subject Domain</Text>
//                     <Text style={styles.tableHeaderText}>Date</Text>
//                     <Text style={styles.tableHeaderText}>Status</Text>
//                 </View>

//                 {dataSummary.length === 0 ? (
//                     <View style={{ padding: 30, textAlign: 'center' }}>
//                         <Text style={{ fontSize: 10, color: '#888888' }}>No metrics recorded inside the local architecture matching parameters.</Text>
//                     </View>
//                 ) : (
//                     dataSummary.map((item, index) => (
//                         <View key={index} style={styles.row}>
//                             <Text style={styles.cell}>{item.teacher || 'N/A'}</Text>
//                             <Text style={styles.cell}>{item.grade || 'N/A'}</Text>
//                             <Text style={styles.cell}>{item.subject || 'N/A'}</Text>
//                             <Text style={styles.cell}>{item.date || 'N/A'}</Text>
//                             <Text style={styles.cell}>{item.status || 'Pending'}</Text>
//                         </View>
//                     ))
//                 )}

//                 <View style={styles.statsSection}>
//                     <Text style={styles.statsText}>Total Unified Class Quantities: {dataSummary.length}</Text>
//                 </View>
//             </Page>
//         </Document>
//     );

//     return (
//         <div className="w-full bg-slate-50 min-h-screen pb-16 font-sans antialiased">
//             <div className="w-full max-w-[1200px] mx-auto px-4 pt-10">
                
//                 <div className="text-center mb-10 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
//                     <img src={logo} alt="Step 2 Scientist Academy" className="w-[180px] h-auto mx-auto mb-3" />
//                     <h1 className="text-[#063a67] text-2xl font-black uppercase tracking-tight">Academic Manifest Report</h1>
//                     <p className="text-slate-500 text-xs font-bold mt-1 uppercase tracking-wider">
//                         {selectedMonth ? `Target Timeline Framework: ${selectedMonth}` : 'Complete Cumulative Ledger Logs'}
//                     </p>
//                 </div>

//                 <div className="mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 bg-white p-4 border border-slate-200 rounded-xl shadow-sm">
//                     <div className="text-sm font-bold text-slate-700 uppercase tracking-wide">
//                         Status Board: <span className="text-[#063a67] font-black">{allClasses.length} Items Found</span>
//                     </div>
//                     <PDFDownloadLink 
//                         document={<MyDocument dataSummary={allClasses} />} 
//                         fileName={`S2S_System_Report_${selectedMonth || 'comprehensive'}.pdf`}
//                         className="inline-flex justify-center bg-[#063a67] hover:bg-[#052e52] text-white text-xs font-black uppercase tracking-widest px-6 py-3.5 rounded-xl shadow-sm transition-all hover:scale-[1.02] text-center"
//                     >
//                         {({ loading }) => (loading ? 'Compiling File Streams...' : 'Export Document Ledger')}
//                     </PDFDownloadLink>
//                 </div>

//                 {/* Core Unified Table Module (Fixed Nesting Logic) */}
//                 <div className="overflow-hidden bg-white rounded-2xl shadow-sm border border-slate-200">
//                     <div className="w-full overflow-x-auto">
//                         <table className="w-full border-collapse text-left">
//                             <thead>
//                                 <tr className="bg-[#063a67] text-white">
//                                     <th className="p-4 text-xs font-black uppercase tracking-wider">Instructor</th>
//                                     <th className="p-4 text-xs font-black uppercase tracking-wider">Grade Target</th>
//                                     <th className="p-4 text-xs font-black uppercase tracking-wider">Subject Area</th>
//                                     <th className="p-4 text-xs font-black uppercase tracking-wider">Execution Date</th>
//                                     <th className="p-4 text-xs font-black uppercase tracking-wider">State</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {allClasses.length === 0 ? (
//                                     <tr>
//                                         <td colSpan="5" className="p-16 text-center text-slate-400 font-bold uppercase tracking-wider text-xs bg-slate-50/50">
//                                             No session management sequences found inside the local schema.
//                                         </td>
//                                     </tr>
//                                 ) : (
//                                     allClasses.map((item, index) => (
//                                         <tr key={index} className="border-b border-slate-100 hover:bg-slate-50/80 transition-colors">
//                                             <td className="p-4 text-xs font-bold text-slate-700">{item.teacher || 'N/A'}</td>
//                                             <td className="p-4 text-xs font-semibold text-slate-600">{item.grade || 'N/A'}</td>
//                                             <td className="p-4 text-xs font-semibold text-slate-600">{item.subject || 'N/A'}</td>
//                                             <td className="p-4 text-xs font-mono text-slate-500">{item.date || 'N/A'}</td>
//                                             <td className="p-4 text-xs">
//                                                 <span className={`px-2.5 py-1 rounded-md font-black uppercase tracking-wider text-[10px] ${
//                                                     item.status === 'Completed' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-amber-50 text-amber-700 border border-amber-200'
//                                                 }`}>
//                                                     {item.status || 'Pending'}
//                                                 </span>
//                                             </td>
//                                         </tr>
//                                     ))
//                                 )}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>

//                 <div className="mt-6 p-5 bg-gradient-to-r from-slate-50 to-slate-100/50 rounded-2xl border-2 border-dashed border-slate-200">
//                     <h3 className="m-0 text-[#063a67] text-sm font-black uppercase tracking-wider">
//                         Operational Capacity Metrics Summary: {allClasses.length} Realized Class Records
//                     </h3>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ClassReport;


import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import axios from 'axios'; // 1. Axios import karein
import logo from '../../../assets/step2 scientist logo.jpeg';

const ClassReport = () => {
    const [allClasses, setAllClasses] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state add ki
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const selectedMonth = queryParams.get('month');

    // 2. Backend se data fetch karne ka function
    useEffect(() => {
        const fetchClasses = async () => {
            try {
                setLoading(true);
                // Aapke backend ka endpoint (Ensure this route exists in your backend)
                const response = await axios.get('http://localhost:3000/api/classes/all', {
                    withCredentials: true 
                });
                
                let data = response.data;

                // Month filter logic (agar backend se filtered nahi aa raha)
                if (selectedMonth) {
                    data = data.filter(item => {
                        if (!item.date) return false;
                        const classDate = new Date(item.date);
                        const targetMonth = parseInt(selectedMonth.split('-')[1]) - 1;
                        const targetYear = parseInt(selectedMonth.split('-')[0]);
                        return classDate.getMonth() === targetMonth && classDate.getFullYear() === targetYear;
                    });
                }
                setAllClasses(data);
            } catch (error) {
                console.error("Error fetching class data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchClasses();
    }, [selectedMonth]);

    // PDF Styles and Document component same rahega (Aapka code sahi hai)
    // ... (Styles and MyDocument remain as they are) ...

    return (
        <div className="w-full bg-slate-50 min-h-screen pb-16 font-sans antialiased">
            <div className="w-full max-w-[1200px] mx-auto px-4 pt-10">
                {/* Header Section */}
                <div className="text-center mb-10 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                    <img src={logo} alt="Step 2 Scientist Academy" className="w-[180px] h-auto mx-auto mb-3" />
                    <h1 className="text-[#063a67] text-2xl font-black uppercase tracking-tight">Academic Manifest Report</h1>
                </div>

                {/* Table Section */}
                <div className="overflow-hidden bg-white rounded-2xl shadow-sm border border-slate-200">
                    {loading ? (
                        <div className="p-16 text-center text-slate-500 font-bold">Loading Data from Server...</div>
                    ) : (
                        <div className="w-full overflow-x-auto">
                            <table className="w-full border-collapse text-left">
                                <thead>
                                    <tr className="bg-[#063a67] text-white">
                                        <th className="p-4 text-xs font-black uppercase tracking-wider">Instructor</th>
                                        <th className="p-4 text-xs font-black uppercase tracking-wider">Grade</th>
                                        <th className="p-4 text-xs font-black uppercase tracking-wider">Subject</th>
                                        <th className="p-4 text-xs font-black uppercase tracking-wider">Date</th>
                                        <th className="p-4 text-xs font-black uppercase tracking-wider">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allClasses.length === 0 ? (
                                        <tr>
                                            <td colSpan="5" className="p-16 text-center text-slate-400 font-bold uppercase tracking-wider text-xs">
                                                No records found.
                                            </td>
                                        </tr>
                                    ) : (
                                        allClasses.map((item, index) => (
                                            <tr key={index} className="border-b border-slate-100 hover:bg-slate-50/80 transition-colors">
                                                <td className="p-4 text-xs font-bold text-slate-700">{item.teacher}</td>
                                                <td className="p-4 text-xs font-semibold text-slate-600">{item.grade}</td>
                                                <td className="p-4 text-xs font-semibold text-slate-600">{item.subject}</td>
                                                <td className="p-4 text-xs font-mono text-slate-500">{new Date(item.date).toLocaleDateString()}</td>
                                                <td className="p-4 text-xs">
                                                    <span className={`px-2 py-1 rounded-md ${item.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                                                        {item.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ClassReport;