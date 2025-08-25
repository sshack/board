'use client';

import { MarkdownRenderer } from '@/components/markdown-renderer';

const markdownText = `# A Cool Introduction to Echelon

This is my favorite way to tell people about Echelon.

---

## Ice Cream

In 1974, two arch-nerds named Gary Gygax and Dave Arneson invented a completely new kind of human experience. Imagine they invented vanilla ice cream. A flavor unlike any other, a kind of treat never before tasted. Over the past fifty years, people have continued their legacy by inventing new toppings (extra rulebooks), refining their recipe (multiple editions), and branching out into digital (the metaphor is strains a bit here, but bear with me: they're both delivery systems, so let's say cones versus cups). Other enterprising soda jerks decided to get in on that action, and invented chocolate ice cream (White Wolf), and strawberry ice-cream (Games Workshop) and a panoply of other flavors.

**Vanilla ice-cream is great.**

**So is chocolate!**

**Strawberry is cool too.** *(But it tastes better if you are good at painting.)*

There are people out there who like cherry vanilla (Pathfinder), cookie dough (GURPs maybe?), and yeah! It turns out this ice cream thing is a solid all-around concept.

---

## The Boutique

Echelon aspires to be the boutique ice-cream store in your town with dozens of completely original, enchanting flavors. We aren't looking to obsolesce our competition. We aren't looking to unsustainably expand until we are 31 Flavors or Cold Stone. We just want to make and serve something delicious, in the form of bespoke, digitally-native and digitally-augmented TTRPGs. We call ourselves a VTT for simplicity's sake, but another way you can think of us would be **a console or platform for next-gen TTRPGs**.

---

## Our Recipe

We want to enhance your tabletop experience with games that have the mathematical complexity and automation of a video game married to the narrative flexibility and social richness that are essential to tabletop gaming. This means more elaborate mechanics, and more of them. It means less time spent crunching numbers, and more time spent killing monsters and roleplaying with your friends. 

Rest assured, we don't want to do away with the physical aspect of TTRPGs. Our systems are designed to work with good ol' fashioned trauma rocks, miniatures, and physical maps, and we encourage players to gather whenever they are able. But we can also accommodate friends playing campaigns from coast to coast and beyond.

We also believe in using **"all organic" ingredients**, creatively speaking. Sadly, this is a risky business proposition in 2025. AI can do some amazing things. And it can do them for much less than paying a talented artist, writer, programmer, and designer a livable wage. So why not saddle up with Skynet instead of burning crucial early capital? Because we know our players will be able to taste the difference. And paying people for hard earned expertise is the right thing to do.

Like the ice-cream parlors of old, we want Echelon to be a **third place** for our users. A refuge of fiction and friendship for like-minded people. We want to help our players unwind, make new connections, while lifting up the game masters and content creators that buttress the tabletop roleplaying community. That's why Echelon will be incorporating quality-of-life features like a campaign search that can screen by schedule, content, and scope to ensure players find the perfect game. It's why we have teamed up with a world class UX design firm to ensure our menus are beautiful and intuitive.

---

## Brass Tacks and Bottom Lines

We are still working out our precise monetization model, but we want to come up with a system that our users feel good about. Our beta, arriving late next year, will be free. If all goes well, we will have F2P option at launch as well. At the end of the day, we are just another start-up, and start-ups are always gambles. But we are placing our bets on human creativity, technological positivity, and the pursuit of fun. If the stories we grew up on have taught us anything, those seem like good horses to bet on.

**So. Welcome to the soirée. Pull up a chair. Let us get you some ice cream.**`;

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
