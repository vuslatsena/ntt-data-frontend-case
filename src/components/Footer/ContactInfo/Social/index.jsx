import React from 'react';
import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from './socialSVG';

export default function Social() {
  return (
    <div className="hidden sm:flex justify-center items-center gap-x-4">
      <a href="https://twitter.com/nttdata" className="twitter">
        <TwitterIcon />
      </a>
      <a href="https://www.facebook.com/nttdata" className="facebook">
        <FacebookIcon />
      </a>
      <a href="https://www.instagram.com/nttdata/" className="instagram">
        <InstagramIcon />
      </a>
      <a href="https://www.linkedin.com/company/nttdata/" className="linkedin">
        <LinkedInIcon />
      </a>
    </div>
  );
}
