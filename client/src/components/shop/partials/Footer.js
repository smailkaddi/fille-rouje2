import React, { Fragment } from "react";
import moment from "moment";
import "./style.css";

const Footer = (props) => {
  return (
    <Fragment>

<div>
  <h1 className="text-center font-bold my-20">
  </h1>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@iconscout/unicons@3.0.6/css/line.css" />

  <footer className="bg-gray-800 pt-10 sm:mt-10 pt-10">
    <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
      {/* Col-1 */}
      <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
        {/* Col Title */}
        <div className="text-xs uppercase text-gray-400 font-medium mb-6">
        fish fresh
        </div>
        {/* Links */}
        <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
        Nos exigences: Fraicher et Qualité
        </a>
      </div>
      {/* Col-2 */}
      <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
        {/* Col Title */}
        <div className="text-xs uppercase text-gray-400 font-medium mb-6">
        Nos Coordonées:
        </div>
        {/* Links */}
        <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
        Adresse:
        </a>
       
      </div>
      {/* Col-3 */}
      <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
        {/* Col Title */}
        <div className="text-xs uppercase text-gray-400 font-medium mb-6">
        Nos Partenaire:
        </div>
        {/* Links */}
        <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
          Configuration
        </a>

      </div>
      {/* Col-3 */}
      <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
        {/* Col Title */}
        <div className="text-xs uppercase text-gray-400 font-medium mb-6">
        Nous suivre sur:
        </div>
        {/* Links */}
        <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
          Twitter
        </a>
        <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
          YouTube
        </a>
      </div>
    </div>
    {/* Copyright Bar */}
    <div className="pt-2">
      <div className="flex pb-5 px-3 m-auto pt-5 
      border-t border-gray-500 text-gray-400 text-sm 
      flex-col md:flex-row max-w-6xl">
        <div className="mt-2">
        ismail-kaddi © Copyright {moment().format("YYYY")}
        </div>
        {/* Required Unicons (if you want) */}
        <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
          <a href="#" className="w-6 mx-1">
            <i className="uil uil-facebook-f" />
          </a>
          <a href="#" className="w-6 mx-1">
            <i className="uil uil-twitter-alt" />
          </a>
          <a href="#" className="w-6 mx-1">
            <i className="uil uil-youtube" />
          </a>
          <a href="#" className="w-6 mx-1">
            <i className="uil uil-linkedin" />
          </a>
          <a href="#" className="w-6 mx-1">
            <i className="uil uil-instagram" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</div>

      {/* <footer
        style={{ background: "#303031", color: "#87898A" }}
        className="z-10 py-6 px-4 md:px-12 text-center"
      >
        ismail-kaddi © Copyright {moment().format("YYYY")}
      </footer> */}
    </Fragment>
  );
};

export default Footer;
