import Link from "next/link"
import styled from "styled-components";

export const SearchedItem = ({ id, title }) => {
  return (
    <StyledSearchedItem>
      <Link href={`/blog/${id}`}>
        <a>
          <p>
            {title}
          </p>
        </a>
      </Link>
    </StyledSearchedItem>
  )
}

const StyledSearchedItem = styled.div`
  width: 300px;
  padding: 5px;
  height: 28px;
  background-color: #FFFFFF;
  border-radius: 5px;

  &:hover {
    background-color: #DDDDDD;
  }

  p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0;
  }
`
