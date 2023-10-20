import Check from "../../pages/assets/icons/check.svg";
import Image from "next/image";
import WhyChooseUs from "../../pages/assets/images/why-choose-us.png";

const ReasonItem = ({ text, highlightText = "" }) => {
  const parts = text.split(new RegExp(`(${highlightText})`, "gi"));
  return (
    <>
      <div className="flex xl:gap-[37px] lg:gap-[28px] md:gap-[20px] gap-[14px] items-center">
        <div className="relative xl:w-[62px] xl:h-[62px] lg:w-[54px] lg:h-[54px] md:w-[42px] md:h-[42px] w-[34px] h-[34px]">
          <Image src={Check} fill alt="" />
        </div>
        <p className="flex-1 font-[poppinsRegular] font-regular xl:text-[21px] xl:leading-[32px] lg:text-[18px] lg:leading-[24px] md:text-[14px] md:leading-[20px] md:text-[12px] md:leading-[18px]">
          {parts.map((part, i) => (
            <span
              key={i}
              className={
                part.toLowerCase() === highlightText.toLowerCase()
                  ? "text-[#F19C07] font-[poppinsSemiBold] font-semibold"
                  : ""
              }
            >
              {part}
            </span>
          ))}
        </p>
      </div>
    </>
  );
};

export default function ReasonChoose() {
  return (
    <div className={`px-[5%] md:pb-0 pb-[45px] md:bg-[rgba(90_0_104_/_0.35)]`}>
      <div className="flex md:flex-row flex-col-reverse xl:gap-[101px] lg:gap-[60px] md:gap-[40px] gap-[30px] items-center">
        <div className="md:flex-1 relative md:w-full w-[300px] xl:h-[609px] lg:h-[500px] md:h-[360px] h-[274px]">
          <Image alt="" src={WhyChooseUs} fill priority sizes="50vw" />
        </div>
        <div className="md:mt-[55px] md:mb-[85px] flex-1">
          <p
            className={`uppercase font-[openSansBold] xl:text-[50px] xl:leading-[68px] lg:text-[40px] lg:leading-[58px] md:text-[32px] md:leading-[46px] text-[30px] leading-[40.85px] md:text-left text-center text-transparent bg-clip-text bg-gradient-to-r from-[#C517F1_-5.28%] via-[#5AFFFF_109.58%] to-[#E91ED5_164.37%]`}
          >
            why choose us?
          </p>
          <div className="flex flex-col xl:gap-[80px] lg:gap-[45px] md:gap-[32px] gap-[10px] xl:mt-[54px] lg:mt-[45px] md:mt-[28px] mt-[20px] text-white">
            <ReasonItem
              text="From more than 6 years of experience, we - with a strong and experienced team – have been dedicated to creating an ecosystem with a wide range of best services and technologies with 99% user-backs."
              highlightText="with a strong and experienced team"
            />
            <ReasonItem
              text="Especially when you sign up for design and marketing services, you can accumulate membership points and choose from a variety of packages from basic to advanced."
              highlightText="a variety of packages"
            />
            <ReasonItem
              text="When you order hardware products at ATC, we guarantee the product price is always cheaper than the market and also provide a warranty program to support return and exchange."
              highlightText="the product price is always cheaper than the market"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
