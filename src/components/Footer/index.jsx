import React from "react";
import EmailSubscription from "./EmailSubscription";
import CompanyDetail from "./CompanyDetail";
import ContactInfo from "./ContactInfo";

export default function Footer() {
  return (
    <div className="bg-blue-700">
      <div className="container mx-auto flex sm:py-10 px-6 ">
        <EmailSubscription />
        <CompanyDetail />
      </div>
      <hr />
      <ContactInfo />
    </div>
  );
}
