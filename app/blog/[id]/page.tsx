import { posts } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
const PostPage = ({ params }: { params: { id: string } }) => {
  const post = posts.find((post) => post.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{post.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-8">
        <p className="text-sm text-muted-foreground mb-2">
          {new Date(post.date).toLocaleDateString()}
        </p>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      </div>

      <Image
        src={post.img}
        alt={post.title}
        width={800}
        height={450}
        className=" rounded-md mb-8 object-cover "
      />

      <div className="prose max-w-none">
        <p className="text-lg">{post.content}</p>
      </div>
    </div>
  );
};

export default PostPage;
