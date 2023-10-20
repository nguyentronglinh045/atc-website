export default function Preface() {
  return (
    <div className="md:bg-preface-0.5x lg:bg-preface-0.75x bg-cover xl:pt-[166px] lg:pt-[140px] md:pt-[100px] pt-[113px] px-[5%] xl:pb-[120px] lg:pb-[100px] md:pb-[60px] relative">
      <div className="absolute xl:h-[36px] lg:h-[28px] md:h-[16px] top-full left-0 right-0 opacity-[0.1] bg-prefaceBar block max-md:hidden" />
      <div className="md:block">
        <div className="md:block flex flex-col items-center">
          <p className="font-[poppinsSemiBold] font-semibold uppercase text-transparent xl:leading-[83px] lg:leading-[60px] md:leading-[40px] leading-[50px] xl:text-[83px] lg:text-[60px] md:text-[40px] text-[50px] md:tracking-[-4px] tracking-[-2px] inline-block bg-clip-text bg-gradient-[252.51deg] from-[#B83A6F_61.52%] via-[#3430F4_75.38%] to-[#5A9CFF_87.19%]">
            Hello !
          </p>
          <p className="md:text-left text-center font-[poppinsSemiBold] font-semibold text-white xl:leading-[83px] lg:leading-[60px] md:leading-[40px] leading-[45px] xl:text-[83px] lg:text-[60px] md:text-[40px] text-[45px] md:tracking-[-4px] tracking-[-1.5px]">
            We are Above The Clouds
          </p>
          <p className="lg:mt-[37px] md:mt-[24px] mt-[25px] md:text-left text-center text-white font-[manropeMedium] font-medium xl:text-[22px] md:text-[16px] xl:leading-[28.6px] md:leading-[24px] xl:tracking-[.04em] md:w-1/2">
            A Mobile, Web, Ecommerce & Software Development Company. We work
            hand-in-hand with enterprises and startups at all stages of software
            development to bring their ideas to life as quick as possible.
          </p>
          <button className="md:mt-[47px] mt-[25px] md:p-[4px] p-[3px] bg-clip-padding bg-gradient-[252.51deg] from-[#B83A6F_61.52%] via-[#3430F4_75.38%] to-[#5A9CFF_87.19%]">
            <p className="xl:px-[67px] lg:px-[40px] md:px-[24px] px-[35px] xl:py-[28px] lg:py-[18px] md:py-[18px] py-[16px] text-white font-[poppinsSemiBold] font-semibold xl:text-[18px] lg:text-[16px] md:text-[14px] xl:leading-[18px] lg:leading-[16px] bg-[#000235] md:bg-gradient-[60.89deg] from-[#1A2246_25.64%] to-[#161C38_44.34%]">
              <span className="uppercase">CONTACT OUR TEAM</span>
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
