import React, { Fragment, useState } from "react";
import Image from "next/image";
import { Listbox, Transition } from "@headlessui/react";
import Link from "next/link";
import styles from "../../../pages/assets/css/Footer.module.css";
import Logo from "../../../pages/assets/icons/logo-2.svg";
import YouTube from "../../../pages/assets/images/YouTube.png";
import Facebook from "../../../pages/assets/images/Facebook.png";
import Instagram from "../../../pages/assets/images/Instagram.png";
import WhatsApp from "../../../pages/assets/images/WhatsApp.png";
import Email from "../../../pages/assets/images/Email_1.png";
import Phone from "../../../pages/assets/images/Phone.png";
import Pin from "../../../pages/assets/images/Pin.png";
import Globe from "../../../pages/assets/icons/android-globe.svg";
import ChevronDown from "../../../pages/assets/icons/chevron-down.svg";
import ATC from "../../../pages/assets/images/atc-footer.png";

const languages = [{ name: "English - En" }];

const TextIcon = ({ icon, text = "", classNameIcon = "" }) => {
  return (
    <div className="w-full flex lg:gap-[12px] md:gap-[10px] gap-[14px] items-center">
      <div className={"lg:flex relative justify-center" + " " + classNameIcon}>
        <Image src={icon} fill className="object-cover" alt="" />
      </div>
      <p className="flex-1 font-[manropeMedium] xl:text-[16px] lg:text-[14px] md:text-[10px] text-[14px] text-white">
        {text}
      </p>
    </div>
  );
};

function Footer() {
  const [selected, setSelected] = useState(languages[0]);
  return (
    <>
      <div className="bg-footer bg-cover md:py-[65px] pt-[25px] pb-[40px] px-[5%]">
        <div className="flex md:flex-row flex-col md:gap-[2%] gap-8">
          <div className="flex-[2_2_0%] flex md:flex-row flex-col md:items-start items-center md:gap-[20px] gap-[10px]">
            <Link href="/coming-soon">
              <Image
                className="lg:block md:max-lg:hidden"
                src={Logo}
                alt=""
                width={39}
                height={48}
              />
            </Link>
            <div className="flex flex-col xl:gap-[40px] lg:gap-[28px] md:gap-[28px] gap-[10px] md:text-left text-center">
              <Link href="/coming-soon">
                <Image src={ATC} alt={""} height={50} priority />
              </Link>
              <p className="font-[manropeMedium] xl:text-[16px] lg:text-[12px] md:text-[12px] text-[13px] text-white">
                One of The Best Software <br /> Service Provider Out There.
              </p>
              <div className="flex gap-[12px] md:justify-start justify-center">
                <a href="/coming-soon">
                  <Image src={YouTube} alt="" width={25} height={25} />
                </a>
                <a href="/coming-soon">
                  <Image src={Facebook} alt="" width={25} height={25} />
                </a>
                <a href="/coming-soon">
                  <Image src={Instagram} alt="" width={25} height={25} />
                </a>
                <a href="/coming-soon">
                  <Image src={WhatsApp} alt="" width={25} height={25} />
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 block max-md:hidden">
            <p className="font-[manropeExtraBold] font-extrabold xl:text-[18px] lg:text-[16px] md:text-[12px] text-[#FF9C00]">
              QUICK LINKS
            </p>
            <ul className="list-none mt-[18px] flex flex-col xl:gap-[24px] lg:gap-[16px] md:gap-[16px] font-[manropeRegular] font-regular xl:text-[16px] lg:text-[14px] md:text-[12px] text-white">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/coming-soon"}>Products</Link>
              </li>
              <li>
                <Link href={"/coming-soon"}>Services</Link>
              </li>
              <li>
                <Link href={"/industries"}>Industries</Link>
              </li>
              <li>
                <Link href={"/news"}>News</Link>
              </li>
              <li>
                <Link href={"/about-us"}>About us</Link>
              </li>
            </ul>
          </div>
          <div className="flex-1 block max-md:hidden">
            <p className="font-[manropeExtraBold] font-extrabold xl:text-[18px] lg:text-[16px] md:text-[12px] text-[#FF9C00]">
              OUR HARDWARE
            </p>
            <ul className="list-none mt-[18px] flex flex-col xl:gap-[24px] lg:gap-[16px] md:gap-[16px] font-[manropeRegular] font-regular xl:text-[16px] lg:text-[14px] md:text-[12px] text-white">
              <li>
                <a href="/coming-soon">Pos</a>
              </li>
              <li>
                <a href="/coming-soon">Tablet</a>
              </li>
              <li>
                <a href="/coming-soon">Ipad Checkin</a>
              </li>
              <li>
                <a href="/coming-soon">Printer</a>
              </li>
              <li>
                <a href="/coming-soon">Router</a>
              </li>
              <li>
                <a href="/coming-soon">Digital Signage</a>
              </li>
            </ul>
          </div>
          <div className="flex-1 md:block flex flex-col items-center">
            <p className="font-[manropeExtraBold] font-extrabold xl:text-[18px] lg:text-[16px] md:text-[12px] text-[16px] text-[#FF9C00]">
              REACH US
            </p>
            <div className="flex flex-col xl:gap-[24px] lg:gap-[16px] md:gap-[12px] gap-[10px] mt-[14px]">
              <TextIcon
                icon={Email}
                classNameIcon="lg:w-[24px] md:w-[16px] w-[24px] lg:h-[30px] md:h-[22px] h-[30px]"
                text="info@atcgroup.tech"
              />
              <TextIcon
                icon={Phone}
                classNameIcon="lg:w-[24px] md:w-[16px] w-[24px] lg:h-[24px] md:h-[16px] h-[24px]"
                text="+84 899 234 689"
              />
              <TextIcon
                icon={Pin}
                classNameIcon="lg:w-[24px] md:w-[16px] w-[24px] lg:h-[32px] md:h-[20px] h-[32px]"
                text="District 10, Ho Chi Minh City"
              />
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative mt-1">
                <Listbox.Button
                  className={`${styles.footer__button} relative w-full cursor-default rounded-[5px] bg-[#424242] py-2 px-16 lg:py-1 md:py-2 xl:px-10 lg:px-6 md:px-3 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm`}
                >
                  <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-[12px]">
                    <Image
                      src={Globe}
                      alt=""
                      width={20}
                      height={20}
                      className="lg:block md:max-lg:hidden"
                    />
                  </span>
                  <span className="block truncate text-white font-[openSansSemiBold] lg:text-[18px] md:text-[12px] lg:pl-[16px] md:pl-[4px] lg:pr-5 md:pr-5 lg:py-[8px]">
                    {selected.name}
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center lg:pr-[16px] md:pr-[12px] pr-2">
                    <Image src={ChevronDown} alt="" width={15} height={8} />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {languages.map((language, languageIdx) => (
                      <Listbox.Option
                        key={languageIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-3 pr-4 ${
                            active
                              ? "bg-amber-100 text-amber-900"
                              : "text-gray-900"
                          }`
                        }
                        value={language}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {language.name}
                            </span>
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
