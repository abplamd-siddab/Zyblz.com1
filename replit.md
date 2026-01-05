# Zyblz - AI Automation Agency Website

## Overview

Zyblz is a marketing website for an AI automation agency that builds AI-powered software and automation systems for businesses. The site showcases services including AI chatbots, workflow automation, custom software development, and AI tool integrations. It features a contact form that collects leads and stores submissions for follow-up.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS v4 with custom dark theme optimized for "AI feel"
- **UI Components**: shadcn/ui (New York style) with Radix UI primitives
- **Animations**: Framer Motion for hero section animations
- **State Management**: TanStack React Query for server state
- **Form Handling**: React Hook Form with Zod validation
- **Fonts**: Inter (body) and Poppins (headings) from Google Fonts

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **API Design**: RESTful endpoints under `/api` prefix
- **Development**: Vite dev server with HMR, proxied through Express
- **Production**: Static file serving from built assets

### Data Storage
- **Schema Definition**: Drizzle ORM with PostgreSQL dialect
- **Current Storage**: In-memory storage (MemStorage class) for contact submissions
- **Database Ready**: Schema defined for `contact_submissions` table with Drizzle, ready for PostgreSQL connection
- **Validation**: Drizzle-Zod for schema-to-validation integration

### Build System
- **Client Build**: Vite with React plugin
- **Server Build**: esbuild bundling server code with selective dependency bundling
- **Output**: `dist/public` for static assets, `dist/index.cjs` for server

## External Dependencies

### Third-Party Services
- **Database**: PostgreSQL (configured via `DATABASE_URL` environment variable)
- **Fonts**: Google Fonts CDN for Inter and Poppins typefaces

### Key Libraries
- **ORM**: Drizzle ORM for type-safe database operations
- **Validation**: Zod with zod-validation-error for user-friendly error messages
- **HTTP Client**: Fetch API with custom wrapper in queryClient
- **Session Storage**: connect-pg-simple configured for PostgreSQL sessions (available but not currently active)

### Replit-Specific Integrations
- **Error Overlay**: @replit/vite-plugin-runtime-error-modal for development
- **Cartographer**: @replit/vite-plugin-cartographer for development tooling
- **Dev Banner**: @replit/vite-plugin-dev-banner for development mode indicator
- **Meta Images**: Custom Vite plugin for OpenGraph image URL generation with Replit deployment domains