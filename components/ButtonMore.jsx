import Link from "next/link"
import styled from "styled-components";

export const ButtonMore = ({ id }) => {
  return (
    <StyledButton>
      <Link href={`/blog/${id}`}>
        <a>Читать далее</a>
      </Link>
    </StyledButton>
  )
}

const StyledButton = styled.button`
  background-color: white;
  color: #82b8c2;
  width: fit-content;
  padding: 10px;
  cursor: pointer;
  border-color: #82b8c2;
  border-radius: 5px;
  margin-top: 20px;

  &:hover {
    background-color: #82b8c2;
    color: white;
  }
`
