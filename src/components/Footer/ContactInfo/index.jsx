/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import Social from "./Social";

export default function Bottom() {
  const handlePhoneNumberClick = (event) => {
    event.preventDefault();
    // Phone number
    const phoneNumber = "+398767654444";
    // Check if the device is mobile or desktop
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      // Redirect to phone call on mobile
      window.location.href = `tel:${phoneNumber}`;
    } else {
      // Fallback for desktop
      const phoneNumberFormatted = phoneNumber.replace(/\s/g, "");
      const phoneNumberLink = `tel:${phoneNumberFormatted}`;

      const tempLink = document.createElement("a");
      tempLink.href = phoneNumberLink;
      tempLink.style.display = "none";
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);
    }
  };

  return (
    <div className="container mx-auto py-4 flex justify-between text-white text-sm">
      <a href="mailto:contact@nttdata.com">contact@nttdata.com</a>
      <p>
        <a href="#" onClick={handlePhoneNumberClick}>
          +39 876 765 44 44
        </a>
      </p>
      <Social />
    </div>
  );
}
