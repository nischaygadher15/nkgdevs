import React, { useState } from "react";
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
import { toast } from "react-toastify";

const Contact = ({ props }) => {
  let formSendig;

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let sentForm = async (dt) => {
    // Cleaning Timeout
    clearTimeout(formSendig);

    // Start Loadning
    props.setLoading(true);

    // API to Backend for Mail
    try {
      if (dt) {
        let res = await fetch("https://nkgdevsbackend.vercel.app/getemail", {
          method: "POST",
          headers: { "Content-Type": "application/json; charset=utf-8" },
          body: JSON.stringify(dt),
        });

        let response = await res.json();

        formSendig = setTimeout(() => {
          // Stoping Leadind
          props.setLoading(false);

          // Toast Message
          if (response.status) {
            reset();
            toast.success("E-Mail sent successfully");
          } else {
            toast.success("E-Mail sent successfully");
          }
        }, 1000);
      }
    } catch (error) {
      formSendig = setTimeout(() => props.setLoading(false), 1000);
      console.log(error.message);
    }
  };

  return (
    <section
      className="min-h-screen py-24 xl:px-24 flex justify-start bg-white dark:bg-black"
      id="contact"
    >
      <div className="flex flex-col md:flex-row gap-5 w-full p-5 sm:p-6 shadow-md border-2 border-gray-500 dark:border-white border-gray rounded-md">
        <div className="w-full md:w-2/5">
          {/* Intro Text */}
          <div className="text-center">
            <p className="inline text-2xl text-white bg-blue-700 px-3 py-1 rounded-s-full rounded-e-full">
              Contact
            </p>
            <p className="mt-4 text-left">
              Feel free to reach out to me if you'er looking for a developer,
              have a query, or simply want to connect.
            </p>
          </div>

          {/* Address */}
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

          {/* Social Media Icons */}
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

        {/* Contact Us Form */}
        <form className="w-full md:w-3/5" onSubmit={handleSubmit(sentForm)}>
          {/* Username */}
          <div className={`${errors?.name?.message ? "mb-3" : "mb-7"}`}>
            <div className="flex items-center">
              <div className="h-10 w-10 text-white bg-blue-700 flex justify-center items-center">
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
                className="h-10 px-4 border-blue-700 border-2 rounded-e outline-none dark:text-black"
                placeholder="Name"
                style={{ width: "100%" }}
              />
            </div>

            {errors.name && (
              <small className="text-red-500">{errors.name.message}</small>
            )}
          </div>

          {/* Email */}
          <div className={`${errors?.email?.message ? "mb-3" : "mb-7"}`}>
            <div className="flex items-center">
              <div className="h-10 w-10 text-white bg-blue-700 flex justify-center items-center">
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
                className="h-10 px-4 border-blue-700 border-2 rounded-e outline-none dark:text-black"
                placeholder="Email"
                style={{ width: "100%" }}
              />
            </div>

            {errors.email && (
              <small className="text-red-500">{errors.email.message}</small>
            )}
          </div>

          {/* Message */}
          <div className={`${errors?.message?.message ? "mb-3" : "mb-7"}`}>
            <div className="flex">
              <div className="w-10 text-white bg-blue-700 flex justify-center items-center">
                <IoMailSharp />
              </div>
              <textarea
                name="message"
                {...register("message", {
                  required: { value: true, message: "Message is required!" },
                })}
                className="p-4 min-h-52 border-blue-700 border-2 rounded-e outline-none dark:text-black"
                placeholder="Message"
                style={{ width: "100%" }}
              ></textarea>
            </div>

            {errors.message && (
              <small className="text-red-500">{errors.message.message}</small>
            )}
          </div>

          {/* Send Button */}
          <div>
            <input
              type="submit"
              value="SEND MESSAGE"
              className="text-white bg-blue-700 hover:bg-blue-800 rounded-sm py-3 px-5"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
