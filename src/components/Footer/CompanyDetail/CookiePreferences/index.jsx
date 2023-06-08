import React, { useState, useEffect } from "react";

export default function CookiePreferences({ show, onClose }) {
  const [cookiePreferences, setCookiePreferences] = useState({
    technical: false,
    analytical: false,
    functionality: false,
    advertising: false,
  });

  useEffect(() => {
    const savedPreferences = JSON.parse(localStorage.getItem("cookiePreferences"));
    if (savedPreferences) {
      setCookiePreferences(savedPreferences);
    }
  }, []);

  const handlePreferenceToggle = (preference) => {
    setCookiePreferences((prevState) => ({
      ...prevState,
      [preference]: !prevState[preference],
    }));
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookiePreferences", JSON.stringify(cookiePreferences));
    console.log("Cookie preferences saved:", cookiePreferences);
    onClose();
  };

  return (
    show && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-8">
          <h2 className="text-xl font-bold mb-4">Cookie Preferences</h2>
          <ul className="flex flex-col list-none gap-y-4">
            <li className="flex items-center justify-between">
              <span className="font-medium px-2">Technical Cookies</span>
              <input
                type="checkbox"
                checked={cookiePreferences.technical}
                onChange={() => handlePreferenceToggle("technical")}
              />
            </li>
            <li className="flex items-center justify-between">
              <span className="font-medium px-2">Analytical Cookies</span>
              <input
                type="checkbox"
                checked={cookiePreferences.analytical}
                onChange={() => handlePreferenceToggle("analytical")}
              />
            </li>
            <li className="flex items-center justify-between">
              <span className="font-medium px-2">Functionality Cookies</span>
              <input
                type="checkbox"
                checked={cookiePreferences.functionality}
                onChange={() => handlePreferenceToggle("functionality")}
              />
            </li>
            <li className="flex items-center justify-between">
              <span className="font-medium px-2">Advertising and Retargeting Cookies</span>
              <input
                type="checkbox"
                checked={cookiePreferences.advertising}
                onChange={() => handlePreferenceToggle("advertising")}
              />
            </li>
          </ul>
          <div className="flex justify-end mt-6">
            <button
              className="bg-blue-500 text-white px-4 py-2 mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2"
              onClick={handleSavePreferences}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    )
  );
}
