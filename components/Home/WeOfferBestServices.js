import React, { useState } from "react";
import styles from "../../pages/assets/css/WeOfferBestServices.module.css";
import Service1 from "../../pages/assets/images/service-1.png";
import Service2 from "../../pages/assets/images/service-2.png";
import ListItemIcon from "../../pages/assets/icons/service.png";
import Image from "next/image";
import GroupPlusLeft from "../../pages/assets/images/group-plus-left.png";
import GroupPlusRight from "../../pages/assets/images/group-plus-right.png";
import Link from "next/link";

const Services = ({
  imageSrc = "",
  title = "",
  list = [],
  buttonText = "",
  buttonTextHover = "Click here >>",
  reverse = false,
}) => {
  const [_buttonText, setButtonText] = useState(buttonText);
  return (
    <>
      <div
        className={`flex items-center xl:gap-x-20 gap-x-10 ${
          reverse ? "flex-row-reverse" : ""
        }`}
      >
        <div className="relative block max-md:hidden flex-1 w-full xl:h-[375px] lg:h-[256px] md:h-[200px]">
          <Image
            src={imageSrc}
            alt=""
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
        <div className="flex-1 flex flex-col items-center lg:block">
          <p
            className="text-center sm:text-left font-[poppinsMedium] font-medium
           xl:text-[25px] xl:leading-[36.5px] lg:text-[20px] lg:leading-[30px] sm:text-[18px] sm:leading-[20px] text-[18px] leading-[27.5px]
           text-white"
          >
            {title}
          </p>
          <Image
            src={imageSrc}
            alt=""
            sizes="(min-width: 768px) 40vw, 80vw,"
            width={583}
            height={374}
            className="md:hidden md:mt-[12px] mt-[10px]"
          />
          <ul
            className="font-[poppinsRegular] font-regular
            xl:text-[17px] xl:leading-[21px] lg:text-[14px] lg:leading-[20px] sm:text-[13px] sm:leading-[18px] text-[13px] leading-[16px]
            text-white mt-[18px] flex flex-col xl:gap-[18px] md:gap-[14px] gap-[2px]"
          >
            {list.map((item, index) => (
              <li
                key={index}
                className="flex-1 flex md:flex-row flex-col md:gap-[4px] gap-[2px] items-center md:text-left text-center"
              >
                <Image
                  alt=""
                  src={ListItemIcon}
                  width={51}
                  height={51}
                  priority
                />
                <span className="flex-1">{item}</span>
              </li>
            ))}
          </ul>
          <button
            className="mt-[18px] border-[2.66px] border-solid"
            style={{
              borderImage:
                "linear-gradient(110deg, #EB5400, #1BA4E580, #B40FE7)",
              borderImageSlice: 1,
            }}
            onMouseMove={() => setButtonText(buttonTextHover)}
            onMouseOut={() => setButtonText(buttonText)}
          >
            <span className="block font-[poppinsSemiBold] text-white font-semibold md:text-[12px] text-[10px] leading-[10px] md:leading-[12px] md:px-[44px] md:py-[18px] py-[15px] px-[36px] font-semibold bg-[rgba(18,17,57,0.2)] hover:bg-black">
              {_buttonText}
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

const WeOfferBestServices = () => {
  return (
    <div
      className={`px-[5%] ${styles["WeOfferBestServices__all-about-us"]} xl:pt-[214px] lg:pt-[180px] md:pt-[150px] pt-[120px] pb-[64px] bg-cover sm:bg-[url('./../pages/assets/images/we-offer-best-services-bg.png')] bg-no-repeat`}
    >
      <div className="">
        <div className="flex md:justify-between justify-center md:items-center">
          <Image
            src={GroupPlusLeft}
            width={153}
            height={166}
            alt=" "
            className="block max-md:hidden"
          />
          <div className="flex flex-col items-center">
            <p
              className={`${styles.text__link} font-[poppinsMedium] md:text-1440-[18] md:leading-1440-[27] text-360-[15] leading-360-[22.5] font-medium text-transparent bg-clip-text cursor-pointer`}
            >
              <span>
                <Link href="/about-us">ALL ABOUT US {">>"}</Link>
              </span>
            </p>
            <p
              style={{
                backgroundImage:
                  "linear-gradient(267.37deg, #9130F4 55.42%, #4646F9 96.83%)",
              }}
              className="text-center md:mt-[20px] mt-[10px] font-[openSansBold] font-bold md:text-1440-[50] md:leading-1440-[68.09] text-360-[30] leading-360-[40.85] text-transparent bg-clip-text inline-block"
            >
              We Offer Best Services
            </p>
          </div>
          <Image
            src={GroupPlusRight}
            width={153}
            height={166}
            alt=" "
            className="block max-md:hidden"
          />
        </div>
        <div className="flex xl:mt-16 lg:mt-12 sm:mt-6 mt-4 flex-col xl:gap-y-16 lg:gap-y-12 sm:gap-y-6 gap-[45px]">
          <Services
            imageSrc={Service1}
            title="Output products are always meticulously censored before reaching customers."
            list={[
              "The ATC team is capable of providing a wide range of high-quality software that adapts to different platforms such as Android, IOS, Windows.",
              "Especially when you sign up for design and marketing services, you can accumulate membership points and choose from a variety of packages from basic to advanced.",
              "When you order hardware products at ATC, we guarantee the product price is always cheaper than the market and also provide a warranty program to support return and exchange.",
            ]}
            buttonText="Register now as a member >>"
          />
          <Services
            reverse
            imageSrc={Service2}
            title="The service process has a specific, automatic and professional route."
            list={[
              "When you order any of our products or services, you will receive careful instructions and regular notifications of work progress and delivery.",
              "With products such as Point of Sale, Digital Signage, Menu Board, etc related to complex machinery, we have on-site installation support.",
              "Contact us via email address, message or hotline number for further advice on your needs. Order directly on the website or fanpage and remember to turn on notifications to receive the company's offers!",
            ]}
            buttonText="Leave us a message here >>"
          />
        </div>
      </div>
    </div>
  );
};

export default WeOfferBestServices;
