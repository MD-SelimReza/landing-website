import React, { useEffect, useState } from "react";
import { FaStar, FaWhatsapp } from "react-icons/fa";
import profile from "../../public/profile.jpg";
import { FiMessageCircle } from "react-icons/fi";
import { GrSend } from "react-icons/gr";
import { RiVideoOnLine } from "react-icons/ri";

const ProfileCard = () => {
  const [usaTime, setUsaTime] = useState("");

  useEffect(() => {
    const updateUsaTime = () => {
      const time = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }).format(new Date());
      setUsaTime(time);
    };

    updateUsaTime();
    const interval = setInterval(updateUsaTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto lg:p-6 flex flex-col lg:flex-row xl:gap-20 gap-10">
      {/* Left Section */}
      <div className="lg:w-2/3 w-full">
      <div className="flex justify-between">
        <div className="flex gap-6 items-center text-gray-600">
          <div className="relative">
            <img className="md:w-28 w-24 md:h-28 h-24 rounded-full border-[0.5px] border-red-200" src={profile} alt="Nasu" />
            <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
          </div>
          <div className="md:space-y-1.5 space-y-0.5">
            <h2 className="md:text-2xl text-xl font-bold"><a href="https://cutt.ly/finder3nasu" target="_blank">Nasu <span className="font-normal">@finder3nasu</span></a></h2>
            <div className="flex items-center gap-1 text-gray-600">
              <FaStar className="text-gray-600" />
              <span className="font-bold">4.9</span> <span className="underline">(1.9k)</span>
              <span className="ml-1">|</span>
              <span className="ml-2 text-sm font-bold"><span>Level 2 ✦✦</span><span className="text-gray-400">✦</span></span>
            </div>
            <p className="text-gray-600">Real Estate Branding Lady</p>
            <p className="text-gray-600 text-sm flex items-center">
              <FiMessageCircle className="mr-1" />English, Spanish, German
            </p>
          </div>
        </div>
        <div className="md:flex hidden lg:hidden h-fit">
            <a href="https://wa.me/15055757863" target="_blank" rel="noopener noreferrer" className="border cursor-pointer border-gray-200 hover:bg-gray-100 text-gray-600 py-2 px-4 font-semibold rounded-lg">
                Whatsapp me
            </a>
        </div>
        </div>
        <div className="mt-6">
          <h3 className="md:text-xl text-lg font-semibold text-gray-600">About me</h3>
          <p className="text-gray-600 text-base md:text-[17px] mt-2">
            Hi, I'm NaSu, a creative expert specializing in <strong>branding, marketing, and web solutions for real estate professionals</strong>. With <strong>10 years</strong> of experience in <strong>real estate branding, website design, pitch decks, social media marketing, and marketing collateral</strong>, I help agents, brokers, investors, and real estate businesses build a strong, professional presence.
          </p>
          <p className="text-gray-600 text-base md:text-[17px] mt-2">
            I provide <strong>high-quality, customized designs</strong> that elevate your brand, attract buyers, and generate leads. Whether you need a <strong>stunning real estate website, compelling pitch deck, social media content, or eye-catching marketing materials</strong>, I’ve got you covered.
          </p>
          <p className="text-gray-600 text-base md:text-[17px] mt-2">Let’s work together to take your real estate business to the next level! 🚀</p>
        </div>
        <div className="mt-6">
          <h3 className="md:text-xl text-lg font-semibold text-gray-600">Skills</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {[
              "Custom Logo",
              "Website Development",
              "Pitch Decks",
              "Social media marketings",
              "Flyer",
              "Broucher",
            ].map((skill) => (
              <span key={skill} className="px-3 py-1 border border-gray-200 text-gray-600 text-sm rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Right Section */}
      <div className="lg:w-1/3 w-full">
        <div className="lg:flex justify-end mb-8 hidden">
            {/* Corrected WhatsApp link */}
            <a href="https://wa.me/15055757863" target="_blank" rel="noopener noreferrer" className="border cursor-pointer border-gray-200 hover:bg-gray-100 text-gray-600 py-2 px-4 font-semibold rounded-lg">
            Whatsapp me
            </a>
        </div>
        <div className="bg-white shadow rounded-lg p-8 text-center border border-gray-200">
            <div className="flex items-center gap-6">
            <div className="relative w-14 h-14">
                <img className="w-full h-full rounded-full border-[0.5px] border-red-200" src={profile} alt="Nasu" />
                <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
            </div>
            <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-700">Nasu</h3>
                <p className="text-gray-700 text-sm">Online • {usaTime}</p>
            </div>
            </div>
            
            {/* Corrected Gmail link */}
            <a href="mailto:nasu@fiverrlogogig.com" target="_blank" rel="noopener noreferrer" className="w-full cursor-pointer bg-gray-800 hover:bg-gray-900 text-white py-2.5 rounded-lg mt-6 flex items-center justify-center gap-2 active:scale-105 transition-all duration-150">
            <GrSend /> Contact me
            </a>

            <a href="https://wa.me/15055757863" target="_blank" rel="noopener noreferrer" className="w-full hover:bg-gray-100 sm:hidden border-2 cursor-pointer bg-black text-white py-2.5 rounded-lg mt-6 flex items-center justify-center gap-2 active:scale-105 transition-all duration-150">
            <FaWhatsapp /> Whatsapp me
            </a>
            
            <button className="w-full hover:bg-gray-100 cursor-pointer mt-5 border border-gray-300 py-2.5 rounded-lg flex items-center justify-center gap-2 active:scale-105 transition-all duration-150">
            <RiVideoOnLine /> Book a consultation
            </button>
            
            <p className="text-gray-500 text-sm text-center mt-4">
            Average response time: 1 hour
            </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;