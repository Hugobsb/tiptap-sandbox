# Tiptap Sandbox 🚀

A playground for experimenting with rich text editing using [Tiptap](https://tiptap.dev/) and [Next.js](https://nextjs.org/).

This project serves as a sandbox for exploring advanced editor capabilities such as:

* Rich text editing
* Custom extensions
* Slash commands
* Realtime collaboration
* Markdown interoperability
* Custom nodes and marks
* Editor UI experimentation

## Tech Stack

* **Next.js**
* **React**
* **TypeScript**
* **Tiptap**
* **CSS Modules**

## Features

### Current

* Dark glassmorphism UI
* Rich text editor powered by Tiptap
* Formatting toolbar
* Headings
* Bullet and ordered lists
* Blockquotes
* Undo / Redo

### Planned

* [ ] Bubble menu
* [ ] Floating menu
* [ ] Slash commands (`/`)
* [ ] Markdown import/export
* [ ] Code syntax highlighting
* [ ] Tables
* [ ] Image uploads
* [ ] Collaborative editing with Y.js
* [ ] Persistence layer
* [ ] Custom Tiptap extensions

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then start the development server:

```bash
npm run dev

# or

yarn dev

# or

pnpm dev

# or

bun dev
```

Open http://localhost:3000 in your browser.

The application automatically reloads as you edit the source code.

## Project Structure

```text
app/
├── page.tsx              # Landing page
├── document/
│   └── page.tsx          # Editor page
└── globals.css

components/
styles/
```

## Tiptap Setup

The editor currently uses:

```typescript
import StarterKit from "@tiptap/starter-kit";
```

Additional extensions can be added incrementally:

```bash
npm install @tiptap/extension-link
npm install @tiptap/extension-image
npm install @tiptap/extension-placeholder
```

## Development Goals

This repository is intentionally experimental.

The goal is to explore how modern editors are built and gain hands-on experience with:

* ProseMirror internals
* Collaborative editing architectures
* Rich text UX patterns
* Editor extension APIs
* State synchronization

## Learn More

* [Next.js Documentation](https://nextjs.org/docs)
* [Tiptap Documentation](https://tiptap.dev/docs)
* [ProseMirror Documentation](https://prosemirror.net/docs/)
* [Learn Next.js](https://nextjs.org/learn)

## Deploy

The easiest way to deploy this project is via Vercel:

https://vercel.com/new

For more details:

https://nextjs.org/docs/app/building-your-application/deploying

---

Built for experimentation, learning, and pushing the boundaries of rich text editing.
