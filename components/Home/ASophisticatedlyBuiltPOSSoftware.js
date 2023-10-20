import React from "react";
import Bg from "../../pages/assets/images/a-sophisticatedly-built-pos-software.png";
import DevicesPc from "../../pages/assets/images/devices-pc.png";
import DevicesMobile from "../../pages/assets/images/device-mobile.png";
import GetGooglePlay from "../../pages/assets/images/get-google-play.png"
import GetWindows from "../../pages/assets/images/get-windows.png";
import styles from "./css/ASophisticatedlyBuiltPOSSoftware.module.css";
import Image from "next/image";

const TextBox = ({text, classPosition}) => {
  return (
    <div className={''}>
      <div className={`${styles['ASophisticatedlyBuiltPOSSoftware__text-box']} py-[20px] px-[24px] top-[-30px] left-[85%] overflow-hidden ${classPosition}`}>
      {/*<div className={` py-[20px] px-[24px] top-[-30px] left-[85%] overflow-hidden ${classPosition}`}>*/}
        <p className="font-[poppinsMedium] font-medium text-[17px] leading-[22px] text-center text-white tracking-[.04em]">
          {text}
        </p>
      </div>

    </div>
  )
}

const ASophisticatedlyBuiltPOSSoftware = () => {
  return (
    <div className="bg-center relative bg-[url('./../pages/assets/images/a-sophisticatedly-built-pos-software.png')] bg-no-repeat">
      <div className="absolute top-[327px] left-[68px] w-[130px] h-[130px] rounded-full blur-[15px]" style={{background: "linear-gradient(90.32deg, #C517F1 -5.28%, #5AFFFF 109.58%, #E91ED5 164.37%)"}}/>
      <div className="absolute top-[230px] right-[67px] w-[96px] h-[96px] rounded-full blur-[15px]" style={{background: "linear-gradient(90.32deg, #C517F1 -5.28%, #5AFFFF 109.58%, #E91ED5 164.37%)"}}/>
      <div className="absolute top-[-41px] left-[50%] w-[64px] h-[64px] rounded-full blur-[15px]" style={{background: "linear-gradient(90.32deg, #C517F1 -5.28%, #5AFFFF 109.58%, #E91ED5 164.37%)"}}/>
      <div className="pt-[106px] pb-[96px] flex flex-col items-center">
        <p
          className="w-2/5 uppercase font-[openSansBold] font-bold text-[50px] leading-[68px] text-center text-transparent bg-clip-text bg-gradient-to-r from-[#C517F1] via-[#5AFFFF] to-[#E91ED5]">A
          sophisticatedly built POS software</p>
        <p
          className="w-2/5 mt-[32px] font-[poppinsRegular] font-regular text-[18px] leading-[28px] text-center text-white">
          We have detailed software usage instructions as well as dedicated support and guidance services.</p>
        <button style={{borderImage: "linear-gradient(to right, #812DE2, #3A49F9)", borderImageSlice: 1}}
                className="mt-[32px] py-[20px] px-[68px] bg-transparent border-4 border-solid uppercase font-[poppinsSemiBold] font-semibold text-[18px] leading-[18px] text-white">
          free trial
        </button>
        <div className="relative mt-[92px]">
          <Image src={DevicesPc} width={516} height={507} alt="" className="bg-center"/>
          <Image src={DevicesMobile} width={602} height={345} alt="" className="bg-center absolute bottom-[-20%] left-[-25%]"/>
          <TextBox classPosition="top-[-30px] left-[85%]" text={<span><span className="text-[#f08910]">The vivid, easy-to-see interface</span> makes all operations easier and more accurate whether your employees are tech-savvy or not.</span>}/>
          <TextBox classPosition="top-[80px] left-[-85%]" text={<span>You can <span className="text-[#f08910]">sell even when the internet is interrupted</span> or the server has a problem.</span>}/>
          <TextBox classPosition="top-[285px] left-[-85%]" text={<span>Outstanding technology also allows you to<span className="text-[#f08910]"> access sales data anytime, anywhere.</span></span>}/>
          <TextBox classPosition="top-[350px] left-[85%]" text={<span>Enhance your business productivity through: <span className="text-[#f08910]">Managing shifts and schedules; </span>Viewing employee’s sales, tips, refunds, and daily reports.</span>}/>
        </div>
        <div className="flex gap-[20px] mt-[116px]">
          <Image src={GetGooglePlay} width={233} height={66} alt=""/>
          <Image src={GetWindows} width={233} height={66} alt=""/>
        </div>

      </div>
    </div>
  )
}

export default ASophisticatedlyBuiltPOSSoftware;