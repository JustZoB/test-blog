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
        {arrayForSort.length > 0 ? 
          <>
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
          </> :
          <NoContent>
            <p>Нет статей с такими тэгами</p>
          </NoContent>
        }
        
      </BlogsList>
      <TagsFilter />
    </Layout>
  )
}

const NoContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 780px;
  height: 500px;
  background-color: #FFFFFF;
  padding: 20px;
  margin: 10px 0 0 0;
  border-radius: 3px;

  P {
    font-size: 20px;
    font-weight: bold;
  }
`

const BlogsList = styled.article`
  display: flex;
  flex-direction: column;
`
