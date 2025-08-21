"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Image from "next/image";

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    // ReactMarkdown is a React component that converts markdown text into HTML
    <ReactMarkdown
      remarkPlugins={[remarkGfm]} // enables GitHub Flavored Markdown
      rehypePlugins={[rehypeRaw]} // allows raw HTML in markdown
      // custom components for rendering specific HTML elements
      components={{
        h1: ({ ...props }) => (
          <h1 className="text-3xl font-bold my-4" {...props} />
        ),
        h2: ({ ...props }) => (
          <h2 className="text-2xl font-semibold my-3" {...props} />
        ),
        p: ({ ...props }) => (
          <p
            className="my-2 leading-relaxed text-gray-800 dark:text-gray-200"
            {...props}
          />
        ),
        a: ({ ...props }) => (
          <a className="text-blue-600 hover:underline" {...props} />
        ),
        strong: ({ ...props }) => (
          <strong className="font-semibold" {...props} />
        ),
        ul: ({ ...props }) => (
          <ul className="list-disc list-inside my-2" {...props} />
        ),
        ol: ({ ...props }) => (
          <ol className="list-decimal list-inside my-2" {...props} />
        ),
        li: ({ ...props }) => <li className="my-1" {...props} />,
        blockquote: ({ ...props }) => (
          <blockquote
            className="border-l-4 border-gray-300 pl-4 italic my-4"
            {...props}
          />
        ),
        code: ({
          inline,
          ...props
        }: { inline?: boolean } & React.HTMLAttributes<HTMLElement>) =>
          inline ? (
            <code
              className="bg-gray-100 dark:bg-gray-800 px-1 rounded"
              {...props}
            />
          ) : (
            <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded overflow-x-auto">
              <code {...props} />
            </pre>
          ),

        table: ({ ...props }) => (
          <table
            className="min-w-full border-collapse border border-gray-300 my-4"
            {...props}
          />
        ),
        th: ({ ...props }) => (
          <th
            className="border border-gray-300 px-4 py-2 bg-gray-200 dark:bg-gray-700"
            {...props}
          />
        ),
        td: ({ ...props }) => (
          <td className="border border-gray-300 px-4 py-2" {...props} />
        ),
        hr: () => <hr className="border-t-2 border-gray-300 my-4" />,
        // Add more custom components as needed
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
