import styles from './RecentPosts.module.css'
import Post1 from '../../pages/assets/images/RecentPosts1.png'
import Post2 from '../../pages/assets/images/RecentPosts2.png'
import Post3 from '../../pages/assets/images/RecentPosts3.png'
import Post4 from '../../pages/assets/images/RecentPosts4.png'
import ArrowLeftIcon from '../../pages/assets/icons/arrow-left-multi-color.svg'
import ArrowRightIcon from '../../pages/assets/icons/arrow-right-multi-color.svg'
import Image from "next/image";


const PostCard = ({image, direction = '#', type, timeUpload, title, subTitle}) => {
  return (
    <a href="#"
       className={`flex flex-row items-center h-[117px] sm:h-[150px] md:h-[180px] lg:h-[280px] md:max-w-[770px] ${styles['post-card']}`}>
      <Image className="object-cover w-[112px] h-[117px] lg:h-[280px] xl:w-[270px] lg:w-[230px] md:h-[180px] sm:w-[180px] sm:h-[150px] rounded-lg"
             src={image} alt=""/>
      <div
        className="flex flex-col h-full gap-[6px] sm:gap-[14px] pt-[13px] pl-[11px] pr-[14px] xl:pt-[32px] xl:pl-[36px] xl:pr-[27px] md:pt-[16px] md:pl-[20px] md:pr-[18px] leading-normal">
        <div className="flex justify-between items-center">
          <span
            className={`font-[poppinsSemiBold] text-[8px] sm:text-[10px] lg:text-[14px] font-semibold leading-[10px] md:leading-[24px] uppercase text-white `}>{timeUpload}</span>
          {type &&
            <div
              className={`flex justify-center items-center rounded-[8px] px-[8px] py-[6px] md:px-[16px] bg-[#87759a] opacity-80 md:py-[8px]`}>
              <span
                className={`font-[openSansSemiBold] text-[6px] sm:text-[8px] lg:text-[14px] font-semibold leading-[6.5px] md:leading-[16px] uppercase text-white`}>{type}</span>
            </div>
          }
        </div>
        <h5
          className={`font-[poppinsSemiBold] text-[10px] sm:text-[16px] lg:text-[20px] font-semibold leading-[13px] sm:leading-[18px] lg:leading-[32px] text-left text-white line-clamp-2`}>
          {title}</h5>
        <span
          className={`font-[poppinsRegular] text-[8px] md:text-[14px] md:text-[14px] font-normal leading-[10px] sm:leading-[18px] lg:leading-[30px] text-left text-white line-clamp-3`}>
          {subTitle}
        </span>
      </div>
    </a>
  )
}

export default function RecentPosts() {
  return (
    <div className="flex flex-col w-full lg:w-[770px] gap-[10px] md:gap-[30px] mt-[30px] md:mt-[55px]">
      <h3 className={`font-[VolkhovBold] text-[25px] md:text-[35px] font-bold leading-[52px] text-white`}>Recent Posts</h3>
      <div className="flex flex-col gap-[8px] xl:gap-[32px] lg:gap-[24px] md:gap-[16px]">
        <PostCard image={Post3} timeUpload={'April 03, 2022'}
                  title={'Top 5 golden secrets for the restaurant industry in the 4.0 era'} type={'Book'}
                  subTitle={'The six chapters along with five secrets summarized in this book are the distinctive experiences that we have acquired from cooperating and solving problems with our partners.'}/>
        <PostCard image={Post1} timeUpload={'April 03, 2022'}
                  title={'Top 5 golden secrets for the restaurant industry in the 4.0 era'} type={'Book'}
                  subTitle={'The six chapters along with five secrets summarized in this book are the distinctive experiences that we have acquired from cooperating and solving problems with our partners.'}/>
        <PostCard image={Post2} timeUpload={'April 03, 2022'}
                  title={'How has the COVID 19 crisis changed the food business?'} type={'STATISTICS'}
                  subTitle={'Whether a pandemic is occurring or not, the trend of applying technology to the food industry will continue. Along with the trend of using digital menus, we understand the great benefi...'}/>
        <PostCard image={Post3} timeUpload={'April 03, 2022'}
                  title={'Revenue breakthrough by differentiation - Brand competition strategy'}
                  subTitle={'A good business person, at any time, should never be satisfied and comfortable with ‘we used to do that here’ or ‘other people are doing it too’...'}/>
        <PostCard image={Post4} timeUpload={'April 03, 2022'}
                  title={'Revenue breakthrough by differentiation - Brand competition strategy'}
                  subTitle={'A good business person, at any time, should never be satisfied and comfortable with ‘we used to do that here’ or ‘other people are doing it too’...'}/>
      </div>
      <div className="flex flex-row justify-between mt-0 md:mt-[55px]">
        <a href="components/News/RecentPosts#">
          <div className='flex flex-row gap-[8px] md:gap-[12px]'>
            <Image src={ArrowLeftIcon} alt={'icon'} width={8} height={12}/>
            <span className={`font-[poppinsSemiBold] font-semibold leading-[24px] text-[14px] md:text-[16px] ${styles['page-button__text']}`}>Prev</span>
          </div>
        </a>
        <div className="w-full flex flex-row justify-center gap-[16px] md:gap-[26] xl:gap-[40px]">
          <a className={`w-[20px] h-[20px] md:w-[24px] md:h-[24px] font-[poppinsSemiBold] text-[12px] md:text-[16px] font-semibold leading-[24px] md:leading-[24px] text-center text-white rounded-full ${styles['page-number']} ${styles.active}`} href="components/News/RecentPosts#">1</a>
          <a className={`w-[20px] h-[20px] md:w-[24px] md:h-[24px] font-[poppinsSemiBold] text-[12px] md:text-[16px] font-semibold leading-[24px] md:leading-[24px] text-center text-white rounded-full ${styles['page-number']}`} href="components/News/RecentPosts#">2</a>
          <a className={`w-[20px] h-[20px] md:w-[24px] md:h-[24px] font-[poppinsSemiBold] text-[12px] md:text-[16px] font-semibold leading-[24px] md:leading-[24px] text-center text-white rounded-full ${styles['page-number']}`} href="components/News/RecentPosts#">3</a>
          <a className={`w-[20px] h-[20px] md:w-[24px] md:h-[24px] font-[poppinsSemiBold] text-[12px] md:text-[16px] font-semibold leading-[24px] md:leading-[24px] text-center text-white rounded-full ${styles['page-number']}`} href="components/News/RecentPosts#">4</a>
          <a className={`w-[20px] h-[20px] md:w-[24px] md:h-[24px] font-[poppinsSemiBold] text-[12px] md:text-[16px] font-semibold leading-[24px] md:leading-[24px] text-center text-white rounded-full ${styles['page-number']}`} href="components/News/RecentPosts#">5</a>
        </div>
        <a href="components/News/RecentPosts#">
          <div className='flex flex-row gap-[8px] md:gap-[12px]'>
            <span className={`font-[poppinsSemiBold] font-semibold leading-[24px] text-[14px] md:text-[16px] ${styles['page-button__text']}`}>Next</span>
            <Image src={ArrowRightIcon} alt={'icon'} width={8} height={12}/>
          </div>
        </a>
      </div>

    </div>
  )
}