const BlogHeader = () => {
  return (
    <div className="w-full font-outfit mx-auto md:py-[50px] md:px-[100px] md:pb-0 p-[23px]  bg-[#FAF7F2] rounded-lg flex flex-col lg:flex-row  justify-center items-center gap-6">
      {/* Image Section */}
      <div className="overflow-hidden">
        <img
          src="images/blogheader.png" 
          alt="Irfan Malik"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-[400px] w-full text-center lg:text-left">
      <img
          src="images/blogheadericon.png" 
          alt="icons"
          className="w-[80px] h-[50px] "
        />
        <p className="text-lg text-gray-800 mt-2">
          Sprintify has completely transformed the way I manage projects! Its
          simple, visual interface makes it so easy to stay organized, whether
          I am working solo or collaborating with a team.
        </p>
        <p className="text-sm italic text-gray-500 mt-[20px]">
        &quot;Highest Rated Service Company in World&quot;
        </p>
        <h3 className="text-gray-900 mt-[50px] font-semibold ">
          Irfan Malik, CEO Xeven Solutions
        </h3>
        </div>
    </div>
  );
};

export default BlogHeader;
