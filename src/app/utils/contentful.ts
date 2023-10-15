import { createClient } from "contentful";

export const client = createClient({
  space: process.env.SPACE_ID as string,
  accessToken: process.env.ACCESS_TOKEN as string,
});
