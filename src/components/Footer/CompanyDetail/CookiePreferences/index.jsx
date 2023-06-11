import React, { useState, useEffect } from "react";

export default function CookiePreferences({ show, onClose }) {
  const [cookiePreferences, setCookiePreferences] = useState({
    technical: false,
    analytical: false,
    functionality: false,
    advertising: false,
  });

  useEffect(() => {
    // Load saved preferences from local storage on component mount
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
    // Save preferences to local storage
    localStorage.setItem("cookiePreferences", JSON.stringify(cookiePreferences));
    console.log("Cookie preferences saved:", cookiePreferences);
    onClose();
  };

  // Check if all preferences remain unchanged
  const allPreferencesUnchanged = Object.values(cookiePreferences).every((value) => !value);

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8">
        <h2 className="text-xl font-bold mb-4">Cookie Preferences</h2>
        <ul className="flex flex-col list-none gap-y-4">
          {/* Technical Cookies */}
          <li className="flex items-center justify-between">
            <span className="font-medium px-2">Technical Cookies</span>
            <input
              type="checkbox"
              checked={cookiePreferences.technical}
              onChange={() => handlePreferenceToggle("technical")}
            />
          </li>

          {/* Analytical Cookies */}
          <li className="flex items-center justify-between">
            <span className="font-medium px-2">Analytical Cookies</span>
            <input
              type="checkbox"
              checked={cookiePreferences.analytical}
              onChange={() => handlePreferenceToggle("analytical")}
            />
          </li>

          {/* Functionality Cookies */}
          <li className="flex items-center justify-between">
            <span className="font-medium px-2">Functionality Cookies</span>
            <input
              type="checkbox"
              checked={cookiePreferences.functionality}
              onChange={() => handlePreferenceToggle("functionality")}
            />
          </li>

          {/* Advertising and Retargeting Cookies */}
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
            className="hover:bg-blue-500 bg-blue-700 text-white px-4 py-2 mr-2 rounded-md"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className={`hover:bg-blue-500 bg-blue-700 text-white px-4 py-2 rounded-md ${
              allPreferencesUnchanged ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleSavePreferences}
            disabled={allPreferencesUnchanged} // Disable the Save button if all preferences remain unchanged
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
