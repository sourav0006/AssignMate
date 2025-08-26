## Contributing to AssignMate

Thank you for considering contributing! This guide helps you set up the project and submit changes smoothly.

### Prerequisites
- Node.js 18+
- pnpm, npm, or yarn

### Setup
1. Clone the repo and install dependencies:
   - `npm install`
2. Create a `.env.local` if needed for Firebase config.

### Scripts
- `npm run dev` – Start Next.js dev server
- `npm run build` – Production build
- `npm run start` – Start production server
- `npm run typecheck` – TypeScript check
- `npm run test` – Jest + React Testing Library

### Development
- All UI lives in `src/components`
- Pages are in `src/app`
- Reusable utilities in `src/lib`

### Coding Standards
- Type-safe, descriptive names, minimal comments
- Use Tailwind for styling
- Keep components small and focused

### Submitting PRs
1. Fork and create a feature branch
2. Write tests for your changes
3. Ensure `npm run test` passes
4. Open a PR with a clear description and screenshots if UI changes


