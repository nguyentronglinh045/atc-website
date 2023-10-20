import styles from "../../pages/assets/css/MindsetQuotes.module.css";
import Quotes from "../../pages/assets/icons/quotes.svg";
import Person from "../../pages/assets/icons/person.svg";
import Professional from "../../pages/assets/icons/professional.svg";
import ShakeHands from "../../pages/assets/icons/shake-hands.svg";
import Recruitment from "../../pages/assets/icons/recruitment.svg";
import ArrowRight from "../../pages/assets/icons/next-arrow.svg";
import MindsetQuotesImage from "../../pages/assets/images/MindsetQuotes1.png";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CardItems = ({ icon, title, content, number }) => {
  return (
    <div className="relative flex flex-col gap-[10px] md:gap-[30px] min-w-[232px] h-[225px] sm:h-[220px] md:h-[390px] lg:h-[340px] max-w-[345px] ">
      <p className={`absolute top-[-14px] right-[30px] ${styles["__number"]}`}>
        {number}
      </p>
      <div
        className={`relative p-[8px] z-[1] w-[64px] h-[64px] flex justify-center content-center bg-transparent`}
      >
        <div
          className={`absolute rounded-[10px] top-0 right-0 bottom-0 left-0 z-[-1] opacity-[0.6] ${styles["linear__bg"]}`}
        />
        <Image src={icon} width={48} height={48} alt="" />
      </div>
      <p className="font-[manropeExtraBold] tracking-[-0.03em] text-[15px] md:text-[25px] leading-[21.5px] md:leading-[30px] text-white">
        {title}
      </p>
      <span className="font-[manropeMedium] tracking-tight text-[13px] md:text-[20px] leading-[17px] md:leading-[24px] text-[#9389D7] ">
        {content}
      </span>
    </div>
  );
};
const PrevArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`w-[20px] h-[20px] md:w-[34px] md:h-[34px] absolute -bottom-[40px] md:-bottom-[60px] translate-x-[-45%] md:translate-x-0 left-[38%] lg:left-[20px] flex justify-center items-center cursor-pointer rounded-full z-20 select-none z-30 ${styles["slide-button"]}`}
    >
      <Image
        src={ArrowRight}
        alt={"icon"}
        className={"rotate-180 w-[9px] h-[6px] md:w-[14px] md:h-[8px]"}
      />
    </div>
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`w-[20px] h-[20px] md:w-[34px] md:h-[34px] absolute -bottom-[40px] md:-bottom-[60px] translate-x-[-55%]  md:translate-x-0 left-[50%] lg:left-[72px] flex justify-center items-center cursor-pointer rounded-full z-20 select-none z-30 ${styles["slide-button"]}`}
    >
      <Image
        src={ArrowRight}
        alt={"icon"}
        className={"w-[9px] h-[6px] md:w-[14px] md:h-[8px]"}
      />
    </div>
  );
};

export default function MindsetQuotes() {
  return (
    <div
      className={`pt-[50px] pb-[40px] md:pt-[106px] lg:pb-[112px] ${styles["mind-quotes_wrapper"]} px-[5%]`}
    >
      <div className="flex w-full justify-center md:justify-start">
        <p
          className={`font-[manropeMedium] text-[15px] md:text-[32px] leading-[18px] md:leading-[38px] inline ${styles["linear__text"]}`}
        >
          ATC's Crew
        </p>
      </div>
      <p className="font-[manropeBold] text-[30px] md:text-[55px] leading-[36px] md:leading-[66px] text-center md:text-left text-white w-full mt-[22px]">
        Mindset Quotes
      </p>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-[15px] pt-[40px] lg:pt-[27px]">
        {/*Carousel here*/}
        <div className="relative w-[321px] h-[214px] md:w-[403px] md:h-[270px] lg:w-[453px] lg:h-[330px] xl:w-[653px] xl:h-[430px] rounded-[15px]">
          <Carousel
            showArrows={true}
            showStatus={false}
            showIndicators={false}
            swipeable={true}
            emulateTouch={true}
            showThumbs={false}
            autoPlay
            infiniteLoop
            renderArrowNext={(clickHandler) => {
              return <NextArrow onClick={clickHandler} />;
            }}
            renderArrowPrev={(clickHandler) => {
              return <PrevArrow onClick={clickHandler} />;
            }}
          >
            <Image
              src={MindsetQuotesImage}
              alt={""}
              className="rounded-[15px] w-full"
            />
            <Image
              src={MindsetQuotesImage}
              alt={""}
              className="rounded-[15px] w-full"
            />
            <Image
              src={MindsetQuotesImage}
              alt={""}
              className="rounded-[15px] w-full"
            />
          </Carousel>
        </div>

        <div className="flex text-white flex-col max-w-[480px] text-center">
          <p className="justify-center flex">
            <Image src={Quotes} width={37} height={27} alt="" />
          </p>
          <p className="font-[manropeExtraBold] font-extrabold text-[18px] md:text-[25px] leading-[30px] mt-[36px] tracking-[-0.03em]">
            We Always Aim For The Most Core Values
          </p>
          <p className="font-[poppinsMedium] font-medium text-[13px] md:text-[16px] leading-[24px] tracking-[-0.02em] text-center mt-[10px] md:mt-[29px]">
            The daunting process of solving client’s hardest puzzles leads us to
            explore our core strength, and later on becomes the essence of the
            whole team, which is to create high-quality, scalable software
            solutions.
          </p>
          <p className="justify-center flex mt-[24px]">
            <Image src={Person} width={140} height={111} alt="" />
          </p>
          <p className="font-[manropeExtraBold] font-extrabold tracking-[-0.03em] text-[13px] md:text-[16px] leading-[30px] text-center">
            Mr. Tuan Anh
          </p>
          <p className="font-[poppinsBold] font-bold tracking-[0.14em] text-[12px] md:text-[14px] leading-[24px] text-center">
            CEO Gigaorder Gmbh
          </p>
        </div>
      </div>
      <div className="flex justify-between mt-[43px] md:mt-[60px] lg:mt-[100px] gap-[20px] overflow-x-auto scrollbar-hide">
        <CardItems
          icon={Professional}
          number="1"
          title="We do products in many fields"
          content="Today, almost every business requires the use of technology and marketing. The ATC team is
                   capable of both providing technology and marketing at a professional level."
        />
        <CardItems
          icon={ShakeHands}
          number="2"
          title="We are looking for resellers"
          content="We aspire to find sales partners all over the world to bring our products to a wider audience.
                   If you are one of our partners, you will be pleased with our high responsibility and support."
        />
        <CardItems
          icon={Recruitment}
          number="3"
          title="We are still recruiting staff"
          content="In order to serve a large number of customers in many fields like today, we constantly need
                   to recruit more positions such as developer, marketer, supporter. Open for working remotely."
        />
      </div>
    </div>
  );
}
