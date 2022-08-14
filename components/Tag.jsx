import styled from "styled-components"
import { useDispatch, useSelector } from 'react-redux'
import { clickTag } from "../store/blogSlice";

export const Tag = ({ tag }) => {
  const dispatch = useDispatch();
  const sortedTagList = useSelector((state) => state.blog.sortedTagList)

  const handleClick = () => {
    dispatch(clickTag({ tag }))
  }

  return (
    <>
      {sortedTagList.indexOf(tag) >= 0
        ?
        <ActiveStyledTag
          onClick={handleClick}
        >
          #{tag}
        </ActiveStyledTag>
        :
        <StyledTag
          onClick={handleClick}
        >
          #{tag}
        </StyledTag>
      }
    </>
  )
}

const StyledTag = styled.p`
  margin: 0;
  padding: 3px 0;
  cursor: pointer;

  &:not(:last-child) {
    margin: 0 0 4px 0;
  }
`

const ActiveStyledTag = styled.p`
  margin: 0;
  padding: 3px 0;
  font-weight: 700;
  color: #82b8c2;
  cursor: pointer;

  &:not(:last-child) {
    margin: 0 0 4px 0;
  }
`
