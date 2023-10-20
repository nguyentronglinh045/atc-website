import styles from '../../pages/assets/css/WebBuildingRule.module.css'
import LaunchBg from '../../pages/assets/images/launch-bg.png'
import Launch from '../../pages/assets/images/launch.png'
import Arrow from '../../pages/assets/icons/arrow-right-rule.svg'
import Image from "next/image";

const list = [
  'Consulting to create or improve online brand awareness.',
  'Buy website hosting and domain name.',
  'Design or edit logo for the business.',
  'Create content on the website, write more articles as required.',
  'Edit product images as required.',
  'Standardize the structure and design of UI/UX for each website.',
  'Build websites with lines of code or 3rd platforms',
  'Put your website on google map.'
]
export default function WebBuildingRule(key) {
  return (
    <div className={`relative pt-[120px] pr-[74px] pl-[68px] pb-[94px] max-w-[1440px] ${styles.rule_wrapper}`} key={key}>
      <p className={`uppercase text-[50px] leading-[68px] max-w-[893px] font-[openSansBold] ${styles.linear__text }`}>
        our basic process of building a standard website:
      </p>
      <Image src={LaunchBg} width={733} height={664} alt='' className='absolute top-[289px] right-[78px]'/>
      <Image src={Launch} width={438} height={1000} alt='' className='absolute top-[312px] right-[170px]'/>
      <div className={styles.__border}>
        {list.map((items, index) => {
          return (
            <div className={`flex flex-col gap-[29px] font-[poppinsBold] text-[30px] leading-[45px] text-white px-[55px] pt-[27px]`}>
              <div className='flex gap-[34px] items-baseline'>
                <Image src={Arrow} width={10} height={18} alt='' className='w-[10px] h-[18px]'/>
                <span key={index}>{items}</span>
              </div>
              {list[index + 1] ? <div className='bg-[#ECECEC] h-[1px]'/> : <div className='pb-[8px]' /> }
            </div>
          )
        })
        }
      </div>
    </div>
  )
}