"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import Comment from "./comment";
import { comments } from "@/constants/comments";

export default function CommentsFetch() {
  return (
    <div className="relative w-full my-24">
      <Swiper
        modules={[Pagination]}
        spaceBetween={24}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        breakpoints={{
          540: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="!flex items-stretch"
      >
        {comments.map((comment) => (
          <SwiperSlide key={comment.id} className="!h-auto flex">
            <Comment
              id={comment.id}
              name={comment.name}
              avatarUrl={comment.avatarUrl}
              content={comment.content}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination container */}
      <div className="custom-pagination flex justify-center mt-4 md:hidden
        [&_.swiper-pagination-bullet]:mx-1
        [&_.swiper-pagination-bullet]:!border-1
        [&_.swiper-pagination-bullet]:border-orange-primary-400
        [&_.swiper-pagination-bullet]:!opacity-100
        [&_.swiper-pagination-bullet]:!bg-transparent
        [&_.swiper-pagination-bullet-active]:!bg-orange-primary-400
      " />
    </div>
  );
}
