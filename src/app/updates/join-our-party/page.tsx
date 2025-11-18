'use client';

import { MarkdownRenderer } from '@/components/markdown-renderer';

const markdownText = `# Join Our Party

Salutations, weary travelers. Whether you hail from the labyrinthine cloisters of Reddit, the well-traveled highways of LinkedIn, or some other far flung digital locale, we cordially welcome you to Echelon. **If this is your first time here, [this blog post about ice cream may prove a useful primer](https://gameonechelon.com/updates/echelon). In brief, we want to create a platform for adapting and publishing original tabletop games. And we are looking to round out our team of crack adventurers to accomplish that goal.**
![Game screenshot](/lp/join1.png)

## Concerning Love and Labors Thereof

We are drawn to games featuring mechanics that are too complex for pencils and paper to conveniently handle on their own. **Complex game systems are often a byproduct of prolonged personal development. True labors of love. And we believe the more love that goes into a game, the more players stand to get out of it. And digital augmentation can make that love more easily accessible.** So bring on the chunky rulebooks, crunchy mechanics, custom decks of cards, and other accoutrement that give roleplaying games a distinct identity. 

**It should be noted; we are not looking to “obsolesce” physical gaming.** While our games can be played completely digitally to accommodate parties with remote members, we believe it is important to provide people with the option using the Holy Trinity of physical TTRPG components: dice, maps, and minis. Experienced TTRPG gamers often accrue a dragon’s hoard of such treasures, and we want to preserve as many opportunities to use them as possible.

Admittedly, our ideal audience is comprised of veterans of many campaigns who are looking for something fresh in the TTRPG space, but not to the exclusion of newcomers or intermediate players. **Whether you are dipping your toes into tabletop gaming for the first time, searching for a new game to play, a place to find players for your campaigns, a platform to sell your TRRPG content, or a way to publish your original game, our VTT endeavors to meet those needs.**
![Game screenshot](/lp/join2.png)

## Heroes Wanted

Building a platform that measures up to the promise of that premise will be no mean feat. We need a team fit to fell giants. To that end, we are recruiting for everything from leadership roles and programmers to professional game masters and other content creators. **We do not believe in asking people to work for free just because a job is part of a creative industry. We also want to favor human effort and creativity over AI whenever feasible. Consequently, we are seeking investors of every stripe to help fund this enterprise.**

If you are interested in employment, investment, or adapting an original tabletop title, **check out [the opportunities listed on our team page](https://gameonechelon.com/team).** Should you apply, rest assured your application will be read and assessed by real humans rather than an algorithmic filter, but **please be warned, we will likely not reach any decisions until after January.** Our timeline for new hires will be heavily subject to how many people apply, which skills they bring to the table, and what salaries they are seeking. 
![Game screenshot](/lp/join3.png)

## Culture & Values

To Whit Ventures takes play extremely seriously. **Play is a fundamental, vital part of being human, and dismissing something as “just a game,” cheapens that experience. We play for real. We play for keeps. That said, we also know that if you take play so seriously that you stop having fun, you’ve lost the plot.** Having fun and helping others do the same is at the core of our corporate identity. We want people who are passionate about their profession, eager to find the fun in their field’s respective challenges, and who are capable of genuinely befriending their coworkers.

We also believe in rewarding loyalty. **The broader gaming industry’s attitude towards game developers as a disposable, seasonal resource is shamefully callous and ultimately destructive.** We want those who value long-term employment, steady growth, and creative fulfillment as opposed to people who are willing to job hop for a quick buck. If you help us succeed, we will take care of you.

That said, we despise “we’re like family here” approaches to management. Boundaries are essential. You cannot give it your all while you are on the clock if you never have time for yourself and your loved ones. **As a game development start-up, periodic stretches of crunch will be unavoidable and it would be disingenuous to say otherwise. However, we promise to manage our time efficiently to keep sprints as brief as possible, and to make good on those long hours whenever we can.**

If this all sounds idealistic… Well, yes. That’s the idea. **What is corporate integrity really worth—what does that phrase even mean—if it isn’t modeled on principles that pursue the best interests of its consumers and employees?**

## Your Turn

Escapism, like play, is a crucial part of life. It allows us to explore alternate realities, discover new aspects of ourselves, and empowers us to courageously face the problems waiting for us in reality. But we are shooting for something more with Echelon. **We want to go beyond escapism to help people—players and teammates alike—achieve their fantasies in the most tangible, meaningful sense possible.** If our values strike you as noble rather than hopeless, spread the word. If that calling speaks to you… apply. Reach out. Talk to us.

You are at the top of the initiative order. 

Here are the dice. 

It’s your turn.
![Game screenshot](/lp/join4.png)
`;

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
