import React from "react";
import Link from "next/link"
import Head from "next/head"
import styled from "styled-components";


export const Blog = ({ id, title, blogContent }) => {
  return (
    <BlogContent>
      <h2>{title}</h2>
      <Link href={`/blog/${id}`}>more</Link>
      {blogContent.map(item => (
        <div key={item.id}>
          {item.tag === "p" &&
            <p>{item.content}</p>
          }
          {item.tag === "h3" &&
            <h3>{item.content}</h3>
          }
        </div>
      ))}
    </BlogContent>
  )
}

export const BlogContent = styled.article`
  display: flex;
  flex-direction: column;
`
