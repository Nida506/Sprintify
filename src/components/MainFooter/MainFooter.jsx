import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const MainFooter = () => {
  return (
    <footer className="bg-[#091054] text-white md:py-[50px] md:px-[100px] p-[23px] font-outfit">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        
        {/* Services Section */}
        <div>
          <h3 className="md:text-3xl text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-4 text-[#FFFFFF] opacity-[75%]">
            <li>Dashboard</li>
            <li>Chat</li>
            <li>Meeting</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="md:text-3xl text-xl font-semibold mb-4 ">Social Media</h3>
          <ul className="space-y-4 text-[#FFFFFF] opacity-[75%]">
            <li><a href="#" className="hover:underline">Twitter <span className="text-xl pl-[5px]">↗</span></a></li>
            <li><a href="#" className="hover:underline">LinkedIn <span className="text-xl pl-[5px]">↗</span></a></li>
            <li><a href="#" className="hover:underline">Facebook <span className="text-xl pl-[5px]">↗</span></a></li>
            <li><a href="#" className="hover:underline">Instagram <span className="text-xl pl-[5px]">↗</span></a></li>
          </ul>
        </div>

         {/* Contacts Section */}
         <div>
          <h3 className="md:text-3xl text-xl font-semibold mb-4">Contacts</h3>
          <ul className="space-y-6 text-[#FFFFFF] opacity-[75%]">
            <div className="flex gap-[10px]">
                {/* icon div */}
                 <div className="border-[1px] border-white p-[12px] rounded-md">
                     <FaPhoneAlt className="text-white"/>
                 </div>
                <div className="flex flex-col gap-[1px]">
                   <li className="flex items-center gap-2"> +91-9873766124</li>
                   <li className="flex items-center gap-2"> +91-8650704147</li>
                </div>
              
            </div>

            {/* email */}
            <div className="flex gap-[10px]">
                {/* icon div */}
                 <div className="border-[1px] border-white text-white p-[12px] rounded-md">
                      <FaEnvelope />     
                 </div>
                <div className="flex flex-col gap-[1px]">
                   <li className="flex items-center gap-2"> uvesmursalin3@gmail.com</li>
                   <li className="flex items-center gap-2"> www.sprintify.com</li>
                </div>
              
            </div>
            
            {/* address */}
        
            <div className="flex gap-[10px]">
                {/* icon div */}
                 <div className="border-[1px] border-white text-white p-[12px] rounded-md">
                     <FaMapMarkerAlt className="fill-white"/>  
                 </div>
                <div className="flex flex-col gap-[1px]">
                   <li className="flex items-center gap-2">  257 Fireweed Ln, Ketchikan,</li>
                   <li className="flex items-center gap-2"> Alaska 99901, USA</li>
                </div>
              
            </div>
      
            
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t-[1px] border-[#FFFFFF] border-opacity-[75%] pt-[30px] text-center flex items-center justify-between text-[14px] text-white">
        <p>© 2023 Webtechsolution.in</p>
        <div className="mt-2">
          <a href="#" className="hover:underline mx-2">Privacy Policy</a> |
          <a href="#" className="hover:underline mx-2">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
