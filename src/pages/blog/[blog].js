import React from 'react'
import path from 'path'
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useRouter } from "next/router";
import { promises as fs } from 'fs';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import rehypeRaw from "rehype-raw";


const Blog = ({blogfiles}) => {
    const router = useRouter();
    const { blog } = router.query;

    const content = blogfiles.find(file => file.filename.replace(/\.md$/, '') === blog)?.content;

    return (
        <div className="container">
            <div class="mt-5">
                <ReactMarkdown
                    children={content}
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]} // Allow raw HTML rendering
                    components={{
                        code({ node, inline, className, children, ...props }) {
                            const match = /language-(\w+)/.exec(className || "");
                            return !inline && match ? (
                                <SyntaxHighlighter language={match[1]} PreTag="div" {...props}>
                                    {String(children).replace(/\n$/, "")}
                                </SyntaxHighlighter>
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            );
                        },
                    }}
                />
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const blog_directory = path.join(process.cwd(), '_data/blog');
    const filenames = await fs.readdir(blog_directory);
    return {
        paths: filenames.map((filename) => ({ params: { blog: filename.replace(/\.md$/, '') } })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const blog_directory = path.join(process.cwd(), '_data/blog');
    const filenames = await fs.readdir(blog_directory);
    const blogfiles = await Promise.all(
        filenames.map(async (filename) => {
            const filePath = path.join(blog_directory, filename);
            const content = await fs.readFile(filePath, 'utf8');
            return { filename, content };
        })
    );
    return {
        props: { blogfiles },
    }
}


export default Blog