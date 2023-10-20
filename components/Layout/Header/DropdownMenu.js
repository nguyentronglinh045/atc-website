import styles from '../../../pages/assets/css/Dropdown.module.css'
import FreeTrial from '../../../pages/assets/images/free-trial.png'
import ArrowRight from '../../../pages/assets/icons/arrow-right.svg'
import Image from "next/image";
import Link from "next/link";

export default function DropdownMenu() {
  return (
    <div className={`h-auto w-full backdrop-blur-2xl ${styles.dropdown_wrapper}`}>
      <div className='pb-12 pt-10'>
        <div className='flex justify-evenly'>
          <div className='flex flex-col gap-7'>
            <span className={`flex ${styles.text__main} cursor-pointer`}>Software Development</span>
            <ul className={`flex flex-col ${styles.text__title} gap-3`}>
              <li className='cursor-pointer'>POS Restaurant</li>
              <li className='cursor-pointer'>POS Retails</li>
              <li className='cursor-pointer'>Online Order</li>
              <li className='cursor-pointer'>E-Menu ; Digital Menu</li>
              <li className='cursor-pointer'>CRM</li>
              <li className='cursor-pointer'>Other Mobile App Development</li>
              <li className={`${styles.text__etc} cursor-pointer`}>(Loyalty; Face Attendance; NFT; etc)</li>
            </ul>
          </div>
          <div className='flex flex-col gap-7'>
            <span className={`flex ${styles.text__main} cursor-pointer`}>
              <Link href="/design-and-marketing">Design & Marketing</Link>
            </span>
            <ul className={`flex flex-col ${styles.text__title} gap-3`}>
              <li className='cursor-pointer'>Build Website / Webstore</li>
              <li className='cursor-pointer'>Social Media Marketing</li>
              <li className='cursor-pointer'>Google Ads/PPC</li>
              <li className='cursor-pointer'>SEO</li>
              <li className='cursor-pointer'>SEM</li>
              <li className='cursor-pointer'>SMO</li>
              <li className='cursor-pointer'>SMM</li>
            </ul>
          </div>
          <div className='flex flex-col gap-7'>
            <span className={`flex ${styles.text__main} cursor-pointer`}>HARDWARE</span>
            <ul className={`flex flex-col ${styles.text__title} gap-3`}>
              <li className='cursor-pointer'>POS</li>
              <li className='cursor-pointer'>Tablet</li>
              <li className='cursor-pointer'>Ipad Checkin</li>
              <li className='cursor-pointer'>Printer</li>
              <li className='cursor-pointer'>Router</li>
              <li className='cursor-pointer'>Cash Drawer</li>
              <li className='cursor-pointer'>Digital Signage</li>
            </ul>
          </div>
          <div className='flex flex-col gap-7'>
            <span className={`flex ${styles.text__main}`}>Point of sale</span>
            <div className={`bg-white rounded-[5px] ${styles.text__advertise} max-w-[269px]`}>
              <Image src={FreeTrial} alt='' width={269} height={161}/>
              <div className='pt-[21px] pb-[17px] px-[14px] text-black'>
                <div className='text-[12px] flex justify-between'>
                  <button className={`${styles.bg__advertise} p-[2px] rounded-[2px]`}>
                    <p className='bg-[#FFE5B6]'>
                      <span className={`${styles.linear__advertise} mx-[9px] my-[1px]`}>Updated</span>
                    </p>
                  </button>
                  <span>October 28, 2022</span>
                </div>
                <p className={`text-[14px] mt-[12px] ${styles['text__advertise-semi']}`} >See the most outstanding features included in the software.</p>
                <div className='flex gap-[3px] content-center mt-[7px]'>
                  <span className={`${styles['text__advertise-semi']} ${styles.linear__advertise} text-[12px]`}>Explore</span>
                  <Image src={ArrowRight} alt='' width={14} height={9}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}