import styled from "styled-components";
import Link from "next/link"
import { ButtonMore } from "./ButtonMore";

export const BlogPreview = ({ id, title, description }) => {
  return (
    <BlogContent>
      <Link href={`/blog/${id}`}>
        <a>
          <h2>{title}</h2>
        </a>
      </Link>
      <p>{description}</p>
      <ButtonMore id={id} />
    </BlogContent>
  )
}

export const BlogContent = styled.article`
  display: flex;
  flex-direction: column;
  width: 780px;
  background-color: #FFFFFF;
  padding: 0 20px 20px 20px;
  margin: 10px 0 0 0;
`
