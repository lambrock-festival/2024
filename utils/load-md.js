import fs from "fs";
import path from "path";
import matter from "gray-matter";

const mdsDirectory = path.join(process.cwd(), "md");
const pagesDirectory = path.join(mdsDirectory, "pages");

export function getPageMD(pageName) {
    const fullPath = path.join(pagesDirectory, `${pageName}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return {
        pageName,
        content: matterResult.content,
    };
}