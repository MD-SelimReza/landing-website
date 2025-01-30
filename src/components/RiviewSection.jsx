import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaStar } from "react-icons/fa";
import usa from "/usa.png";
import uk from "/uk.png";

const reviews = [
  {
    name: "josephdambra",
    country: "United Kingdom",
    rating: 5,
    date: "2 months ago",
    daysAgo: 120,
    review:
      "I couldn't be happier with the logo design that Nasu created for my brand! From the very beginning, she went above and beyond to understand my vision and align it perfectly with my brand's identity. Nasu asked insightful questions and clearly researched my industry, which led to a logo that feels fresh, relevant, and uniquely mine. The final design was visually stunning—exactly the blend of modern and professional that I was hoping for. The colors, shapes, and typography all came together beautifully, and it looks fantastic across all mediums (web, print, etc.). I was really impressed with Nasu's proactive communication throughout the process; she consistently checked in to make sure I was happy with each step, offered helpful suggestions, and was open to feedback. In addition, her language fluency made the whole process seamless and enjoyable. She understood every detail and conveyed ideas clearly, which was a huge relief. If you’re looking for a talented, communicative designer who genuinely cares about aligning with your brand and creating something visually impactful, I highly recommend Nasu. She exceeded my expectations in every way. Thank you again, Nasu! See less",
    price: "Up to US$80",
    duration: "3 weeks",
  },
  {
    name: "elliealysia",
    country: "United Kingdom",
    rating: 5,
    date: "1 months ago",
    daysAgo: 60,
    review:
      "She gave me an in depth explanation of what each package included so I could understand and she was very polite and went above and beyond",
    price: "$70-$100",
    duration: "2 days",
  },
  {
    name: "stephaniealleng",
    country: "United States",
    rating: 5,
    date: "2 weeks ago",
    daysAgo: 14,
    review:
      "It took me time to upload some information needed, but she was patient and once it was received she did an excellent job capturing something simple but effective for my business.",
    price: "Up to $70",
    duration: "5 days",
  },
  {
    name: "burgessalex7",
    country: "United Kingdom",
    rating: 5,
    date: "1 month ago",
    daysAgo: 60,
    review:
      "I have worked with Nasu twice now and have been very pleased on both occasions, purchasing her top tier packages. The quality of the work has been exceptional value for money and she has always been accomodating to feedback and change requests",
    price: "$100-$200",
    duration: "2 weeks",
  },
  {
    name: "music365247",
    country: "United States",
    rating: 5,
    date: "3 weeks ago",
    daysAgo: 21,
    review:
      "Fantastic professional and incredible designer. Communicating skills are exceptional and delivered way ahead of schedule. Will definitely be working with them again!!",
    price: "$80-$100",
    duration: "5 days",
  },
  {
    name: "jxcurve",
    country: "United States",
    rating: 5,
    date: "1 month ago",
    daysAgo: 60,
    review:
      "Nasu did a fantastic job making a unique and professional logo for my app. She was very responsive to my particular needs and I highly recommend her for future work.",
    price: "Up to $90",
    duration: "13 days",
  },
  {
    name: "mrgarsow",
    country: "United States",
    rating: 5,
    date: "1 week ago",
    daysAgo: 7,
    review:
      "Excellent to work with again. This is my second time working together and we're about to kick off another project right away.",
    price: "$80-$120",
    duration: "7 days",
  },
  {
    name: "ortizale98",
    country: "United States",
    rating: 5,
    date: "5 days ago",
    daysAgo: 5,
    review:
    "Thanks Nasu for working with me to do my business logo!!",
    price: "$70-$100",
    duration: "2 weeks",
  },
  {
    name: "mrgarsow",
    country: "United States",
    rating: 5,
    date: "5 days ago",
    daysAgo: 5,
    review:
    "Excellent as always. I've worked with her many times and will again in the future",
    price: "$90-$100",
    duration: "8 days",
  },
  {
    name: "itb_incubator",
    country: "United States",
    rating: 5,
    date: "1 week ago",
    daysAgo: 7,
    review:
    "Loved the work she does.",
    price: "Up to $90",
    duration: "10 days",
  },
];

const colorMap = {
    A: "bg-red-500 text-white",
    B: "bg-blue-500 text-white",
    C: "bg-green-500 text-white",
    D: "bg-yellow-500 text-black",
    E: "bg-purple-500 text-white",
    F: "bg-pink-500 text-white",
    G: "bg-indigo-500 text-white",
    H: "bg-gray-500 text-white",
    I: "bg-teal-500 text-white",
    J: "bg-orange-500 text-black",
    K: "bg-cyan-500 text-black",
    L: "bg-lime-500 text-black",
    M: "bg-rose-500 text-white",
    N: "bg-amber-500 text-black",
    O: "bg-violet-500 text-white",
    P: "bg-emerald-500 text-white",
    Q: "bg-sky-500 text-white",
    R: "bg-fuchsia-500 text-white",
    S: "bg-gray-700 text-white",
    T: "bg-gray-900 text-white",
    U: "bg-indigo-700 text-white",
    V: "bg-blue-700 text-white",
    W: "bg-green-700 text-white",
    X: "bg-yellow-700 text-black",
    Y: "bg-purple-700 text-white",
    Z: "bg-red-700 text-white",
  };

const ReviewCard = ({ review }) => {
    const [expanded, setExpanded] = useState(false);
    const previewText = review.review.slice(0, 250);
    const firstLetter = review.name.charAt(0).toUpperCase();
    const profileColor = colorMap[firstLetter] || "bg-gray-500 text-white";
  
    return (
      <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md hover:bg-gray-50 transition-all duration-200 my-4">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 ${profileColor} flex items-center justify-center rounded-full font-bold`}>
            {firstLetter}
          </div>
          <div>
            <p className="font-bold text-gray-700">{review.name}</p>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              {
                review.country === "United Kingdom" ? 
                <img src={usa} alt={review.country} className="w-5 h-3 rounded-[1px]" /> : 
                <img src={uk} alt={review.country} className="w-5 h-3 rounded-[1px]" />
              }            
              <p>{review.country}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2">
          {[...Array(review.rating)].map((_, i) => (
            <FaStar key={i} className="text-gray-700" />
          ))}
          <p className="text-gray-500 text-sm">{review.date}</p>
        </div>
        <p className="text-gray-700 mt-2">
          {expanded ? review.review : `${previewText}`}
          {review.review.length > 250 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-blue-600 ml-2 hover:underline cursor-pointer"
            >
              {expanded ? "See Less" : "See More"}
            </button>
          )}
        </p>
        <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
          <p className="border px-2 py-1 rounded-lg bg-gray-100">
            <span className="font-bold text-gray-600">{review.price}</span> Price
          </p>
          <p className="border px-2 py-1 rounded-lg bg-gray-100">
            <span className="font-bold text-gray-600">{review.duration}</span> Duration
          </p>
        </div>
      </div>
    );
};

const ReviewsSection = () => {
    const [visibleReviews, setVisibleReviews] = useState(5);
    const [sortedReviews, setSortedReviews] = useState(reviews); // Assuming "reviews" is passed as prop or defined elsewhere
    const [showDropdown, setShowDropdown] = useState(false);
  
    const handleSort = (order) => {
      const sorted = [...reviews].sort((a, b) =>
        order === 'oldest' ? b.daysAgo - a.daysAgo : a.daysAgo - b.daysAgo
      );
      setSortedReviews(sorted);
      setVisibleReviews(5);
      setShowDropdown(false);
    };
  
    return (
      <div className="lg:p-6 mx-auto">
        <h2 className="md:text-xl text-lg font-bold text-gray-700">1,873 Reviews</h2>
        <div className="flex flex-col md:flex-row md:items-start mt-4 gap-10">
          {/* Rating Distribution */}
          <div>
            {[{ stars: 5, count: 1758 }, { stars: 4, count: 84 }, { stars: 3, count: 20 }, { stars: 2, count: 5 }, { stars: 1, count: 6 }].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <p>{item.stars} Stars</p>
                <div className="w-48 h-2 bg-gray-200 rounded overflow-hidden">
                  <div className={`h-full bg-gray-800 rounded`} style={{ width: `${(item.count / 1873) * 100}%` }}></div>
                </div>
                <p className="text-gray-500">({item.count})</p>
              </div>
            ))}
          </div>
  
          {/* Rating Breakdown */}
          <div className="max-w-sm w-full">
            <h3 className="font-semibold text-lg text-gray-700">Rating Breakdown</h3>
            {["Seller communication level", "Quality of delivery", "Value of delivery"].map((category, index) => (
              <div key={index} className="flex justify-between mt-1">
                <p className="text-gray-500">{category}</p>
                <p className="font-bold flex items-center gap-1">
                  <FaStar className="text-gray-700" /> 4.9
                </p>
              </div>
            ))}
          </div>
        </div>
  
        <div className="border-b border-gray-300 my-8"></div>
  
        <div className="flex items-center justify-between mb-8">
            <h3 className="md:text-lg text-base font-semibold text-gray-600">
                Showing {Math.min(visibleReviews, reviews.length)} out of 10 Reviews
            </h3>
            <div className="relative">
                <button
                    className="border border-gray-300 px-3 py-1 rounded-md text-sm flex items-center gap-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => setShowDropdown(!showDropdown)}
                    >
                    Sort by  
                    <FaChevronDown className={`transform transition-transform duration-200 ${showDropdown ? "rotate-180" : ""}`} />
                </button>

                {showDropdown && (
                    <div className="absolute right-0 mt-2 py-1.5 bg-white border border-gray-300 rounded-md shadow-lg w-32">
                        <button
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer"
                            onClick={() => handleSort("newest")}
                        >
                            Newest
                        </button>
                        <button
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer"
                            onClick={() => handleSort("oldest")}
                        >
                            Oldest
                        </button>
                    </div>
                )}
            </div>
        </div>
  
        {/* Reviews List */}
        <div className="mt-4">
          {sortedReviews.slice(0, visibleReviews).map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
  
        {/* See More & See Less Buttons */}
        <div className="mt-6 flex md:justify-normal justify-center">
          {visibleReviews < sortedReviews.length ? (
            <button
              onClick={() => setVisibleReviews(visibleReviews + 5)}
              className="border cursor-pointer border-gray-200 hover:bg-gray-100 text-gray-600 py-2 px-4 font-bold rounded-lg active:scale-105 transition-all duration-150"
            >
              See More Reviews
            </button>
          ) : (
            <button
              onClick={() => setVisibleReviews(5)}
              className="border cursor-pointer border-gray-200 hover:bg-gray-100 text-gray-600 py-2 px-4 font-bold rounded-lg active:scale-105 transition-all duration-150"
            >
              See Less Reviews
            </button>
          )}
        </div>
      </div>
    );
};

export default ReviewsSection;