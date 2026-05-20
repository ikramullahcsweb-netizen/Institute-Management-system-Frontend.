import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import logo from '../../../assets/step2 scientist logo.jpeg';

const ClassReport = () => {
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
                    <Text style={styles.reportTitle}>Class Report — {selectedMonth || "All Records"}</Text>
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
                        <Text style={{ fontSize: 11, color: '#888888' }}>No class logs available for this selection.</Text>
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
                    <Text style={styles.statsText}>Total Classes Summary: {classcounts.totalclasses}</Text>
                </View>
            </Page>
        </Document>
    );

    return (
        <div className="p-10 bg-gray-50 min-h-screen">
            <div className="text-center mb-10">
                <img src={logo} alt="Step 2 Scientist Academy" className="w-[220px] h-auto mx-auto mb-4" />
                <h1 className="text-[#063a67] m-0 text-3xl font-bold">Class Report</h1>
                <p className="text-gray-600 mt-1">{selectedMonth ? `Selected Schedule: ${selectedMonth}` : 'Complete Academic Records'}</p>
            </div>

            <div className="mb-6 flex justify-end">
                <PDFDownloadLink 
                    document={<MyDocument allClasses={allClasses} />} 
                    fileName={`S2S_Class_Report_${selectedMonth || 'all'}.pdf`}
                    className="no-underline px-6 py-3 text-white bg-[#063a67] rounded-md font-semibold text-sm shadow-md hover:bg-[#052e52] transition-colors"
                >
                    {({ loading }) => (loading ? 'Generating Document...' : 'Download Report PDF')}
                </PDFDownloadLink>
            </div>

            <div className="overflow-x-auto bg-white rounded-lg shadow-sm border border-gray-100">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-[#063a67] text-white">
                            <th className="p-4 text-left text-sm font-semibold">Teacher</th>
                            <th className="p-4 text-left text-sm font-semibold">Grade</th>
                            <th className="p-4 text-left text-sm font-semibold">Subject</th>
                            <th className="p-4 text-left text-sm font-semibold">Date</th>
                            <th className="p-4 text-left text-sm font-semibold">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allClasses.length === 0 ? (
                            <tr>
                                <td colSpan="5" className="p-10 text-center text-gray-400 text-base">No session management data found.</td>
                            </tr>
                        ) : (
                            allClasses.map((item, index) => (
                                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                    <td className="p-4 text-sm text-gray-700">{item.teacher}</td>
                                    <td className="p-4 text-sm text-gray-700">{item.grade}</td>
                                    <td className="p-4 text-sm text-gray-700">{item.subject}</td>
                                    <td className="p-4 text-sm text-gray-700">{item.date}</td>
                                    <td className={`p-4 text-sm font-semibold ${item.status === 'Completed' ? 'text-green-600' : 'text-orange-500'}`}>{item.status}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            <div className="mt-6 p-4 bg-blue-50/50 rounded-md border-l-4 border-[#063a67]">
                <h3 className="m-0 text-[#063a67] text-base font-semibold">Total System Classes: {classcounts.totalclasses}</h3>
            </div>
        </div>
    );
};

export default ClassReport;