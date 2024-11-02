import { prisma } from '@/lib/prisma'

// 11:50:00
export function getPostById(id: string) {
  return prisma.post.findUnique({
    where: {
      id
    }
  })
}

export function getAllPosts() {
  return prisma.post.findMany()
}
