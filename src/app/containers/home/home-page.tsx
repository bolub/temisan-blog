import React from "react";
import { Post } from "./post";
import { BlogItems } from "@/API";

export const HomePage = ({ posts }: { posts: BlogItems }) => {
  return (
    <main className="mt-10 md:mt-24">
      <header className="custom-container">
        <div className="border-b pb-12">
          <h1 className="font-bold text-4xl">Hi I&apos;m Temisan</h1>
          <p className="mt-6 text-lg text-gray-600">
            Here, I like to write about almost anything that catches my fancy.
          </p>
        </div>
      </header>

      <section className="mt-8 mb-32" id="posts">
        <div className="custom-container flex flex-col gap-20">
          {posts.map((data) => {
            const { sys, fields } = data;

            return (
              <Post
                key={sys.id}
                id={sys.id}
                title={fields.title}
                description={fields.description}
                createdAt={sys.createdAt}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};
