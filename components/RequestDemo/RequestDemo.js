import React, {useState} from "react";
import {useRouter} from "next/router";
import styles from "./requestDemo.module.css";

const InputEffect = ({label, className = "", hasContent, ...props}) => {
  return (
    <>
      <div className={"relative z-[1] " + className}>
        <input type="text" placeholder=""
               className={`${styles['effect']} ${hasContent ? styles["has-content"] : ""} w-full rounded-[4px] bg-transparent outline-none md:pt-[22px] pt-[14px] pb-[2px] pl-[12px] font-[poppinsRegular] font-regular md:text-[16px] text-[11px] md:leading-[24px] leading-[16.5px] text-[#FAFAFA]`}
               {...props}
        />
        <label className="bg-clip-text bg-gradient-to-r from-[#8882E3] via-[#DF8381] to-[#F6C07C]">
          {label}
        </label>
      </div>
    </>
  )
}

const RequestDemo = () => {
  const router = useRouter();
  const formatPhoneNumber  = (value) => {
    if (!value) return "";
    const phoneNumber = value.replace(/[^\d+]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7){
      return `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3)}`;
    }
    return `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3, 6)} ${phoneNumber.slice(6, 9)} ${phoneNumber.slice(9, 12)} ${phoneNumber.slice(12)}`
  }
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [checked, setChecked] = useState(false);

  const validate = () => {
    router.push('/request-demo/success')
  }

  return (
    <>
      <div
        className="flex flex-col pt-[55px] pb-[58px] px-[5%] bg-requestDemo bg-no-repeat">
        <p
          className="[text-shadow:_0px_10px_18px_rgba(9_104_93_/_0.56)] md:[text-shadow:_none] md:font-[VolkhovBold] font-[poppinsSemiBold] md:font-bold font-semibold md:text-[48px] md:leading-[50px] text-[30px] leading-[45px] text-center text-transparent bg-clip-text"
          style={{
            backgroundImage: "linear-gradient(90deg, #8882E3 0%, #DF8381 46.82%, #F6C07C 100%)",
            backgroundSize: "cover"
          }}>
          Request Demo
        </p>
        <p
          className="md:mt-[35px] mt-[10px] font-[poppinsRegular] font-regular xl:text-[18px] md:text-[16px] text-[11px] md:leading-[27px] leading-[16.5px] text-center text-white">
          If you are interested in the field of F&B then the Restaurant Plus Pos app will be an indispensable tool in
          your hand. “Restaurant Plus” offers all-in-one toolkit for boosting restaurants revenue.
        </p>
        <div className="mt-[24px] flex flex-col gap-x-[26px] md:gap-y-[40px] gap-y-[20px]">
          <div className="flex-1 flex md:flex-row flex-col gap-x-7 md:gap-y-[40px] gap-y-[20px]">
            <InputEffect label="What is your name? *" hasContent={name} className="flex-1" value={name} onChange={(e) => setName(e.target.value)}/>
            <InputEffect label="What is your email? *" hasContent={email} className="flex-1" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="flex-1 flex md:flex-row flex-col gap-x-7 md:gap-y-[40px] gap-y-[20px]">
            <InputEffect label="What is your phone number?" hasContent={phone} className="flex-1"
                    onKeyPress={(e) => {
                      const formatted = formatPhoneNumber(e.target.value);
                      e.target.value = formatted
                    }}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
            />
            <InputEffect label="What is your company?" hasContent={company} className="flex-1" value={company} onChange={(e) => setCompany(e.target.value)}/>
          </div>
          <textarea name="message" id="" cols="30" rows="4" placeholder="Write your message here"
                    className="[resize:_none] block max-md:hidden col-span-2 w-full bg-transparent outline-none border-[1px] border-solid border-[#FFFFFF40] pt-[12px] pl-[24px] font-[poppinsRegular] font-regular text-[16px] leading-[24px] text-white"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
          >
          </textarea>
          <InputEffect label="Write your message here" className="md:col-span-1 col-span-2 md:hidden"
                  value={message} hasContent={message}
                  onChange={(e) => setMessage(e.target.value)}/>
        </div>
        <div className="md:mt-[38px] mt-[20px] flex md:flex-row flex-col gap-y-[20px] md:justify-between items-center">
          <div className="flex items-center gap-[16px]">
            <input type="checkbox"
                   className="md:w-[28px] md:h-[28px] w-[24px] h-[24px] bg-cover checked:w-[26px] checked:h-[26px] border-none checked:border-none bg-[url('./../pages/assets/icons/not-checkbox.svg')] checked:bg-[url('./../pages/assets/icons/checkbox.svg')]"
                   style={{"-webkit-appearance": "none"}}
                   value={checked}
                   onChange={() => setChecked(!checked)}
            />
            <p
              className="md:w-7/12 md:flex-none flex-1 md:text-left text-center font-[poppinsRegular] font-regular xl:text-[16px] lg:text-[14px] md:text-[14px] text-[11px] md:leading-[24px] leading-[16.5px] text-white">I
              have read and accept the Terms of
              Service & Privacy Policy *</p>
          </div>
          <button
            className="bg-requestDemoButton uppercase rounded-[4px] xl:py-[12px] lg:py-[12px] py-[8px] xl:px-[43px] md:px-[20px] px-[40px] font-[poppinsSemiBold] font-semibold xl:text-[16px] text-[14px] md:leading-[24px] leading-[21px] text-white"
            onClick={validate}
          >
            send message
          </button>
        </div>
      </div>
    </>
  )
}

export default RequestDemo;
