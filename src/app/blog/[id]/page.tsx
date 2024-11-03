import { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts, getPostById } from '@/services/posts'
import { removePost } from '../actions'

type Props = {
  params: Promise<{
    id: string
  }>
}

export async function generateStaticParams() {
  const posts: any[] = await getAllPosts()

  return posts.map((post) => ({
    slug: post.id.toString()
  }))
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params

  const { id } = params

  const post = await getPostById(id)

  return {
    title: post?.title ?? ''
  }
}

export default async function Post(props: Props) {
  const params = await props.params

  const { id } = params

  const post = await getPostById(id)

  if (!post) {
    return <h1>Post not found</h1>
  }

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>

      <form action={removePost.bind(null, id)}>
        <input type="submit" value="delete post" />
      </form>

      <Link href={`/blog/${id}/edit`}>Edit</Link>
    </>
  )
}
