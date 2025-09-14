import { posts } from "@/lib/posts";
import { notFound } from "next/navigation";

const PostPage = ({ params }: { params: { id: string } }) => {
  const post = posts.find((post) => post.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-muted-foreground">{post.content}</p>
    </div>
  );
};

export default PostPage;
