import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ApplicantProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [companyDetails, setCompanyDetails] = useState({
    name: 'Neharika.',
    skils: 'Hr recruitment, soft Skills',
    number: '123456789012',
    protofolio: 'https://www.myelegantgroup.com/index.html',
    banner: '',
    logo: '',
  });
  const [isFollowing, setIsFollowing] = useState(false);
  const [showUnfollowConfirmation, setShowUnfollowConfirmation] = useState(false);
  const navigate = useNavigate();

  const toggleEdit = () => setIsEditing(!isEditing);

  const handleBannerChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCompanyDetails({ ...companyDetails, banner: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCompanyDetails({ ...companyDetails, logo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFollow = () => {
    if (isFollowing) {
      setShowUnfollowConfirmation(true);
    } else {
      setIsFollowing(true);
    }
  };

  const handleUnfollowConfirmation = (confirm) => {
    if (confirm) {
      setIsFollowing(false);
    }
    setShowUnfollowConfirmation(false);
  };

  const handleLogout = () => {

    navigate('/')
    console.log("User logged out");
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Banner and Logo Section */}
      <div className="relative w-full h-48 mb-8">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full">
          <input
            type="file"
            onChange={handleBannerChange}
            className="opacity-0 absolute w-full h-full cursor-pointer"
          />
          {companyDetails.banner && (
            <img
              src={companyDetails.banner}
              alt="Banner"
              className="w-full h-full rounded-xl object-cover"
            />
          )}
        </div>
        <div className="bg-gray-400 border-2 border-dashed rounded-full w-20 h-20 absolute bottom-0 left-4">
          <input
            type="file"
            onChange={handleLogoChange}
            className="opacity-0 absolute w-full h-full cursor-pointer"
          />
          {companyDetails.logo && (
            <img
              src={companyDetails.logo}
              alt="Logo"
              className="w-full h-full rounded-full object-cover"
            />
          )}
        </div>
      </div>

      {/* Company Details */}
      <h1 className="text-3xl font-bold mb-4">{companyDetails.name}</h1>
      <p className="text-lg text-gray-600 mb-6">{companyDetails.skils}</p>

      <div className="flex flex-wrap space-x-4 mb-6">
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full flex items-center ${isFollowing ? 'bg-green-500 hover:bg-green-700' : ''}`}
          onClick={handleFollow}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
          </svg>
          {isFollowing ? 'Following' : 'Follow'}
        </button>
        <button
          className="outline outline-offset-2 outline-blue-500 text-blue font-bold py-2 px-4 rounded-full flex items-center"
          onClick={toggleEdit}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V21h1.659L9.172 16.172l9.172 9.172-1.659 1.659L11.38 5.793z" />
          </svg>
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <a
          href={companyDetails.protofolio}
          target="_blank"
          rel="noopener noreferrer"
          className="outline outline-offset-2 outline-blue-500 text-cyan font-bold py-2 px-4 rounded-full flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
          </svg>
          Protofolio
        </a>
      </div>

      {showUnfollowConfirmation && (
        <div className="p-4 border border-gray-400 rounded mb-4">
          <p>Do you want to unfollow this company?</p>
          <div className="flex space-x-4">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleUnfollowConfirmation(true)}
            >
              Yes
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleUnfollowConfirmation(false)}
            >
              No
            </button>
          </div>
        </div>
      )}

      <hr className="my-6 border-gray-400" />

      {/* Edit Form */}
      {isEditing && (
        <div className="mb-8">
          <div className="mb-4">
            <input
              type="text"
              value={companyDetails.name}
              onChange={(e) => setCompanyDetails({ ...companyDetails, name: e.target.value })}
              placeholder="Company Name"
              className="w-full p-2 border border-gray-400 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              value={companyDetails.location}
              onChange={(e) => setCompanyDetails({ ...companyDetails, location: e.target.value })}
              placeholder="Location"
              className="w-full p-2 border border-gray-400 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              value={companyDetails.number}
              onChange={(e) => setCompanyDetails({ ...companyDetails, number: e.target.value })}
              placeholder="Contact Number"
              className="w-full p-2 border border-gray-400 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              value={companyDetails.website}
              onChange={(e) => setCompanyDetails({ ...companyDetails, website: e.target.value })}
              placeholder="Website Link"
              className="w-full p-2 border border-gray-400 rounded"
            />
          </div>
        </div>
      )}
      <div className="flex flex-wrap space-x-6 mb-6">
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md w-full sm:w-auto">
          Posts
        </button>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md w-full sm:w-auto">
          skils
        </button>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md w-full sm:w-auto">
        Experience
        </button>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md w-full sm:w-auto">
        Education
        </button>
      </div>
      <hr className="my-6 border-gray-400" />

      {/* Logout Button */}
      <div className="mt-8">
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-full w-full sm:w-auto"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ApplicantProfile;
