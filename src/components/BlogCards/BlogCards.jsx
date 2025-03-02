

const BlogCards = () => {
  const blogs = [
    {
      title: "Organize tasks visually with ease.",
      date: "January | 2025",
      readTime: "5 min read",
      imgSrc: "images/blog1.png", 
    },
    {
      title: "Work together, no matter where you are.",
      date: "January | 2025",
      readTime: "8 min read",
      imgSrc: "images/blog2.png", 
    },
    {
      title: "Stay on track and meet deadlines.",
      date: "January | 2025",
      readTime: "6 min read",
      imgSrc: "images/blog3.png", 
    },
  ];

  return (
    <div className="w-full mx-auto md:py-[50px] md:px-[100px] p-[23px] font-outfit">
      <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-6">
        Our Blog
      </h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden" data-aos="zoom-in">
            <img
              src={item.imgSrc}
              alt="Blog"
              className="w-full h-56 rounded-lg object-cover"
            />
            <div className="p-4">
              <div className="text-sm text-gray-500 flex items-center gap-4">
                <span>{item.date}</span>
                <span>{item.readTime}</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mt-2">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
  </div>
    </div>
  );
};

export default BlogCards;