'use client';

import { MarkdownRenderer } from '@/components/markdown-renderer';

const markdownText = `# Announcing Anno Amagium

Technically, we announced **Anno Amagium: The RPG** last year at DragonCon—a bold claim based on some abrupt decisions and silly assumptions:

1. I am going to found a start-up.
2. We are going to make awesome digital TTRPGs.
3. We already have a unique TTRPG.
   - All the rules are already figured out!
   - We have hundreds of hours of playtesting!
   - The web-serial fully developed the lore!
4. We just need to get the rules on paper and digitize the (relatively) simple math.

**How hard could it be?**

Oh, my sweet summer child. Humbling lessons have been learned since then. Many long nights have passed in Excel, Word, Figma, Photoshop, InDesign, and other pieces of "professional software" where fun goes to die. And I know that many more hard lessons and sleepless nights await. But I am not alone anymore. So now that we properly know what we are in for, let's do this once more, with renewed resolve:

**We are To Whit Ventures. And next year, we will be launching the beta of our first digital table-top roleplaying game, Anno Amagium, on our VTT Platform: Echelon.**

---

## A New Kind of Fantasy

The core of Anno Amagium is familiar. It is a platform for telling stories of good versus evil in the fine tradition of urban fantasy like *The Dresden Files* and *Buffy the Vampire Slayer*: supernatural adventures set in a recognizable world. Except, in our universe, magic is out in the open, as per Faerûn and Fillory. It is a known-but-unknowable quantity, another foundational pillar of everyday life that intersects with government, religion, technology, professions, and passions. 

Earth's history is the same—except for how it's different. Smartphones exist. They just happen to run on networks based on principles of sympathetic magic. People cast spells that range from sunburn prevention to annihilating entire cities. Magic is a human right. But left unchecked, or fanned by the flames of war, it is also an existential threat. And it is up to you and your ragtag entourage to keep those scales balanced.

---

## A New Kind of TTRPG

In the coming weeks, we will be posting detailed dev blog entries about our game's specific mechanics, but here is a quick cheat sheet of features:

### 1) Smart Character Sheets & Dynamic Stats

We use the term "**Grimoire**" to refer to our character sheets, because they really are like books unto themselves, but the magic of digital automation makes piloting a complex character a breeze. But it also enables fun new possibilities. What if your character's stats changed dynamically over the course of a battle? Not just your health and magic points, but things like strength, focus, and speed? The short answer is, you force players to improvise. If you are weary of the concepts of "rotations" in roleplaying games—an optimized sequence of abilities that is mechanically "The Right Answer" 90% of the time—this is the tonic for that fatigue.

### 2) Negotiation-Based Skill Checks

Some of the most fun I have had around a TTRPG table (or in front of a computer on Roll20) boiled down to collaborating with my game master in the form of bargaining. Interactions that boil down to "How far can we push the possibilities of this system?" like the following exchange:

> **Player:** "I'd like to try to sneak through this warehouse."
> 
> **GM:** "Well, you don't have any skills in stealth, so you're welcome to try but…"
> 
> **Player:** "Aha! I'm really good at contortion though. What if I use my flexibility to slowly squeeze between containers and crawl under equipment to stay in cover?"
> 
> **GM:** "That's a good point. You SOB, I'm in. Roll it and let's see what happens!"

Our system enshrines those negotiations in the official rules. We want to give players as many opportunities for shenanigans as possible, and our game masters the necessary scaffolding to navigate truly unhinged skill attempts. And rather than a set list of skills, players can invest their abilities in whatever they would like to develop new synergies and strategies. You want to be good at Biology? Or maybe your character is an alchemist, so you want to be good at vivisecting monstrum to extract their various venoms and fluids. Why have training in driving when you can specify stunt-driving? Just pay the character building resources, and write the ranks into your sheet.

### 3) Tons of Character-Building Options

In addition to literally all the skills, we have an absurd number of weapons, martial techniques, types of magic, traits (flavorful talents that can radically alter the way you play a character), and ways to fine tune your ability deck. You also start with generous optionality in all of these categories at level one, so you can play the character you want to play right out of the gate. This also translates to characterful battles, where weaponry and spells are expressions of your character's personality as much as they are a means of getting things done.

### 4) Risk Reward Approach to Crafting and Performance

Do you enjoy crafting in games? How about big, Oscar-Winning Moment performances? Crafting a god-felling shotgun, or performing a solo in front of the royalty of the Winter Court should feel momentous and deserve more involving gameplay than a single roll for competence. We have a separate rule set that augments our flexible skill system for creative and performative pursuits. Play things safe to ensure you pass your check threshold, or gamble your renown and materials to push things to the limit.

### 5) Infinite Growth Potential

We plan on aggressively adding to this game for a long time, and inviting our community to do the same. New character-building blocks, campaign modules, maps, and more will be available on Echelon regularly after launch.

And these are just off the top of our head. There is much more to show and tell, so keep an eye on this blog for detailed looks at our many systems and mechanics.

---

## A New Kind of Virtual Tabletop

If you are curious about all the features that make Echelon awesome, we recommend you give our first blog post a gander, but in brief, we want to give players a premium VTT experience. Beautiful user interfaces that make complex mechanics easy to navigate. Integrated content filtering and schedule tracking for our campaign search. Support for creators, from writers, to map and portrait artists, to theory crafters and GMs both amateur and professional.

**Anno Amagium is just the first of many entirely original titles we want to digitally publish, but we also know first impressions are worth a lot, and we are putting everything we have into this game. We hope you will join us for our open beta in Q4 of 2026. Please look forward to it!**`;

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
