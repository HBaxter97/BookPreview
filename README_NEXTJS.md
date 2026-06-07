# Next.js Book Preview

A modern interactive 3D book showcase built with Next.js, React, and CSS3 transforms.

## Features

- 📚 Interactive book grid with hover effects
- 📖 Expandable book details panel
- 🎨 Responsive design for all screen sizes
- 🚀 Built with Next.js 14 and React 18
- ⚡ TypeScript support
- 🎭 CSS3 animations and transforms

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── page.module.css    # Page styles
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── BookShelf.tsx      # Main bookshelf grid
│   ├── BookShelf.module.css
│   ├── BookItem.tsx       # Individual book card
│   └── BookItem.module.css
├── public/                # Static assets
│   └── images/           # Book cover images
├── package.json
├── tsconfig.json
└── next.config.js
```

## Development

### Adding Books

Edit the `BOOKS` array in `components/BookShelf.tsx` to add new books. Each book object should have:

```typescript
{
  id: string;
  title: string;
  author: string;
  image: string;
  description: string;
  publisher: string;
  publishDate: string;
  pages: number;
}
```

### Styling

- Global styles: `app/globals.css`
- Component styles: `components/*.module.css`
- Page styles: `app/page.module.css`

## Future Features

- [ ] 3D BookBlock viewer for fullscreen reading
- [ ] Search and filter functionality
- [ ] Dynamic book data from API/CMS
- [ ] Book categories and browsing
- [ ] User reviews and ratings
- [ ] Add to cart/wishlist functionality

## Deployment

This project is ready to deploy to:

- [Vercel](https://vercel.com) (recommended for Next.js)
- [Netlify](https://netlify.com)
- Any Node.js hosting

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## License

See LICENSE file for details.

## Credits

Originally inspired by the Codrops BookBlock concept. Modernized with Next.js and React.
