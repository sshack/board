'use client';

import { MarkdownRenderer } from '@/components/markdown-renderer';

const markdownText = `# Echelon: The Future of Tabletop Gaming

Welcome to **Echelon**, a revolutionary platform for online and hybrid tabletop gaming that bridges the gap between traditional and digital RPG experiences.

## What is Echelon?

Echelon is a comprehensive platform designed for online/hybrid (digitally augmented) tabletop gaming and digitally publishing original RPG systems. We're building the future of how people play and create tabletop games.

### Key Features

- **Hybrid Gaming Experience**: Seamlessly blend physical and digital elements
- **Digital Publishing Tools**: Create and distribute your own RPG systems
- **Community-Driven**: Built by gamers, for gamers
- **Cross-Platform Support**: Play anywhere, anytime, with anyone

## Platform Capabilities

### For Players
- **Virtual Tabletop**: High-quality digital gaming environment
- **Character Management**: Advanced tools for character creation and progression  
- **Social Features**: Connect with players worldwide
- **Campaign Tools**: Organize and track your gaming sessions

### For Creators
- **Publishing Platform**: Share your RPG systems with the community
- **Monetization Options**: Earn from your creative work
- **Analytics Dashboard**: Track engagement with your content
- **Community Feedback**: Get direct input from players

## Current Development

We're currently in beta development, working closely with our community to refine features and ensure the best possible experience.

### What's Coming Next
- Enhanced virtual tabletop features
- Improved creator tools
- Mobile companion app
- Advanced automation features

## Join the Beta

Echelon is currently in closed beta. We're working with select creators and gaming groups to test and improve the platform.

**Interested in joining?** Connect with us on Discord to learn about beta opportunities and stay updated on our progress.

---

*Betas are for figuring things out, and not everything will work perfectly at first - but that's how we build something amazing together.*`;

export default function EchelonUpdatesPage() {
  return (
    <main className="w-full h-full min-h-screen bg-[url('/lp/Update/bgroleplay.png')] bg-cover bg-center">
      <div className="w-full h-full min-h-screen bg-black/70 flex items-center justify-center p-8 pt-24">
        <div className="w-full max-w-[800px]">
          <MarkdownRenderer text={markdownText} />
        </div>
      </div>
    </main>
  );
}
