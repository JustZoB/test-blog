import styled from "styled-components";
import { SearchedItem } from "./SearchedItem"

export const SearchedList = ({ list }) => {
  console.log(list)

  return (
    <StyledSearchedList>
      {list.map(article => (
        <SearchedItem
          id={article.id}
          title={article.title}
          key={article.id}
        />
      ))}
    </StyledSearchedList>
  )
}

const StyledSearchedList = styled.div`
  position: absolute;
  background-color: #FFFFFF;
  top: 32px;
  display: flex;
  flex-direction: column;
  z-index: 100;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgb(32 32 32 / 28%);
`
