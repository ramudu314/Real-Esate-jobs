import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CompanyLogin from './Company/Company-Login';
import ApplicantLogin from './Applicant/Applicant-Login';
import CompanyProfile from './Company/Company-Profile';
import ApplicantProfile from './Applicant/Applicant-Profile';
import LandingPage from './Landing -Page';
import Navbar from './Company/company-reg';
import CompanySinup from './Company/Company-Sinup';
import Applicant from './Applicant/Applicant-reg';
import ApplicantSignup from './Applicant/Applicant-signup';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/company-login" element={<CompanyLogin />} />
        <Route path='/company-signup' element={<CompanySinup/>}/>
        <Route path="/applicant-login" element={<ApplicantLogin />} />
        <Route path="/company-profile" element={<CompanyProfile />} />
        <Route path="/company-register" element={<Navbar/>}/>
        <Route path='/applicant-profile' element={<ApplicantProfile/>}/>
        <Route path='/applicant-register' element={<Applicant/>}/>
        <Route path='/applicant-signup' element={<ApplicantSignup/>}/>
      </Routes>
    </Router>
  );
};

export default App;
