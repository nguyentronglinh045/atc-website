import React from "react";
import Testimonials1 from "../../pages/assets/images/testimonials1.png";
import Testimonials2 from "../../pages/assets/images/testimonials2.png";
import Testimonials3 from "../../pages/assets/images/testimonials3.png";
import Image from "next/image";

const CardTestimonial = ({ avatar, name, description, position }) => {
  return (
    <div className="flex flex-1 xl:min-w-[395px] sm:min-w-[295px] min-w-[185px] max-h-[620px] min-h-[290px]">
      <div className="w-full flex flex-col xl:pt-[56px] lg:pt-[36px] sm:pt-[32px] pt-[24px] lg:px-[38px] px-[16px] pb-5 shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-cardTestimonial">
        <p className="xl:h-72 lg:h-60 sm:h-52 h-32 text-center font-[poppinsMedium] font-medium xl:text-[22px] lg:text-[16px] sm:text-[16px] text-[10.26px] xl:leading-[32px] sm:leading-[28px] leading-[14.92px] text-white">
          {description}
        </p>
        <div className="mt-5 flex flex-col items-center relative">
          <div className="relative xl:w-[181px] xl:h-[124px] lg:w-[161px] lg:h-[104px] sm:w-[141px] sm:h-[94px] w-[84px] h-[58px]">
            <Image src={avatar} fill alt="" quality={100} />
          </div>
          <p className="sm:mt-[28px] mt-[12px] font-[DMSansMedium] font-medium sm:text-[18px] text-[8.4px] sm:leading-[28px] leading-[13.06px] text-[#FF9C00] text-center">
            {name}
          </p>
          <p className="sm:mt-[18px] mt-[7.45px] px-[10px] font-[DMSansRegular] font-regular lg:text-[14px] sm:text-[12px] text-[8px] sm:leading-[26px] leading-[12.13px] text-white text-center sm:tracking-[2px] tracking-[0.93px] uppercase">
            {position}
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <>
      <div className="px-[5%] pt-[30px] md:pt-[60px] pb-[40px] md:pb-[97px] bg-[#000235]">
        <p
          className="text-center uppercase font-[openSansBold] font-bold sm:text-[50px] text-[30px] sm:leading-[68px] leading-[40.85px] bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(356.02deg, #E91ED5 -28.72%, #5AFFFF 4.61%, #C517F1 96.75%)",
          }}
        >
          testimonials
        </p>
        <div className="sm:mt-[64px] mt-[32px]">
          <div className="flex xl:gap-[40px] lg:gap-[32px] sm:gap-[24px] gap-[20px] overflow-x-auto no-scrollbar">
            <CardTestimonial
              avatar={Testimonials1}
              name="Rit Leslie"
              position="National Manager at AMS Retail Solutions Inc"
              description="“ATC team customized digital signage software for us very fast and effectively. It saves a lot of time and effort. Thanks to this, we can broadcast information to each store from the comfort of our office.”"
            />
            <CardTestimonial
              avatar={Testimonials2}
              name="Brooke Barnato"
              position="CEO at Vital Style"
              description="“Instead of POS solution available on the market, we need a better and more efficient solution that can be customized for local marketing. Gigaorder team created for us a user-friendly design with very clear navigation. “"
            />
            <CardTestimonial
              avatar={Testimonials3}
              name="Josef"
              position='Owner of "The Creole Sensations"'
              description={
                "“The advantage of having Gigaorder" +
                "'s" +
                " 2-in-1 POS & Online Ordering System helps save my time answering the phone and getting rid of expensive services that almost cost ~ 30% of my revenue. “"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
