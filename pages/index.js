import { useSelector } from 'react-redux'
import { Layout } from '../components/Layout'
import { BlogPreview } from '../components/BlogPreview'
import styled from "styled-components";

export default function Home() {
  const articles = useSelector((state) => state.blog.articles)

  return (
    <Layout title="Home" description="Home">
      <BlogsList>
        {articles.map(article => (
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
    </Layout>
  )
}

const BlogsList = styled.article`
  display: flex;
  flex-direction: column;
`
