import MainNavBar from "@/components/MainNavBar/MainNavBar"
import BlogHeader from "@/components/BlogHeader/BlogHeader"
import BlogCards from "@/components/BlogCards/BlogCards"
import BlogNews from "@/components/BlogNews/BlogNews"
import MainFooter from "@/components/MainFooter/MainFooter"

function Blog() {
  return (
    <div>
          <MainNavBar/>
          <BlogHeader/>
          <BlogCards/>
          <BlogNews/>
          <MainFooter/>
    </div>
  )
}

export default Blog
