"use client";

import {
  BuildingIcon,
  CashIcon,
  WhiteCashIcon,
  ClockIcon,
  DividerIcon,
  DocumentIcon,
  CalendarIcon,
  LocationIcon,
  LocationIcon2,
  NotificationIcon,
  SaveIcon,
  SavedIcon,
  SearchIcon,
  SettingsIcon,
  SuitcaseIcon,
  DropdownArrow,
} from "@/app/assets";

import Discover from './components/Discover.js';
import Filters from './components/Filters.js';
import { useState } from "react";

import Image from "next/image";

//<img src={} alt="" />

export default function Home() {



  return (
    <div>


      <main>
        <div
          className="parallax-graphic"
          style={{
            backgroundImage: "url('/placeholderbg.png')",
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            minHeight: "70vh",
            width: "100%",
            position: "relative",
          }}
        >
          <nav className="flex items-center justify-between mr-10 ml-10 pt-3">
            <div className="text-white font-extrabold tracking-wide text-3xl p-4 ">
              JOBLESS.
            </div>

            <div className="links text-white">
              <ul className="flex *:pl-5 p-5 *:ml-9  ">
                <li className=" ">
                  <a href="">Find Jobs</a>
                </li>
                <li>
                  <a href="">Saved Jobs</a>
                </li>
                <li>
                  <a href="">Messages</a>
                </li>
                <li>
                  <a href="">Explore</a>
                </li>
              </ul>
            </div>

            <div className="flex items-center min-w-7 ">
              <div className="profile-pic"></div>
              <span className="*:bg-black flex *:m-3 *:p-3 *:h-12 *:w-12 *:rounded-full justify-center items-center *:border-white *:border ">
                <button>
                  <SettingsIcon className="scale-90 -ml-0.5 -mt-1" />
                </button>

                <button>
                  <NotificationIcon className="-ml-1 -mt-1" />{" "}
                </button>
              </span>

              <button>
                <Image
                  src="/profile-pic.png"
                  width={60}
                  height={60}
                  className="m-2 pt-1"
                />
              </button>
            </div>
          </nav>

          {/* <div className="  bg-red-500 font-black tracking-normal text-9xl p-4 justify-center items-center">JOBLESS.</div> */}

          <div className="absolute bottom-5 left-0 right-0">
            <div className="flex bg-white p-2 rounded-full max-w-5xl h-20 items-center mx-auto mb-10">
              <div className="flex *:mr-6 items-center">
                <div className="black-icon">
                  <SearchIcon className="ml-8 w-7  " />
                </div>
                <div>
                  <input
                    placeholder="Job Title or Keyword"
                    className="min-w-60"
                  ></input>
                </div>
              </div>
              <DividerIcon height={40} />
              <div className="flex *:mr-6 items-center min-w-7">
                <div className="black-icon">
                  <LocationIcon className="ml-12 scale-90" />
                </div>
                <div>
                  <input
                    placeholder="Country, city, zipcode or 'remote'"
                    className="min-w-80"
                  ></input>
                </div>
              </div>
            </div>

          <Filters/>

          </div>
        </div>

        <div className="overflow-x-scroll whitespace-nowrap no-scrollbar flex mt-8 *:text-black *:ml-3 *:px-4 *:py-2 *:rounded-full *:border-[1.5px] *:border-solid *:border-[#BFBFBF] items-center  ">
          <h8>Part-Time</h8>
          <h8>Full-Time</h8>
          <h8>Full-Time</h8>
          <h8>Remote</h8>
          <h8>Software Developer</h8>
          <h8>Senior Level</h8>
          <h8>Illustrator</h8>
          <h8>Dallas, TX</h8>
          <h8>Project Work</h8>
          <h8>Full Day</h8>
          <h8>Distant Work</h8>
          <h8>Flexible Schedule</h8>
          <h8>Flexible Schedule</h8>
        </div>

          <Discover />
      </main>
    </div>
  );
}
