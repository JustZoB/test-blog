import styled from "styled-components";
import { useSelector } from 'react-redux'
import { Tag } from "./Tag"

export const TagsFilter = () => {
  const list = useSelector((state) => state.blog.tagList)

  return (
    <TagsBlock>
      {list.map(tag => (
        <Tag
          key={tag}
          tag={tag}
        />
      ))}
    </TagsBlock>
  )
}

const TagsBlock = styled.div`
  position: sticky;
  top: 10px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: #FFFFFF;
  padding: 20px;
  margin: 10px;
  border-radius: 3px;
`
