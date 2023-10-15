import { DateDisplay } from "@/app/components/DateDisplay";
import Link from "next/link";
import React from "react";

type Props = {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
};

export const Post = ({ id, title, description, createdAt }: Props) => {
  return (
    <Link href={`/articles/${id}`} className="group">
      <DateDisplay date={createdAt} />

      <h2 className="font-semibold group-hover:font-bold group-hover:text-blue-800 text-xl mt-4 transition-all">
        {title}
      </h2>
      <p className="text-gray-600 mt-2 group-hover:font-medium transition-all">
        {description}
      </p>

      <div className="flex gap-1 items-center text-blue-800 mt-8">
        <p className=" text-sm font-medium">Read more</p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </Link>
  );
};
