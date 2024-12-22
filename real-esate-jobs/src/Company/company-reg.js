import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loging from '../real-estate-house-property-facebook-cover-web-banner-design_130382-123.jpg';
import UploadDocument from '../Uploadfile';
import Footer from '../Footer/Fotter';
import jobsImg from '../pngtree-house-property-logo-real-estate-design-buildings-clipart-png-image_8750111.png';

const Navbar = () => {
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    setShowProfile((prev) => !prev);
  };

  const navigateToCompanyProfile = () => {
    navigate('/company-login');
    setShowProfile(false);
  };

  const navigateToApplicantProfile = () => {
    navigate('/applicant-login');
    setShowProfile(false);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-white p-4 shadow-md">
        <div className="flex items-center space-x-4">
          <img
            src={jobsImg}
            alt="Real Estate Logo"
            className="h-12 w-12 object-contain"
          />
          <Link to={'/'}></Link>
        </div>
        <div className="flex items-center space-x-4">
          <button
            aria-label="Notifications"
            className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>
          <Link
          className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
            to="/company-profile"
            aria-label="Profile"
            onClick={handleProfileClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </Link>
        </div>
      </nav>

      {/* Banner Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        <div className="flex justify-center items-center">
          <img
            src={jobsImg}
            alt="Job Opportunities"
            className="w-full h-auto object-contain max-w-xs"
          />
        </div>
        <div className="md:col-span-2">
          <img
            src={loging}
            alt="Login Banner"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      {/* Job Cards Section */}
      <div className="p-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-9">
          {[
            'HEAD OF SALES',
            'CHANNEL PARTNERS',
            'SALES EXECUTIVES',
            'HE & OPERATIONS',
            'C.E.O / DIRECTORS',
            'MARKETING',
            'DIGITAL',
            'ACCOUNTS',
          ].map((job, index) => (
            <div
              key={index}
              className="bg-blue-600 text-white font-bold text-center py-4 rounded-lg shadow-md"
            >
              {job}
            </div>
          ))}
        </div>
      </div>

      <UploadDocument />
      <Footer />
    </div>
  );
};

export default Navbar;
