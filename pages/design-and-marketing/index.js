import Introduction from "../../components/DesignAndMarketing/Introduction";
import MenuDifferentiation from "../../components/DesignAndMarketing/MenuDifferentiation";
import OtherServices from "../../components/DesignAndMarketing/OtherServices";
import OurPricingPlan from "../../components/DesignAndMarketing/OurPricingPlan";
import ReasonChoose from "../../components/DesignAndMarketing/ReasonChoose";
import WebBuildingRule from "../../components/DesignAndMarketing/WebBuildingRule";
import GetInTouch from "../../components/Home/GetInTouch";
import LatestBlogs from "../../components/Home/LastestBlogs";

export default function DesignAndMarketingPage() {
  return (
    <div className="mt-[72px]">
      <Introduction/>
      <ReasonChoose/>
      <MenuDifferentiation/>
      <div className='flex justify-center'>
        <div
          style={{background: 'linear-gradient(267.37deg, #9130F4 55.42%, #4646F9 96.83%)', height: 1, margin: '0 8%', width: '100%'}}/>
      </div>
      <OtherServices/>
      <div className='flex justify-center'>
        <div
          style={{background: 'linear-gradient(267.37deg, #9130F4 55.42%, #4646F9 96.83%)', height: 1, margin: '0 8%', width: '100%'}}/>
      </div>
      <OurPricingPlan/>
      <GetInTouch/>
      <LatestBlogs title='News'/>
    </div>
  )
}