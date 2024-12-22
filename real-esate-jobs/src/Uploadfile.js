import React, { useState } from 'react';

const UploadDocument = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);  // Set the selected file
  };

  // Define styles for container and section
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',  // Horizontally center the child element
           // Full height of the parent (you can adjust this to your desired height)
  };

  const sectionStyle = {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    border: '2px solid rgb(37 99 235 / var(--tw-border-opacity, 1))', // Corrected border color
    width: '700px',            // Define a specific width for the upload section
    textAlign: 'center',       // Center the text inside the section
  };
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    justifyContent: 'center',
  };

  const h2Style = {
    fontSize: '1.125rem',
    fontWeight: 'bold',
    color: '#1a202c',
  };

  const inputStyle = {
    display: 'none',
  };

  const fileNameStyle = {
    color: '#1a202c',
    marginTop: '10px',
  };

  return (
    <div style={containerStyle}>
      <section style={sectionStyle}>
        <div style={divStyle} onClick={() => document.getElementById('file').click()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
            />
          </svg>
          <h2 style={h2Style}>Upload YOUR RESUME HERE</h2>
        </div>
        <input
          type="file"
          id="file"
          style={inputStyle}
          onChange={handleFileChange}
        />
        {selectedFile && (
          <div style={fileNameStyle}>{selectedFile.name}</div>
        )}
      </section>
    </div>
  );
};

export default UploadDocument;
