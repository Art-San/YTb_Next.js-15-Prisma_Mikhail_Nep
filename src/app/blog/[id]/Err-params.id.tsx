// Error: Route "/blog/[id]" used `params.id`. `params` should be awaited before using its properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis
// было так
// import { Metadata } from 'next'
// import Link from 'next/link'
// import { getAllPosts, getPostById } from '@/services/posts'
// import { removePost } from '../actions'

// type Props = {
//   params: {
//     id: string
//   }
// }

// export async function generateStaticParams() {
//   const posts: any[] = await getAllPosts()

//   return posts.map((post) => ({
//     slug: post.id.toString()
//   }))
// }

// export async function generateMetadata({
//   params: { id }
// }: Props): Promise<Metadata> {
//   const post = await getPostById(id)

//   return {
//     title: post?.title ?? ''
//   }
// }

// export default async function Post({ params: { id } }: Props) {
//   console.log(23, id)
//   const post = await getPostById(id)

//   if (!post) {
//     return <h1>Post not found</h1>
//   }

//   return (
//     <>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>

//       <form action={removePost.bind(null, id)}>
//         <input type="submit" value="delete post" />
//       </form>

//       <Link href={`/blog/${id}/edit`}>Edit</Link>
//     </>
//   )
// }
