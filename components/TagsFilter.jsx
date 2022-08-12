import styled from "styled-components";
import Link from "next/link"

export const TagsFilter = () => {
  return (
    <TagsBlock>
      Tags
    </TagsBlock>
  )
}

export const TagsBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: #FFFFFF;
  padding: 20px;
  margin: 10px;
`
