'use client';

import { MarkdownRenderer } from '@/components/markdown-renderer';

const markdownText = `# Join Our Party

Salutations, weary travelers. Whether you hail from the labyrinthine cloisters of Reddit, the well-traveled highways of LinkedIn, or some other far flung digital locale, we cordially welcome you to Echelon. If this is your first time here, [this blog post about ice cream](https://example.com) may prove a useful primer. **In brief, we want to create a platform for adapting and publishing original tabletop games. And we are looking to round out our team of crack adventurers to accomplish that quest.**

---

## Concerning Love and Labors Thereof

We are drawn to games featuring mechanics that are too complex for pencils and paper to conveniently handle on their own. **Complex game systems are often a byproduct of prolonged personal development.** True labors of love. And we believe the more love that goes into a game, the more players want to get out of it. And digital implementation can make that love more easily accessible. So bring on the chunky rulebooks, crunchy mechanics, custom decks of cards, and other accoutrement that give roleplaying games a distinct identity.

It should be noted; we are not looking to "obsolesce" physical gaming. While our games can be played completely digitally to accommodate parties with remote members, we believe it is important to provide players with the option to bring the Holy Trinity of physical TTRPGs components: dice, maps, and minis. Experienced TTRPG gamers often accrue a dragon's hoard of such treasures, and we want to preserve as many opportunities to use them as possible.

Admittedly, our ideal audience is comprised of veterans of many campaigns who are looking for something fresh in the TTRPG space, but not to the exclusion of newcomers or intermediate players. **Whether you are dipping your toes into tabletop gaming for the first time, searching for a new game to play, a place to find players for your campaigns, a platform to sell your TTRPG content, or a way to publish your original game, our VTT endeavors to meet those needs.**

---

## Heroes Wanted

Building a platform that measures up to the promise of that premise will be no mean feat. We need a team fit to fell giants. To that end, we are recruiting for everything from leadership roles and programmers to illustrators, animators and other content creators. **We do not believe in asking people to work for free just because a job is part of a creative industry.** We also believe in fair compensation and equity participation for all our team members.

### Available Positions

We're currently looking for talented individuals to fill the following roles:

- **Lead Developer** - Guide our technical vision and architecture
- **Backend Engineers** - Build robust game systems and APIs
- **Frontend Engineers** - Create immersive user interfaces
- **Game Designers** - Craft engaging mechanics and experiences
- **Artists & Illustrators** - Bring worlds to life visually
- **Animators** - Add movement and magic to our creations
- **Content Writers** - Weave compelling narratives

### What We Offer

- Competitive compensation packages
- Equity participation
- Flexible work arrangements
- Creative freedom and input
- Collaborative environment

---

## Join the Quest

If you're ready to embark on this adventure with us, we'd love to hear from you. Send us your portfolio, resume, or simply a message about why you're excited about this project. Together, we can revolutionize the way people experience tabletop gaming.

Contact us at [careers@echelon.games](mailto:careers@echelon.games) or join our Discord community to learn more.

*May your dice roll high, and your adventures be legendary.*`;

export default function JoinOurPartyPage() {
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
