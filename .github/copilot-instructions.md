# Balansa Landing Page - Copilot Instructions

## Project Overview
This is the landing page for **Balansa** - an Ambient Financial AI Consultant. The page showcases a multimodal financial intelligence system that acts as a guardian, coach, and advisor for users' financial lives.

## Core Value Proposition (IMPORTANT)
Balansa solves these problems:
1. **Fragmented financial lives** - Users have multiple accounts, cards, subscriptions across platforms with no unified view
2. **Reactive tools** - Existing apps only show what already happened, they don't warn before problems occur
3. **No real-time intelligence** - No alerts for unexpected charges, cashflow risks, subscription renewals, salary delays
4. **AI not integrated** - ChatGPT/Copilot can answer questions but don't monitor finances proactively

## The Four Modes (Focus messaging on these)
1. **Guardian Mode** - Real-time protection: fraud alerts, duplicate charges, overspending warnings, cashflow risk detection
2. **Coach Mode** - Scheduled briefings: daily/weekly summaries, goal progress, upcoming bills, cashflow projections
3. **Advisor Mode** - Conversational AI via ChatGPT & Copilot: "Can I afford this?", "Why did spending spike?"
4. **Builder Mode** - n8n automations for power users: custom triggers and notifications

## Messaging Guidelines
- Focus on BENEFITS and OUTCOMES, not features
- Lead with the problem being solved
- Privacy/security is a trust signal, NOT the main selling point
- Avoid: "self-hosted", "open source", "local AI" - these are implementation details
- Emphasize: "ambient intelligence", "proactive", "always watching out for you"

## Tech Stack
- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion

## Design Principles
- Scroll-triggered animations (Framer Motion useInView)
- Mobile-first responsive design
- Dark mode preferred (slate-950 base)
- GPU-accelerated animations

## Color Scheme
- Primary: Indigo/Purple gradient
- Accent: Emerald green (positive/success)
- Warning: Amber (alerts/attention)
- Danger: Red (fraud/errors)

## Component Patterns
- All components use 'use client' for Framer Motion
- useInView with once: true and margin: '-100px'
- staggerContainer for grouped animations
- fadeInUp for standard entrances

## Code Style
- Use functional components with TypeScript
- Prefer template literals for dynamic classes
- Keep animations subtle and professional
- Use semantic HTML with proper accessibility
