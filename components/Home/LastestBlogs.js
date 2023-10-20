import styles from './css/LastestBlogs.module.css'
import Photo1 from "../../pages/assets/images/Photo-blog1.png"
import Photo2 from "../../pages/assets/images/Photo-blog2.png"
import Photo3 from "../../pages/assets/images/Photo-blog3.png"
import Photo4 from "../../pages/assets/images/Photo-blog4.png"
import Photo5 from "../../pages/assets/images/Photo-blog5.png"
import Photo6 from "../../pages/assets/images/Photo-blog6.png"
import Image from "next/image";

const BlogCard = ({img, title, subTitle}) => {
  return (
    <a href={'#'} className={`flex flex-col items-center min-w-[252px] min-h-[219px] w-[252px] h-[219px] md:w-[370px] md:h-[360px]`}>
      <div className={'w-auto md:w-[370px] md:h-[165px]'}>
        <Image className='rounded-[10px]' src={img} width={370} height={165} alt={'photo'} quality={100}/>
      </div>
      <h3 className={`h-[60px] md:h-[94px] font-[DMSansBold] text-[13px] md:text-[21px] font-bold leading-[17.5px] md:leading-[26px] text-center ${styles['blog-card__title']} w-fit mt-[15px] mb-[8px]`}>{title}</h3>
      <span className={`h-[50%] font-[poppinsRegular] text-[13px] md:text-[21px] font-normal leading-[17.5px] md:leading-[26px] text-center text-white ${styles['blog-card__subtitle']}`}>{subTitle}</span>
    </a>
  )
}

export default function LatestBlogs ({title, className}) {
  return (
    <div className={`flex flex-col items-center ${styles['latest-blog']} ${className}`} >
      <h1 className={`font-[openSansBold] text-[30px] md:text-[50px] font-bold leading-[40px] md:leading-[68px] text-center ${styles['latest-blog__heading']} w-full md:w-fit my-[30px] md:my-[62px]`}>{title}</h1>
      <div className='w-full flex flex-row align-center md:justify-evenly gap-[20px] md:gap-y-[65px] md:flex-wrap overflow-x-auto mb-[25px] md:mb-[70px] px-[20px] md:px-[0px] scrollbar-hide'>
        <BlogCard title={'Conquering customers'}
                  subTitle={'Businesses always chase after sales. And sales come from customers. Without customers, you cannot run a business...'}
                  img={Photo1}
        />
        <BlogCard title={'Customer feedback'}
                  subTitle={'The encroachment of technology has made a big change to personal needs and habits of each consumer...'}
                  img={Photo2}
        />
        <BlogCard title={'Rank up your store'}
                  subTitle={'Have you ever searched for your own store on search engines? What was your rank compared to other competitors?...'}
                  img={Photo3}
        />
        <BlogCard title={'Good service comes from staff'}
                  subTitle={'Risks from personnel that a restaurant must face? Traditional human resource management – old fashioned and high...'}
                  img={Photo4}
        />
        <BlogCard title={'Fact: Did you know?'}
                  subTitle={' How interested are the customers with your restaurant’s responses, here are the actual statistics...'}
                  img={Photo5}
        />
        <BlogCard title={'Online leads'}
                  subTitle={'After customers saw your restaurant on Google, they will often visit the establishment’s website to search...'}
                  img={Photo6}
        />

      </div>
    </div>
  )
}