import styles from '../../pages/assets/css/OtherServices.module.css'
import GlobalNetwork from '../../pages/assets/icons/global-network.svg'
import SocialMedia from '../../pages/assets/icons/social-media.svg'
import OtherServices1 from '../../pages/assets/images/other-services-1.png'
import OtherServices2 from '../../pages/assets/images/other-services-2.png'
import Image from "next/image";

export default function OtherServices() {
  return (
    <div
      className={`max-w-[1440px] relative z-[1] px-[5%] ${styles['other-services_wrapper']}`}>
      <div
        className="z-[-1] absolute rounded-[33942.89px] top-[60px] left-[-26.86%] w-[1170.74px] h-[1170.74px] max-lg:hidden block"
        style={{
          filter: "blur(452.572px)",
          transform: "rotate(0.06deg)",
          backgroundImage: "linear-gradient(177.23deg, rgba(67, 63, 200, 0.7) -13.49%, rgba(129, 45, 226, 0.7) 48.13%)"
        }}
      />
      <div
        className="z-[-1] absolute rounded-[33942.89px] top-[60px] right-[-26.97%] w-[1170.74px] h-[1170.74px] max-lg:hidden block"
        style={{
          filter: "blur(452.572px)",
          transform: "rotate(0.06deg)",
          backgroundImage: "linear-gradient(177.23deg, rgba(67, 63, 200, 0.7) -13.49%, rgba(129, 45, 226, 0.7) 48.13%)"
        }}
      />
        <p
          className={`font-[openSansBold] lg:text-[50px] lg:leading-[68px] text-[30px] leading-[41px] pt-[25px] lg:pt-[77px] sm:pt-[55px] ${styles.text__main} uppercase text-center`}>
          Other Services</p>
        <div className='flex text-white lg:mt-[32px] mt-[20px] w-full pb-[43px] flex-col'>
          <div className='flex-col lg:flex-row flex justify-center lg:justify-between gap-[22px]'>
            <div className='flex lg:gap-[4%] gap-[10px] flex-col lg:flex-row'>
              <Image src={GlobalNetwork} alt='' width={77} height={77} className='lg:max-h-[77px] max-h-[26px] sm:max-h-[45px] w-full lg:w-auto'/>
              <div className='flex justify-center w-full lg:justify-start text-center lg:text-left'>
                <div className='flex flex-col lg:gap-[44px] gap-[10px] lg:max-w-[492px] max-w-[320px] md:max-w-[440px]'>
                  <p className={`text-[18px] leading-[27px] font-[poppinsBold] md:text-[20px] md:leading-[36px] lg:text-[35px] lg:leading-[52px]`}>
                    Design and build business website:
                  </p>
                  <div className=' text-[13px] leading-[20px] font-[poppinsRegular] md:text-[16px] md:leading-[27px] lg:text-[21px] lg:leading-[32px]'>
                    <p>Besides:</p>
                    <ul className={`list-disc ml-[20px]`}>
                      <li>Add advanced features (opening/closing hours, reservations, service bookings, appointments, etc.)</li>
                      <li>Connect website with online order system / point of sale system.</li>
                      <li>Run SEO, run ads to push website rankings to the top search pages of Google.</li>
                    </ul>
                  </div>
                  <div className='flex justify-center lg:justify-start w-full'>
                    <button
                      className={`${styles.btn} lg:px-[31px] rounded-[7px] lg:py-[10px] px-[27px] py-[8px]
                              font-[DMSansBold] font-bold text-[16px] leading-[21px] lg:text-[25px] lg:leading-[33px]`}>
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='h-full flex justify-center'>
              <Image src={OtherServices1} width={646} height={617} alt='' priority  className='lg:max-w-[545px] lg:max-h-[617px] max-w-[320px] max-h-[341px] md:max-w-[460px] md:max-h-[495px]'/>
            </div>

          </div>
          <div className='lg:flex-row flex flex-col-reverse justify-between'>
            <div className='h-full flex justify-center'>
              <Image src={OtherServices2} width={666} height={651} alt='' priority  className='lg:max-w-[645px] lg:max-h-[651px] max-w-[354px] max-h-[358px] md:max-w-[553px] md:max-h-[515px]'/>
            </div>
            <div className='flex lg:gap-[4%] gap-[10px] flex-col lg:flex-row'>
              <Image src={SocialMedia} width={77} height={77} alt='' className='lg:max-h-[77px] max-h-[26px] sm:max-h-[45px] w-full lg:w-auto'/>
              <div className='flex justify-center w-full lg:justify-start text-center lg:text-left'>
                <div className='flex flex-col lg:gap-[44px] gap-[10px] lg:max-w-[556px] max-w-[320px] md:max-w-[440px]'>
                  <p className={`text-[18px] leading-[27px] font-[poppinsBold] md:text-[20px] md:leading-[36px] lg:text-[35px] lg:leading-[52px]`}>
                    Managing corporate image on social networking platforms:
                  </p>
                  <div className=' text-[13px] leading-[20px] font-[poppinsRegular] md:text-[16px] md:leading-[27px] lg:text-[21px] lg:leading-[32px]'>
                    <p>Besides:</p>
                    <ul className={`list-disc ml-[20px]`}>
                      <li>Create e-vouchers, discount codes, membership points for end customers via chat box.</li>
                      <li>Create chatbot and automated questionnaires to support and take care of customers on the chat
                        box.
                      </li>
                    </ul>
                  </div>
                  <div className='flex justify-center lg:justify-start w-full'>
                    <button
                      className={`${styles.btn} lg:px-[31px] rounded-[7px] lg:py-[10px] px-[27px] py-[8px]
                              font-[DMSansBold] font-bold text-[16px] leading-[21px] lg:text-[25px] lg:leading-[33px]`}>
                      Read More
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