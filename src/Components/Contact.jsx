import React from "react";
import { useForm } from "react-hook-form";
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
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let sentForm = (data) => {
    console.log(data);
  };

  return (
    <section
      className="min-h-screen pt-24 xl:px-24 flex flex-wrap flex-col justify-start bg-white"
      id="contact"
    >
      <div className="flex flex-col md:flex-row gap-5 w-full p-6 shadow-md border-2 border-gray-500 border-gray rounded">
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

        <form className="w-full md:w-3/5" onSubmit={handleSubmit(sentForm)}>
          <div className={`${errors?.name?.message ? "mb-3" : "mb-7"}`}>
            <div className="flex items-center">
              <div className="h-10 w-10 text-white bg-gray-500 flex justify-center items-center">
                <FaUserAlt />
              </div>
              <input
                type="text"
                {...register("name", {
                  required: { value: true, message: "Name is required!" },
                  minLength: {
                    value: 3,
                    message: "Name must be 3 character long!",
                  },
                  pattern: {
                    value: /^[a-zA-Z]+/i,
                    message: "Name must be start with alphabet.",
                  },
                })}
                className="h-10 p-4 border-gray-500 border-2 rounded-e outline-none"
                placeholder="Name"
                style={{ width: "100%" }}
              />
            </div>

            {errors.name && (
              <small className="text-red-500">{errors.name.message}</small>
            )}
          </div>

          <div className={`${errors?.email?.message ? "mb-3" : "mb-7"}`}>
            <div className="flex items-center">
              <div className="h-10 w-10 text-white bg-gray-500 flex justify-center items-center">
                <MdAlternateEmail />
              </div>
              <input
                type="text"
                {...register("email", {
                  required: { value: true, message: "Email is required!" },
                  pattern: {
                    value: /^\S+@\S+\.\S+$/i,
                    message: "Invalid email format!",
                  },
                })}
                className="h-10 p-4 border-gray-500 border-2 rounded-e outline-none"
                placeholder="Email"
                style={{ width: "100%" }}
              />
            </div>

            {errors.email && (
              <small className="text-red-500">{errors.email.message}</small>
            )}
          </div>

          <div className={`${errors?.message?.message ? "mb-3" : "mb-7"}`}>
            <div className="flex">
              <div className="w-10 text-white bg-gray-500 flex justify-center items-center">
                <IoMailSharp />
              </div>
              <textarea
                name="message"
                {...register("message", {
                  required: { value: true, message: "Message is required!" },
                })}
                className="p-4 min-h-52 border-gray-500 border-2 rounded-e outline-none"
                placeholder="Message"
                style={{ width: "100%" }}
              ></textarea>
            </div>

            {errors.message && (
              <small className="text-red-500">{errors.message.message}</small>
            )}
          </div>

          <div>
            <input
              type="submit"
              value="SEND MESSAGE"
              className="bg-blue-500 hover:bg-blue-600 text-white hover:shadow-md rounded-sm py-3 px-5"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
