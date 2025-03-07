import { useState, useEffect } from "react";
import { Button } from "../components/ui/Button";
import type { BlogPosts } from "../types/blogs";

const BlogList = () => {
  const [blogs, setBlogs] = useState<BlogPosts>([]);
  const [search, setSearch] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState<BlogPosts>([]);

  useEffect(() => {
    // Fetch blogs from Dev.to API
    fetch("https://dev.to/api/articles?username=aniruddhagawali")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setFilteredBlogs(data);
      })
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  useEffect(() => {
    // Filter blogs when search changes
    setFilteredBlogs(
      blogs.filter((blog) =>
        blog.title.toLowerCase().includes(search.toLowerCase()),
      ),
    );
  }, [search, blogs]);

  return (
    <div className="w-full max-w-[1280px] p-4">
      <input
        type="text"
        className="w-full rounded-lg border border-p2-foreground bg-black/10 p-4 text-p2-foreground outline-p2-foreground backdrop-blur-sm dark:border-p1-foreground dark:bg-white/25 dark:text-p1-foreground dark:outline-p1-foreground"
        placeholder="Search Blogs"
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredBlogs.length === 0 ? (
        <div className="flex h-[50dvh] w-full items-center justify-center text-center font-boone text-5xl uppercase text-p2-foreground dark:text-p1-foreground">
          No blogs
        </div>
      ) : (
        <section className="container my-8 grid w-full max-w-[1280px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="flex min-h-[55dvh] flex-col items-start justify-start gap-4 rounded-lg border border-p2-foreground bg-black/10 bg-gradient-to-br p-8 backdrop-blur-sm dark:border-p1-foreground dark:bg-white/25"
            >
              {blog.cover_image && (
                <img
                  src={blog.cover_image}
                  alt={blog.title}
                  className="h-[20dvh] w-full rounded-lg object-cover"
                />
              )}
              <h3 className="text-xl font-bold">{blog.title}</h3>
              <p className="text-sm">{blog.description}</p>
              <div className="text-sm text-p2-foreground dark:text-p1-foreground">
                <span>Published on:</span>
                <span>{new Date(blog.published_timestamp).toDateString()}</span>
              </div>
              <a
                href={"/blogs/" + blog.slug + "?id=" + blog.id}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Read More</Button>
              </a>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default BlogList;
