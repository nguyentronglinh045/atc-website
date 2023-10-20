import RecentPosts from "../../components/News/RecentPosts";
import Trending from "../../components/News/Trending";
import BlogSlide from "../../components/News/BlogSlide";
import styles from "../../components/News/RecentPosts.module.css";

export default function NewsPage() {
  return (
    <>
      <BlogSlide/>
      <div className={`flex flex-col-reverse sm:flex-row lg:gap-[45px] sm:gap-[20px] px-[24px] sm:px-[48px] md:px-[64] xl:px-[128px] pb-[55px] ${styles['main-bg']}`}>

        <RecentPosts/>
        <Trending/>
      </div>
    </>
  )
}