# Balansa Landing Page

🏦 **Ambient Financial AI** - Your AI Financial Guardian & Coach

## Quick Start

\\\ash
npm install
npm run dev
\\\

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Deployment**: Vercel-ready

## Project Structure

\\\
src/
├── app/
│   ├── page.tsx          # Main landing page
│   ├── layout.tsx        # Root layout with metadata
│   └── api/signup/       # Email signup API endpoint
├── components/
│   ├── Hero.tsx          # Hero section with CTAs
│   ├── GuardianMode.tsx  # Real-time transaction monitoring
│   ├── CoachMode.tsx     # Daily/weekly financial briefings
│   ├── AdvisorMode.tsx   # ChatGPT/Copilot integration demos
│   ├── BuilderMode.tsx   # n8n workflow automation
│   ├── Privacy.tsx       # Privacy & security features
│   ├── Vision.tsx        # Company vision & roadmap
│   ├── SignupForm.tsx    # Email capture form
│   └── Footer.tsx        # Footer with links
└── lib/
    └── animations.ts     # Shared Framer Motion variants
\\\

## Features

### 🛡️ Guardian Mode
Real-time transaction monitoring with AI-powered alerts for:
- Fraud detection
- Duplicate charges
- Subscription renewals
- Salary notifications

### 📊 Coach Mode
Scheduled financial briefings:
- Morning financial snapshots
- Weekly spending summaries
- Goal progress tracking
- Cashflow projections

### 💬 Advisor Mode
Conversational AI integration:
- ChatGPT plugin mockup
- Microsoft Copilot integration
- Natural language financial queries

### 🔧 Builder Mode
Automation capabilities:
- n8n workflow examples
- Custom financial rules
- Integration possibilities

### 🔐 Privacy
- Self-hosted option
- Local LLM support (Ollama)
- No data selling
- Open source core

## Customization

### Colors
The color scheme uses Tailwind's slate/indigo palette:
- Primary: Indigo/Purple gradients
- Success: Emerald
- Warning: Amber
- Danger: Red

### Animations
All animations are defined in \src/lib/animations.ts\:
- \adeInUp\ - Standard entrance animation
- \staggerContainer\ - Sequential children animation
- \slideInLeft/Right\ - Horizontal entrances

## Deployment

### Vercel (Recommended)
\\\ash
npm install -g vercel
vercel
\\\

### Docker
\\\dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
CMD [\"npm\", \"start\"]
\\\

## Email Signups

Currently stores signups in \data/signups.json\ (MVP).

For production, replace with:
- Supabase
- PostgreSQL
- Mailchimp API
- ConvertKit

## License

MIT
