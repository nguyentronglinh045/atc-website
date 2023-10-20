import React, {useState} from "react";
import DesktopBrowser from "../../pages/assets/images/desktop-browser.png";
import DesktopBrowserMobile from "../../pages/assets/images/Computer-mobile.png";
import PosHardware from "../../pages/assets/images/pos-hardware.png";
import SoftwareDevelopment from "../../pages/assets/images/software-development.png";
import DigitalMarketing from "../../pages/assets/images/digital-marketing.png";
import DesignService from "../../pages/assets/images/design-service.png";
import Image from "next/image";

const CardProduct = ({image, text, boxShadow}) => {
  return (
    <div className="flex-1 flex flex-col items-center z-10">
      <div
        className={`flex justify-center items-center w-[131px] h-[88px] md:w-full lg:h-[10.5rem] md:h-[8.5rem] bg-[#F0E6FC] rounded-[10px] ${boxShadow}`}
      >
        <div className="relative md:w-[90px] md:h-[85px] w-[45px] h-[45px]">
          <Image src={image} fill alt="" priority />
        </div>
      </div>
      <p
        className="md:mt-[20px] mt-[10px] font-[manropeSemiBold] font-semibold md:text-1440-[20] md:leading-1440-[27.32] text-360-[10] leading-360-[13.79] text-white text-center">{text}</p>
    </div>
  )
}

const SuperiorTechnologySolution = () => {
  const [textButton, setTextButton] = useState("OUR PRODUCTs")
  return (
    <div
      className="px-[5%] relative -mt-[72px] pt-[113px] md:pt-[166px] md:pb-[196px] bg-cover flex sm:flex-row sm:items-start flex-col items-center bg-no-repeat
      bg-[url('./../pages/assets/images/supperior-technology-solution.png')]">
      <div
        className="block max-md:hidden absolute top-[0] right-[0] xl:w-[826px] lg:w-[726px] lg:h-[936px] md:w-[526px] md:h-[736px]">
        <Image src={DesktopBrowser} fill sizes="50vw" alt="" className="" priority />
      </div>
      <div className="block max-md:hidden absolute h-[23px] top-[100%] -translate-y-1/2 left-0 right-0 opacity-50 backdrop-blur-[39.5px] bg-white/[.07] z-[1]"/>
      <div className="absolute top-[100%] -translate-y-[40%] z-[1] left-0 right-0">
        <div className="flex px-[6.5%] lg:gap-[6.5%] md:gap-[4.5%] gap-[5.5%] overflow-x-scroll sm:overflow-x-auto no-scrollbar">
          <CardProduct image={PosHardware} text="POS Hardware"
                       boxShadow="md:shadow-[0_15px_60px_#4091FB] shadow-[0_8px_32px_#4091FB]"/>
          <CardProduct image={SoftwareDevelopment} text="Software Development"
                       boxShadow="md:shadow-[0_15px_60px_#7FE7C6] shadow-[0_8px_32px_#7FE7C6]"/>
          <CardProduct image={DigitalMarketing} text="Digital Marketing"
                       boxShadow="md:shadow-[0_15px_60px_#DF8CC4] shadow-[0_8px_32px_#DF8CC4]"/>
          <CardProduct image={DesignService} text="Design Service"
                       boxShadow="md:shadow-[0_15px_60px_#F4A382] shadow-[0_8px_32px_#F4A382]"/>
        </div>
      </div>
      <div className=" md:block flex flex-col items-center">
        <p
          className="font-[poppinsSemiBold] font-semibold md:text-1440-[90] text-360-[50] bg-clip-text text-transparent"
          style={{backgroundImage: "linear-gradient(267.37deg, #9130F4 55.42%, #4646F9 96.83%)"}}>
          SUPERIOR
        </p>
        <p
          className="md:text-left text-center font-[poppinsSemiBold] font-semibold  md:text-1440-[83] max-md:text-360-[45] text-white xl:w-3/4 md:tracking-[-4px] md:w-1/4">
          Technology Solution
        </p>
        <p
          className="md:px-0 px-[20px] md:text-left text-center lg:w-4/12 md:w-1/2 mt-[25px] xl:mt-[27px] lg:mt-[12px] mt-[8px] font-[manropeMedium] text-360-[15] leading-360-[19.5] md:text-1440-[22] md:leading-1440-[28.6] font-medium text-white tracking-[.04em]">
          Welcome here! Are you looking for a place that <span className="font-[manropeSemiBold] font-semibold">provides a wide range of technology services?</span> Yes
          you are at the right place and <span className="font-[manropeSemiBold] font-semibold">please scroll down to find the product that suits your needs.</span>
        </p>
        <button style={{borderImage: "linear-gradient(to right, #812DE2, #3A49F9)", borderImageSlice: 1}}
                onMouseMove={() => setTextButton("Click here >>")}
                onMouseOut={() => setTextButton("OUR PRODUCTs")}
                className="xl:mt-[48px] lg:mt-[24px] md:mt-[8px] mt-[25px] md:py-[20px] py-[16px] md:px-[68px] px-[48px] bg-transparent hover:bg-black border-4 border-solid uppercase font-[poppinsSemiBold] font-semibold text-white md:text-1440-[18] max-md:text-360-[11]">
          {textButton}
        </button>
        <div className="relative md:hidden">
          <Image src={DesktopBrowserMobile} sizes="70vw" alt="" className="" priority />
        </div>
      </div>
    </div>
  )
}

export default SuperiorTechnologySolution;