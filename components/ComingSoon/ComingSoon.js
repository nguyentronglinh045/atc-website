import ComingSoonImg from "../../pages/assets/images/coming-soon.png";
import ComingSoonImgMobile from "../../pages/assets/images/coming-soon-mobile.png";
import Image from "next/image";

export default function ComingSoon() {
  return (
    <div className="h-full flex flex-col justify-center">
      <div
        className="relative px-[5%] xl:pt-[236px] xl:pb-[191px] lg:pt-[180px] lg:pb-[120px] md:pt-[120px] md:pb-[100px] pt-[155px] pb-[345px]">
        <div className='flex flex-col md:items-start items-center'>
          <p
            className="text-title-green-shadow font-[poppinsSemiBold] xl:text-[60px] xl:leading-[90px] lg:text-[45px] lg:leading-[60px] md:text-[36px] md:leading-[50px] text-[30px] leading-[45px]">
            Coming Soon !
          </p>
          <p
            className="green-shadow text-white md:mt-[19px] mt-[10px] font-[poppinsBoldItalic] font-bold xl:text-[54px] xl:leading-[81px] lg:text-[39px] lg:leading-[51px] md:text-[28px] md:leading-[44px] text-[25px] leading-[37.5px]">
            empty page</p>
          <div className="md:mt-[34px] mt-[10px] md:text-left text-center">
            <a href={'#'}
               className="text-bg-bottom uppercase cursor-pointer font-[poppinsSemiBold] font-semibold xl:text-[30px] xl:leading-[45px] lg:text-[24px] leading-[36px] md:text-[18px] md:leading-[32px] text-[20px] leading-[30px]">
              NOTIFY ME
            </a>
          </div>
        </div>
        <div
          className="absolute md:top-0 right-0 xl:w-[951px] xl:h-[992px] lg:w-[700px] lg:h-[720px] md:w-[500px] md:h-[520px] block max-md:hidden">
          <Image src={ComingSoonImg} sizes='(min-width: 1200px) 80vw,(min-width: 768px) 70vw, 90vw' priority alt='' fill/>
        </div>
        <div
          className="absolute flex justify-center -bottom-[100px] left-1/2 -translate-x-1/2 max-w-[390px] w-full h-[552px] md:hidden">
          <Image src={ComingSoonImgMobile} sizes='90vw' priority alt='' fill/>
        </div>
      </div>
    </div>
  )
}