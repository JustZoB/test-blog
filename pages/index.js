import { useSelector } from 'react-redux'
import { Layout } from '../components/Layout'
import { BlogPreview } from '../components/BlogPreview'
import styled from "styled-components";
import { TagsFilter } from "../components/TagsFilter"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setArticles } from "../store/blogSlice"

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setArticles())
  }, [dispatch])

  const articles = useSelector((state) => state.blog.articlesTagsFiltred)

  let arrayForSort = [...articles];
  arrayForSort.sort((a, b) => { return new Date(a.datetime) > new Date(b.datetime) ? -1 : 1 })

  return (
    <Layout title="Home" description="Home">
      <BlogsList>
        {arrayForSort.map(article => (
          <BlogPreview
            id={article.id}
            title={article.title}
            key={article.id}
            description={article.description}
            datetime={article.datetime}
            image={`/${article.image}`}
          />
        ))}
      </BlogsList>
      <TagsFilter />
    </Layout>
  )
}

const BlogsList = styled.article`
  display: flex;
  flex-direction: column;
`
