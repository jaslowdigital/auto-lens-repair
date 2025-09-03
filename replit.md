# Overview

This is a professional headlight restoration business website called Auto Lens Repair. The application serves customers in Montgomery County, Bucks County, and Philadelphia PA, offering mobile and drop-off headlight restoration services. The website is built as a full-stack application with a React frontend and Express backend, designed to showcase services, pricing, service areas, and facilitate customer contact for bookings.

The site features comprehensive service information including before/after galleries, corporate fleet services, detailed service area coverage, and multiple contact methods. It's optimized for local SEO with location-specific content and professional service descriptions.

**Status**: Completed professional website with all requested features implemented and fully functional. Recently expanded with comprehensive county and town pages for enhanced local SEO coverage. OpenGraph social sharing images fixed for proper URL encoding on social media platforms.

## Recent Implementation (August 2025)
- Complete professional automotive website with corporate blue/amber branding
- Homepage with hero section, service overview, and dramatic before/after gallery
- Services page detailing mobile, drop-off, and corporate service options
- Before & After gallery showcasing dramatic headlight transformation results
- Service Areas page covering Montgomery County, Bucks County, and Philadelphia
- Pricing page emphasizing custom quotes and transparent pricing approach
- Corporate services page targeting dealerships, fleet managers, and automotive businesses
- Contact page with prominent phone number (445) 200-7542 and service options
- Full mobile responsiveness and SEO optimization with structured data
- All CTAs direct to phone number for quotes as requested
- **NEW**: Comprehensive county pages for Montgomery County, Bucks County, and Philadelphia
- **NEW**: Individual town pages for major municipalities including Norristown, King of Prussia, Doylestown, Center City, Bensalem, Pottstown, New Hope, Quakertown, and Harleysville
- **NEW**: Service areas page updated with direct links to all county and town pages
- **NEW**: All button text colors updated to use proper contrast - white text on amber backgrounds for optimal readability

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing with dedicated pages for home, services, gallery, pricing, service areas, corporate, contact, plus comprehensive county and town pages
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for consistent, accessible design
- **Styling**: Tailwind CSS with custom color scheme (auto-blue, auto-amber, auto-gray) and CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management and API calls
- **Component Structure**: Organized with layout components (header/footer), UI components, pages, SEO components, and location-specific pages
- **Location Pages**: County pages for Montgomery, Bucks, and Philadelphia; Town pages for Norristown, King of Prussia, Doylestown, Center City, Bensalem, Pottstown, New Hope, Quakertown, and Harleysville with authentic demographic data and local landmarks

## Backend Architecture
- **Framework**: Express.js with TypeScript for the REST API server
- **Development Setup**: Uses Vite middleware in development for hot module replacement and seamless full-stack development
- **Storage Layer**: Implements a storage interface pattern with in-memory storage (MemStorage) as the default implementation, easily replaceable with database implementations
- **API Structure**: Centralized route registration through `/server/routes.ts` with `/api` prefix for all endpoints
- **Error Handling**: Global error middleware with proper HTTP status codes and JSON error responses

## Database Schema
- **ORM**: Drizzle ORM configured for PostgreSQL with Neon Database serverless connection
- **Schema**: Located in `/shared/schema.ts` with user table including id (UUID), username, and password fields
- **Migrations**: Drizzle Kit configured for database migrations in `/migrations` directory
- **Validation**: Zod schemas generated from Drizzle tables for type-safe data validation

## Development and Build Process
- **Build Tool**: Vite for frontend bundling with React plugin and development server
- **TypeScript**: Strict TypeScript configuration with path aliases for clean imports (@/, @shared/)
- **Development**: Single command (`npm run dev`) starts both frontend and backend with hot reloading
- **Production Build**: Frontend builds to `/dist/public`, backend bundles with esbuild to `/dist`
- **Asset Management**: Support for attached assets through Vite alias configuration

## SEO and Performance
- **SEO Components**: Custom SEOHead component for dynamic meta tags, descriptions, and canonical URLs
- **Font Loading**: Google Fonts preloading for Inter font family
- **Responsive Design**: Mobile-first responsive design with Tailwind breakpoints
- **Performance**: Optimized images, lazy loading, and efficient component structure

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection for Neon Database
- **drizzle-orm** and **drizzle-kit**: Type-safe ORM and database toolkit
- **express**: Node.js web framework for the backend API
- **react** and **react-dom**: Core React libraries for the frontend
- **vite**: Build tool and development server

## UI and Styling
- **@radix-ui/react-***: Comprehensive set of accessible UI primitives (accordion, dialog, dropdown, etc.)
- **tailwindcss**: Utility-first CSS framework for styling
- **lucide-react**: Icon library for consistent iconography
- **class-variance-authority**: Utility for creating variant-based component APIs
- **clsx** and **tailwind-merge**: Utilities for conditional and merged class names

## Data Management
- **@tanstack/react-query**: Server state management and caching
- **@hookform/resolvers**: Form validation resolvers
- **zod**: Schema validation library
- **date-fns**: Date utility library

## Development Tools
- **typescript**: Type checking and enhanced developer experience
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Replit-specific development tooling (conditional)

## Routing and Navigation
- **wouter**: Lightweight client-side routing library

The application is designed for easy deployment on Replit with development-friendly features and production-ready architecture. The storage layer abstraction allows for easy migration from in-memory storage to PostgreSQL when needed.