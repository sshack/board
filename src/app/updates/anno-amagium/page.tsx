'use client';

import { MarkdownRenderer } from '@/components/markdown-renderer';

const markdownText = `# Anno Amagium: The Roleplaying Game

Welcome to the world of **Anno Amagium**, a true next-generation tabletop RPG that combines traditional storytelling with innovative mechanics.

## What is Anno Amagium?

Anno Amagium is a comprehensive tabletop roleplaying game set in a rich, magical universe that has been in development for over five years. Our game offers:

- **Deep Character Customization**: Create unique characters with extensive background options
- **Innovative Magic System**: Experience magic like never before with our proprietary spell-crafting mechanics  
- **Rich Lore**: Explore a world with thousands of years of documented history
- **Flexible Gameplay**: Suitable for both new players and veteran RPG enthusiasts

## Recent Updates

### August 2024 - Official Announcement
We're excited to officially announce Anno Amagium to the gaming community. After years of development, we're ready to share our vision with fellow adventurers.

### Core Features
- **Modular Character System**: Build your character exactly how you envision them
- **Dynamic World Events**: The world changes based on player actions
- **Collaborative Storytelling**: Enhanced tools for both players and game masters

## Getting Started

Anno Amagium will be available through the Echelon platform, offering both digital tools and traditional tabletop gameplay options.

Stay tuned for more updates as we approach our beta release!

---

*Join our community on Discord to be the first to know about playtesting opportunities and release dates.*`;

export default function AnnoAmagiumUpdatesPage() {
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
