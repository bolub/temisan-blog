import { getBlogEntries, getBlogPost } from "@/API";
import { ArticlePage } from "@/app/containers/article/article-page";

type BlogPageProps = {
  params: {
    slug: string;
  };
};

export default async function Article(props: BlogPageProps) {
  const { params } = props;

  const post = await getBlogPost(params.slug);

  return <ArticlePage post={post} />;
}

export async function generateStaticParams() {
  const posts = await getBlogEntries();

  return posts.map((post) => ({
    id: post.sys.id,
  }));
}
