import React, { useState, useEffect } from "react";

export default function EmailSubscription() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  // Function to handle email input changes
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsValidEmail(true); // Reset the email validation status
  };

  // Function to handle sign up button click
  const handleSignUp = () => {
    // Perform email format validation
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(email)) {
      setIsValidEmail(false);
      return;
    }

    // Perform any other necessary validation before setting isSubscribed to true
    setIsSubscribed(true);
    setShowMessage(true); // Show the success message

    // Reset the email input after 10 seconds
    setTimeout(() => {
      setEmail("");
    }, 10000);

    // Reset the message after 2 second
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  // Effect to hide the message after 10 seconds
  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  return (
    <div className="w-full sm:w-1/2 flex flex-col gap-y-5 text-white py-10">
      <div>
        <img className="h-10" src="/white-logo.svg" alt="" />
      </div>

      <p className="hidden sm:flex">
        Learn what core principles and values the NTT DATA Group believes in and shares with its employees across the globe.
      </p>

      <div className="flex h-6 sm:h-10">
        <input
          type="text"
          className={`bg-white w-1/2 px-3 outline-none text-xs sm:text-base ${isValidEmail ? 'text-black' : 'text-red-500'}`}
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <button
          type="submit"
          className="bg-blue-950 inline-block px-6 text-xs font-normal uppercase"
          onClick={handleSignUp}
        >
          Sign Up
        </button>
      </div>

      {!isValidEmail && (
        <div className="bg-red-600 text-white p-3 rounded">
          Please enter a valid email address!!
        </div>
      )}

      {showMessage && (
        <div className="bg-green-500 text-white p-3 rounded">
          <p>Your subscription has been successful!</p>
        </div>
      )}
    </div>
  );
}
