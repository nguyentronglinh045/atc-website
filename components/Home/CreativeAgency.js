import styles from '../../pages/assets/css/CreativeAgency.module.css'
import CreativeAgencyImg from '../../pages/assets/images/creative-agency.png'
import Rocket from '../../pages/assets/images/rocket.png'
import Note from '../../pages/assets/images/note.png'
import Image from "next/image";

export default function CreativeAgency() {
  return (
    <div className={`${styles['creative-agency_wrapper']} relative z-[1] overflow-hidden pr-[5%]`}>
      <div className='absolute top-[-170px] right-[-202px] z-[-1] w-[215px] h-[215px] sm:w-[604px] sm:h-[604px]'
           style={{
             background: 'radial-gradient(50% 50% at 50% 50%, #050566 0%, rgba(26, 26, 119, 0) 100%)',
           }}/>
      <div
        className='absolute bottom-[210px] left-[-225px] lg:bottom-0 z-[-1] w-[215px] h-[215px] sm:w-[604px] sm:h-[604px]'
        style={{
          background: 'radial-gradient(50% 50% at 50% 50%, #050566 0%, rgba(26, 26, 119, 0) 100%)'
        }}/>
      <div className='lg:mb-[94px]'>
        <p
          className={`${styles['text__main']} uppercase ${styles['linear__text']} lg:absolute w-full lg:min-h-[95px] flex items-center justify-center lg:text-[50px] sm:text-[40px] text-[30px] lg:leading-[68px] sm:leading-[52px] leading-[41px]
        lg:mt-[65px] mt-[31px]`}>
          creative agency
        </p>
        <div
          className='relative w-full flex flex-col-reverse lg:flex-row h-full'>
          <div className='flex lg:items-end justify-center lg:h-auto z-10'>
            <Image src={CreativeAgencyImg} sizes='(min-width: 1024px) 40vw, 90vw,' alt='' width={740} height={713}
                   priority
                   className='lg:mt-[93px] mt-[30px] lg:max-h-[713px] max-h-[560px] max-w-[560px] lg:max-w-[90%]'/>
          </div>
          <div
            className='flex lg:justify-between justify-around lg:mt-[76px] mt-[48px] w-full lg:w-[50%] lg:-ml-[50px]'>
            <div
              className='flex flex-col lg:mt-[143px] md:mt-0 h-[320px] lg:h-[569px] sm:h-[400px] md:h-[450px] w-[137px] sm:min-w-[220px] md:min-w-[287px] xl:min-w-[250px] lg:min-w-[250px] relative'>
              <div className={`absolute w-[93px] h-[103px] sm:w-[150px] sm:h-[166px] top-0 left-[22px] z-[-1] ${styles['icon-bg']}`} />
              <Image src={Rocket} width={185} height={192} alt=''
                     className='w-[114px] h-[118px] md:w-[185px] md:h-[192px] sm:w-[144px] sm:h-[162px] absolute top-0 left-[8px]'/>
              <div className='absolute bottom-0 flex lg:gap-[31px] md:gap-[25px] gap-[10px] flex-col'>
                  <span
                    className={`${styles['text__main']} ${styles['linear__text']} xl:text-[28px] md:text-[24px] sm:text-[20px] text-[16px] leading-[24px] lg:leading-[42px] md:leading-[36px] sm:leading-[30px]`}>
                    Technology
                  </span>
                <p
                  className={`${styles['text__content']} lg:text-[20px] md:text-[17px] sm:text-[15px] text-[12px] leading-[150%]`}>It
                  can be said that we are fully
                  capable of achieving almost all of the technology requirements at the present time.</p>
                <div
                  className={`cursor-pointer lg:p-[15px] p-[10px] sm:px-[10px] sm:py-[13px] ${styles['linear__bg']} md:max-w-[221px] max-w-[136px] flex justify-center`}>
                  <button
                    className={`${styles['linear__text-button']} ${styles['text__title']} max-w-[136px] md:max-w-[221px] text-[14px] md:text-[20px] lg:text-[23px] leading-[21px] md:leading-[34px]`}>What
                    we have?
                  </button>
                </div>
              </div>
            </div>
            <div
              className='flex flex-col lg:mt-[143px] md:mt-0 lg:h-[569px] h-[320px] sm:h-[400px] md:h-[450px] w-[160px] sm:min-w-[220px] md:min-w-[290px] xl:min-w-[279px] lg:min-w-[250px] relative'>
              <div className={`w-[93px] h-[103px] sm:w-[150px] sm:h-[166px] absolute top-0 z-[-1] ${styles['icon-bg']}`} />
                <Image src={Note} width={150} height={166} alt=''
                       className='w-[92px] h-[102px] sm:w-[130px] sm:h-[132px] absolute max-sm:top-[10px] sm:top-[23px] sm:left-[10px]'/>
              <div className='absolute bottom-0 flex flex-col lg:gap-[39px] md:gap-[28px] gap-[9px]'>
                  <span
                    className={`${styles['text__main']} ${styles['linear__text']} xl:text-[28px] md:text-[24px] sm:text-[20px] text-[16px] leading-[24px] lg:leading-[42px] sn:leading-[30px] md:leading-[36px]`}>
                    Design & Marketing
                  </span>
                <p className={`${styles['text__content']} lg:text-[20px] md:text-[17px] sm:text-[15px] text-[12px] leading-[150%]`}>
                  Unlike the dev
                  team, the marketing team
                  is younger but more dynamic. We meet a wide range of desires from basic to complex and from all
                  fields.
                </p>
                <div
                  className={`cursor-pointer lg:p-[15px] p-[10px] ${styles['linear__bg']} md:max-w-[221px] max-w-[136px] flex justify-center`}>
                  <button
                    className={`${styles['linear__text-button']} ${styles['text__title']} max-w-[221px] text-[14px] md:text-[20px] lg:text-[23px] leading-[21px] md:leading-[34px]`}>What
                    we have?
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}