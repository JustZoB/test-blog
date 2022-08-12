import React from "react";
import styled from "styled-components";

export const Blog = ({ id, title, blogContent }) => {
  return (
    <BlogContent>
      <h2>{title}</h2>
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
  width: 780px;
  background-color: #FFFFFF;
  padding: 0 20px 20px 20px;
  margin: 10px 0;
`
