import React from "react";
import SecTwo from "../animations/41111-man-filling-a-survey-with-a-woman-watching-at-5-star-feedback-dialog.json";
import LottieAnimation from "../lottie";
function SectionTwo() {
  return (
    <div className="mt-12 mx-10 md:mt-24 lg:mt-36 xl:mt-36">
      <div className="text-center flex flex-col lg:flex-row items-center">
        <div className="items-center">
          <span className="text-center font-bold text-xl md:text-3xl lg:text-5xl">
            Get a complete project breakdown of Business Initiatives.
          </span>
          <p className="text-center text-gray-600 mx-10 text-base md:text-xl lg:text-2xl ">
            Angage360 provide 360° information on how engineering teams are
            doing on business initiatives. Leaders can detect risk early and
            avoid project delays.
          </p>
        </div>
        <div>
          <LottieAnimation lotti={SecTwo} width={"100%"} height={"100%"} />
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
