import styles from './BlogSlide.module.css'
import BlogImage1 from '../../pages/assets/images/blog-image1.png'
import BlogImage2 from '../../pages/assets/images/blog-image2.png'
import BlogImage3 from '../../pages/assets/images/blog-image3.png'
import ArrowLeft from '../../pages/assets/icons/chevron-left.svg'
import ArrowRight from '../../pages/assets/icons/chevron-right.svg'
import Image from "next/image";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';


const SlideCard = ({image, timeUpload, mustRead = false, title, direct = '/coming-soon'}) => {
  return (

    <div
      className={`relative w-[223px] h-[302px] md:w-[260px] md:h-[350px] lg:w-[318px] lg:h-[430px] overflow-hidden rounded-lg cursor-pointer rounded-lg ${styles['slide-card']}`}>
      {mustRead &&
        <div
          className={`w-[110px] h-[35px] flex justify-center items-center absolute top-[28px] right-[26px] z-40 rounded-lg bg-[#97897e] opacity-80 ${styles['slide-card__pill']}`}>
          <span className={styles['slide-card__pill-text']}>Must Read</span>
        </div>
      }
      {/*<div className={`${styles['slide-card']} relative p-0`}>*/}
      {/*<a href={direct}>*/}
      <Image src={image} alt={'image'} width={318} height={430} className='absolute inset-0'/>
      <div className='flex flex-col gap-y-[8px] absolute bottom-[50px] left-[24px] right-[24px]'>
        <span
          className={`font-[poppinsSemiBold] text-[10px] lg:text-[14px] font-semibold leading-[14.5px] lg:leading-[21px] text-white`}>{timeUpload}</span>
        <h3
          className={`font-[poppinsSemiBold] text-[14px] lg:text-[20px] font-semibold leading-[19px] lg:leading-[27px] text-white styles['slide-card__title']`}>{title}</h3>
      </div>
      {/*</a>*/}
      {/*</div>*/}
    </div>
  )
}
const NextArrow = ({onClick}) => {
  return (
    <div onClick={onClick}
         className={`w-[39px] h-[39px] md:w-[46px] md:h-[46px] xl:w-[56px] xl:h-[56px] absolute top-[50%] right-[-60px] md:right-[-104px] flex justify-center items-center select-none cursor-pointer rounded-full z-20 ${styles['slide-card__button']} prevent-select`}>
      <Image src={ArrowRight} alt={'icon'} width={15} height={20}/>
    </div>
  )
}
const PrevArrow = ({onClick}) => {
  return (
    <div onClick={onClick}
         className={`w-[39px] h-[39px] md:w-[46px] md:h-[46px] xl:w-[56px] xl:h-[56px] absolute top-[50%] left-[-60px] md:left-[-104px] flex justify-center items-center select-none cursor-pointer rounded-full z-20 ${styles['slide-card__button']} prevent-select`}>
      <Image src={ArrowLeft} alt={'icon'} width={15} height={20}/>
    </div>
  )
}

export default function BlogSlide() {
  const responsive = {
    0: {items: 1},
    767: {items: 2,},
    1280: {items: 3},
  };
  const listSlideCard = [
    <SlideCard mustRead title={'Top 5 golden secrets for the restaurant industry'} image={BlogImage1}
               timeUpload={'April 03, 2019'}/>,
    <SlideCard mustRead title={'Top 5 golden secrets for the restaurant industry'} image={BlogImage2}
               timeUpload={'April 03, 2019'}/>,
    <SlideCard mustRead title={'Top 5 golden secrets for the restaurant industry'} image={BlogImage3}
               timeUpload={'April 03, 2019'}/>,
    <SlideCard mustRead title={'Top 5 golden secrets for the restaurant industry'} image={BlogImage2}
               timeUpload={'April 03, 2019'}/>
  ]
  return (
    <div className="flex flex-col items-center gap-[10px] relative bg-[#000235] pt-[55px] pb-[10px] md:pb-[60px]">
      <h3
        className={`w-full md:gap-x-[20] px-[24px] sm:px-[48px] md:px-[64] xl:px-[128px] pl-[24px] font-[VolkhovBold] text-[25px] md:text-[35px] font-bold leading-[52px] text-left text-white inline ${styles['blog-slide__heading']}`}>Blog</h3>

      <div className="w-[225px] md:w-[500px] lg:w-[690px] xl:w-[1000px] ">
        <AliceCarousel
          mouseTracking
          items={listSlideCard}
          responsive={responsive}
          // autoPlay
          // autoPlayInterval={3000}
          infinite
          disableDotsControls
          controlsStrategy="default"
          paddingRight={0}
          autoHeight
          renderPrevButton={() => {
            return <PrevArrow/>
          }}
          renderNextButton={() => {
            return <NextArrow/>
          }}
        />

      </div>
    </div>
  )
}
