'use client';

import { MarkdownRenderer } from '@/components/markdown-renderer';

const markdownText = `# ConQuesting: Here We Go Questin' Again

Friends. Gamers. Fellow adventurers. We bid you fond greetings and a warm welcome to **ConQuesting** - where epic adventures begin and legendary stories unfold.

## Welcome to ConQuesting

ConQuesting represents the spirit of adventure that drives every great tabletop gaming experience. As it stands, this site is merely the avatar of an idea - a promise of things to come.

### Our Vision

We're building something special for the tabletop gaming community:

- **Epic Adventures**: Curated quests and campaigns for unforgettable experiences
- **Community-Driven Content**: Adventures created by players, for players
- **Flexible Systems**: Compatible with multiple RPG systems and playstyles
- **Digital Integration**: Seamlessly blend with Echelon platform features

## What Makes ConQuesting Special?

### Adventure Design Philosophy
- **Player Agency**: Every choice matters and shapes the story
- **Scalable Content**: Adventures that grow with your group
- **Rich Narratives**: Deep storytelling that engages all player types
- **Memorable NPCs**: Characters that feel alive and meaningful

### Community Features
- **Adventure Sharing**: Publish and discover new quests
- **Rating System**: Community-driven quality assurance
- **Collaboration Tools**: Work together to create amazing content
- **Feedback Integration**: Continuous improvement based on player experiences

## Current Status

We're in the early stages of development, working closely with experienced game masters and players to ensure ConQuesting delivers exactly what the community needs.

### Development Roadmap
1. **Core Adventure Framework** - Building the foundation
2. **Community Tools** - Enabling creators and players to connect
3. **Platform Integration** - Seamless Echelon compatibility
4. **Beta Launch** - Testing with select gaming groups

## The Adventure Begins

ConQuesting is more than just a platform - it's a celebration of the shared stories, epic moments, and lasting friendships that make tabletop gaming magical.

Whether you're a seasoned game master looking to share your creations, or a player seeking your next great adventure, ConQuesting will be your gateway to unlimited possibilities.

---

*The adventure is just beginning. Join our Discord community to be part of the journey from the very start.*`;

export default function ConquestingUpdatesPage() {
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
