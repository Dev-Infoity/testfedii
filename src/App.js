import './Content/Content/login.css';
import './App.css';
import './Content/Content/mbl-view.css';
import { Signin } from './u/Signin';
import { Login } from './u/Login';
import { Signup } from './u/Signup';
import { Details } from './getstarted/Details';
import { AccountVerifi } from './getstarted/Accountverify';
import { CreatePassword } from './getstarted/Createpassword';
import { CreatePasswordFromEmail } from './getstarted/Createpasswordpg';
import { CreateProfile } from './getstarted/Createprofile';
import { CreateProfileTchr } from './getstarted/Createprofile2';
import { CreateProfileStu } from './getstarted/Createprofile3';
import { Resetpsword } from './u/Resetpassword';
import { Userprofile } from './u/Profile';
import { Teacherprofile } from './u/Profile2';
import { Studentprofile } from './u/Profile3';
import { Staffpage } from './u/Staff';
import { SurveyPage } from './sch/Survey';
import { SurveyTeacherPage } from './tch/Survey';
import { SurveyStudentPage } from './stu/Survey';
import { SurveyDetailsPage } from './s/SurveyDetails';
import { SurveyDeepdivePage } from './s/SurveyDeepdive';
import { ClassroomPage } from './sch/Classroom';
import { UserClass } from './sch/Class';
import { ClassReport } from './sch/Classreports';
import { ClassSurvey } from './sch/classsurveys';
import { ClassroomtchPagee } from './tch/Classroom';
import { UsertchClass } from './tch/Class';
import { ClasstchReport } from './tch/Classreports';
import { ClasstchSurvey } from './tch/classsurveys';
import { UserstuClass } from './stu/Class';
import { ClassstuSurvey } from './stu/classsurveys';
import { Error404Page } from './error/Error404'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

export const App = () => {

    return (
        <BrowserRouter>
         
            {/* <Headersignin /> */}

            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/u/signin' element={<Signin />} />
                <Route path='/u/signup' element={<Signup />} />
                <Route path='/getstarted/details' element={<Details />} />
                <Route path='/getstarted/accountverify' element={<AccountVerifi />} />
                <Route path='/getstarted/createpassword' element={<CreatePassword />} />
                <Route path='/getstarted/createpasswordpg' element={<CreatePasswordFromEmail />} />
                <Route path='/getstarted/createprofile' element={<CreateProfile />} />
                <Route path='/getstarted/Createprofile2' element={<CreateProfileTchr />} />
                <Route path='/getstarted/createprofile3' element={<CreateProfileStu />} />
                <Route path='/u/resetpassword' element={<Resetpsword />} />
                <Route path='/u/profile' element={<Userprofile />} />
                <Route path='/u/profile2' element={<Teacherprofile />} />
                <Route path='/u/profile3' element={<Studentprofile />} />
                <Route path='/u/staff' element={<Staffpage />} />
                <Route path='/sch/survey' element={<SurveyPage />} />
                <Route path='/stu/survey' element={<SurveyStudentPage />} />
                <Route path='/tch/survey' element={<SurveyTeacherPage />} />
                <Route path='/s/surveydetails' element={<SurveyDetailsPage />} />
                <Route path='/s/surveydeepdive' element={<SurveyDeepdivePage />} />
                <Route path='/sch/classroom' element={<ClassroomPage />} />
                <Route path='/sch/class' element={<UserClass />} />
                <Route path='/sch/classreports' element={<ClassReport />} />
                <Route path='/sch/classsurveys' element={<ClassSurvey />} />
                <Route path='/tch/classroom' element={<ClassroomtchPagee />} />
                <Route path='/tch/class' element={<UsertchClass />} />
                <Route path='/tch/classreports' element={<ClasstchReport />} />
                <Route path='/tch/classsurveys' element={<ClasstchSurvey />} />
                <Route path='/stu/class' element={<UserstuClass />} />
                <Route path='/stu/classsurveys' element={<ClassstuSurvey />} />
                <Route path='*' element={<Error404Page />} />
            </Routes>

                

        </BrowserRouter>
    );
}



export default App;
