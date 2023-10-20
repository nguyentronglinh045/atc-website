import Preface from "../../components/AboutUs/Preface";
import ReputableQualifiedAbundantResources from "../../components/AboutUs/ReputableQualifiedAbundantResources";
import GetInTouch from "../../components/Home/GetInTouch";
import MindsetQuotes from "../../components/AboutUs/MindsetQuotes";
import POSProviderPartners from "../../components/AboutUs/POSProviderPartners";
import LatestBlogs from "../../components/Home/LastestBlogs";

export function AboutUsPage() {
  return (
    <>
      <Preface/>
      <ReputableQualifiedAbundantResources/>
      <GetInTouch/>
      <MindsetQuotes/>
      <POSProviderPartners/>
      <LatestBlogs title={'NEWS'} className={'lg:pt-[200px]'}/>
    </>
  )
}

export default AboutUsPage