import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaHome, FaInfoCircle, FaServicestack, FaUser, FaNewspaper, FaFileContract, FaPhoneAlt, FaEnvelope, FaGlobe, FaTag, FaMapMarkerAlt, FaPhoneSquareAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-gray-200 text-xl">
      <div className="container mx-auto pt-6 pb-12">
        <div className="flex flex-wrap justify-center mb-4">
          {/* Quick Links */}
          <div className="w-full lg:w-1/4 md:w-1/2 mb-4 lg:mb-0">
            <h6 className="uppercase text-gray-200 p-5 font-bold mb-4">Quick Links</h6>
            <ul>
              <li className="mt-2 flex items-center">
                <FaHome className="mr-2" />
                <a href="/" className="text-gray-200 hover:text-blue-300">Home</a>
              </li>
              <li className="mt-2 flex items-center">
                <FaInfoCircle className="mr-2" />
                <a href="/about" className="text-gray-200 hover:text-blue-300">About Us</a>
              </li>
              <li className="mt-2 flex items-center">
                <FaServicestack className="mr-2" />
                <a href="/services" className="text-gray-200 hover:text-blue-300">Services</a>
              </li>
              <li className="mt-2 flex items-center">
                <FaUser className="mr-2" />
                <a href="/candidates" className="text-gray-200 hover:text-blue-300">Candidates</a>
              </li>
              <li className="mt-2 flex items-center">
                <FaNewspaper className="mr-2" />
                <a href="/news-articles" className="text-gray-200 hover:text-blue-300">News & Articles</a>
              </li>
              <li className="mt-2 flex items-center">
                <FaFileContract className="mr-2" />
                <a href="/terms" className="text-gray-200 hover:text-blue-300">Terms & Conditions</a>
              </li>
              <li className="mt-2 flex items-center">
                <FaPhoneAlt className="mr-2" />
                <a href="/contact" className="text-gray-200 hover:text-blue-300">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="w-full lg:w-1/4 md:w-1/2 mb-4 lg:mb-0">
            <h6 className="uppercase text-gray-200 p-5 font-bold mb-4">Categories</h6>
            <ul>
              <li className="mt-2 flex items-center">
                <FaTag className="mr-2" />
                Job Management
              </li>
              <li className="mt-2 flex items-center">
                <FaTag className="mr-2" />
                Job Seekers
              </li>
              <li className="mt-2 flex items-center">
                <FaTag className="mr-2" />
                Travel
              </li>
              <li className="mt-2 flex items-center">
                <FaTag className="mr-2" />
                Job Portal
              </li>
              <li className="mt-2 flex items-center">
                <FaTag className="mr-2" />
                Contact Us
              </li>
              <li className="mt-2 flex items-center">
                <FaTag className="mr-2" />
                Terms & Conditions
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="w-full lg:w-1/4 md:w-1/2 mb-9 lg:mb-0">
            <h6 className="uppercase text-gray-200 p-5 font-bold mb-4">Get in Touch with Us</h6>
            <p className="text-gray-200 mt-7 flex items-center">
              <FaPhoneSquareAlt className="mr-2" />
              +569 2316 2156
            </p>
            <p className="text-gray-200 mt-2 flex items-center">
              <FaEnvelope className="mr-2" />
              Email: <a href="mailto:info@jobarea.com" className="text-blue-300">info@jobarea.com</a>
            </p>
            <p className="text-gray-200 mt-2 flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              Website: <a href="https://www.jobarea.com" className="text-blue-300">www.jobarea.com</a>
            </p>
          </div>
        </div>

        

        <div className="flex justify-between items-center mt-8 border-t pt-5 border-gray-700">
                    <p className="text-gray-200">
                        &copy; 2024 All rights reserved | Real Estate Jobs
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-200 hover:text-pink-500">
                            <FaFacebook className="inline-block align-middle" />
                        </a>
                        <a href="#" className="text-gray-200 hover:text-pink-500">
                            <FaTwitter className="inline-block align-middle" />
                        </a>
                        <a href="#" className="text-gray-200 hover:text-pink-500">
                            <FaInstagram className="inline-block align-middle" />
                        </a>
                    </div>
                </div>
                <div className="border-b pt-5 border-gray-700"></div>

                <p className="text-center text-gray-200 mt-8">
                    &copy; 2024 All rights reserved | Real Estate Jobs
                </p>
      </div>
    </footer>
  );
};

export default Footer;
