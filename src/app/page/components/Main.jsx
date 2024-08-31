import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div className="w-full h-screen text-center ">
      <div className="max-w-[1248px] mx-auto w-full h-screen flex items-center justify-center ">
        <div>
          <p className="uppercase tracking-widest text-sm text-gray-600">
            Lets Build Somenthing Together
          </p>
          <h1 className="text-gray-600 py-4">
            Hi, i am <span className="text-purple-900"> Clint </span>{" "}
          </h1>
          <h1 className="text-gray-600 py-2">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A molestiae asperiores quaerat excepturi amet earum qui sapiente tempora quo mollitia aperiam, voluptatum illo 
            obcaecati iusto iure voluptas? Voluptatum, ut totam.</p>
            <div className="flex justify-between items-center my-4 m-auto max-w-[330px]">
                <Link href="https://www.linkedin.com/in/sudip-raut-832a9b2a1/" target="_blank">
                <div className=" rounded-full shadow-2xl p-6 hover:scale-105 shadow-gray-800">
                    <FaLinkedinIn/>
                </div>
                </Link>

                <Link href='https://github.com/Sudipraut1522' target="_blank">
                <div className=" rounded-full shadow-2xl p-6 hover:scale-105 shadow-gray-800">
                    <FaGithub/>
                </div>
                </Link>
                <Link href='' target="_blank">
                <div className=" rounded-full shadow-2xl p-6 hover:scale-105 shadow-gray-800">
                    <AiOutlineMail/>
                </div>
                </Link>
                <Link href='' target="_blank">
                <div className=" rounded-full shadow-2xl p-6 hover:scale-105 shadow-gray-800">
                    <BsFillPersonLinesFill/>
                </div>
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
