import styles from '../../pages/assets/css/OurPricingPlan.module.css'

const PricingPlansCard = ({type, price, purpose, benefit1, benefit2, period}) => {
  return (
    <div
      className={`${styles.card_wrapper} basis-1/3 flex-initial relative group flex flex-col min-w-[183px] min-h-[336px] sm:min-w-[183px] sm:min-h-[380px] lg:min-w-[340px] lg:min-h-[678px] text-center`}>
      <div
        className={`${styles.card_header} group-hover:bg-gradient-[172.78deg] from-[#9130F4_4.82%] to-[#4646F9_96.58%] pt-[15px] md:pt-[40px] pb-[27px] sm:pb-[32px] lg:pb-[52px] rounded-t-[10px] relative`}>
        <span
          className='font-[openSansBold] font-bold text-[10px] sm:text-[16px] lg:text-[21px] leading-[15px] sm:leading-[16px] lg:leading-[31px] text-[#1D2027] group-hover:text-white group-active:text-white uppercase'>
          {type}
        </span>
        <div className='flex justify-center'>
          <span
            className='font-[openSansBold] font-bold text-[24px] lg:text-[50px] leading-[30px] lg:leading-[60px] text-[#1D2027] group-hover:text-white group-active:text-white flex'>$</span>
          <span
            className='font-[openSansBold] font-bold text-[44px] lg:text-[89px] leading-[49px] lg:leading-[99px] text-[#1D2027] group-hover:text-white group-active:text-white'>{price}</span>
        </div>
        <div className='absolute left-[50%] -translate-x-1/2 bottom-[0px] translate-y-1/2 z-[3]'>
          <div
            className={`${styles['btn-shadow']} flex justify-center items-center rounded-full bg-white w-[60px] h-[20px] sm:w-[70px] sm:h-[25px] lg:w-[122px] lg:h-[40px] px-[20px] lg:px-[40px] py-[4px] lg:py-[8px]`}>
            <span
              className={'font-[openSansSemiBold] font-semibold text-[8px] sm:text-[10px] lg:text-[16px] leading-[11px] lg:leading-[24px] uppercase'}>
              Plan
            </span>
          </div>
        </div>
      </div>

      <div className={`${styles.card_body} bg-[#B7C5FF] px-[15px] text-[#000235]`}>
        <div className='pt-[25px] pb-[16px] sm:py-[30px] md:pt-[50px] md:pb-[32px]'>
          <span
            className='font-[openSansRegular] font-normal text-[10px] sm:text-[12px] lg:text-[21px] leading-[15px] lg:leading-[30px] lg:h-[90px] h-[45px] line-clamp-3'>
            {purpose}
          </span>
          <div className='flex flex-col justify-center w-full sm:pt-[16px] lg:pt-[32px]'>
            <div className='flex justify-center gap-[4px] lg:gap-[8px]'>
              <div
                className="bg-[#B1AFFF] group-hover:bg-gradient-[267.37deg] group-active:bg-gradient-[267.37deg] from-[#9130F4_55.42%] to-[#4646F9_96.83%] w-[11px] h-[11px] lg:w-[22px] lg:h-[22px] rounded-full"/>
              <span
                className='font-[openSansSemiBold] font-semibold text-[7px] sm:text-[10px] lg:text-[16px] leading-[11px] lg:leading-[24px] text-[#000235]'>
                      {benefit1}
              </span>
            </div>
            <div className='bg-[#EBF1C4] w-full h-[1px] my-[11px] lg:my-[22px]'/>
            <div className='flex justify-center gap-[4px] lg:gap-[8px]'>
              <div
                className="bg-[#B1AFFF] group-hover:bg-gradient-[267.37deg] group-active:bg-gradient-[267.37deg] from-[#9130F4_55.42%] to-[#4646F9_96.83%] w-[11px] h-[11px] lg:w-[22px] lg:h-[22px] rounded-full"/>
              <span
                className='font-[openSansSemiBold] font-semibold text-[7px] sm:text-[10px] lg:text-[16px] leading-[11px] lg:leading-[24px] text-[#000235]'>
                      {benefit2}
              </span>
            </div>
            <div className='bg-[#EBF1C4] w-full h-[1px] my-[11px] lg:my-[22px]'/>
            <div className='flex justify-center gap-[4px] lg:gap-[8px]'>
              <div
                className="bg-[#B1AFFF] group-hover:bg-gradient-[267.37deg] group-active:bg-gradient-[267.37deg] from-[#9130F4_55.42%] to-[#4646F9_96.83%] w-[11px] h-[11px] lg:w-[22px] lg:h-[22px] rounded-full"/>
              <span
                className='font-[openSansSemiBold] font-semibold text-[7px] sm:text-[10px] lg:text-[16px] leading-[11px] lg:leading-[24px] text-[#000235]'>
                      {period}
              </span>
            </div>
            <div className='flex justify-center mt-[32px] lg:mt-[84px]'>
              <a href={''}
                 className={`${styles.btn} p-[1px]`}>
                <div
                  className='flex justify-center bg-[#B7C5FF] group-hover:bg-transparent group-active:bg-transparent px-[16px] py-[6px] lg:px-[32px] lg:py-[12px] rounded-[32px] w-[66px] h-[22px] lg:w-[133px] lg:h-[46px]'>
                  <span
                    className={`font-[openSansSemiBold] font-semibold text-[7px] lg:text-[16px] leading-[11px] lg:leading-[22px] group-hover:text-black group-hover:[-webkit-text-fill-color:_#000] group-active:text-black group-active:[-webkit-text-fill-color:_#000] ${styles.text__btn}`}>Buy Now</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function OurPricingPlan() {
  return (
    <div
      className={`flex flex-col gap-[30px] md:gap-[60px] pb-[60px] md:pb-[90px] pt-[35px] lg:pt-[65px] ${styles.plan_wrapper} justify-center max-w-[1440px] px-[5%]`}>
      <div className='flex justify-center text-center flex-col items-center'>
        <p
          className={`font-[openSansBold] font-bold text-[15px] md:text-[30px] leading-[27px] md:leading-[54px] ${styles.text__title}`}>
          Plan & Package
        </p>
        <p
          className={`font-[openSansBold] font-bold text-[30px] md:text-[50px] leading-[40px] md:leading-[68px] ${styles.text__main} uppercase`}>
          OUR PRICING PLANS
        </p>
      </div>
      <div
        className='flex justify-between gap-[20px] lg:gap-[40px] xl:gap-[70px] max-sm:overflow-x-scroll overflow-x-auto scrollbar-hide'>

        <PricingPlansCard type={'STANDARD'} price={'5'}
                          purpose={'For businesses that want to build a standard website.'}
                          benefit1={'Only basic process'} benefit2={'Highlighted in Search Results'}
                          period={'60 Days Visibility'}/>
        <PricingPlansCard type={'PREMIUM'} price={'30'}
                          purpose={'For businesses that want to build a high quality website.'} benefit1={'5 Listings'}
                          benefit2={'Highlighted in Search Results'} period={'60 Days Visibility'}/>
        <PricingPlansCard type={'STANDARD'} price={'20'}
                          purpose={'For businesses that want to flexibly choose each stage in the website building process.'}
                          benefit1={'5 Listings'} benefit2={'Highlighted in Search Results'}
                          period={'60 Days Visibility'}/>

      </div>
    </div>
  )
}