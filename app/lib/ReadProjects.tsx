import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export function getProjectMetadata() {
  const folder = "projects/";
  const files = fs.readdirSync(folder);
  const markdownProjects = files.filter((file) => file.endsWith(".md"));
  const slugs = markdownProjects.map((file) => file.replace(".md", ""));
  return slugs;
}

export function getProjectContent(slug: string) {
  const folder = "projects/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf-8");
  const matterResult = matter(content);
  // const processedContent = remark().use(html).process(matterResult.content);
  // const contentHtml = processedContent.toString();
  return {
    title: matterResult.data.title,
    github: matterResult.data.github,
    image: matterResult.data.image_path,
    content: matterResult.content,
  };
}
