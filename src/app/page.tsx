import { getBlogEntries } from "../API";
import { HomePage } from "./containers/home/home-page";

export default async function Home() {
  const blogEntries = await getBlogEntries();

  return <HomePage posts={blogEntries} />;
}
