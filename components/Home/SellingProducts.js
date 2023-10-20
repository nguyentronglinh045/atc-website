import styles from './css/SellingProducts.module.css'
import SellingProductsImage from '../../pages/assets/images/selling-products.png'
import Image from "next/image";
import Link from "next/link";

const MenuCard = ({title, content, direct = '/'}) => {
  let style
  if (title.length >= 13) {
    style = {
      fontSize: '21px'
    }
  } else {
    style = {
      fontSize: '25px'
    }
  }
  return (
    <div className='gap-[24px] flex flex-col relative min-w-[184px]'>
      <p className={`${styles['text__title']} ${styles['linear__text']} text-[20px] sm:text-[25px] leading-[26px] uppercase max-w-[142px] ${styles['word-break_title']}`}
         style={style}>{title}</p>
      <p className={`${styles['text__content']} ${styles['word-break_content']} leading-[26px] max-w-[258px] min-h-[134px] sm:text-[18px] text-[13px] text-white min-w-[18%]`}>
        {content}
      </p>
      <div className='h-[60px] w-full'>
        <div className={`${styles['background-btn']} absolute bottom-0 w-[145px]`}>
          <Link href={direct}>
            <div className={`box-border ${styles['background-btn']} p-[2px] w-[145px]`}>
              <div className={`bg-[#49316a] box-border py-[9px] px[10px] flex justify-center`}>
              <span
                className="font-[poppinsMedium] text-[14px] sm:text-[16px] font-medium leading-[22px] text-white">Order Products</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function SellingProducts() {
  return (
    <div className={`pb-[36px] md:pb-[80px] sm:pt-[56px] pt-[35px] relative ${styles['selling-products_wrapper']} px-[5%]`}>
        <div className='flex flex-col gap-[30px]'>
          <div className='lg:gap-[45px] gap-[12px] flex md:flex-row flex-col text-center md:text-left'>
            <div className='flex-1 flex flex-col justify-center'>
              <span className={`${styles['text__main']} ${styles['linear__text']} sm:text-[50px] sm:leading-[68px] text-[30px] leading-[41px] uppercase`}>BEST selling products</span>
              <p className='text-white pt-4 font-[poppinsRegular] sm:text-[17px] text-[13px] leading-[26px]'>From more than 6 years of experience, we - with a
                strong and experienced team – have been dedicated to creating an ecosystem with a wide range of best
                services and technologies with 99% user-backs.</p>
              <p className='w-full'>
                <button className={`lg:mt-[39px] mt-[21px] sm:mt-[15px] ${styles['btn-more']} text-[8px] leading-[13px] ${styles['text__about']} sm:text-[16px] sm:leading-[38px] px-[20px] py-[6px] sm:px-[15px] sm:py-[4px] text-white max-w-[190px]`}>
                  About Us
                </button>
              </p>
            </div>
            <div className='flex-1 flex justify-center w-full sm:min-w-[500px]'>
              <Image src={SellingProductsImage} sizes='(min-width: 1200px) 50vw, (min-width: 768px) 60vw,80vw,' width={500} height={548} alt=''
                     className='lg:absolute min-w-[342px] sm:max-h-[445px] sm:max-w-[675px] w-full h-full'/>
            </div>
          </div>
          <div className='flex lg:justify-between lg:mt-[78px] lg:mt-[48px] mt-0 gap-[20px] w-full overflow-hidden overflow-x-auto no-scrollbar'>
            <MenuCard title='DIGITAL MENU'
                      content='Instead of using the same old paper or plastic menu, staff can bring a digital menu to the table for customers to order.'/>
            <MenuCard title='POS system'
                      content='No specific hardware required. Customizable interface on any device from industrial machines to even your mobile phones.'/>
            <MenuCard title='online order'
                      content='Customers order food or buy e-vouchers at your website or your app. Orders will be immediately notified to the system.'/>
            <MenuCard title='	Face Attendance'
                      content='A cloud-based time tracking system that utilize facial recognition to collect timesheet and simplify your payroll process.'/>
          </div>
        </div>

    </div>
  )
}