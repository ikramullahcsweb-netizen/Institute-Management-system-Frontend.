import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// ==========================================
// CORE LAYOUTS & PUBLIC PORTALS
// ==========================================
import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import SignUp from './pages/SignUp';

// ==========================================
// ADMIN USER & UTILITY MANAGEMENT
// ==========================================
import AdminLogin from './pages/Admin/User_Management/AdminLogin';
import AdminForgetPassword from './pages/Admin/User_Management/Forgetpasswordadmin';
import AdminProfile from './pages/Admin/User_Management/AdminProfile';
import AddTeacher from './pages/Admin/User_Management/AddTeacher';
import AddManager from './pages/Admin/User_Management/AddManager';
import AddAdmin from './pages/Admin/User_Management/AddAdmin';
import SearchusersAdmin from './pages/Admin/User_Management/AdminSearchusers';
import UpdateStudent from './pages/Admin/User_Management/UpdateStudent';
import UpdateTeacher from './pages/Admin/User_Management/UpdateTeacher';
import AdminGenerateUser from './pages/Admin/User_Management/AdminGenerateUser';
import AdminGenerateReport from './pages/Admin/User_Management/AdminGenerateReport';

// --- Admin Financials, Lessons & Classes ---
import AdMain from './pages/Admin/Financial_Management/AdMain';
import AdGenerate from './pages/Admin/Financial_Management/AdGenerate';
import AdReport from './pages/Admin/Financial_Management/AdReport';
import AdminLessonReport from './pages/Admin/Lesson_Management/AdminLessonReport';
import ReportMonth from './pages/Admin/Lesson_Management/ReportMonth';
import LessonReport from './pages/Admin/Lesson_Management/LessonReport';
import AdgenrateClass from './pages/Admin/Class_Management/AdgenrateClass';
import GenrateClass from './pages/Admin/Class_Management/GenrateClass';
import Adgenratesalary from './pages/Admin/Salary_Management/AdGenrateSalary';
import Genratesalary from './pages/Admin/Salary_Management/AdSalaryReport';

// ==========================================
// MANAGER SYSTEM MODULES
// ==========================================
import AdminManagerLogin from './pages/AdminManagerLogin';
import SignupSelection from './pages/SignupSelection'; 
import ManagerLogin from './pages/Manager/User_Management/ManagerLogin';
import ManagerForgetPassword from './pages/Manager/User_Management/Forgetpasswordmanager';
import ManagerProfile from './pages/Manager/User_Management/ManagerProfile';
import SearchusersManager from './pages/Manager/User_Management/ManagerSearchusers';

// --- Manager Q&A, Feedback & Financials ---
import ManagerFeedback from './pages/Manager/QA&Feedback_Management/ManagerFeedback';
import ManagerNFeedback from './pages/Manager/QA&Feedback_Management/ManagerNFeedback';
import ReplyF from './pages/Manager/QA&Feedback_Management/ReplyF';
import MFeedbackUpdate from './pages/Manager/QA&Feedback_Management/MFeedbackUpdate';
import EditManager from './pages/Manager/Financial_Management/Mgedit';
import Manager from './pages/Manager/Financial_Management/MgMain';
import MgPay from './pages/Manager/Financial_Management/MgPayment';
import MgView from './pages/Manager/Financial_Management/MgView';
import ManagerWallet from './pages/Manager/Financial_Management/ManagerWallet';

// --- Manager Salary, Schedules & Enrolls ---
import CreateManager from './pages/Manager/Salary_Management/CreateManager';
import ManagerDashboard from './pages/Manager/User_Management/ManagerDashboard';
import HomeManagerSalary from './pages/Manager/Salary_Management/Home';
import ManagerSalary from './pages/Manager/Salary_Management/Manager';
import ManagerView from './pages/Manager/Salary_Management/ManagerView';
import UpdateManager from './pages/Manager/Salary_Management/UpdateManager';
import ManagerTimetable from './pages/Manager/Timetable_management/Timetable';
import AddNewClassForm from './pages/Manager/Timetable_management/AddnewClasstime';
import ManagerUpdateTimetable from './pages/Manager/Timetable_management/UpdateTimetable';
import RequestedAdditionalClasses from './pages/Manager/Class_Management/RequestedAdditionalclasses';
import ApprovalClasses from './pages/Manager/Class_Management/ApprovalClasses';
import ManagerEnroll from './pages/Manager/Enroll_Management/ManagerEnroll';
import EnrollmentForm from './pages/Manager/Enroll_Management/EnrollmentForm';
import Attend from './pages/Manager/Attendance/Attend';
import SubjectView from './pages/Manager/Attendance/SubjectView';

// ==========================================
// STUDENT REGISTRATION & ACADEMICS
// ==========================================
import StudentLogin from './pages/Student/User_Management/StudentLogin';
import StudentRegister from './pages/Student/User_Management/StudentRegister';
import StudentProfile from './pages/Student/User_Management/StudentProfile';
import StudentProfileEdit from './pages/Student/User_Management/StudentProfieEdit';
import StudentForgetPassword from './pages/Student/User_Management/Forgetpasswordstudent';
import StudentDashboard from './pages/Student/Dashboard';
import StudentTimetable from './pages/Student/Timetbale_Management/Timetable';
import LessonMaterial from './pages/Student/Lesson_Management/StMyClasses';
import Payment from './pages/Student/Financial_Management/StMain';
import PayOnline from './pages/Student/Financial_Management/StPaymentOnline';
import ViewOnline from './pages/Student/Financial_Management/StViewOnline';
import EditOnline from './pages/Student/Financial_Management/StEditOnline';
import CancelOnline from './pages/Student/Financial_Management/StCancelOnline';
import PayBank from './pages/Student/Financial_Management/StPaymentBank';
import ViewBank from './pages/Student/Financial_Management/StViewBank';
import EditBank from './pages/Student/Financial_Management/StEditBank';
import CancelBank from './pages/Student/Financial_Management/StCancelBank';
import ViewCash from './pages/Student/Financial_Management/StViewCash';
import Wallet from './pages/Student/Financial_Management/StWallet';
import AddQuestion from './pages/Student/QA&Feedback_Management/AddQuestion';
import FAskedQ from './pages/Student/QA&Feedback_Management/FAskedQ';
import MyQuestions from './pages/Student/QA&Feedback_Management/MyQuestions';
import Question from './pages/Student/QA&Feedback_Management/Question';
import UpdateQuestion from './pages/Student/QA&Feedback_Management/UpdateQuestion';
import Feedback from './pages/Student/QA&Feedback_Management/Feedback';
import FeedbackType from './pages/Student/QA&Feedback_Management/FeedbackType';
import MyFeedbacks from './pages/Student/QA&Feedback_Management/MyFeedbacks';
import TFeedback from './pages/Student/QA&Feedback_Management/TFeedback';
import SFeedback from './pages/Student/QA&Feedback_Management/SFeedback';
import UpdateTeacherF from './pages/Student/QA&Feedback_Management/UpdateTeacherF';
import UpdateSFeedback from './pages/Student/QA&Feedback_Management/UpdateSFeedback';
import Test from './pages/Student/Enroll_Mangement/Test';
import ViewClass from './pages/Student/Enroll_Mangement/ViewClass';
import Enrolled from './pages/Student/Enroll_Mangement/Enrolled';
import Enrollments from './pages/Student/Class_Enrollment/Enrollments';
import MyClass from './pages/Student/Class_Enrollment/Myclass';
import AttendStudent from './pages/Student/Attendance/AttendStudent';

// ==========================================
// TEACHER MODULE OPERATIONS
// ==========================================
import TeacherLogin from './pages/Teacher/User_Management/TeacherLogin';
import TeacherRegister from './pages/Teacher/User_Management/TeacherRegister';
import TeacherProfile from './pages/Teacher/User_Management/TeacherProfile';
import TeacherProfileEdit from './pages/Teacher/User_Management/TeacherProfileEdit';
import TeacherForgetPassword from './pages/Teacher/User_Management/Forgetpasswordteacher';
import TeacherTimetable from './pages/Teacher/Timetable';
import MyClassess from './pages/Teacher/Lesson_Management/MyClasses';
import CreateNotice from './pages/Teacher/Lesson_Management/CreateNotice';
import EditNotice from './pages/Teacher/Lesson_Management/EditNotice';
import AddMaterials from './pages/Teacher/Lesson_Management/AddMaterials';
import EditMaterials from './pages/Teacher/Lesson_Management/EditMaterials';
import AnswerQ from './pages/Teacher/QA&Feedback_Management/AnswerQ';
import AnswerUpdate from './pages/Teacher/QA&Feedback_Management/AnswerUpdate';
import TeacherQuestion from './pages/Teacher/QA&Feedback_Management/TeacherQuestion';
import THQuestion from './pages/Teacher/QA&Feedback_Management/THQuestion';
import ViewTeacherFeedback from './pages/Teacher/QA&Feedback_Management/ViewTeacherFeedback';
import TeacherViewPayment from './pages/Teacher/Financial_Management/TeView';
import TeacherMyClasses from './pages/Teacher/Class_Management/TeacherMyClasses';
import AddClasses from './pages/Teacher/Class_Management/AddClasses';
import UpdateClasses from './pages/Teacher/Class_Management/UpdateClasses';
import AdditionalClasses from './pages/Teacher/Class_Management/AdditionalClasses';
import AddAdditionalClasses from './pages/Teacher/Class_Management/AddAdditionalClasses';
import RequestSchedule from './pages/Teacher/Class_Management/RequestSchedule';
import TeacherView from './pages/Teacher/Salary_Management/TeacherView';
import AttendTeacher from './pages/Teacher/Attendance/AttendTeacher';

// Public Layout Sub-wrapper Component
const PublicLayout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Gateway System Routes */}
        <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
        <Route path="/login" element={<PublicLayout><AdminManagerLogin /></PublicLayout>} />
        {/* <Route path="/signup" element={<PublicLayout><SignUp /></PublicLayout>} /> */}
        <Route path="/signup" element={<PublicLayout><SignupSelection /></PublicLayout>} />
        <Route path="/managersignup" element={<PublicLayout><SignUp /></PublicLayout>} />
        <Route path="/adminsignup" element={<PublicLayout><SignUp /></PublicLayout>} />    

        {/* Admin System Core Management */}
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adminforgetpassword" element={<AdminForgetPassword />} />
        <Route path="/adminprofile" element={<AdminProfile />} />
        <Route path="/addteacher" element={<AddTeacher />} />
        <Route path="/addmanager" element={<AddManager />} />
        <Route path="/addadmin" element={<AddAdmin />} />
        <Route path="/searchusersadmin" element={<SearchusersAdmin />} />
        <Route path="/updatestudent/:id" element={<UpdateStudent />} />
        <Route path="/updateteacher/:id" element={<UpdateTeacher />} />
        <Route path="/admingenerateuser" element={<AdminGenerateUser />} />
        <Route path="/admingeneratereport" element={<AdminGenerateReport />} />
        <Route path="/admain" element={<AdMain />} />
        <Route path="/adgenerate" element={<AdGenerate />} />
        <Route path="/adreport" element={<AdReport />} />
        <Route path="/adminlessonreport" element={<AdminLessonReport />} />
        <Route path="/reportmonth" element={<ReportMonth />} />
        <Route path="/lessonreport" element={<LessonReport />} />
        <Route path="/adgenerateclass" element={<AdgenrateClass />} />
        <Route path="/adreportclass" element={<GenrateClass />} />
        <Route path="/adgeneratesalary" element={<AdGenerate />} />
        <Route path="/adsalaryreport" element={<Genratesalary />} />

        {/* Manager Administration Portal */}
        <Route path="/adminmanagerlogin" element={<PublicLayout><AdminManagerLogin /></PublicLayout>} />
        <Route path="/managerdashboard" element={<ManagerDashboard />} />
        <Route path="/managerlogin" element={<ManagerLogin />} />
        <Route path="/managerforgetpassword" element={<ManagerForgetPassword />} />
        <Route path="/managerprofile" element={<ManagerProfile />} />
        <Route path="/searchusersmanager" element={<SearchusersManager />} />
        <Route path="/managerfeedback" element={<ManagerFeedback />} />
        <Route path="/managernfeedback" element={<ManagerNFeedback />} />
        <Route path="/replyf" element={<ReplyF />} />
        <Route path="/mfeedbackupdate" element={<MFeedbackUpdate />} />
        <Route path="/mgedit" element={<EditManager />} />
        <Route path="/mgmain" element={<Manager />} />
        <Route path="/mgpayment" element={<MgPay />} />
        <Route path="/mgview" element={<MgView />} />
        <Route path="/managerwallet" element={<ManagerWallet />} />
        <Route path="/createmanager" element={<CreateManager />} />
        <Route path="/homesalary" element={<HomeManagerSalary />} />
        <Route path="/managersalary" element={<ManagerSalary />} />
        <Route path="/managerview" element={<ManagerView />} />
        <Route path="/updatemanager" element={<UpdateManager />} />
        <Route path="/managertimetable" element={<ManagerTimetable />} />
        <Route path="/addnewclasstime" element={<AddNewClassForm />} />
        <Route path="/managerupdatetimetable" element={<ManagerUpdateTimetable />} />
        <Route path="/requestedadditionalclasses" element={<RequestedAdditionalClasses />} />
        <Route path="/approvalclasses" element={<ApprovalClasses />} />
        <Route path="/managerenroll" element={<ManagerEnroll />} />
        <Route path="/enrollmentform" element={<EnrollmentForm />} />
        <Route path="/attend" element={<Attend />} />
        <Route path="/subjectview" element={<SubjectView />} />

        {/* Student Portal Routes */}
        <Route path="/StudentLogin" element={<StudentLogin />} />
        <Route path="/StudentRegister" element={<StudentRegister />} />
    
        <Route path="/StudentProfile" element={<StudentProfile />} />
        <Route path="/StudentProfileEdit" element={<StudentProfileEdit />} />
        <Route path="/StudentForgetPassword" element={<StudentForgetPassword />} />
        <Route path="/StudentDashboard" element={<StudentDashboard/>} />
        <Route path="/StudentTimetable" element={<StudentTimetable />} />
        <Route path="/LessonMaterial" element={<LessonMaterial />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/PayOnline" element={<PayOnline />} />
        <Route path="/ViewOnline" element={<ViewOnline />} />
        <Route path="/EditOnline" element={<EditOnline />} />
        <Route path="/CancelOnline" element={<CancelOnline />} />
        <Route path="/PayBank" element={<PayBank />} />
        <Route path="/ViewBank" element={<ViewBank />} />
        <Route path="/EditBank" element={<EditBank />} />
        <Route path="/CancelBank" element={<CancelBank />} />
        <Route path="/ViewCash" element={<ViewCash />} />
        <Route path="/Wallet" element={<Wallet />} />
        <Route path="/AddQuestion" element={<AddQuestion />} />
        <Route path="/FAskedQ" element={<FAskedQ />} />
        <Route path="/MyQuestions" element={<MyQuestions />} />
        <Route path="/Question/:id" element={<Question />} />
        <Route path="/UpdateQuestion/:id" element={<UpdateQuestion />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/FeedbackType" element={<FeedbackType />} />
        <Route path="/MyFeedbacks" element={<MyFeedbacks />} />
        <Route path="/TFeedback" element={<TFeedback />} />
        <Route path="/SFeedback" element={<SFeedback />} />
        <Route path="/UpdateTeacherF/:id" element={<UpdateTeacherF />} />
        <Route path="/UpdateSFeedback/:id" element={<UpdateSFeedback />} />
        <Route path="/Test" element={<Test />} />
        <Route path="/ViewClass" element={<ViewClass />} />
        <Route path="/Enrolled" element={<Enrolled />} />
        <Route path="/Enrollments" element={<Enrollments />} />
        <Route path="/MyClass" element={<MyClass />} />
        <Route path="/AttendStudent" element={<AttendStudent />} />

        {/* Teacher Portal Routes */}
        <Route path="/TeacherLogin" element={<TeacherLogin />} />
        <Route path="/TeacherRegister" element={<TeacherRegister />} />
        <Route path="/TeacherProfile" element={<TeacherProfile />} />
        <Route path="/TeacherProfileEdit" element={<TeacherProfileEdit />} />
        <Route path="/TeacherForgetPassword" element={<TeacherForgetPassword />} />
        <Route path="/TeacherTimetable" element={<TeacherTimetable />} />
        <Route path="/MyClassess" element={<MyClassess />} />
        <Route path="/CreateNotice" element={<CreateNotice />} />
        <Route path="/EditNotice/:id" element={<EditNotice />} />
        <Route path="/AddMaterials" element={<AddMaterials />} />
        <Route path="/EditMaterials/:id" element={<EditMaterials />} />
        <Route path="/AnswerQ/:id" element={<AnswerQ />} />
        <Route path="/AnswerUpdate/:id" element={<AnswerUpdate />} />
        <Route path="/TeacherQuestion" element={<TeacherQuestion />} />
        <Route path="/THQuestion" element={<THQuestion />} />
        <Route path="/ViewTeacherFeedback" element={<ViewTeacherFeedback />} />
        <Route path="/TeacherViewPayment" element={<TeacherViewPayment />} />
        <Route path="/TeacherMyClasses" element={<TeacherMyClasses />} />
        <Route path="/AddClasses" element={<AddClasses />} />
        <Route path="/UpdateClasses/:id" element={<UpdateClasses />} />
        <Route path="/AdditionalClasses" element={<AdditionalClasses />} />
        <Route path="/AddAdditionalClasses" element={<AddAdditionalClasses />} />
        <Route path="/RequestSchedule" element={<RequestSchedule />} />
        <Route path="/TeacherView" element={<TeacherView />} />
        <Route path="/AttendTeacher" element={<AttendTeacher />} />

        {/* Global Catch-all 404 Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;