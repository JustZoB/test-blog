import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Breadcrumbs } from "./Breadcrumbs"

export const Blog = ({ title, blogContent, tags }) => {
  return (
    <BlogContent>
      <Breadcrumbs title={[title]} />

      <h1>{title}</h1>
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
  width: 1000px;
  background-color: #FFFFFF;
  padding: 20px;
  margin: 10px 0;
  border-radius: 3px;
`

const ImageContainer = styled.div`
  position: relative;
  height: 450px;
  margin: 10px 0;

  .image {
    width: 100%;
    height: 100%;
  }
`
