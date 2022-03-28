import React from "react";
import LottieAnimation from "../lottie";
import Secone from "../animations/76352-people-brainstorming-and-get-feedback.json";
import superfast from "../animations/1202-super-fast-tech-support.json";
import { CheckCircleIcon } from "@heroicons/react/solid";
function SectionOne() {
  return (
    <>
      <div className="flex flex-col mt-1 md:mt-10 lg:mt-20 p-4 scrollbar-hide md:padding  ">
        <div className="items-center text-black font-bold mx-4 lg:mx-10  text-center">
          <span className="text-5xl  md:text-7xl lg:text-9xl  text-orange-600">
            Angage
          </span>
          <span className="text-3xl  md:text-5xl lg:text-6xl leading-8 ">
            &nbsp;is a software engineering management suite,
          </span>
          <br />
          <span className="text-md md:text-lg lg:text-4xl  leading-8 text-gray-400">
            designed to improve the alignment and performance of your team
          </span>
          <div className="flex flex-col text-lg lg:text-2xl md:text-lg  mt-6 justify-center lg:mt-10 items-center gap-x-2 lg:flex-row md:flex-row text-slate-600 j ">
            <span className="flex">
              <CheckCircleIcon className="w-8 h-8" />
              &nbsp;Analyse growth.
            </span>
            <span className="flex">
              <CheckCircleIcon className="w-8 h-8" />
              &nbsp;Prevent burnout.
            </span>
            <span className="flex">
              <CheckCircleIcon className="w-8 h-8" />
              &nbsp;Remove gut feeling.
            </span>
            <span className="flex">
              <CheckCircleIcon className="w-8 h-8" />
              &nbsp;Identify the inefficiencies.
            </span>
          </div>
          <div className="flex mt-5 md:mt-5 lg:mt-5 ">
            <div className="w-full">
              <LottieAnimation lotti={superfast} width={"50%"} height={"50%"} />
            </div>
            <div className="w-full text-left  m-auto ">
              <button
                className="bg-orange-600 text-white py-2 px-8 font-medium rounded-xl hover:bg-yellow-500 transition-all duration-300 text-sm md:text-base lg:text-4xl"
                style={{
                  boxShadow: " 0 15px 30px -5px rgba(217, 101, 6, 0.616)",
                }}
              >
                Book a Demo
              </button>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <LottieAnimation lotti={Secone} width={"80%"} height={"80%"} />
        </div>
      </div>
    </>
  );
}

export default SectionOne;
