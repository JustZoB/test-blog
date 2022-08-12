import React from "react";
import styled from "styled-components";
import Image from "next/image";

export const Blog = ({ title, blogContent, tags }) => {
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
          {item.tag === "img" &&
            <ImageContainer>
              <Image src={`/${item.path}`} layout="fill" objectFit="contain" className="image" />
            </ImageContainer>
          }
        </div>
      ))}
      {tags.map(tag => (
        <p key={tag}>#{tag}</p>
      ))}
    </BlogContent>
  )
}

const BlogContent = styled.article`
  display: flex;
  flex-direction: column;
  width: 780px;
  background-color: #FFFFFF;
  padding: 0 20px 20px 20px;
  margin: 10px 0;
`

const ImageContainer = styled.div`
  position: relative;
  height: 450px;

  .image {
    width: 100%;
    height: 100%;
  }
`