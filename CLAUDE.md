# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev      # Start development server at localhost:3000
pnpm build    # Production build
pnpm start    # Run production server
pnpm lint     # Run ESLint
```

## Architecture

Desert Codex is a portfolio/service website for a design engineering studio built with:
- Next.js 16 (App Router, Server Components)
- React 19, TypeScript
- Tailwind CSS v4 with OKLCH color system
- next-themes for dark/light mode

### Project Structure

- `app/page.tsx` - Main page composing section components
- `app/_components/` - Page section components (hero, what-i-do, how-it-works, etc.)
- `app/globals.css` - Tailwind directives and CSS color variables
- `app/styles/typography.css` - Fluid typography system using clamp()
- `components/ds.tsx` - Core design system (Section, Container, Nav, Main, Prose)
- `components/ui/` - Reusable UI components (button using CVA)
- `lib/utils.ts` - `cn()` utility for merging Tailwind classes

### Design System (`components/ds.tsx`)

Layout primitives: `Section`, `Container`, `Nav`, `Main`, `Layout`
Content: `Prose` component for rich text with child element styling via arbitrary selectors

### Styling Patterns

- All components use Tailwind utilities with `cn()` for class merging
- Color variables defined in `globals.css` for light/dark themes
- Button variants handled via Class Variance Authority (CVA)
- Typography uses fluid scaling with `clamp()` functions

### Path Aliases

`@/*` maps to project root (e.g., `@/components`, `@/lib`)
