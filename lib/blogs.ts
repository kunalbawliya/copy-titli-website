import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeSlug from "rehype-slug";

// The directory where your .md blog files are stored
const postsDirectory = path.join(process.cwd(), "blogs");

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      return {
        slug,
        ...(data as { title: string; date: string; description: string, coverImage: string }),
      };
    });

  return allPostsData.sort((a, b) => (new Date(b.date) > new Date(a.date) ? 1 : -1));
}

export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  // Extract headings (h2) for the Table of Contents
  const headings: { text: string; slug: string }[] = [];
  const tree = unified().use(remarkParse).parse(matterResult.content);

  tree.children.forEach((node: any) => {
    if (node.type === "heading" && node.depth === 2) {
      if (node.children[0] && node.children[0].type === 'text') {
        const text = node.children[0].value;
        const slug = text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
        headings.push({ text, slug });
      }
    }
  });

  // Convert markdown into HTML, adding IDs to headings
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    headings,
    ...(matterResult.data as { title: string; date: string; author: string, coverImage: string }),
  };
}