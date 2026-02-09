
'use client'
import { useState, useEffect, useCallback, useRef } from 'react';

export default function Carousel({ autoPlayInterval = 5000, showIndicators = true }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slideContainerRef = useRef(null);
  const resizeTimerRef = useRef(null);

  // Review-related items
  const reviewItems = [
    {
      image: "/Jobportal/person1.jpg",
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "Global Media Inc.",
      review: "This platform helped me find the perfect role in just two weeks! The matching algorithm is incredibly accurate.",
      rating: 5
    },
    {
      image: "/Jobportal/person2.jpg",
      name: "Sarela Lorem",
      position: "Software Engineer",
      company: "TechSoft Solutions",
      review: "After struggling with other job sites, I found my dream developer position through this platform. The process was seamless.",
      rating: 5
    },
    {
      image: "/Jobportal/person3.jpg",
      name: "Priya Patel",
      position: "UX Designer",
      company: "Creative Works",
      review: "The quality of job listings is outstanding. I connected with employers who truly valued my skills and experience.",
      rating: 4
    },
    {
      image: "/Jobportal/person4.jpg",
      name: "Emily Clark",
      position: "Finance Analyst",
      company: "Capital Investments",
      review: "The salary insights feature helped me negotiate a better offer. I'm earning 15% more than I expected!",
      rating: 5
    },
    {
      image: "/Jobportal/person5.jpg",
      name: "Shane Watson",
      position: "Project Manager",
      company: "Innovative Systems",
      review: "The resume builder tool transformed my application. I started getting callbacks immediately after using it.",
      rating: 4
    },
    {
      image: "/Jobportal/person6.jpg",
      name: "James Wilson",
      position: "Sales Director",
      company: "Growth Enterprises",
      review: "I've recommended this platform to everyone in my network. It's simply the best job search experience available.",
      rating: 5
    },
    {
      image: "/Jobportal/person7.jpg",
      name: "Alester Martinez",
      position: "HR Manager",
      company: "People First Co.",
      review: "As a recruiter, I've found exceptional talent through this platform. The candidate matching is spot on.",
      rating: 5
    }
  ];

  // For infinite scrolling, we create a carousel with repeated items
  const infiniteReviewItems = [...reviewItems, ...reviewItems, ...reviewItems];
  
  // Responsive calculation of visible cards
  const [visibleCards, setVisibleCards] = useState(3);
  const totalItems = reviewItems.length;
  
  // Update visible cards based on screen width
  const updateVisibleCards = useCallback(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    }
  }, []);
  
  // Handle resize events with debouncing
  useEffect(() => {
    updateVisibleCards();
    
    const handleResize = () => {
      if (resizeTimerRef.current) {
        clearTimeout(resizeTimerRef.current);
      }
      resizeTimerRef.current = setTimeout(() => {
        updateVisibleCards();
      }, 250);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      if (resizeTimerRef.current) {
        clearTimeout(resizeTimerRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [updateVisibleCards]);
  
  // Generate star rating JSX
  const renderStars = useCallback((rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <svg 
        key={i} 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill={i < rating ? "currentColor" : "none"} 
        stroke="currentColor"
        className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={i < rating ? 0 : 1} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ));
  }, []);
  
  // More stable slide navigation with clear transition states
  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveIndex(prevIndex => (prevIndex + 1) % totalItems);
    
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [isTransitioning, totalItems]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveIndex(prevIndex => (prevIndex - 1 + totalItems) % totalItems);
    
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [isTransitioning, totalItems]);

  const goToSlide = useCallback((index) => {
    if (isTransitioning) return;
    setActiveIndex(index);
  }, [isTransitioning]);

  // Improved autoplay with proper cleanup
  useEffect(() => {
    let interval;
    
    if (!isHovering && autoPlayInterval > 0) {
      interval = setInterval(() => {
        nextSlide();
      }, autoPlayInterval);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [nextSlide, isHovering, autoPlayInterval]);

  return (
    <div className="mt-16 mb-20 bg-gray-50 py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-2">What Our Users Say</h2>
      <p className="text-center text-gray-600 mb-10">Thousands of professionals have found their dream jobs using our platform</p>
      
      <div 
        className="relative w-full px-8 py-4 overflow-hidden"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Slides container with smooth 360-degree infinite scrolling */}
        <div 
          ref={slideContainerRef}
          className="flex transition-transform duration-800 ease-out"
          style={{ transform: `translateX(-${(activeIndex + totalItems) * (100 / visibleCards)}%)` }}
        >
          {infiniteReviewItems.map((item, index) => (
            <div 
              key={index} 
              className={`px-2 pt-14 mt-6 ${
                visibleCards === 1 
                  ? 'min-w-full' 
                  : visibleCards === 2 
                    ? 'min-w-[calc(100%/2-1rem)]' 
                    : 'min-w-[calc(100%/3-1rem)]'
              }`}
              style={{ 
                transform: isTransitioning ? 'scale(0.98)' : 'scale(1)',
                transition: 'transform 0.3s ease-out'
              }}
            >
              {/* Reviewer image positioned at the left corner above the card */}
              <div className="flex justify-start ml-5 mb-[-40px] relative z-10">
                <div className="h-24 w-24 overflow-hidden border-4 border-white shadow-lg bg-gray-100 flex items-center justify-center">
                  <img 
                    src={item.image || "/Jobportal/default-avatar.jpg"}
                    alt={item.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/Jobportal/default-avatar.jpg";
                    }}
                  />
                </div>
              </div>
              
              <div className="bg-white rounded-xl border border-gray-200 shadow-md h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] pt-16 px-5 pb-5">
                {/* Name and position - aligned to match the image position */}
                <div className="mb-4 text-left pl-16">
                  <h4 className="font-bold text-lg text-gray-800">{item.name}</h4>
                  <p className="text-xs text-gray-500">{item.position}, {item.company}</p>
                </div>

                {/* Review content */}
                <div className="flex-1 flex flex-col">
                  {/* Quote icon */}
                  <div className="text-red-500 mb-2 text-left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="opacity-40">
                      <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.036-.33.084-.507.145l.138-1.173c.027-.231.05-.463.07-.698.083-.94.148-1.793.196-2.563.048-.77.067-1.608.056-2.512-.01-.573-.093-1.073-.25-1.502-.143-.39-.364-.724-.66-1-.9-.846-2.043-1.262-3.43-1.248-.72.004-1.173.174-1.363.51-.128.23-.18.466-.156.706l.064.67c.037.376.1.743.193 1.1.094.355.23.748.407 1.182.176.433.39.895.64 1.387s.55 1.013.9 1.558c.347.544.648 1.01.9 1.397.26.387.47.726.63 1.02.16.292.31.582.45.868.13.287.23.505.29.658l.13.324-.27.12c-.93.413-1.68.986-2.236 1.72-.557.733-.84 1.558-.848 2.474-.007.87.277 1.605.85 2.202.573.598 1.282.896 2.126.896 1.487 0 2.676-.643 3.567-1.93.89-1.29 1.34-2.95 1.34-4.994zm11.15 0c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.036-.33.084-.507.145l.138-1.173c.027-.231.05-.463.07-.698.083-.94.148-1.793.196-2.563.048-.77.067-1.608.056-2.512-.01-.573-.093-1.073-.25-1.502-.143-.39-.364-.724-.66-1-.9-.846-2.043-1.262-3.43-1.248-.72.004-1.173.174-1.363.51-.128.23-.18.466-.156.706l.064.67c.037.376.1.743.193 1.1.094.355.23.748.407 1.182.176.433.39.895.64 1.387s.55 1.013.9 1.558c.347.544.648 1.01.9 1.397.26.387.47.726.63 1.02.16.292.31.582.45.868.13.287.23.505.29.658l.13.324-.27.12c-.93.413-1.68.986-2.236 1.72-.557.733-.84 1.558-.848 2.474-.007.87.277 1.605.85 2.202.573.598 1.282.896 2.126.896 1.487 0 2.676-.643 3.567-1.93.89-1.29 1.34-2.95 1.34-4.994z" />
                    </svg>
                  </div>
                  
                  {/* Review text */}
                  <p className="text-gray-700 mb-5 italic flex-1">{item.review}</p>
                  
                  {/* Star rating */}
                  <div className="flex justify-start mt-auto">
                    {renderStars(item.rating)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation buttons - improved hit area and visibility */}
        <button 
          className="absolute top-1/2 left-1 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2.5 shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 z-10"
          onClick={prevSlide}
          disabled={isTransitioning}
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button 
          className="absolute top-1/2 right-1 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2.5 shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 z-10"
          onClick={nextSlide}
          disabled={isTransitioning}
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
      
      {/* Indicators - improved accessibility and interaction */}
      {showIndicators && (
        <div className="flex justify-center space-x-3 mt-6">
          {Array.from({ length: totalItems }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 ${
                activeIndex === index 
                  ? 'bg-red-600 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={activeIndex === index ? 'true' : 'false'}
            />
          ))}
        </div>
      )}
    </div>
  );
}