import { projects } from "@/lib/data";  
import Link from "next/link";
import Image from "next/image";

const Project = () => {
  return (
    <div className="container mx-auto px-4 py-10 ">
      <h2 className="p-10 text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground/80 via-foreground to-foreground/80 bg-clip-text text-transparent">
        Project
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   ">
        {projects.map((project) => (
          <Link href={`/project/${project.id}`} key={project.id}>
            <article className="mx-auto my-4 p-4">
              <Image
                src={project.img}
                alt=""
                width={500}
                height={500}
                className="rounded-md object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h2>{project.title}</h2>
                <p>{project.title}</p>
                <p>{project.date}</p>
                <p>{project.excerpt}</p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Project;
