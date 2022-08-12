import styled from "styled-components";
import { useSelector } from 'react-redux'
import { Tag } from "./Tag"

export const TagsFilter = () => {
  const list = useSelector((state) => state.tags.list)

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
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: #FFFFFF;
  padding: 20px;
  margin: 10px;
`
