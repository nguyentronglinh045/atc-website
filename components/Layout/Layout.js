import Header from "./Header/Navigation";
import Footer from "./Footer/Footer";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="max-w-[1440px] m-auto flex flex-col h-full min-h-screen">
      <div className="fixed top-0 w-[100%] z-[9999999]">
        <Header/>
      </div>
      <main className="flex-1 mt-[72px]">{children}</main>
      <Footer/>
    </div>
  )
}