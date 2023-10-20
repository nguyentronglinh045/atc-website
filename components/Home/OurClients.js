import Image from "next/image";
import styles from './css/OurClients.module.css'

import AirbnbLogo from '../../pages/assets/icons/AirbnbLogo.svg'
import GoogleLogo from '../../pages/assets/icons/GoogleLogo.svg'
import BookMyShowLogo from '../../pages/assets/icons/BookMyShowLogo.svg'
import MicrosoftLogo from '../../pages/assets/icons/MicrosoftLogo.svg'
import FedExLogo from '../../pages/assets/icons/FedExLogo.svg'
import WalmartLogo from '../../pages/assets/icons/WalmartLogo.svg'
import OYOLogo from '../../pages/assets/icons/OYOLogo.svg'
import OLALogo from '../../pages/assets/icons/OLALogo.svg'
import AmazonLogo from '../../pages/assets/icons/AmazonLogo.svg'

const ClientCard = ({logo, className}) => {
  return (
    <div className={className}>
      <div className={`flex justify-center items-center ${styles['client-card']}`}>
        <Image src={logo} width={123} height={37} alt={'logo'}/>
      </div>
    </div>
  )
}

export default function OurClients() {
  return (
    <div className={`max-lg:hidden flex flex-col gap-y-20 items-center ${styles['our-client']}`}>
      <div className="flex flex-col gap-y-2 mt-[64px] text-center">
        <h1 className={`${styles['our-client__heading']} uppercase`}>Our Clients</h1>
        <h3 className={`${styles['our-client__sub-heading']}`}>We have been working with some Fortune 500 clients</h3>
      </div>

      <div className='w-[946px] grid grid-cols-5 mb-20'>
        <div className='grid grid-rows-3 gap-[24px] justify-center'>
          <ClientCard logo={AirbnbLogo} className={'row-start-2 row-end-3'}/>
        </div>
        <div className='grid items-center'>
          <div className='row-start-2 row-end-5 grid gap-6 flex justify-center'>
            <ClientCard logo={GoogleLogo} className={''}/>
            <ClientCard logo={BookMyShowLogo} className={''}/>
          </div>
        </div>
        <div className='grid grid-rows-3 gap-[24px] flex justify-center'>
          <ClientCard logo={MicrosoftLogo} className={''}/>
          <ClientCard logo={FedExLogo} className={''}/>
          <ClientCard logo={WalmartLogo} className={''}/>
        </div>
        <div className='grid items-center'>
          <div className='row-start-2 row-end-5 grid gap-6 flex justify-center'>
            <ClientCard logo={OYOLogo} className={''}/>
            <ClientCard logo={OLALogo} className={''}/>
          </div>
        </div>
        <div className='grid grid-rows-3 gap-[24px] flex justify-center'>
          <ClientCard logo={AmazonLogo} className={'row-start-2 row-end-3'}/>
        </div>
      </div>
    </div>
  )
}