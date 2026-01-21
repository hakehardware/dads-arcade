# Dad's Arcade

An ASCII art arcade cabinet web application featuring retro-styled games with a classic green-on-black terminal aesthetic.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org) (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Hosting**: [Vercel](https://vercel.com)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/[username]/dads-arcade.git
   cd dads-arcade
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `npm run dev` | Start development server with hot reload |
| `build` | `npm run build` | Create production build |
| `start` | `npm run start` | Run production server |
| `lint` | `npm run lint` | Run ESLint to check code quality |

## Deployment

This project is configured for automatic deployment on [Vercel](https://vercel.com):

- **Production**: Pushes to `main` branch trigger automatic deployments
- **Preview**: Pull requests generate preview deployments

No additional configuration is required - Vercel automatically detects the Next.js framework.

## Project Structure

```
dads-arcade/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Landing page
│   └── globals.css         # Global styles + Tailwind
├── public/                 # Static assets
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── next.config.ts          # Next.js configuration
```

## License

This project is private.
