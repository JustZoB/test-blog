import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from "next/router";
import { useSelector } from 'react-redux'
import { Layout } from '../../components/Layout'
import { Blog } from '../../components/Blog'

export default function BlogSolo() {
  const articles = useSelector((state) => state.blog.articles)
  const { query } = useRouter();
  console.log(query);

  return (
    <Layout title={articles[query.id].title} description={articles[query.id].title}>
      <Blog
        title={articles[query.id].title}
        blogContent={articles[query.id].blogContent}
        key={articles[query.id].id}
      />
    </Layout>
  )
}
