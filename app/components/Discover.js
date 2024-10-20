"use client";

import axios from 'axios';

import React from "react";
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

import { useState, useEffect } from "react";

import Image from "next/image";


const Discover = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  
  function jobLevel(experienceMonths) {
    if (experienceMonths >= 60) {
      return "Senior Level";
    } else if (experienceMonths >= 24) {
      return "Mid Level";
    } else if (experienceMonths >= 0) {
      return "Entry Level";
    } else {
      return "Unknown Level";
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };


  const getTimeAgo = (dateString) => {
    const postedDate = new Date(dateString);
    const currentDate = new Date();
    const timeDiff = currentDate - postedDate; // Time difference in milliseconds
    const daysAgo = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    if (daysAgo <= 7) {
      return `${daysAgo} day${daysAgo === 1 ? "" : "s"} ago`;
    } else {
      const weeksAgo = Math.floor(daysAgo / 7);
      return `${weeksAgo} week${weeksAgo === 1 ? "" : "s"} ago`;
    }
  };


  const formatHeading = (heading) => {
    // Check if the name contains a '-' or ':' and remove everything after the first occurrence
    return heading.split(/[-:(){}]/)[0].trim();
  };
  
  


  const axios = require('axios');

  const fetchJobs = async (keywords, locationId) => {
    const check = localStorage.getItem("results");

    if (check) {
      setJobs(JSON.parse(check));
    } else {


      const options = {
        method: 'GET',
        url: 'https://jobs-api14.p.rapidapi.com/list',
        params: {
          query: 'Web Developer',
          location: 'United States',
          distance: '1.0',
          language: 'en_GB',
          remoteOnly: 'false',
          datePosted: 'month',
          employmentTypes: 'fulltime;parttime;intern;contractor',
          index: '0'
        },
        headers: {
          'x-rapidapi-key': '0e1a0686a3msh2b3db5f07be5e99p1a7c5ajsn8a957d5e8a5f',
          'x-rapidapi-host': 'jobs-api14.p.rapidapi.com'
        }
      };


      try {
        const response = await axios.request(options);
        
        localStorage.setItem("results", JSON.stringify(response.data));
        console.log(response.data);
        

        setJobs(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
        
      <div className="flex">
        <div className=" ">
          <div className="flex items-center *:mr-3 mt-8 mb-6">
            <h1 className="ml-6">Software Engineer Jobs</h1>
            <h4 className="px-3 py-1 rounded-full  border-[1.5px] border-solid border-[#BFBFBF]">
              386
            </h4>
          </div>
          <div className=" rounded-tr-[50px] min-h-full min-w-full shadow-[inset_0px_4px_25px_0px_rgba(0,_0,_0,_0.1)]">
            {jobs.map((job) => {
              return (
                <div className="flex flex-row p-6 relative">
                  <div className="flex mt-6">
                    <span>
                      <div className="flex">
                        <div className="h-20 w-20  bg-slate-400">
                          <Image
                            src="/google.png"
                            width={60}
                            height={60}
                            className="m-2 pt-1"
                          />
                        </div>

                        <div className="mr-3 ml-3">
                          <div className="flex ">
                          <h5 className="mr-3">{formatHeading(job.employer_name)}</h5>

                          <h6>{getTimeAgo(job.job_posted_at_datetime_utc)}</h6>
                          </div>
                          <h3 className="mt-2 mb-2">{formatHeading(job.job_title)}</h3>
                          <div className="flex *:mr-3 *:bg-[#EDEDED] *:px-3 *:py-1 *:rounded-full overflow-x-scroll whitespace-nowrap no-scrollbar">
                            {job.job_employment_type === "FULLTIME" ? (
                              <h5>Full Time</h5>
                            ) : job.job_employment_type === "PARTTIME" ? (
                              <h5>Part Time</h5>
                            ) : (
                              <h5>Contractor</h5>
                            )}
                            {job.job_is_remote ? (
                              <h5>Remote</h5>
                            ) : (
                              <h5>In Person</h5>
                            )}
                            {
                              <h5>
                                {jobLevel(
                                  job.job_required_experience
                                    .required_experience_in_months
                                )}
                              </h5>
                            }
                          </div>
                        </div>
                      </div>
                    </span>

                    <span className="absolute top-12 right-8 h-24 pt-3">
                      <div className="flex flex-col justify-between h-full ">
                        <button className="ml-10 bg-black pl-3 rounded-full h-12 w-12 items-center justify-center">
                          <div className="white-svg">
                            <SaveIcon style={{ scale: 0.7 }} />
                          </div>
                        </button>

                        <div className="mt-3">
                          <h4>
                            {" "}
                            {job.job_salary_period === "YEAR"
                              ? "$" +
                                (job.job_min_salary
                                  ? job.job_min_salary.toLocaleString("en-US")
                                  : null)
                              : ""}{" "}
                            {job.job_salary_period === "YEAR" &&
                            job.job_max_salary
                              ? "-"
                              : null}{" "}
                            {job.job_salary_period === "YEAR"
                              ? "$" +
                                (job.job_max_salary
                                  ? job.job_max_salary.toLocaleString("en-US")
                                  : null)
                              : null}
                            {job.job_salary_period === "HOUR"
                              ? "$" +
                                (job.job_min_salary ? job.job_min_salary : null)
                              : null}{" "}
                            {job.job_salary_period === "HOUR" &&
                            job.job_max_salary
                              ? "-"
                              : null}{" "}
                            {job.job_salary_period === "HOUR"
                              ? "$" +
                                (job.job_max_salary ? job.job_max_salary : null)
                              : null}
                            {!job.job_salary_period === "YEAR" &&
                            !job.job_salary_period === "HOUR"
                              ? ""
                              : null}
                          </h4>{" "}
                          <h4>
                            {" "}
                            {job.job_salary_period === "YEAR"
                              ? "$" +
                                (job.job_min_salary
                                  ? job.job_min_salary.toLocaleString("en-US")
                                  : null)
                              : ""}{" "}
                            {job.job_salary_period === "YEAR" &&
                            job.job_max_salary
                              ? "-"
                              : null}{" "}
                            {job.job_salary_period === "YEAR"
                              ? "$" +
                                (job.job_max_salary
                                  ? job.job_max_salary.toLocaleString("en-US")
                                  : null)
                              : null}
                            {job.job_salary_period === "HOUR"
                              ? "$" +
                                (job.job_min_salary ? job.job_min_salary : null)
                              : null}{" "}
                            {job.job_salary_period === "HOUR" &&
                            job.job_max_salary
                              ? "-"
                              : null}{" "}
                            {job.job_salary_period === "HOUR"
                              ? "$" +
                                (job.job_max_salary ? job.job_max_salary : null)
                              : null}
                            {!job.job_salary_period === "YEAR" &&
                            !job.job_salary_period === "HOUR"
                              ? ""
                              : null}
                          </h4>
                          <h6 className="whitespace-nowrap text-right">
                            {job.job_city}, {job.job_state}
                          </h6>
                        </div>
                      </div>
                    </span>
                  </div>{" "}
                  {/*end of result*/}
                  <hr className="mt-9 ml-20 w-5/6" />
                </div>
              );
            })}
          </div>{" "}
          {/*end of results list*/}
        </div>{" "}
        {/*end of left sidepanel*/}
        <div className="p-10 mt-20">
          <div className="flex">
            <div className="flex items-center">
              <Image
                src="/google.png"
                width={60}
                height={60}
                className="mr-2 pt-1"
              />
              <span className="ml-3">
                <h3>Google</h3>
                <h6>IT corporation</h6>
              </span>
            </div>

            <span>
              <button className="save-longer-version">
                <div className="black-icon">
                  <SavedIcon />
                </div>
              </button>
              <button className="apply"></button>
            </span>
          </div>

          <h2 className="mt-3 mb-2">Senior UI/UX Designer</h2>
          <div className="version2">
            {" "}
            <h6 className="mb-5">
              5 days ago • Apply by September 25, 2024 at 11 PM
            </h6>
          </div>
          <div className="mb-6 flex *:mr-3 *:bg-[#EDEDED] *:px-3 *:py-1 *:rounded-full ">
            <h5>Part-Time</h5>
            <h5>Senior Level</h5>
          </div>

          <hr />

          <div className="*:mt-4 mb-4">
            <span className="flex *:mr-7">
              <LocationIcon style={{ scale: 0.7 }} />
              <div>
                <h4>San Francisco, CA</h4>
                <h6>In-Person</h6>
              </div>
            </span>

            <span className="flex *:mr-5">
              <CashIcon style={{ scale: 0.7 }} />
              <div>
                <h4>$250/hr</h4>
              </div>
            </span>

            <span className="flex *:mr-7 ml-0.5">
              <BuildingIcon style={{ scale: 0.8 }} />
              <div>
                <h4>Job</h4>
                <h6>Full-Time</h6>
              </div>
            </span>

            <span className="flex *:mr-6">
              <DocumentIcon style={{ scale: 0.7 }} />
              <div>
                <h4>US work authorization required</h4>
                <h6>Open to candidates with OPT/CPT</h6>
              </div>
            </span>
          </div>

          <hr className="mt-5 mb-5" />

          <h7>About the Job</h7>

          <p className="mt-5">
            Ubuntu Pro is a suite of specialist services provided by Canonical.
            Whether for enterprise customers deploying systems at scale or users
            who want security patching for their personal Ubuntu LTS at home,
            the Ubuntu Pro Client is the command-line tool that manages all
            these services.
            <br />
            <br />
            The quality and stability of the Ubuntu Pro Client is critically
            important, since it comes pre-installed on every Ubuntu system.
            You'll work with the Ubuntu Server team, alongside major cloud
            partners and multiple Canonical product teams to develop, test and
            release improvements to the Pro client. You will also be a voice in
            communication with our users, ensuring their needs are met.
            <br />
            <br />
            This role requires quality-oriented software engineering in Python
            and a focus on software interoperability over a vast range of target
            releases and environments. Excellent Python skills are a key
            requirement, with previous contributions to open source Python
            projects being an advantage. The Pro client often interacts with the
            Ubuntu package management; therefore, experience in configuring apt,
            and knowledge of deb packaging and general system administration is
            advantageous in this role.
            <br />
            <br />
            Applicants should be passionate about the Ubuntu project and its
            values and about building tools that are used by millions of people
            around the world. A personal interest and emphasis on quality,
            thinking of edge cases, ease of use, documentation, and careful
            community coordination is important. The Pro client is used at all
            ranges, from mission-critical environments to hobbyist Ubuntu users;
            applicants should be ready to work with the whole spectrum of end
            users and help guide engineering best practices with all of them in
            mind.
          </p>
        </div>
      </div>{" "}
      {/* BOTTOM HALF */}
    </div>
  );
};

export default Discover;
