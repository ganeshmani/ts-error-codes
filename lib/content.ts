import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

import markdownToHtml from "@lib/markdown";
const codesDirectory = join(process.cwd(), "codes");

export async function getByCode(code: string) {
  const realSlug = code.replace(/\.md$/, "");
  const fullPath = join(codesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const html = await markdownToHtml(content);

  return { slug: realSlug, meta: data, content: html };
}

export async function getAllCodes() {
  const slugs = fs.readdirSync(codesDirectory);
  const docs = await Promise.all(
    slugs.map(async (slug) => await getByCode(slug))
  );
  return docs;
}
