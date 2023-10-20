import styles from './POSProviderPartners.module.css'

import ExcludeIcon from '../../pages/assets/icons/Exclude.svg'
import OlivePOS from '../../pages/assets/icons/OlivePOS.svg'
import Ikasse247 from '../../pages/assets/icons/Ikasse247.svg'
import Gigasource from '../../pages/assets/icons/Gigasource.svg'
import DemoPhone from '../../pages/assets/images/demo-phone.png'
import AppStoreIcon from '../../pages/assets/icons/app-store.svg'
import GoogleIcon from '../../pages/assets/icons/google-play.svg'
import ArrowLeftIcon from '../../pages/assets/icons/arrow-left-white.svg'
import QRCode from '../../pages/assets/images/qr-code.png'
import Image from "next/image";
import Link from "next/link";


const Partners = ({icon}) => {
  return (
    <div
      className='flex min-w-[149px] min-h-[43px] md:w-[320px] md:h-[92px] rounded-[10px] bg-[#0D1014] items-center justify-center py-[10px] px-[8px]'>
      <Image src={icon} className={'w-[150px] h-[43px] md:w-[300px] md:h-[70px]'} width={300} height={70} alt={''}/>
    </div>
  )
}

const DownloadButton = ({icon, text, direction = '/'}) => {
  return (
    <Link href={direction}>
      <div
        className="flex gap-2 items-center justify-center bg-[#D4CDFE] hover:bg-[#f753b9] active:bg-[#f753b9] rounded-[10px] pl-[16px] pr-[24px] py-[10px]">
        <Image src={icon} width={18} height={18} alt={''}/>
        <span className="font-[poppinsMedium] font-medium text-[16px] leading-6 text-[#476285]">{text}</span>
      </div>
    </Link>
  )
}

const DownloadBanner = () => {
  return (
    <div
      className={`absolute bottom-[0%] right-[50%] translate-x-1/2 translate-y-1/2 lg:max-w-[1258px] max-lg:hidden w-full flex flex-row justify-between pt-[50px] pb-[57px] px-[24px] xl:px-[78px] rounded-[12px] ${styles['bg-download-banner']} overflow-hidden`}>
      <div className="flex flex-col gap-[27px] w-[362px]">
       <span className='font-[poppinsRegular] font-normal text-[16px] leading-6 text-white'>
         <b>Download</b> the <b>Restaurant Plus Pos</b>
         App to experience the finest features and enjoy the free offers and services for your establishment.
       </span>
        <div className="flex gap-[27px]">
          <DownloadButton icon={AppStoreIcon} text={'App Store'}/>
          <DownloadButton icon={GoogleIcon} text={'Google play'}/>
        </div>
      </div>

      {/*QR code*/}
      <div className="flex flex-row gap-[36px]">
        <div className="bg-white w-[115px] h-[115px] rounded-[12px]">
          <Image src={QRCode} width={115} height={115} alt={'QRCode'} className='w-[115px] h-[115px] p-[8px]'/>
        </div>
        <div className="flex flex-col gap-[24px] w-[100px]">
          <Image src={ArrowLeftIcon} width={26} height={26} alt={''}/>
          <span className="font-[poppinsMedium] font-medium leading-5 text-white">
            Scan to download Restaurant Plus app
          </span>
        </div>
      </div>

      {/*  phone Image absolute */}
      <Image src={DemoPhone} alt={''} width={344} height={447}
             className='absolute top-[32px] left-[54%] -translate-x-[54%]'/>
    </div>
  )
}

const POSProviderPartners = () => {
  return (
    <div
      className={`relative flex flex-col items-center gap-[28px] lg:gap-[46px] ${styles['bg-post-provider']} pt-[38px] lg:pt-[88px] pb-[45px] lg:pb-[200px] xl:pb-[218px]`}>
      <h3 className={`font-[manropeBold] font-bold text-[30px] md:text-[55px] leading-[36px] md:leading-[66px] w-1/2 md:w-fit text-center ${styles['top-title']}`}>
        POS Provider Partners
      </h3>
      <div className="flex flex-row flex-wrap lg:flex-nowrap gap-[12px] md:gap-[20px] xl:gap-x-[57px] justify-center items-center">
        <Partners icon={OlivePOS}/>
        <Image src={ExcludeIcon} className={'max-lg:hidden inline lg:w-[30px] lg:h-[28px] xl:max-w-[35px] xl:max-h-[33px]'} width={35} height={33} alt={''}/>
        <Partners icon={Gigasource}/>
        <Image src={ExcludeIcon} className={'max-lg:hidden inline lg:w-[30px] lg:h-[28px] xl:max-w-[35px] xl:max-h-[33px]'} width={35} height={33} alt={''}/>
        <Partners icon={Ikasse247}/>
      </div>
      <DownloadBanner/>
    </div>
  )
}

export default POSProviderPartners