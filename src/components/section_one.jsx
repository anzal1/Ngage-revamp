import React from "react";
import LottieAnimation from "../lottie";
import Secone from "../animations/76352-people-brainstorming-and-get-feedback.json";
import { CheckCircleIcon } from "@heroicons/react/solid";
function SectionOne() {
  return (
    <>
      <div className="flex flex-col mt-3 p-4  text-center scrollbar-hide md:padding ">
        <div className="text-4xl md:text-6xl sm:text-6xl lg:text-[90px] font-bold text-slate-900 lg:mx-56 mx-8 ">
          Create a feedback-focused culture in Slack with Feedback Friday,
          Kudos, and rewards
          <div className="w-full flex text-lg lg:text-2xl md:text-xl justify-center mt-5 items-center gap-x-4 flex-col lg:flex-row md:flex-row text-slate-600 ">
            <span className="flex items-center mb-0 ">
              <CheckCircleIcon className="w-4 h-4" />&nbsp;Something 1
            </span >
            <span className="flex items-center">
              <CheckCircleIcon className="w-4 h-4" />&nbsp;Something 1
            </span>
            <span className="flex items-center">
              <CheckCircleIcon className="w-4 h-4" />&nbsp;Something 1
            </span>
            <span className="flex items-center"> 
              <CheckCircleIcon className="w-4 h-4" />&nbsp;Something 1
            </span>
            <span className="flex items-center">
              <CheckCircleIcon className="w-4 h-4" />&nbsp;Something 1
            </span>
          </div>
        </div>
        <div className="mt-2">
          <LottieAnimation lotti={Secone} width={"90%"} height={"90%"} />
        </div>
      </div>
    </>
  );
}

export default SectionOne;
