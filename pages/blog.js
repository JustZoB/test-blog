import Head from 'next/head'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { Layout } from '../components/Layout'
import { Blog } from '../components/Blog'

export default function BlogSolo() {
  const articles = useSelector((state) => state.blog.articles)

  return (
    <Layout title={articles[0].title} description={articles[0].title}>
      <Blog
        title={articles[0].title}
        blogContent={articles[0].blogContent}
        key={articles[0].id}
      />
    </Layout>
  )
}
