import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import logo from '../../../assets/step2 scientist logo.jpeg';

const AdReport = () => {
    const [allClasses, setAllClasses] = useState([]);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const selectedMonth = queryParams.get('month');

    useEffect(() => {
        const savedClasses = localStorage.getItem('s2s_additional_classes');
        const classes = savedClasses ? JSON.parse(savedClasses) : [];

        if (selectedMonth && classes.length > 0) {
            const filteredClasses = classes.filter(item => {
                const classDate = new Date(item.date);
                const targetMonth = parseInt(selectedMonth.split('-')[1]) - 1;
                const targetYear = parseInt(selectedMonth.split('-')[0]);
                return classDate.getMonth() === targetMonth && classDate.getFullYear() === targetYear;
            });
            setAllClasses(filteredClasses);
        } else {
            setAllClasses(classes);
        }
    }, [selectedMonth]);

    const classcounts = {
        totalclasses: allClasses.length,
    };

    const styles = StyleSheet.create({
        page: {
            padding: 40,
            backgroundColor: '#ffffff',
        },
        headerSection: {
            borderBottomWidth: 2,
            borderBottomColor: '#063a67',
            paddingBottom: 15,
            marginBottom: 20,
            alignItems: 'center',
        },
        logo: {
            width: 200,
            height: 65,
            marginBottom: 8,
        },
        academyName: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#063a67',
            letterSpacing: 1,
        },
        reportTitle: {
            fontSize: 12,
            color: '#555555',
            marginTop: 4,
        },
        tableHeader: {
            flexDirection: 'row',
            backgroundColor: '#063a67',
            padding: 10,
            borderRadius: 4,
        },
        tableHeaderText: {
            color: '#ffffff',
            fontSize: 11,
            fontWeight: 'bold',
            flex: 1,
        },
        row: {
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderBottomColor: '#e1e8ed',
            padding: 10,
            alignItems: 'center',
        },
        cell: {
            flex: 1,
            fontSize: 10,
            color: '#333333',
        },
        statsSection: {
            marginTop: 40,
            padding: 12,
            backgroundColor: '#f4f7f9',
            borderRadius: 4,
            borderLeftWidth: 5,
            borderLeftColor: '#063a67',
        },
        statsText: {
            fontSize: 12,
            fontWeight: 'bold',
            color: '#063a67',
        }
    });

    const MyDocument = ({ allClasses }) => (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.headerSection}>
                    <Image src={logo} style={styles.logo} />
                    <Text style={styles.academyName}>STEP 2 SCIENTIST ACADEMY</Text>
                    <Text style={styles.reportTitle}>Academic Report — {selectedMonth || "All Records"}</Text>
                </View>
                
                <View style={styles.tableHeader}>
                    <Text style={styles.tableHeaderText}>Teacher</Text>
                    <Text style={styles.tableHeaderText}>Grade</Text>
                    <Text style={styles.tableHeaderText}>Subject</Text>
                    <Text style={styles.tableHeaderText}>Date</Text>
                    <Text style={styles.tableHeaderText}>Status</Text>
                </View>

                {allClasses.length === 0 ? (
                    <View style={{ padding: 30, textAlign: 'center' }}>
                        <Text style={{ fontSize: 11, color: '#888888' }}>No records found.</Text>
                    </View>
                ) : (
                    allClasses.map((item, index) => (
                        <View key={index} style={styles.row}>
                            <Text style={styles.cell}>{item.teacher}</Text>
                            <Text style={styles.cell}>{item.grade}</Text>
                            <Text style={styles.cell}>{item.subject}</Text>
                            <Text style={styles.cell}>{item.date}</Text>
                            <Text style={styles.cell}>{item.status}</Text>
                        </View>
                    ))
                )}

                <View style={styles.statsSection}>
                    <Text style={styles.statsText}>Total Logs Summary: {classcounts.totalclasses}</Text>
                </View>
            </Page>
        </Document>
    );

    return (
        <div className="font-sans ml-[315px] mb-5 scale-90">
            <div className="w-[1100px] h-[122px] bg-[#e6eff6] text-[#063a67] rounded-[20px] text-center border-2 border-[#063a67] mt-2.5 flex flex-col items-center justify-center">
                <img src={logo} alt="Step 2 Scientist Academy" className="w-[180px] h-auto mb-1" />
                <h1 className="m-0 text-2xl font-bold">Academic Report</h1>
                <p className="text-sm text-gray-600">{selectedMonth ? `Month: ${selectedMonth}` : 'All Records'}</p>
            </div>

            <div className="mb-6 mt-6 flex justify-end w-[1100px]">
                <PDFDownloadLink 
                    document={<MyDocument allClasses={allClasses} />} 
                    fileName={`S2S_Report_${selectedMonth || 'all'}.pdf`}
                    className="text-white cursor-pointer bg-[#063a67] text-center rounded-[12px] p-[10px_25px] outline-none transition-all duration-250 text-[15px] font-bold border-2 border-white hover:bg-gradient-to-r hover:from-[#da4a0c] hover:to-[#e60b45] hover:scale-105 shadow-md no-underline"
                >
                    {({ loading }) => (loading ? 'Generating PDF...' : 'Download Report PDF')}
                </PDFDownloadLink>
            </div>

            <div className="bg-[#063a67] mt-5 border-2 border-[#063a67] rounded-t-[15px] w-[1100px]">
                <table className="w-full table-fixed border-collapse">
                    <thead>
                        <tr>
                            <th className="p-[18px_20px] text-left text-lg text-white font-bold">Teacher</th>
                            <th className="p-[18px_50px] text-left text-lg text-white font-bold">Grade</th>
                            <th className="p-[18px_10px] text-left text-lg text-white font-bold">Subject</th>
                            <th className="p-[18px_10px] text-left text-lg text-white font-bold">Date</th>
                            <th className="p-[18px_10px] text-left text-lg text-white font-bold">Status</th>
                        </tr>
                    </thead>
                </table>
            </div>

            <div className="h-[333px] overflow-x-auto border-2 border-t-0 border-[#063a67] rounded-b-[15px] w-[1100px] bg-white">
                <table className="w-full table-fixed border-collapse">
                    <tbody>
                        {allClasses.length === 0 ? (
                            <tr>
                                <td colSpan="5" className="p-10 text-center text-gray-400 text-base">No data available.</td>
                            </tr>
                        ) : (
                            allClasses.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition-colors">
                                    <td className="p-[18px_20px] text-left text-[15px] text-black border-b-2 border-[#063a67] font-bold">{item.teacher}</td>
                                    <td className="p-[18px_50px] text-left text-[15px] text-black border-b-2 border-[#063a67] font-bold">{item.grade}</td>
                                    <td className="p-[18px_10px] text-left text-[15px] text-black border-b-2 border-[#063a67] font-bold">{item.subject}</td>
                                    <td className="p-[18px_10px] text-left text-[15px] text-black border-b-2 border-[#063a67] font-bold">{item.date}</td>
                                    <td className={`p-[18px_10px] text-left text-[15px] border-b-2 border-[#063a67] font-bold ${item.status === 'Completed' ? 'text-green-600' : 'text-orange-500'}`}>{item.status}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            <div className="w-[1100px] h-[80px] bg-[#e6eff6] text-black rounded-[20px] border-2 border-[#063a67] mt-6 flex items-center p-5">
                <p className="text-xl text-black font-bold">Total System Records: {classcounts.totalclasses}</p>
            </div>
        </div>
    );
};

export default AdReport;