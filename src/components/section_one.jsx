import React from "react";
import LottieAnimation from "../lottie";
import Secone from "../animations/76352-people-brainstorming-and-get-feedback.json";
import { CheckCircleIcon } from "@heroicons/react/solid";
function SectionOne() {
  return (
    <>
      <div className="flex flex-col mt-1 md:mt-10 lg:mt-20 p-4 scrollbar-hide md:padding  ">
        <div className="items-center text-black font-bold mx-4 lg:mx-10  text-center">
          <span className="text-3xl  md:text-5xl lg:text-6xl xl:text-[84px] text-orange-600">Angage</span>
          <span className="text-3xl  md:text-5xl lg:text-6xl xl:text-[84px] leading-8 ">
          &nbsp;is a software engineering management suite, 
          </span>
          <br className=""/>
          
          <span className="text-md md:text-lg lg:text-4xl  leading-8 text-gray-400">
          designed to improve the alignment and performance of your team 
          </span>

          <div className=" w-full  flex text-lg lg:text-2xl md:text-lg justify-center mt-6 lg:mt-20 items-center gap-x-4 flex-col lg:flex-row md:flex-row text-slate-600 ">
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
          <div className="mt-5 md:mt-10 lg:mt-20 text-center">
            <button
              class="bg-yellow-600 text-white font-montserrat py-2 px-8 font-medium rounded-xl hover:bg-yellow-500 transition-all duration-300 text-sm md:text-base lg:text-2xl"
              style={{ boxShadow: " 0 15px 30px -5px rgba(217, 119, 6, 0.6)" }}
            >
              Book a Demo
            </button>
          </div>
        </div>
        <div className="mt-7">
          <LottieAnimation lotti={Secone} width={"80%"} height={"80%"} />
        </div>
      </div>
    </>
  );
}

export default SectionOne;
