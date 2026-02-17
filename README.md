# Portfolio

A minimal, reductionist portfolio for product designers. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
  app/
    layout.tsx          # Root layout with nav, footer, fonts
    page.tsx            # Home — project grid
    about/page.tsx      # About page
    work/[slug]/page.tsx # Dynamic project detail pages
    not-found.tsx       # 404 page
    sitemap.ts          # Auto-generated sitemap
    robots.ts           # Robots.txt config
    globals.css         # Tailwind imports, CSS variables, prose styles
  components/
    nav.tsx             # Fixed top navigation
    footer.tsx          # Site footer with links
    animated-link.tsx   # Link with slide-in underline on hover
    page-transition.tsx # Framer Motion fade + vertical shift
    project-card.tsx    # Project thumbnail card with hover state
    project-grid.tsx    # Responsive project grid with stagger
    lazy-image.tsx      # Image with blur placeholder + fade-in
    lightbox.tsx        # Full-screen image viewer with keyboard nav
    image-gallery.tsx   # Grid of images with lightbox support
    video-embed.tsx     # YouTube/Vimeo embed with privacy mode
    mdx-components.tsx  # Custom components for MDX rendering
  lib/
    projects.ts         # Read and parse project MDX files
    mdx.ts              # MDX compilation with custom components
  content/
    projects/           # MDX case study files
public/
  images/projects/      # Project thumbnails and assets
```

## Content Management

### Adding a new project

Create a new `.mdx` file in `src/content/projects/`:

```mdx
---
title: "Project Name"
description: "One-line description of the project."
role: "Your Role"
year: "2024"
thumbnail: "/images/projects/your-project.jpg"
tags: ["Tag 1", "Tag 2"]
order: 5
featured: true
---

## Section Heading

Your case study content here. You can use standard Markdown plus
these custom components:

<ImageGallery
  images={[
    { src: "/images/projects/screen-1.jpg", alt: "Description", caption: "Optional caption" },
    { src: "/images/projects/screen-2.jpg", alt: "Description" },
  ]}
  columns={2}
/>

<VideoEmbed url="https://vimeo.com/123456789" title="Prototype walkthrough" />

<Callout type="info">
  Highlighted information or key insight.
</Callout>

<ProjectMeta
  items={[
    { label: "Timeline", value: "8 weeks" },
    { label: "Team", value: "3 designers, 4 engineers" },
  ]}
/>
```

### Frontmatter fields

| Field         | Type       | Description                          |
| ------------- | ---------- | ------------------------------------ |
| `title`       | string     | Project name                         |
| `description` | string     | Brief summary (shown on card)        |
| `role`        | string     | Your role on the project             |
| `year`        | string     | Year completed                       |
| `thumbnail`   | string     | Path to thumbnail image              |
| `tags`        | string[]   | Category tags                        |
| `order`       | number     | Sort order (lower = first)           |
| `featured`    | boolean    | Show on homepage                     |

### Custom MDX components

- **`ImageGallery`** — Grid of clickable images with lightbox. Props: `images` (array), `columns` (1, 2, or 3).
- **`VideoEmbed`** — Responsive YouTube/Vimeo embed. Props: `url`, `title`, `aspectRatio`.
- **`Callout`** — Highlighted aside. Props: `type` ("info" or "warning").
- **`ProjectMeta`** — Key-value metadata grid. Props: `items` (array of `{label, value}`).

## Customization

### Personal info

Update these files with your details:

- `src/app/layout.tsx` — Site title and meta description
- `src/app/page.tsx` — Homepage heading and intro text
- `src/app/about/page.tsx` — Bio, experience, and contact links
- `src/components/footer.tsx` — Footer links (email, LinkedIn, etc.)
- `src/components/nav.tsx` — Site name in the top-left

### Environment variables

Create `.env.local`:

```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### Analytics

Add your analytics script to `src/app/layout.tsx` inside the `<head>` or before the closing `</body>` tag. Works with Plausible, Fathom, Google Analytics, or any script-based provider.

## Design System

### Spacing

4px base unit: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128

### Typography

- **Font**: Inter (sans), Playfair Display (serif accent)
- **Body text**: 15px / 1.7 line-height
- **Max reading width**: 680px

### Colors

Automatic light/dark mode via `prefers-color-scheme`. Tokens defined in `globals.css`:

- `--background`, `--foreground`, `--muted`, `--border`, `--accent`

## Deployment

### Vercel (recommended)

1. Push to GitHub
2. Import in [Vercel](https://vercel.com)
3. Set `NEXT_PUBLIC_SITE_URL` environment variable
4. Deploy

All pages are statically generated at build time for optimal performance.

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router)
- [TypeScript](https://typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://motion.dev)
- [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) for MDX rendering
