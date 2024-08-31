"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handelNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handelShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handelShadow);
  }, []);
  return (
    <div>
      <div
        className={
          shadow
            ? "fixed w-full h-20 shadow-xl z-100"
            : "fixed w-full h-20  z-100"
        }
      >
        <div className="flex items-center justify-between w-full h-full px-2 2xl:px-15">
          <h2 className="text-gray-600">Sudip</h2>
          <div>
            <ul className="hidden  md:flex">
              <Link href="/">
                <li className="ml-10 text-small uppercase hover:border-b">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li className="ml-10 text-small uppercase hover:border-b">
                  About
                </li>
              </Link>
              <Link href="/#skill">
                <li className="ml-10 text-small uppercase hover:border-b">
                  Skill
                </li>
              </Link>
              <Link href="/#project">
                <li className="ml-10 text-small uppercase hover:border-b">
                  Project
                </li>
              </Link>
              <Link href="/#contact">
                <li className="ml-10 text-small uppercase hover:border-b">
                  Contact
                </li>
              </Link>
            </ul>
            <div onClick={handelNav} className="md:hidden">
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
              : ""
          }
        >
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0  p-10 ease-in duration-500"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <Image src="" alt="sudip" />
                <div
                  onClick={handelNav}
                  className="rounded-full p-3 shadow-lg shadow-gray-400 cursor-pointer"
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className="border-b border-gray-300 my-4">
                <p className="w-[85%] md:w-[90%] py-4">
                  Lets build something Legendart Together
                </p>
              </div>
            </div>
            <div className="flex flex-col py-4">
              <ul className="uppercase">
                <Link href="/">
                  <li onClick={()=>setNav(false)} className=" py-4 text-sm">Home</li>
                </Link>
                <Link href="/#about">
                  <li onClick={()=>setNav(false) } className=" py-4 text-sm">About</li>
                </Link>

                <Link href="/#skill">
                  <li onClick={()=>setNav(false) } className=" py-4 text-sm">Skill</li>
                </Link>

                <Link href="/#project">
                  <li onClick={()=>setNav(false) } className=" py-4 text-sm">Project</li>
                </Link>

                <Link href="/#contact">
                  <li onClick={()=>setNav(false) } className=" py-4 text-sm">Contact</li>
                </Link>
              </ul>
              <div className="pt-40">
                <p className="uppercase tracking-widest text-[#5651ef]">
                  Lets connect
                </p>
              </div>
              <div className="flex justify-between py-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
