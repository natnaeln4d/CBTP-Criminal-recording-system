import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";
import Photo from "../Photo/photo_2023-01-20 22.58.12.jpeg";
import Photo1 from "../Photo/images (8).png";
import Photo2 from "../Photo/sealing-criminal-records-rgb-color-icon-2GF7H62.jpeg";
import Photo3 from "../Photo/2689742.png";
import { Navigate } from "react-router-dom";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handelVisiblity = this.handelVisiblity.bind(this);
    this.state = {
      visibilty: false,
    };
  }
  handelVisiblity() {
    this.setState((pre) => {
      return {
        visibilty: !pre.visibilty,
      };
    });

    const handlesign = () => {
      console.log("asdfasdf");
      localStorage.setItem("userData", "");
      localStorage.setItem("auth", "");
    };
  }
  navigate() {
    <Navigate to="/viewall" replace={true} />;
  }
  render() {
    return (
      <div>
        <nav className="bg-gray-800">
          <div className="w-full max-w-7xl sm:px-6 ">
            <div className="relative flex h-50 w-full justify-between h-50">
              <div className=" inset-y-0 left-0 flex items-center sm:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>

                  <svg
                    className="block w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>

                  <svg
                    className="hidden w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                <div className="flex items-center flex-shrink-0">
                  <img
                    className="block w-auto h-[50px] lg:hidden"
                    src={Photo3}
                    alt="Your Company"
                  />
                  <img
                    className="hidden w-auto h-[50px] lg:block"
                    src={Photo3}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex mx-[-35px] py-4">
                    <h1 className="font-lg font-extrabold">
                      <a href="#" className="px-3 py-2 text-xl text-white">
                        Criminal Recording Manangement System{" "}
                      </a>
                    </h1>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="p-1 text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>

                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
                </button>

                <div className="relative ml-3">
                  <div>
                    <button
                      onClick={this.handelVisiblity}
                      type="button"
                      className="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="w-8 h-8 rounded-full"
                        src={Photo}
                        alt=""
                      />
                    </button>
                  </div>

                  {this.state.visibilty && (
                    <div className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-gray-700 rounded-md shadow-lg drop dropdown ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Link
                        className="block px-4 py-2 text-sm text-white hover:bg-white hover:text-gray-700"
                        to="/profile"
                      >
                        <a href="#">Profile</a>
                      </Link>

                      <Link
                        className="block px-4 py-2 text-sm text-white hover:bg-white hover:text-gray-700"
                        to="/"
                      >
                        <a href="#">Sign out</a>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
