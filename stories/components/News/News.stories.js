import BlogSlide from "../../../components/News/BlogSlide";
import RecentPosts from "../../../components/News/RecentPosts";
import Trending from "../../../components/News/Trending";

export default {
  title: "components/News",
}

export function BlogSlideStory() {
  return (
    <BlogSlide/>
  )
}

export function RecentPostsStory() {
  return (
    <div className="flex flex-row gap-x-[45px] w-[1440px] px-[128px]">
      <RecentPosts/>
      <Trending/>
    </div>
  )
}


