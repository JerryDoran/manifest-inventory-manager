# Manifest Inventory Management

This is a Next.js application named "Manifest Inventory Management".

## Project Overview

- **Purpose:** Keep track of product inventory
- **Technologies:** Next.js, React, TypeScript, PostgreSQL, Prisma, Tailwind CSS.
- **Package Manager:** pnpm

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Building and Running

### Installation

To install the necessary dependencies, run the following command:

```bash
pnpm install
```

After installation, the `postinstall` script will automatically run `prisma generate` to generate the Prisma client.

### Seeding the Database

To seed the database, run the following command:

```bash
pnpm prisma db seed
```

### Development Server

To run the development server, which will host the application at `http://localhost:3000`, use the following command:

```bash
pnpm run dev
```

### Building for Production

To build the application for a production environment, use the following command:

```bash
pnpm run build
```

### Running in Production

To run the application in production mode, use the following command:

```bash
pnpm run start
```

### Linting



To run the linter, use the following command:



```bash

pnpm run lint

```
