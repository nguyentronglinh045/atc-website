import React from "react";

const Success = () => {
  return (
    <>
      <div className="flex flex-col xl:pt-[300px] lg:pt-[250px] md:pt-[180px] pt-[245px] md:pb-[228px] pb-[215px] xl:px-[240px] lg:[120px] md:px-[60px] px-[68px] mt-[72px] bg-[url('./../pages/assets/images/request-demo-bg-1.png')] bg-cover bg-no-repeat">
        <div className="flex flex-col xl:gap-[38px] lg:gap-[26px] md:gap-[16px] justify-center items-center">
          <p className="text-title-green-shadow font-[poppinsSemiBold] font-semibold lg:text-[60px] md:text-[50px] text-[30px] md:leading-[90px] leading-[45px]">Thank you !</p>
          <p className="text-center green-shadow font-[poppinsBoldItalic] font-bold lg:text-[50px] md:text-[40px] text-[25px] md:leading-[75px] leading-[37.5px] text-white">Your request has been sent.</p>
        </div>
      </div>
    </>
  )
}

export default Success;
