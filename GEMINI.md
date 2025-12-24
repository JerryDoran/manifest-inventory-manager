# Manifest Inventory Management
This is a Next.js application named "Manifest Inventory Management".


## Project Overview

- **Purpose:** Keep track of product inventory
- **Technologies:** Next.js, React, TypeScript, PostgreSQL, Prisma, Tailwind CSS.
- **Package Manager:** pnpm

## Development Conventions

Based on the project's configuration, the following conventions can be inferred:

- **Next.js Structure:** The application follows the standard Next.js App Router directory structure. Key directories include:
  - `app/`: Contains the main application logic, including pages, layouts, and components.
  - `public/`: For static assets.
  - `prisma/`: Contains the database schema and seed script.
- **Styling:** The project uses Tailwind CSS for styling. The project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font).
- **Database:** The project uses PostgreSQL with Prisma as the ORM. The database schema is defined in `prisma/schema.prisma`.
- **Linting:** The project uses ESLint for code quality. The configuration is in `eslint.config.mjs`.

## Dependencies

- **`@prisma/adapter-pg`:** Prisma adapter for PostgreSQL.
- **`@prisma/client`:** Prisma client for interacting with the database.
- **`@stackframe/stack`:** Error reporting and debugging tool.
- **`dotenv`:** Loads environment variables from a `.env` file.
- **`lucide-react`:** A library of simply designed icons.
- **`next`:** The React framework for production.
- **`pg`:** PostgreSQL client for Node.js.
- **`react`:** A JavaScript library for building user interfaces.
- **`react-dom`:** Serves as the entry point to the DOM and server renderers for React.
- **`recharts`:** A composable charting library built on React components.

## Dev Dependencies

- **`@tailwindcss/postcss`:** A PostCSS plugin for Tailwind CSS.
- **`@types/node`:** Type definitions for Node.js.
- **`@types/pg`:** Type definitions for pg.
- **`@types/react`:** Type definitions for React.
- **`@types/react-dom`:** Type definitions for react-dom.
- **`eslint`:** A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- **`eslint-config-next`:** ESLint configuration for Next.js.
- **`prisma`:** The Prisma CLI.
- **`tailwindcss`:** A utility-first CSS framework.
- **`tsx`:** A TypeScript executor.
- **`typescript`:** A typed superset of JavaScript that compiles to plain JavaScript.

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
