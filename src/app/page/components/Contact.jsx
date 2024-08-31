import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {
  HiOutlineChevronDoubleDown,
  HiOutlineChevronDoubleUp,
} from "react-icons/hi";

const Contact = () => {
  return (
    <div  id ="contact"className="w-full  lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-purple-600 py-4">
          Contact
        </p>
        <h2 className="mt-4">Get in Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-lg shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 w-full">
              <div>
                <img
                  src="https://media.istockphoto.com/id/1883285965/photo/an-unrecognizable-businesswoman-working-in-her-office-on-her-computer.webp?a=1&b=1&s=612x612&w=0&k=20&c=jx0Npn3jxtWjL7WpGzKtfL58_OxprChBqUmUSXXF-gY="
                  alt="contact"
                  className="rounded-xl hover:scale-105 ease-in duration-200"
                />
              </div>
              <div className="py-2">
                <h2>Name Here</h2>
                <p>Frot-End Developer</p>
                <p className="py-4">I am available for freeanc or full time </p>
              </div>
              <div>
                <p className="uppercase tracking-wider">Connect With Me</p>

                <div className="py-4 flex items-center justify-between pt-8 md:justify-evenly">
                  <div className=" rounded-full shadow-2xl p-6 hover:scale-105 shadow-gray-800">
                    <FaLinkedinIn />
                  </div>
                  <div className=" rounded-full shadow-2xl p-6 hover:scale-105 shadow-gray-800">
                    <FaGithub />
                  </div>
                  <div className=" rounded-full shadow-2xl p-6 hover:scale-105 shadow-gray-800">
                    <AiOutlineMail />
                  </div>
                  <div className=" rounded-full shadow-2xl p-6 hover:scale-105 shadow-gray-800">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form  action="https://formsubmit.co/sudipraut444@gmail.com" method="POST">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">UserName</label>
                    <input
                    name="username"
                      type="text"
                      className="border-2 rounded-lg p-3  border-gray-300"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      PhoneNumber
                    </label>
                    <input
                    name="phonenumber"
                    required
                      type="text"
                      className="border-2 rounded-lg p-3  border-gray-300"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="text-sm py-3 uppercase">Email</label>
                  <input
                  name="email"
                  required
                    type="email"
                    className="border-2 rounded-lg p-3 border-gray-300"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm py-3 uppercase">Subject</label>
                  <input
                  required
                  name="message"
                    type="text"
                    className="border-2 rounded-lg p-3 border-gray-300"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm py-3 uppercase">Message</label>
                  <textarea
                  name="message"
                  required
                    rows={5}
                    co
                    className="border-2 rounded-lg p-3 border-gray-300"
                  />
                </div>
                <div className="py-4 w-full flex justify-center items-center text-center cursor-pointer bg-blue-600 mt-4 rounded-lg">
                  <button  type="submit" className="uppercase text-gray-400">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center p-4 mb-10">
        <Link href="/">
          <div className="rounded-full p-4 shadow-xl shadow-gray-600 hover:scale-105 ease-in duration-300">
            <HiOutlineChevronDoubleUp size={25} color="blue-600"/>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
