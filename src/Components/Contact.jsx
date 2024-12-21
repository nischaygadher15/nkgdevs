import React from "react";
import { BsTwitterX } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaUserAlt,
} from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { IoCallSharp, IoLocationSharp, IoMailSharp } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section
      className="min-h-screen pt-24 xl:px-24 flex flex-wrap flex-col justify-start bg-white"
      id="contact"
    >
      <div className="flex flex-col md:flex-row gap-5 w-full p-6 shadow-md bg-gray-300">
        <div className="w-full md:w-2/5">
          {/* Intro Text */}
          <div className="text-center">
            <p className="inline text-2xl px-3 py-1 rounded-s-full rounded-e-full bg-slate-500">
              Contact
            </p>
            <p className="mt-4 text-left">
              Feel free to reach out to me if you'er looking for a developer,
              have a query, or simply want to connect.
            </p>
          </div>

          <ul className="mt-5">
            <li className="flex gap-4 items-center mt-4">
              <IoLocationSharp className="text-3xl" />
              <ul className="unstyled">
                <li className="text-left font-bold uppercase">Address</li>
                <li className="text-left">
                  <a href="https://maps.app.goo.gl/TyXyJQJ7eAe7bVMB6">
                    <address>
                      Jodhpur Cross Road, Satelite, Ahmedabad, Gujarat, India
                    </address>
                  </a>
                </li>
              </ul>
            </li>

            <li className="flex gap-4 items-center mt-4">
              <IoCallSharp className="text-3xl" />
              <ul className="unstyled">
                <li className="text-left font-bold uppercase">Mobile</li>
                <li>
                  <a href="tel:+918141409448">+91 8141409448</a>
                </li>
              </ul>
            </li>

            <li className="flex gap-4 items-center mt-4">
              <IoMailSharp className="text-3xl" />
              <ul className="unstyled">
                <li className="text-left font-bold uppercase">Email</li>
                <li></li>
                <a href="mailto:nischaygadher15@gmail.com">
                  nischaygadher15@gmail.com
                </a>
              </ul>
            </li>
          </ul>

          <p className="mt-5 font-bold text-xl">Follow Me</p>
          <ul className="my-4 flex justify-evenly sm:justify-start sm:gap-10 text-2xl sm:text-xl">
            <li className="p-1 hover:bg-black hover:text-white hover:rounded-md hover:shadow-md">
              <a href="https://github.com/nischaygadher15">
                <FiGithub />
              </a>
            </li>
            <li className="p-1 hover:bg-blue-600 hover:text-white hover:rounded-md hover:shadow-md">
              <a href="https://www.linkedin.com/in/nischay-gadher">
                <FaLinkedinIn />
              </a>
            </li>
            <li className="p-1 hover:bg-black hover:text-white hover:rounded-md hover:shadow-md">
              <a href="https://x.com/NGadher15">
                <BsTwitterX />
              </a>
            </li>
            <li className="p-1 hover:bg-blue-600 hover:text-white hover:rounded-md hover:shadow-md">
              <a href="https://www.facebook.com/nischay.gadher.1">
                <FaFacebookF />
              </a>
            </li>
            <li className="p-1 hover:bg-gradient-to-bl from-purple-500 via-pink-500 to-yellow-500 hover:text-white hover:rounded-md hover:shadow-md">
              <a href="https://www.instagram.com/gadhernischay/">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>

        <form className="w-full md:w-3/5">
          <div className="mb-7 flex items-center">
            <div className="h-10 w-10 text-white bg-gray-500 flex justify-center items-center">
              <FaUserAlt />
            </div>
            <input
              type="text"
              name="cname"
              id="cname"
              className="h-10 p-4"
              placeholder="Name"
              style={{ width: "100%" }}
            />
          </div>

          <div className="mb-7 flex items-center">
            <div className="h-10 w-10 text-white bg-gray-500 flex justify-center items-center">
              <MdAlternateEmail />
            </div>
            <input
              type="email"
              name="cname"
              id="cname"
              className="h-10 p-4"
              placeholder="Email"
              style={{ width: "100%" }}
            />
          </div>

          <div className="mb-7 flex items-start">
            <div className="min-h-64 w-10 text-white bg-gray-500 flex justify-center items-center">
              <IoMailSharp />
            </div>
            <textarea
              name="message"
              className="min-h-64 p-4 resize-none overflow-y-auto overflow-x-hidden"
              placeholder="Message"
              style={{ width: "100%" }}
            ></textarea>
          </div>

          <div>
            <input
              type="submit"
              value="SEND MESSAGE"
              className="bg-blue-700 hover:bg-blue-600 hover:text-white hover:shadow-md rounded-sm py-3 px-5"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
