import React from "react";

export default function PhoneMenu({className,children}) {

  return (
    <div className={`h-screen pt-[17px] bg-[rgba(255, 255, 255, 0.07)] backdrop-blur-[40px] ${className}`}>
      <main>{children}</main>
    </div>
  )
}