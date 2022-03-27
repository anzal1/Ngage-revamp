import React from "react";
import LottieAnimation from "../lottie";
import Secone from "../animations/76352-people-brainstorming-and-get-feedback.json";
import { CheckCircleIcon } from "@heroicons/react/solid";
function SectionOne() {
  return (
    <>
      <div className="flex flex-col mt-3 p-4  text-center scrollbar-hide md:padding ">
        <div className="items-center text-center text-slate-900 font-bold mx-4 lg:mx-10">
          <span className="text-4xl md:text-6xl lg:text-7xl xl:text-[90px] ">
            Angage is a software engineering management suite designed to
            improve the alignment and performance of your team.
          </span>
          <div className="w-full  flex text-lg lg:text-2xl md:text-lg justify-center mt-6 items-center gap-x-4 flex-col lg:flex-row md:flex-row text-slate-600 ">
            <span className="flex items-center mb-0 ">
              <CheckCircleIcon className="w-4 h-4" />
              &nbsp;Something 1
            </span>
            <span className="flex items-center">
              <CheckCircleIcon className="w-4 h-4" />
              &nbsp;Something 1
            </span>
            <span className="flex items-center">
              <CheckCircleIcon className="w-4 h-4" />
              &nbsp;Something 1
            </span>
            <span className="flex items-center">
              <CheckCircleIcon className="w-4 h-4" />
              &nbsp;Something 1
            </span>
            <span className="flex items-center">
              <CheckCircleIcon className="w-4 h-4" />
              &nbsp;Something 1
            </span>
          </div>
          <div className="mt-3">
            <button
              class="bg-yellow-600 text-white font-montserrat py-2 px-8 font-medium rounded-xl hover:bg-yellow-500 transition-all duration-300 text-sm md:text-base lg:text-2xl"
              style={{ boxShadow: " 0 15px 30px -5px rgba(217, 119, 6, 0.6)" }}
            >
              Book a Demo
            </button>
          </div>
        </div>
        <div className="mt-2 ">
          <LottieAnimation lotti={Secone} width={"90%"} height={"90%"} />
        </div>
      </div>
    </>
  );
}

export default SectionOne;
