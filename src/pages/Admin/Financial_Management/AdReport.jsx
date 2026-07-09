

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdReport.css';
import { useLocation } from 'react-router-dom';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import Head from '../Header/Header';
import logo from '../../../assets/step2 scientist logo.jpeg';

function AdReport() {
    const [allPayments, setAllPayments] = useState([]);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const selectedMonth = queryParams.get('month');

    const fetchPayments = async () => {
        try {
            // Backend URL: localhost:5000
            const [onlineRes, bankRes, cashRes] = await Promise.all([
                axios.get('http://localhost:3000/displayonline'),
                axios.get('http://localhost:3000/displaybank'),
                axios.get('http://localhost:3000/displaycash')
            ]);
            
            const allPaymentsData = [...onlineRes.data, ...bankRes.data, ...cashRes.data];
            
            const filteredPayments = selectedMonth 
                ? allPaymentsData.filter(payment => {
                    const paymentDate = new Date(payment.date);
                    // Mahina match karne ka logic
                    return paymentDate.getMonth() === parseInt(selectedMonth.split('-')[1]) - 1;
                })
                : allPaymentsData;
                
            setAllPayments(filteredPayments);
        } catch (error) {
            console.error("Data fetch karne mein error:", error);
            alert("Backend se data nahi mil raha. Check karein ke server 5000 par chal raha hai!");
        }
    };

    useEffect(() => {
        fetchPayments();
    }, [selectedMonth]);

    const paymentCounts = {
        totalStudents: allPayments.length,
        approved: allPayments.filter(p => p.status === 'Approved').length,
        rejected: allPayments.filter(p => p.status === 'Rejected').length,
        pending: allPayments.filter(p => p.status === 'Pending').length,
        online: allPayments.filter(p => p.type === 'Online').length,
        bank: allPayments.filter(p => p.type === 'Bank').length,
        cash: allPayments.filter(p => p.type === 'Cash').length,
    };

    const totalAmount = allPayments.reduce((total, p) => total + parseFloat(p.amount || 0), 0);

    const styles = StyleSheet.create({
        page: { padding: 40, marginTop: 20, backgroundColor: '#f0f0f0' },
        row: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#ccc', alignItems: 'center', minHeight: 30, marginTop: 5, backgroundColor: '#fff', borderRadius: 5, padding: 5 },
        header: { fontSize: 18, fontWeight: 'bold', color: '#333', textAlign: 'center', marginBottom: 20 },
        cell: { flex: 1, fontSize: 9, color: '#666' },
        logo: { width: 150, height: 45, marginBottom: 10, alignSelf: 'center' },
        statsContainer: { marginTop: 20, padding: 15, borderTopWidth: 2, borderTopColor: '#000' }
    });

    const MyDocument = () => (
        <Document>
            <Page size="A4" style={styles.page}>
                <Image src={logo} style={styles.logo} />
                <Text style={styles.header}>Payment Report: {selectedMonth || "All"}</Text>
                <View style={styles.row}>
                    <Text style={styles.cell}>ID</Text><Text style={styles.cell}>Desc</Text><Text style={styles.cell}>Date</Text><Text style={styles.cell}>Amount</Text><Text style={styles.cell}>Type</Text><Text style={styles.cell}>Status</Text>
                </View>
                {allPayments.map((p) => (
                    <View key={p._id} style={styles.row}>
                        <Text style={styles.cell}>{p.itnumber}</Text>
                        <Text style={styles.cell}>{p.description}</Text>
                        <Text style={styles.cell}>{p.date}</Text>
                        <Text style={styles.cell}>{p.amount}</Text>
                        <Text style={styles.cell}>{p.type}</Text>
                        <Text style={styles.cell}>{p.status}</Text>
                    </View>
                ))}
            </Page>
        </Document>
    );

    return (
        <div>
            <Head />
            <div className='bodyadr'>
                <h1 className='h1adr'>My Payments for {selectedMonth || "All"}</h1>
                <PDFDownloadLink document={<MyDocument />} fileName="payments.pdf" className="pdf-download-button">
                    {({ loading }) => (loading ? 'Loading...' : 'Download PDF')}
                </PDFDownloadLink>

                <div className="tbl-contentadr">
                    <table className='tableadr'>
                        <thead>
                            <tr>
                                <th className='thadr'>Student ID</th><th className='thadr'>Description</th><th className='thadr'>Date</th><th className='thadr'>Amount</th><th className='thadr'>Type</th><th className='thadr'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allPayments.map((p) => (
                                <tr key={p._id}>
                                    <td className='tdadr'>{p.itnumber}</td><td className='tdadr'>{p.description}</td><td className='tdadr'>{p.date}</td><td className='tdadr'>{p.amount}</td><td className='tdadr'>{p.type}</td><td className='tdadr'>{p.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AdReport;