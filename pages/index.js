import Head from 'next/head'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { Layout } from '../components/Layout'
import { Blog } from '../components/Blog'

export default function Home() {
  const articles = useSelector((state) => state.blog.articles)

  return (
    <Layout title="Home" description="Home">
      {articles.map(article => (
        <Blog
          id={article.id}
          title={article.title}
          blogContent={article.blogContent}
          key={article.id}
        />
      ))}
    </Layout>
  )
}
