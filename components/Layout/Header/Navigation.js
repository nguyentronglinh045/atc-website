import { Menu, Transition } from "@headlessui/react";
import React, { useState } from "react";
import Image from "next/image";
import LionLogo from "../../../pages/assets/icons/lion-logo.svg";
import Sidebar from "../../../pages/assets/icons/sidebar.svg";
import ArrowDown from "../../../pages/assets/icons/arrow-down.svg";
import ArrowUp from "../../../pages/assets/icons/arrow-up.svg";
import Home from "../../../pages/assets/icons/home.svg";
import Company from "../../../pages/assets/icons/company.svg";
import Job from "../../../pages/assets/icons/job.svg";
import News from "../../../pages/assets/icons/news.svg";
import Product from "../../../pages/assets/icons/product.svg";
import ATC from "../../../pages/assets/images/atc.png";
import styles from "../../../pages/assets/css/Navigation.module.css";
import DropdownMenu from "./DropdownMenu";
import SideBarNav from "./SideBarNav";
import PhoneMenu from "./PhoneMenu";
import Link from "next/link";

const SideBarMenu = ({ href, icon, content, children }) => (
  <div className={`${styles["side-bar-nav"]}`}>
    <Link href={href}>
      <div className="flex justify-between items-center py-[20px] px-[21px]">
        <div
          className={`flex flex-row items-center gap-[15px] text-[16px] leading-[25px] font-[manropeBold]`}
        >
          <Image
            src={icon}
            alt=""
            width={33}
            height={33}
            className="min-w-[33px] min-h-[33px]"
          />
          <span>{content}</span>
        </div>
        <main>{children}</main>
      </div>
    </Link>
  </div>
);
export default function Navigation() {
  const [openDropDown, setOpenDropDown] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  return (
    <Menu
      as="div"
      className={`${styles["nav"]} text-white z-50 relative max-w-[1440px] px-[5%] py-2`}
    >
      <div className="flex flex-row font-bold justify-between items-center">
        <Link href={"/"}>
          <div className="inline-flex lg:space-x-5 space-x-[14px] items-center">
            <Image
              src={LionLogo}
              alt=""
              width={39}
              height={48}
              className={`${styles["logo"]} min-w-[34px] min-h-[42px] sm:min-w-[37px] sm:min-h-[45px]`}
            />
            {/*<span className={`${styles['text-logo']} lg:text-[45px] text-[32px] leading-[25px]`}>gigaorder</span>*/}
            <Image
              src={ATC}
              height={50}
              alt={""}
              className={"mt-[5px]"}
              priority
            />
          </div>
        </Link>
        <ul
          className={`flex max-lg:hidden items-baseline flex-1 gap-[7%] justify-center`}
        >
          <li className="cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li
            className="flex flex-row items-center"
            onClick={() => setOpenDropDown(!openDropDown)}
          >
            <Menu.Button as="button" className="flex items-center">
              <span>Products</span>
              {!openDropDown ? (
                <Image
                  src={ArrowDown}
                  alt=""
                  width={13}
                  height={7}
                  className="ml-3"
                />
              ) : (
                <Image
                  src={ArrowUp}
                  alt=""
                  width={13}
                  height={7}
                  className="ml-3"
                />
              )}
            </Menu.Button>
            <Transition>
              <Menu.Item className="right-0 top-[72px] absolute origin-top-right w-full">
                <Menu.Item as="div">
                  <DropdownMenu />
                </Menu.Item>
              </Menu.Item>
            </Transition>
          </li>
          <li className="cursor-pointer">
            <Link href="/industries">Industries</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/news">News</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/about-us">About us</Link>
          </li>
        </ul>
        <div className={`flex max-lg:hidden items-center`}>
          <button
            className={`rounded ${styles["text-button"]} px-6 min-w-[171px]`}
          >
            <Link href="/request-demo">Request Demo</Link>
          </button>
        </div>
        <button
          className={`flex lg:hidden relative cursor-pointer`}
          onClick={() => setSideBar(true)}
        >
          <Image
            src={Sidebar}
            width={39}
            height={39}
            className="min-w-[39px] min-h-[39px]"
            alt=""
          />
        </button>
      </div>
      <SideBarNav sideBar={sideBar} setSideBar={setSideBar}>
        <div className="w-screen h-screen flex flex-row">
          <div className="flex-1 visible" onClick={() => setSideBar(false)} />
          <PhoneMenu className={`min-w-[292px] max-w-[360px]`}>
            <ul className="flex flex-col gap-0 z-50">
              <li onClick={() => setSideBar(false)}>
                <SideBarMenu icon={Home} href={"/"} content="Home" />
              </li>
              <li
                onClick={() => setOpenDropDown(!openDropDown)}
                className="relative"
              >
                <SideBarMenu icon={Product} href={""} content="Products">
                  {!openDropDown ? (
                    <Image
                      src={ArrowDown}
                      alt=""
                      width={13}
                      height={7}
                      className="ml-3"
                    />
                  ) : (
                    <Image
                      src={ArrowUp}
                      alt=""
                      width={13}
                      height={7}
                      className="ml-3"
                    />
                  )}
                </SideBarMenu>
                <div
                  className={`${
                    openDropDown
                      ? "translate-y-[0%] mb-[110px]"
                      : "translate-y-[-20%] text-[rgba(0,0,0,0)]"
                  } duration-300 ease-in-out`}
                >
                  <div
                    className={` pt-20px absolute h-[110px] pl-[89px] flex flex-col gap-[15px] text-[15px] leading-[25px] font-[manropeBold] underline z-[-1]`}
                  >
                    <Link href="/coming-soon" onClick={() => setSideBar(false)}>
                      Software Development
                    </Link>
                    <Link
                      href="/design-and-marketing"
                      onClick={() => setSideBar(false)}
                    >
                      Design & Marketing
                    </Link>
                    <Link href="/coming-soon" onClick={() => setSideBar(false)}>
                      Hardware
                    </Link>
                  </div>
                </div>
              </li>
              <li
                onClick={() => setSideBar(false)}
                className="relative absolute"
              >
                <SideBarMenu
                  icon={Job}
                  href={"/industries"}
                  content="Industries"
                  onClick={() => setSideBar(false)}
                />
              </li>
              <li onClick={() => setSideBar(false)}>
                <SideBarMenu
                  icon={News}
                  href={"/news"}
                  content="News"
                  onClick={() => setSideBar(false)}
                />
              </li>
              <li onClick={() => setSideBar(false)}>
                <SideBarMenu
                  icon={Company}
                  href={"/about-us"}
                  content="About Us"
                  onClick={() => setSideBar(false)}
                />
              </li>
            </ul>
            <div className="flex items-center px-[13px] py-[9px]">
              <button
                className={`rounded ${styles["text-button"]} min-w-[171px] text-[15px] leading-[20px] max-w-[136px] sm:max-w-[170px]`}
                onClick={() => setSideBar(false)}
              >
                <Link href="/request-demo">Request Demo</Link>
              </button>
            </div>
          </PhoneMenu>
        </div>
      </SideBarNav>
    </Menu>
  );
}
