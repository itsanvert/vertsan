import { posts } from "@/lib/posts";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-10 ">
      <h2 className="p-10 text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground/80 via-foreground to-foreground/80 bg-clip-text text-transparent">
        My Tech Stack
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   ">
        {posts.map((post) => (
          <article key={post.id} className="mx-auto  bg-white p-4">
            <Image src={post.img} alt="" width={500} height={500} />
            <div className="p-4">
              <h2>{post.title}</h2>
              <p>{post.title}</p>
              <p>{post.date}</p>
              <p>{post.excerpt}</p>
              <div className="flex justify-between hover:underline ">
                <Link href={`/blog/${post.id}`}>Read more</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
