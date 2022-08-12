import Link from "next/link"
import styled from "styled-components";

export const ButtonMore = ({ id }) => {
  return (
    <StyledButton>
      <Link href={`/blog/${id}`}>
        <a>More</a>
      </Link>
    </StyledButton>
  )
}

const StyledButton = styled.button`
  background-color: green;
  width: fit-content;
  padding: 10px;
  cursor: pointer;
`
