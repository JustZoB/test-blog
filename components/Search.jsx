import styled from "styled-components";
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { SearchedList } from './SearchedList'

export const Search = () => {
  const [searchField, setSearchField] = useState("");
  const [searchedList, setSearchedList] = useState([]);
  const articles = useSelector((state) => state.blog.articles)

  const onChangeField = (event) => {
    setSearchField(event.target.value)
    setSearchedList(articles.filter(article =>
      article.title.toLowerCase().indexOf(event.target.value.toLowerCase()) >= 0 &&
      event.target.value !== ""
    ))
  }

  return (
    <SearchContainer>
      <SearchInput
        placeholder="Поиск..."
        value={searchField}
        onChange={onChangeField}
      />
      <SearchedList list={searchedList} />
    </SearchContainer>
  )
}

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 300px;
  height: 32px;
`

const SearchInput = styled.input`
  background-color: white;
  color: black;
  width: 100%;
  height: 30px;
  padding: 5px;
  border-color: #82b8c2;
  border-radius: 5px;
`
