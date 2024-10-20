"use client";

import React from 'react'
import {Checkbox} from "@nextui-org/checkbox";

import { useState } from "react";

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



const Filters = () => {

      // Dropdown visibility states
  const [isDatePostedOpen, setIsDatePostedOpen] = useState(false);
  const [isExperienceLevelOpen, setIsExperienceLevelOpen] = useState(false);
  const [isWorkingScheduleOpen, setIsWorkingScheduleOpen] = useState(false);
  const [isPerMonthOpen, setIsPerMonthOpen] = useState(false);

  // Toggle dropdown functions
  const toggleDatePosted = () => setIsDatePostedOpen(!isDatePostedOpen);
  const toggleExperienceLevel = () => setIsExperienceLevelOpen(!isExperienceLevelOpen);
  const toggleWorkingSchedule = () => setIsWorkingScheduleOpen(!isWorkingScheduleOpen);
  const togglePerMonth = () => setIsPerMonthOpen(!isPerMonthOpen);


  return (
    <div>

<div className="flex justify-center items-center mb-4 *:m-3">
          {/* Date Posted Filter */}
          <div className="flex justify-center items-center relative">
            <CalendarIcon className="mr-4" />
            <button onClick={toggleDatePosted}>
              <h8>Date Posted</h8>
            </button>
            <button className="dropdown" onClick={toggleDatePosted}>
              <DropdownArrow />
            </button>
            {isDatePostedOpen && (
              <div className="dropdown-menu">
                 <Checkbox size="md" >Last 24 Hours</Checkbox>
                 <Checkbox defaultSelected size="md">Last 7 Days</Checkbox>
                 <Checkbox defaultSelected size="md">Last 30 Days</Checkbox>
            </div>
            )}
          </div>

          <div className="white-svg">
            <DividerIcon height={40} />
          </div>

          {/* Experience Level Filter */}
          <div className="flex justify-center items-center relative">
            <SuitcaseIcon className="mr-4" />
            <button onClick={toggleExperienceLevel}>
              <h8>Experience Level</h8>
            </button>
            <button className="dropdown" onClick={toggleExperienceLevel}>
              <DropdownArrow />
            </button>
            {isExperienceLevelOpen && (
              <div className="dropdown-menu">
                <button>Entry Level</button>
                <button>Mid Level</button>
                <button>Senior Level</button>
              </div>
            )}
          </div>

          <div className="white-svg">
            <DividerIcon height={40} />
          </div>

          {/* Working Schedule Filter */}
          <div className="flex justify-center items-center relative">
            <ClockIcon className="mr-4" />
            <button onClick={toggleWorkingSchedule}>
              <h8>Working Schedule</h8>
            </button>
            <button className="dropdown" onClick={toggleWorkingSchedule}>
              <DropdownArrow />
            </button>
            {isWorkingScheduleOpen && (
              <div className="dropdown-menu">
                <button>Full-Time</button>
                <button>Part-Time</button>
              </div>
            )}
          </div>

          <div className="white-svg">
            <DividerIcon height={40} />
          </div>

          {/* Per Month Filter */}
          <div className="flex justify-center items-center relative">
            <WhiteCashIcon className="size-6 mr-4" />
            <button onClick={togglePerMonth}>
              <h8>Per Month</h8>
            </button>
            <button className="dropdown" onClick={togglePerMonth}>
              <DropdownArrow />
            </button>
            {isPerMonthOpen && (
              <div className="dropdown-menu">
                <button>$1,200 - $5,000</button>
                <button>$5,000 - $10,000</button>
                <button>$10,000 - $20,000</button>
              </div>
            )}
          </div>
        </div>


    </div>
  )
}

export default Filters