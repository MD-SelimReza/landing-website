import React from "react";
import brand1 from "/brand1.jpg";
import brand2 from "/brand2.jpg";
import brand3 from "/brand3.jpg";
import brand4 from "/brand4.jpg";
import brand5 from "/brand5.jpg";

const services = [
  {
    image: brand5,
    category: "Real Estate",
    title: "Branding Package",
    description: "I will create a branding package for real estate professionals",
    price: "From US$150",
    consultation: true,
    link: "https://cutt.ly/branding-package"
  },
  {
    image: brand3,
    category: "Real Estate",
    title: "Website Design",
    description: "I will develop a custom real estate website with property listings",
    price: "From US$300",
    consultation: true,
    link: "https://cutt.ly/custom-website"
  },
  {
    image: brand1,
    category: "Real Estate",
    title: "Pitch Deck Design",
    description: "I will design a compelling pitch deck for real estate professionals",
    price: "From US$100",
    consultation: true,
    link: "https://cutt.ly/ce4KrT8a"
  },
  {
    image: brand2,
    category: "Real Estate",
    title: "Social Media Marketing",
    description: "I will design social media and ads posts for real estate professionals",
    price: "From US$90",
    consultation: true,
    link: "https://cutt.ly/pe4KsONi"
  },
  {
    image: brand4,
    category: "Real Estate",
    title: "Marketing Collateral",
    description: "I will design flyers and brochures for real estate marketing",
    price: "From US$300",
    consultation: false,
    link: "https://cutt.ly/Ee4KdrA2"
  },
];

const ServiceCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:p-6 py-16">
      {services.map((service, index) => (
        <div key={index} className="">
            <div className="w-full border rounded-md border-gray-200 group overflow-hidden">
                <a href={service.link} target="_blank" rel="noopener noreferrer">
                    <img src={service.image} alt={service.title} className="object-cover rounded-md group-hover:scale-105 transition-all duration-150 overflow-hidden" />
                </a>
            </div>
            <div>
                <p className="text-gray-600 text-base mt-1">{service.description}</p>
                {service.price && <p className="font-semibold mt-2 text-gray-700">{service.price}</p>}
                {/* {service.consultation && (
                    <p className="text-gray-500 text-base mt-1 flex items-center gap-1.5"><RiVideoOnLine /> Offers video consultations</p>
                )} */}
            </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;