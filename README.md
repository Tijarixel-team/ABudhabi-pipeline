# Abu Dhabi Pipe Factory Website

Production-oriented Next.js corporate website for Abu Dhabi Pipe Factory, built with App Router, TypeScript, Tailwind CSS, Motion for React, Lucide icons, React Hook Form and Zod.

## Commands

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
```

Local development runs at `http://localhost:3000` unless the port is already in use.

## Architecture

- Company data: `src/config/company.ts`
- Navigation: `src/config/navigation.ts`
- SEO: `src/config/seo.ts`
- Theme presets: `src/config/theme.ts`
- Asset map: `src/config/assets.ts`
- Products, industries, capabilities, projects, downloads: `src/content`
- Reusable UI and layout: `src/components`
- Contact validation schema: `src/lib/contactSchema.ts`

The contact API validates enquiries at `src/app/api/contact/route.ts`. It intentionally does not pretend to send email until a provider is connected.

## Content Sources

The factual copy is based on crawled public ADPF website snippets and reputable third-party listings available during implementation. Items with conflicting or incomplete source data are flagged in `CONTENT_REVIEW.md`.
