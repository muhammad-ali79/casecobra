import { PrismaClient } from "@prisma/client";

// using the cached prismaClient in development
//  to avoid createing the multiples client on each request
declare global {
  var cachedPrimsa: PrismaClient;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrimsa) {
    global.cachedPrimsa = new PrismaClient();

    prisma = global.cachedPrimsa;
  }
}

export const db = prisma;
