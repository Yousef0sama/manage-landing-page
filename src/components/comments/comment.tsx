"use client";

import Image from "next/image";
import type { CommentI } from "@/interfaces/comment";

export default function Comment(props: CommentI) {
  return (
    <div className="py-8 h-full">
      <div className="flex flex-col items-center text-center gap-y-4 p-6 bg-gray-50 rounded relative shadow-sm h-full">
        {/* Avatar */}
        <div className="absolute -top-8">
          <Image
            src={props.avatarUrl}
            alt={props.name}
            width={70}
            height={70}
            className="rounded-full"
          />
        </div>

        {/* Name */}
        <h3 className="mt-8 text-lg font-semibold text-gray-800">
          {props.name}
        </h3>

        {/* Content */}
        <p className="text-sm text-gray-600">{props.content}</p>
      </div>
    </div>
  );
}
