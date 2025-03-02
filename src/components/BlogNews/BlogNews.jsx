

const BlogNews = () => {
  const news = [
    {
      title: "Introduces Enhanced AI Features",
      date: "Jan 4, 2025",
      category: "Innovation",
      imgSrc: "images/news1.png", 
    },
    {
      title: "New Features for Teachers and Students",
      date: "Jan 4, 2025",
      category: "Innovation",
      imgSrc: "images/news2.png", 
    },
    {
      title: "New Collaboration Features for Remote Teams",
      date: "Jan 4, 2025",
      category: "Innovation",
      imgSrc: "images/news3.png", 
    },
  ];
  return (
    <div className="max-full mx-auto md:py-[50px] md:px-[100px] p-[23px] font-outfit bg-[#FAF7F2]">
      <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
        Latest News From The Industry
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {news.map((item, index) => (
          <div key={index} data-aos="zoom-in" className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={item.imgSrc}
              alt="News"
              className="w-full h-80 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500">
                {item.category} / {item.date}
              </p>
              <h3 className="text-[16px] font-semibold text-gray-900 mt-2">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogNews;
