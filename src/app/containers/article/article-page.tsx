import { BlogItem } from "@/API";
import { DateDisplay } from "@/app/components/DateDisplay";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import Link from "next/link";

export const ArticlePage = ({ post }: { post: BlogItem }) => {
  const { sys, fields } = post;

  return (
    <main className="mt-18 mb-64">
      {/* back button */}
      <Link
        href="/"
        className="flex gap-1 items-center mb-8 absolute left-8 lg:left-20"
      >
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
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>

        <p className="text-xs lg:text-sm font-medium">Back</p>
      </Link>

      <header className="custom-container pt-20">
        <DateDisplay date={sys.createdAt} />

        <h1 className="mt-4 text-3xl lg:text-4xl font-extrabold">
          {fields.title}
        </h1>

        <div className="flex items-center gap-2 mt-4">
          <Image
            src="https://media.licdn.com/dms/image/D4D03AQFstFvlbxyFFA/profile-displayphoto-shrink_100_100/0/1688141510104?e=1703116800&v=beta&t=pR4CrdYs8q4Ngoxw6rw0Jf7MQX1kYU2uCqJFlejgZew"
            alt="Temisan Omatsola Image"
            className="rounded-full bg-red-500"
            width={32}
            height={32}
          />
          <span className="text-sm">Temisan Omatsola</span>
        </div>
      </header>

      <section id="content" className="custom-container mt-12">
        <div className="prose">{documentToReactComponents(fields.body)}</div>
      </section>
    </main>
  );
};
