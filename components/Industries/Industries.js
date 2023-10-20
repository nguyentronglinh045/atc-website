import Grill from '../../pages/assets/icons/grill.svg'
import FineDining from '../../pages/assets/icons/fine-dining.svg'
import FastCasual from '../../pages/assets/icons/fast-casual.svg'
import BuffetStyle from '../../pages/assets/icons/buffet-style.svg'
import Catering from '../../pages/assets/icons/catering.svg'
import Bistro from '../../pages/assets/icons/bistro.svg'
import Cafe from '../../pages/assets/icons/cafe.svg'
import CoffeeHouse from '../../pages/assets/icons/coffee-house.svg'
import Pub from '../../pages/assets/icons/pub.svg'
import FullServices from '../../pages/assets/icons/full-services.svg'
import BgIndustries from '../../pages/assets/images/industries-bg.png'
import InforImg from '../../pages/assets/images/industries-information.png'
import Image from "next/image";

const TypesOfServices = ({icon, name}) => {
  return (
    <div className='flex gap-[24px] text-white items-end'>
      <Image src={icon} alt='' width={31} height={31}/>
      <span className={'font-[poppinsSemiBold] text-[18px] md:text-[22px] font-semibold leading-[27px] md:leading-[33px] text-center text-white'}>{name}</span>
    </div>
  )
}
export default function Industries() {
  return (
    <div style={{
      backgroundImage: `url('${BgIndustries.src}')`,
      width: '100%',
      backgroundSize: 'cover',
      objectFit: 'contain'
    }} className='h-full w-full font-[poppinsSemiBold] text-[22px] leading-[33px]' >
      <div className='flex justify-evenly content-center items-center w-full h-full py-[50px] px-[20px]'>
        <div className='flex flex-col md:flex-row justify-between gap-[20px] md:gap-[75px] xl:gap-[115px]'>
          <div className='flex flex-col gap-[20px] md:gap-[30px]'>
            <TypesOfServices icon={FineDining} name='Fine Dining'/>
            <TypesOfServices icon={FastCasual} name='Fast Casual'/>
            <TypesOfServices icon={BuffetStyle} name='Buffet Style'/>
            <TypesOfServices icon={Grill} name='Grill & Barbecue'/>
            <TypesOfServices icon={Catering} name='Catering'/>
          </div>
          <div className='flex flex-col gap-[20px] md:gap-[30px]'>
            <TypesOfServices icon={Bistro} name='Bistro'/>
            <TypesOfServices icon={Cafe} name='Cafe'/>
            <TypesOfServices icon={CoffeeHouse} name='Coffee House'/>
            <TypesOfServices icon={Pub} name='Pub'/>
            <TypesOfServices icon={FullServices} name='Full Services'/>
          </div>
        </div>
        <Image className={'max-lg:hidden inline'} src={InforImg} width={456} height={368} alt='' priority/>
      </div>
    </div>
  )
}