import React, { useState } from "react";

import Image1 from "../../pages/assets/images/people-building-metaverse-1.png";
import Image2 from "../../pages/assets/images/online-shopping.png";
import Image3 from "../../pages/assets/images/technology-marketing.png";
import Image from "next/image";

const Item = ({
  pledge,
  description,
  list = [],
  image,
  buttonText,
  buttonTextMouseMove = "Click here >>",
  title,
  reverse = false,
  imageStyle = "",
}) => {
  const [_buttonText, setButtonText] = useState(buttonText);
  return (
    <>
      <div
        className={`flex md:flex-row flex-col-reverse items-center justify-between ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="flex-1 flex flex-col md:items-start items-center max-md:-mt-[20%] max-md:z-[10]">
          <p
            className="inline-block font-[poppinsMedium] font-medium xl:text-[32px] lg:text-[30px] md:text-[28px] text-[18px] md:leading-[38.4px] leading-[18px] text-transparent bg-clip-text uppcase"
            style={{
              backgroundImage:
                "linear-gradient(231.56deg, #5A0068 0%, #FF432A 11.56%, #E04349 24.48%, #2A3FFF 80.21%, #000235 100%)",
            }}
          >
            {pledge}
          </p>
          <p className="lg:mt-[22px] md:mt-[12px] mt-[10px] font-[poppinsSemiBold] xl:text-[55px] lg:text-[50px] md:text-[36px] text-[30px] lg:leading-[66px] md:leading-[55px] leading-[36px] md:text-left text-center text-white">
            {title}
          </p>
          <p className="lg:mt-[22px] md:mt-[12px] mt-[10px] font-[poppinsRegular] xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px] md:leading-[25.6px] leading-[19.2px] text-white md:text-left text-center">
            {description}
          </p>
          <ul className="list-none md:mt-[24px] mt-[10px] flex flex-col md:gap-[16px] gap-[10px]">
            {list.map((item, index) => {
              return (
                <li key={index} className="flex items-baseline gap-[16px]">
                  <div
                    className="w-[16px] h-[16px] rounded-full"
                    style={{
                      background:
                        "linear-gradient(231.56deg, #5A0068 0%, #FF432A 11.56%, #E04349 24.48%, #2A3FFF 80.21%, #000235 100%)",
                    }}
                  />
                  <p className="flex-1 font-[manropeRegular] font-regular xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] md:leading-[24px] leading-[16.8px] text-white md:text-left text-center">
                    {item}
                  </p>
                </li>
              );
            })}
          </ul>
          <button
            className="bg-buttonAboutUs hover:bg-none hover:bg-black uppercase md:mt-[32px] mt-[16px] md:py-[16px] py-[10px] md:px-[32px] px-[20px] rounded-[4px]
            font-[manropeRegular] font-regular xl:text-[20px] lg:text-[18px] md:text-[14px] md:leading-[24px] text-[12px] leading-[14.4px] text-white"
            onMouseMove={() => setButtonText(buttonTextMouseMove || buttonText)}
            onMouseOut={() => setButtonText(buttonText)}
          >
            {_buttonText}
          </button>
        </div>
        <div className="flex-1 w-full flex justify-center relative max-md:-mt-[15%]">
          <div
            className="absolute top-0 bottom-0 left-0 right-0"
            style={{
              backgroundColor: "#23376E",
              opacity: "0.4",
              filter: "blur(69.6263px)",
            }}
          />
          <div
            className={`md:absolute relative top-1/2 md:-translate-y-1/2 w-full aspect-[176/195] ${imageStyle}`}
          >
            <Image
              src={image}
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              fill
              alt=""
              className="z-10 w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const ReputableQualifiedAbundantResources = () => {
  return (
    <div className="md:pt-[127px] pt-[8px] pb-[94px] px-[5%]">
      <div className="flex flex-col lg:gap-0 md:gap-[8px]">
        <Item
          title="Global Market"
          pledge="Reputable"
          description="Having the opportunity to work with many small and large store businesses for more than 7 years, ATC Group understands the common thoughts and aspirations of the owners as well as the staff workings."
          list={[
            "Thousands of customers order from many countries.",
            "Trade in technology around the world.",
            "ATC's sales agents are mainly concentrated in Germany, USA and Canada.",
          ]}
          buttonText="OUR RESELLERS"
          image={Image1}
          imageStyle="max-md:-ml-[44px]"
        />
        <Item
          reverse={true}
          title="96% User-backs"
          pledge="Qualified"
          description="From those years of experience, we - with a strong and experienced team – have been dedicated to creating an ecosystem with a wide range of best services and technologies with 99% user-backs. “Customer loyalty” is what gives our company a stream of sustainable revenue."
          list={[
            "The POS system is always updated and renewed in accordance with state laws.",
            "Other output products are always meticulously censored before reaching customers.",
          ]}
          buttonText="TESTIMONIALS"
          image={Image2}
          imageStyle="max-md:ml-[28px]"
        />
        <Item
          title="Technology & Marketing."
          pledge="Abundant Resources"
          description="From those years of experience, we - with a strong and experienced team – have been dedicated to creating an ecosystem with a wide range of best services and technologies."
          list={[
            "Creating our own platforms that are easy to optimize and scale, we have the ability to meet technological needs at a complex level.",
            "The marketing team is young, enthusiastic and capable of providing products quickly in most fields.",
          ]}
          buttonText="CONTACT NOW"
          image={Image3}
          imageStyle="max-md:-ml-[54px]"
        />
      </div>
    </div>
  );
};

export default ReputableQualifiedAbundantResources;
