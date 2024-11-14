import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface PostData {
    id: string;
    title: string;
    date: string;
    popularity: number;
    content: string;
}

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

export function getSortedPosts(): PostData[] {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData: PostData[] = fileNames.map(fileName => {
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            id: fileName.replace(/\.md$/, ''),
            title: data.title,
            date: data.date,
            popularity: data.popularity,
            content: content,
        } as PostData;
    });

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPopularPosts(): PostData[] {
    const allPostsData = getSortedPosts();
    return allPostsData.sort((a, b) => b.popularity - a.popularity);
}
