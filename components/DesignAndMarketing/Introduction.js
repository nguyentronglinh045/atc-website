import styles from '../../pages/assets/css/Introduction.module.css'
import IntroductionImg from '../../pages/assets/images/introduction.png'
import IntroductionMobileImg from '../../pages/assets/images/introduction-mobile.png'
import Image from "next/image";

export default function Introduction() {
  return (
    <div className={`relative ${styles.intro_wrapper} xl:min-h-[840px] lg:min-h-[580px] min-h-[580px] px-[5%] -mt-[72px]`}>
      <div className='absolute top-0 bottom-0 left-0 right-0 z-[1] xl:h-[840px] lg:h-[580px] w-full max-md:hidden block'
        style={{
          backgroundImage: 'linear-gradient(231.56deg, #5A0068 0%, #FF432A 11.56%, #E04349 24.48%, #2A3FFF 80.21%, #000235 100%)',
          opacity: 0.2
        }} />
      <div
        className="absolute z-[-1] top-[302px] left-[316px] w-[1205px] h-[1736px] block max-md:hidden"
        style={{
          backgroundImage: "linear-gradient(144.32deg, rgba(127, 139, 181, 0.5) 14.06%, rgba(161, 138, 183, 0.5) 19.29%, rgba(70, 26, 114, 0.5) 26.63%, rgba(106, 117, 156, 0.5) 33.22%, rgba(64, 99, 224, 0.5) 40.14%, rgba(64, 138, 224, 0.5) 47.46%, rgba(3, 37, 77, 0.5) 54.26%, rgba(196, 112, 217, 0.5) 61.37%, rgba(79, 18, 206, 0.5) 67.84%, rgba(0, 108, 235, 0.5) 73.07%, rgba(10, 61, 121, 0.5) 78.03%)",
          opacity: 0.4,
          filter: "blur(128.5px)"
        }}
      />
      <div className="absolute top-0 right-0 z-[1] xl:w-[1024px] xl:h-[840px] md:w-[680px] md:h-[580px] block max-md:hidden">
        <Image src={IntroductionImg} alt='' fill sizes='(min-width: 768px) 70vw, 90vw' loading='eager'/>
      </div>
      <div className='md:absolute z-[2] xl:pt-[156px] xl:pb-[373px] lg:pt-[160px] lg:pb-[200px] md:pt-[100px] md:pb-[120px] pt-[65px] flex flex-col-reverse gap-[45px] items-center md:items-start'>
        <button className={`uppercase font-[poppinsSemiBold] xl:text-[18px] lg:text-[16px] md:text-[14px] text-[11px] p-[4px] ${styles['border-bg']}`}>
          <p className='bg-[#000235] xl:px-[63px] xl:py-[20px] lg:px-[48px] lg:py-[16px] md:px-[32px] md:py-[12px] px-[51px] py-[16px]'>
            <span className='text-white'>Register now</span>
          </p>
        </button>
        <div className='font-[poppinsBold] xl:text-[80px] lg:text-[54px] md:text-[42px] text-[50px] xl:leading-[80px] lg:leading-[54px] md:leading-[42px] leading-[50px] xl:mt-[52px] lg:mt-[42px] md:mt-[32px] md:text-left text-center lg:tracking-[-4px] tracking-[-2px]'>
          <p className='text-[#FF9900]'>Design & Marketing</p>
          <p className='text-white md:mt-[12px]'>Services</p>
        </div>
      </div>
      <div className="px-[12px] relative md:hidden mt-[33px] w-full flex justify-center">
        <Image src={IntroductionMobileImg} alt='' className='w-full max-h-[400px]' sizes='50vw'/>
      </div>
    </div>
  )
}