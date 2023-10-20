import styles from './Trending.module.css'
import SearchIcon from "../../pages/assets/icons/search.svg"
import CardImg1 from "../../pages/assets/images/card-tranding1.png"
import CardImg2 from "../../pages/assets/images/card-tranding2.png"
import CardImg3 from "../../pages/assets/images/card-tranding3.png"
import Facebook from "../../pages/assets/images/Facebook-44.png"
import Instagram from "../../pages/assets/images/Instagram-44.png"
import YouTube from "../../pages/assets/images/YouTube-44.png"
import Image from "next/image";


const CardTrending = ({image, direction = '#', timeUpload, title}) => {
  return (
    <a href={direction} className='relative flex rounded-[10px] w-full bg-local'>
      <Image src={image} alt={''} className={'w-full xl:w-[370px] sm:h-[120px]'} width={370} height={148}/>
      <div className="absolute top-[0] left-[0] flex flex-col gap-[10px] lg:gap-[12px] xl:gap-[14px] p-[24px] sm:px-[16px] sm:py-[10px] md:p-[16px] z-10">
        <span className={`font-[poppinsSemiBold] text-[10px] md:text-[12px] font-semibold leading-[20px] md:leading-[24px] text-left text-white`}>{timeUpload}</span>
        <h4 className={`font-[poppinsSemiBold] text-[13px] sm:text-[14px] md:text-[16px] font-semibold leading-[24px] md:leading-[28px] text-left text-white ${styles['card-trending__title']}`}>{title}</h4>
      </div>
    </a>
  )
}

const Tag = ({text}) => {
  return (
    <a href="components/News/Trending#" className="flex rounded-md bg-[#ECE8EB]">
      <span className={`${styles['tag-text']} px-4 py-2`}>{text}</span>
    </a>
  )
}

export default function Trending() {
  return (
    <div className="flex flex-col w-full sm:w-[40vh] lg:w-[370px]">
      <div className='relative flex flex-col mt-[30px] md:mt-[55px] gap-[10px] md:gap-[30px]'>
        <h3 className={`font-[VolkhovBold] text-[25px] md:text-[35px] font-bold leading-[52px] text-white self-start`}>Search</h3>
        <div className='relative flex items-center'>
          <input type="text"
                 className={`w-full py-[12px] pl-[24px] pr-[40px] rounded-[10px] outline-none ${styles['search-input']}`}
                 placeholder={'Search...'}/>

          <Image src={SearchIcon} className='absolute right-[16px] z-10' alt={'icon'} width={22} height={22}/>
        </div>
      </div>

      <div className='flex flex-col gap-y-[30px] mt-[30px] md:mt-[60px]'>
        <h3 className={`font-[VolkhovBold] text-[25px] md:text-[35px] font-bold leading-[52px] text-white self-start`}>Trending</h3>
        <div className="flex flex-col gap-[30px]">
          <CardTrending image={CardImg1} timeUpload={'April 03, 2019'}
                        title={'Building interactive programs to attract potential – loyal customers'}/>
          <CardTrending image={CardImg2} timeUpload={'April 03, 2019'}
                        title={'Building interactive programs to attract potential – loyal customers'}/>
          <CardTrending image={CardImg3} timeUpload={'April 03, 2019'}
                        title={'Building interactive programs to attract potential – loyal customers'}/>
        </div>
      </div>

      <div className='max-lg:hidden flex flex-col gap-y-[30px] mt-[60px]'>
        <h3 className={`font-[VolkhovBold] text-[25px] md:text-[35px] font-bold leading-[52px] text-white self-start`}>Social Profiles</h3>
        <div className="flex flex-row gap-[30px]">
          <a href={'#'}>
            <Image src={Facebook} alt={''} width={44} height={44}/>
          </a>
          <a href={'#'}>
            <Image src={Instagram} alt={''} width={44} height={44}/>
          </a>
          <a href={'#'}>
            <Image src={YouTube} alt={''} width={44} height={44}/>
          </a>
        </div>
      </div>

      <div className='max-lg:hidden flex flex-col gap-y-[30px] mt-[60px]'>
        <h3 className={`font-[VolkhovBold] text-[25px] md:text-[35px] font-bold leading-[52px] text-white self-start`}>Tags</h3>
        <div className="flex flex-row flex-wrap gap-x-[12px] gap-y-[17px]">
          <Tag text={'font-end dev'}/>
          <Tag text={'website builder'}/>
          <Tag text={'web apps'}/>
          <Tag text={'marketing agency'}/>
        </div>
      </div>

    </div>
  )
}