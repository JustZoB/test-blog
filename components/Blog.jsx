import React from "react";
import Head from "next/head"
import styled from "styled-components";


export const Blog = ({ title, blogContent }) => {
  return (
    <BlogContent>
      <h2>{title}</h2>
      {blogContent.map(item => (
        <>
          {item.tag === "p" &&
            <p key={item.id}>{item.content}</p>
          }
          {item.tag === "h3" &&
            <h3 key={item.id}>{item.content}</h3>
          }
        </>
      ))}
    </BlogContent>
  )
}

export const BlogContent = styled.article`
  display: flex;
  flex-direction: column;
`
