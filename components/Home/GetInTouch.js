import React from "react";
import ArrowLeft from "../../pages/assets/icons/arrow-left.svg";
import Image from "next/image";

const InputLabel = ({label, name, type, isRequired}) => {
  return (
    <div className="flex-1">
      <label htmlFor={name} className="font-[poppinsBold] text-white font-bold tex-[18px] leading-[27px]">{label}</label>
      <input type={type} name={name} className="w-full bg-transparent border-b outline-none text-white" required={isRequired}/>
    </div>
  )
}

const GetInTouch = () => {
  return (
    <div className="px-[5%] lg:pt-[107px] md:pt-[32px] pt-[35px] lg:pb-[87px] md:pb-[50px] pb-[30px] bg-cover bg-getInTouch">

        <div className="flex lg:flex-row flex-col">
          <div className="flex-1 text-center lg:text-left flex flex-col gap-[10px]">
            <p className="font-[poppinsBold] font-bold text-white lg:text-[80px] md:text-[50px] text-[40px] leading-[40px] lg:leading-[80px] md:leading-[50px] lg:w-3/4">Get In Touch</p>
            <p className="font-[poppinsBold] font-bold text-[#FF9C00] lg:text-[32px] md:text-[24px] xl:leading-[130px] lg:leading-[65px]">Let's Get Connected.</p>
            <p className="font-[poppinsRegular] font-regular text-white xl:text-[21px] lg:text-[18px] md:text-[16px] leading-[31.5px] lg:text-justify md:text-center lg:w-4/6">
              Once we receive your message, we will get back to you within 12 hours. So please pay attention to your phone call or email. Thank you so much.
            </p>
          </div>
          <div className="flex-1 flex flex-col md:gap-8 gap-[20px] lg:mt-0 md:mt-[16px] mt-[20px]">
            <div className="flex-1">
              <InputLabel label="Full Name *" name="fullName" type="text" isRequired={true}/>
            </div>
            <div className="flex sm:flex-row flex-col gap-8">
              <InputLabel label="Email *" name="email" type="email" isRequired={true}/>
              <InputLabel label="Phone *" name="phone" type="text" isRequired={true}/>
            </div>
            <div className="flex sm:flex-row flex-col gap-8">
              <InputLabel label="Budget *" name="budget" type="text" isRequired={true}/>
              <InputLabel label="Interested Services *" name="interestedServices" type="text" isRequired={true}/>
            </div>
            <div className="flex-1">
              <InputLabel label="Message" name="message" type="text" isRequired={false}/>
            </div>
            <div className=" lg:block flex justify-center">
              <button className="md:py-[16px] py-[8px] md:px-[28px] px-[16px] bg-[#FF9C00] flex gap-[12px] items-center rounded-[4px] font-[poppinsBold] text-white font-bold">
                LET'S TALK
                <Image src={ArrowLeft} width={22} height={20} alt=""/>
              </button>
            </div>
          </div>
        </div>

    </div>

  )
}

export default GetInTouch;