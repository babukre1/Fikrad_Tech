"use client";

import { reviews } from "@/constants";
import SectionHeading from "./SectionHeading";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "@/hooks/useWindowSize";
const TestimonialSection = () => {
  const swiperRef = useRef<SwiperType>();
  const [sliderPreview, setSliderPreview] = useState<number>(3);
  const { width } = useWindowSize();
  useEffect(() => {
    if (width < 768) {
      setSliderPreview(1);
    } else if (width < 1268) {
      setSliderPreview(2);
    } else {
      setSliderPreview(3);
    }
  }, [width]);

  return (
    <section className="max-width section-padding">
      <SectionHeading
        title="What My client say about me"
        subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, quit"
      />
      <div>
        <div className="pb-3 border-b border-peach flex justify-between items-center">
          <p>{reviews.length} total reviews</p>
          <div className="flex gap-2">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="bg-peach-200 border border-peach p-1 rounded text-grey-700"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="bg-peach-200 border border-peach p-1 rounded text-grey-700"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
        <div className="pt-8">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={20}
            slidesPerView={sliderPreview}
            loop={true}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <SingleReview review={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

const SingleReview = ({ review }: { review: (typeof reviews)[0] }) => {
  return (
    <div className="box flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div>
          <h6 className="text-grey-700">{review.name}</h6>
          <p className="text-grey-500 text-sm">{review.designation}</p>
        </div>
        <div className="flex gap-3">
          {review.socialLinks.map((link, index) => (
            <a
              href={link.url}
              key={index}
              className="text-primary hover:scale-105 transition-transform duration-300"
            >
              <link.icon strokeWidth={0} fill="currentColor" />
            </a>
          ))}
        </div>
      </div>
      <div>
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              size={20}
              fill="currentColor"
              className={`text-primary ${
                index < review.stars ? "opacity-100" : "opacity-30"
              }`}
            />
          ))}
        </div>
      </div>
      <p className="text-grey-600">{review.review}</p>
    </div>
  );
};
