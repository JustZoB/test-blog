import styled from "styled-components";
import Link from "next/link"
import { ButtonMore } from "./ButtonMore";
import Image from "next/image";

export const BlogPreview = ({ id, title, description, datetime, image }) => {
  const date = new Date(datetime)
  const day = date.getUTCDate()
  const month = date.toLocaleString('default', { month: 'long' })
  const hour = date.getHours()
  const minutes = date.getMinutes()

  return (
    <BlogContent>
      <time dateTime={datetime}>{day} {month} в {hour}:{minutes}</time>
      <Link href={`/blog/${id}`}>
        <a>
          <h2>{title}</h2>
        </a>
      </Link>
      <ImageContainer>
        <Image src={image} layout="fill" objectFit="cover" className="image" />
      </ImageContainer>

      <p>{description}</p>
      <ButtonMore id={id} />
    </BlogContent>
  )
}

const BlogContent = styled.article`
  display: flex;
  flex-direction: column;
  width: 780px;
  background-color: #FFFFFF;
  padding: 20px;
  margin: 10px 0 0 0;
`

const ImageContainer = styled.div`
  position: relative;
  height: 463px;

  .image {
    width: 100%;
    height: 100%;
  }
`
