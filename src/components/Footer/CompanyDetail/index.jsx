import React, { useState } from "react";
import CookiePreferences from "./CookiePreferences";

export default function CompanyDetail() {
  const [showCookiePreferences, setShowCookiePreferences] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    technical: false,
    analytical: false,
    functionality: false,
    advertising: false,
  });

  const toggleCookiePreferences = () => {
    setShowCookiePreferences(!showCookiePreferences);
  };

  const handlePreferenceToggle = (preference) => {
    setCookiePreferences((prevState) => ({
      ...prevState,
      [preference]: !prevState[preference],
    }));
  };

  return (
    <div className="hidden container sm:flex justify-end gap-x-16 px-6 py-10">
      {/* About Us */}
      <div className="text-white p-4">
        <h5 className="mb-4 font-bold uppercase">About Us</h5>
        <ul className="flex flex-col list-none gap-y-1">
          <li>
            <a href="https://www.nttdata.com/global/en/careers" className="hover:text-blue-500">
              Careers
            </a>
          </li>
          <li>
            <a href="https://www.nttdata.com/global/en/investors" className="hover:text-blue-500">
              Investors
            </a>
          </li>
          <li>
            <a href="https://www.nttdata.com/global/en/sustainability" className="hover:text-blue-500">
              Sustainability
            </a>
          </li>
        </ul>
      </div>

      {/* Resources */}
      <div className="text-white p-4 hidden md:block">
        <h5 className="mb-4 font-bold uppercase">Resources</h5>
        <ul className="flex flex-col list-none gap-y-1">
          <li>
            <a href="https://www.nttdata.com/global/en/news" className="hover:text-blue-500">
              News
            </a>
          </li>
          <li>
            <a href="https://www.nttdata.com/global/en/event" className="hover:text-blue-500">
              Events
            </a>
          </li>
          <li>
            <a href="https://www.nttdata.com/global/en/foresight" className="hover:text-blue-500">
              Foresight
            </a>
          </li>
        </ul>
      </div>

      {/* Legal */}
      <div className="text-white p-4 hidden md:block">
        <h5 className="mb-4 font-bold uppercase">Legal</h5>
        <ul className="flex flex-col list-none gap-y-1">
          <li>
            <a href="https://www.nttdata.com/global/en/term-of-use" className="hover:text-blue-500">
              Term of Use
            </a>
          </li>
          <li>
            <a href="https://www.nttdata.com/global/en/privacy-statement" className="hover:text-blue-500">
              Privacy Statement
            </a>
          </li>
          <li>
            <a href="https://www.nttdata.com/global/en/privacy-statement-for-gdpr" className="hover:text-blue-500">
              Privacy Statement for GDPR
            </a>
          </li>
          <li>
            <a href="https://www.nttdata.com/global/en/about-the-site" className="hover:text-blue-500">
              Accessibility
            </a>
          </li>
          <li>
            <a href="https://www.nttdata.com/global/en/cookie-policy" className="hover:text-blue-500">
              Cookie Policy
            </a>
          </li>
          <li>
            <a href="#!" className="hover:text-blue-500" onClick={toggleCookiePreferences}>
              Cookie Preferences
            </a>
          </li>
          <li>
            <a href="https://www.nttdata.com/global/en/social-media-policy" className="hover:text-blue-500">
              Social Media Policy
            </a>
          </li>
          <li>
            <a href="https://www.nttdata.com/global/en/copyright" className="hover:text-blue-500">
              Copyright
            </a>
          </li>
        </ul>
      </div>

      {/* Cookie Preferences */}
      {showCookiePreferences && (
        <CookiePreferences
          show={showCookiePreferences}
          cookiePreferences={cookiePreferences}
          handlePreferenceToggle={handlePreferenceToggle}
          onClose={toggleCookiePreferences}
        />
      )}
    </div>
  );
}
