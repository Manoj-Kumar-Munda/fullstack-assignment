import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="bg-black  text-white">
      <div className="max-w-screen-xl py-12 flex flex-wrap justify-between items-start mx-auto px-4">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-lg">Abstract</h1>
          <span>Branches</span>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-lg">Resources</h1>

          <div className="flex flex-col ">
            <span>Blog</span>
            <span>Help Center</span>
            <span>Release Notes</span>
            <span>Status</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-lg">Community</h1>
          <div className="flex flex-col">
            <span>Twitter</span>
            <span>LinkedIn</span>
            <span>Facebook</span>
            <span>Dribble</span>
            <span>Podcast</span>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h1>Company</h1>
            <div className=" flex flex-col ">
              <span>About Us</span>
              <span>Careers</span>
              <span>Legal</span>
            </div>
          </div>

          <div className=" flex gap-8">
            <div className="flex flex-col gap-2">
              <h1>Contact Us</h1>
              <span>info@abstract.com</span>
            </div>

            <div className="self-end flex flex-col gap-2">
              <Logo />

              <div className="flex flex-col gap-2">
                <span>© Copyright 2022</span>
                <span>Abstract Studio Design, Inc.</span>
                <span>All rights reserved</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
