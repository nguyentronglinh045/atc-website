import React from 'react';
import Image from "next/image";
import styles from './css/OurWorkingProcess.module.css'
import ContactIcon from '../../pages/assets/icons/process1.svg'
import SupportIcon from '../../pages/assets/icons/process2.svg'
import RouterIcon from '../../pages/assets/icons/process3.svg'
import RibbonIcon from '../../pages/assets/icons/process4.svg'
import Arrow from '../../pages/assets/icons/arrow-white.svg'

const ProcessCard = ({icon, text}) => {
  return (
    <div
      className={`flex flex-col items-center min-w-[183px] min-h-[174px] sm:min-w-[240px] sm:min-h-[220px] lg:max-w-[258px] lg:w-[258px] lg:h-[248px] gap-[21px] px-4 pb-[10px] ${styles['process-card']}`}>
      <Image className={'mt-[28px] w-[50px] h-[50px] md:w-[70px] md:h-[70px]'} src={icon} alt={'icon'} />
      <span
        className={`font-[poppinsRegular] text-[10px] sm:text-[14px] lg:text-[15px] font-normal leading-[10px] sm:leading-[16px] lg:leading-[18px] text-white text-center `}>
        {text}
      </span>
    </div>
  )
}

export default function OurWorkingProcess() {
  return (
    <div className={`flex flex-col pb-[24px] sm:pb-[48px] xl:pb-[82px] gap-y-[10px] sm:gap-y-[20px] md:gap-[40px] lg:gap-[56px] text-center ${styles['process-box']}`}>
      <h3
        className={`font-[openSansBold] text-[30px] md:text-[50px] font-bold leading-[40px] md:leading-[68px] px-[20px] ${styles['process-box__heading']} text-center mt-[20px] md:mt-[42px]`}>
        Our working process
      </h3>
      <div className={'flex flex-row justify-between items-center gap-[18px]  px-[20px] md:px-[40px] overflow-x-scroll sm:overflow-x-auto scrollbar-hide'}>
        <ProcessCard icon={ContactIcon}
                     text={'Customers leave information on the website; or directly contact via hotline number and email.'}/>
        <Image className={'max-sm:hidden inline'} src={Arrow} alt={'icon'}/>
        <ProcessCard icon={SupportIcon}
                     text={'Service staff will advise, support and provide you with the necessary documents during the ordering process.'}/>
        <Image className={'max-sm:hidden inline'} src={Arrow} alt={'icon'}/>
        <ProcessCard icon={RouterIcon}
                     text={'Staff will continuously keep you informed of product making or shipping progress.'}/>
        <Image className={'max-sm:hidden inline'} src={Arrow} alt={'icon'}/>
        <ProcessCard icon={RibbonIcon}
                     text={'Free installations & allowing installments. Besides, all hardware products that come with the software are warranted for 3-6 months.'}/>
      </div>

    </div>
  )
}

