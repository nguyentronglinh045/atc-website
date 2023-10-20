import styles from '../../pages/assets/css/MenuDifferentiation.module.css'
import EditMenu from '../../pages/assets/icons/edit-menu.png'
import ScanMenu from '../../pages/assets/icons/scan-menu.png'
import MonitorMenu from '../../pages/assets/icons/monitor-menu.png'
import SlideShowMenu from '../../pages/assets/icons/slideshow-menu.png'
import Menu1 from '../../pages/assets/images/menu-1.png'
import Menu2 from '../../pages/assets/images/menu-2.png'
import Menu3 from '../../pages/assets/images/menu-3.png'
import Menu4 from '../../pages/assets/images/menu-4.png'
import Image from "next/image";
import Background from "../../pages/assets/images/menu-differentiation-bg.png";


const Bg = {
  backgroundImage: `url('${Background.src}')`,
  backgroundSize: "cover",
  filter: "blur(128.5px)",
}

const MenuCard = ({icon, content, image}) => {
  return (
    <div
      className={`flex basis-1/2 w-[153px] h-[120px] sm:w-[300px] sm:h-[180px] md:w-[341px] md:h-[255px] lg:w-[441px] lg:h-[290px] xl:w-[541px] xl:h-[359px] rounded-[4px] ${!image ? ` ${styles['bg-card']} ` : ''}`}>
      {image && <Image src={image} className={'w-full'} alt='' loading='eager'/>}
      {!image &&
        <div
          className='w-full flex flex-col flex-col items-center justify-center gap-[13px] sm:gap-[24px] xl:gap-[46px] px-[16px] md:px-[24px] lg:px-[60px] py-[15px] lg:pt-[55px] lg:pb-[45px]'>
          <Image src={icon} className={'w-[30px] h-[30px] md:w-[50px] md:h-[50px] lg:w-[105px] lg:h-[104px]'} alt=''
                 loading='eager'/>
          <span
            className={`font-[poppinsMedium] text-[8.5px] sm:text-[12px] md:text-[16px] lg:text-[20px] xl:text-[30px] font-medium leading-[12.5px] md:leading-[25px] lg:leading-[45px] text-white `}>
        {content}
      </span>
        </div>}
    </div>
  )
}

const GroupCardMenu = ({isReverse = false, img, icon, text}) => {
  return (
    <div
      className={`flex ${isReverse ? 'flex-row-reverse' : 'flex-row'}  justify-center gap-[13px] sm:gap-[20px] lg:gap-[26px] xl:gap-[98px]`}>
      <MenuCard icon={icon} content={text}/>
      {/*<Image src={img} alt=''*/}
      {/*       className=' flex-initial basis-1/2 w-[153px] h-[101px] sm:w-[300px] sm:h-[120px] md:w-[341px] md:h-[159px] lg:w-[441px] lg:h-[259px] xl:w-[541px] xl:h-[359px] rounded-[4px]'*/}
      {/*       loading='eager' sizes='20vw'/>*/}
      <MenuCard image={img}/>
    </div>
  )
}

export default function MenuDifferentiation() {
  return (
    <div
      className={`px-[5%] flex flex-col gap-[20px] sm:gap-[25px] lg:gap-[30px] xl:gap-[47px] pb-[50px] md:pb-[60px] lg:pb-[97px] ${styles['menu-different_wrapper']} text-center pt-[40px] lg:pt-[50px] max-w-[1440px] relative z-[1]`}>
      <div className="absolute top-[126px] left-0 w-[1440px] h-[2082px] z-[-1]" style={Bg}/>
      <div className="flex flex-col items-center gap-[10px] px-[20px]">
        <h3
          className={`font-[openSansBold] text-[30px] md:text-[55px] font-bold leading-[43px] md:leading-[60px] text-center max-w-[320px] sm:max-w-[550px] md:max-w-[900px] ${styles.text__main} uppercase`}>Menu
          Differentiation -
        </h3>
        <p
          className={`lg:px-0 font-[openSansBold] text-[15px] sm:text-[25px] md:text-[32px] font-bold leading-[27px] sm:leading-[35px] lg:leading-[90px] text-center ${styles.text__title} uppercase`}>
          <span className={`${styles.text_underline} lg:${styles['text_no-underline']}`}>from good pictures and convenient technology.</span>
        </p>
      </div>
      <div className={`flex flex-col gap-[13px] sm:gap-[20px] lg:gap-[48px] xl:gap-[66px] justify-center  lg:px-0`}>
        <GroupCardMenu icon={EditMenu} text={'Design professional menu in paper/book format.'} img={Menu1}/>
        <GroupCardMenu icon={SlideShowMenu} text={'Design a menu in the form of a slide show on the screen.'}
                       img={Menu2} isReverse/>
        <GroupCardMenu icon={ScanMenu} text={'Build E-menu (online menu displayed via barcode)'} img={Menu3}/>
        <GroupCardMenu icon={MonitorMenu} text={'Provide Digital Menu that connect to POS system.'} img={Menu4}
                       isReverse/>
      </div>
    </div>
  )
}