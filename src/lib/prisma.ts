import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => new PrismaClient()

export const prisma = globalThis.prisma || prismaClientSingleton()

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = prisma
}

// ===============================================================================
// C сайта призма на гит, а это уже из примера
// https://github.com/prisma/prisma-examples/blob/latest/orm/rest-nextjs-api-routes/src/lib/prisma.ts
// ts-ignore 7017 используется для игнорирования ошибки, что глобальный объект не является
// определено в глобальной области видимости. Это связано с тем, что глобальный объект
// определено в глобальной области Node.js, а не в браузере.

// import { PrismaClient } from '@prisma/client'

// PrismaClient прикрепляется к `глобальному` объекту, находящемуся в разработке, чтобы предотвратить
// исчерпаем лимит подключений к базе данных.
//
// Learn more:
// https://pris.ly/d/help/next-js-best-practices

// const globalForPrisma = global as unknown as { prisma: PrismaClient }

// export const prisma = globalForPrisma.prisma || new PrismaClient()

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// export default prisma
