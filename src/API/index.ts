import { client } from "../app/utils/contentful";

import { Document } from "@contentful/rich-text-types";

export type BlogItem = {
  sys: {
    id: string;
    createdAt: Date;
  };
  fields: {
    title: string;
    description: string;
    body: Document;
  };
};
export type BlogItems = ReadonlyArray<BlogItem>;

export const getBlogEntries = async (): Promise<BlogItems> => {
  const entries = await client.getEntries({ content_type: "blogPage" });

  // @ts-ignore
  return entries.items;
};

export const getBlogPost = async (id: string): Promise<BlogItem> => {
  const queryResult = await client.getEntry(id);

  // @ts-ignore
  return queryResult;
};
