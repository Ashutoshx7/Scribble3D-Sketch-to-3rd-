# Shared Database Package

This is the shared database package used by all apps in the monorepo.

## Usage

```typescript
import { prisma } from "@repo/db";

// Query example
const users = await prisma.user.findMany();
```

## Scripts

- `npm run db:generate` - Generate Prisma Client
- `npm run db:push` - Push schema to database
- `npm run db:migrate` - Run migrations
- `npm run db:studio` - Open Prisma Studio

## Environment Variables

Create a `.env` file with:

```
DATABASE_URL="postgresql://user:password@localhost:5432/scribble3d?schema=public"
```
