import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-around  px-3 text-xl text-white">
      <div>
        <h1 className="text-base font-medium">Made with ❤️ by </h1>
      </div>
      <div className="">
        <a
          href="https://javaid-khan.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="text-base font-medium">Javaid Khan </h1>
        </a>
      </div>
    </div>
  );
};

export default Footer;
