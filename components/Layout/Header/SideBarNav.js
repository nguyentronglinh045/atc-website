import React from "react";

export default function SideBarNav({sideBar, setSideBar, children}) {
  return (
    <div className={`fixed top-0 ${sideBar ? "translate-x-[0%]" : "translate-x-[100%]"} transition -ml-[5%] duration-500 ease-in-out z-50`}>
      <main>{children}</main>
    </div>
  )
}