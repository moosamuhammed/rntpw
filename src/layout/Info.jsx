import React from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';

const Info = () => {
  return (
    <div className="hidden md:block bg-red-700 text-white text-sm">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 py-4 space-y-4 md:space-y-0">
        {/* Contact Info */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-1">
            <FaPhone />
            <span className="font-semibold">
              +91 9074600400 | +91 8086461238 | +91 8606185461
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <FaEnvelope />
            <span className="font-semibold">info@RNTPW.in</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Info;
