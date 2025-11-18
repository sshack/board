'use client';

import { MarkdownRenderer } from '@/components/markdown-renderer';

const markdownText = `# Eclipsing Escapism

At the end of my last post, I wrote a tiny blurb about the importance of escapism. **“It allows us to explore alternate realities, discover new aspects of ourselves, and empowers us to courageously face the problems waiting for us in reality.”** The more responsible among us may scoff, but I guarantee you, the “creatives” you know live and die by this truth. And given how important it is, it is easy for us creatives to lose sight of something even more important: escapism is only the starting line. You’ve got to go further than that. It’s not enough to simply disappear from reality. You’ve got to bring something back with you.
![Game screenshot](/lp/eclipsing1.png)

The best of entertainment does that. It stays with us. It changes us. Truly profound experiences stain us. But let’s level with ourselves. Masterpieces are few and far between. No matter how finely curated your watch list or how cultured your TBR pile, you cannot reliably get that kind of enrichment and resonation by consuming “Good Media” alone.

The _**is**_ a way to get those things consistently, however. You collaborate as you consume.

## The Beauty of Baldur’s Gate 3
Excellent video games already make this possible. *Baldur’s Gate 3* should require no introduction. It is a breathtakingly meticulous realization of a *Dungeons and Dragons* 5E campaign that respects players’ autonomy and indulges their creativity at every turn. No noble ideal is unattainable. No prurient vice is forbidden. You can kill off key figures in the story, seduce eldritch horrors, transform into a bear at inopportune moments, and the game will somehow make it all work. Its varying difficulty options even allow players to choose how stringent they want their Dungeon Master to be in terms of interpreting the rules for the sake of challenge. Best of all: you can experience the whole thing with friends. A party of actual humans!
![Game screenshot](/lp/eclipsing2.png)

That alone gives it an enormous leg up over most forms of escapism, which tend to either be insular in their consumption (books, single-player games), passive in their consumption (spectatorship, movies, shows), or self-destructive in their participation (think social-media echo-chambers or cults). **This unique interaction—safe, group escapism; sharing self-conscious fantasies with people who will recall and participate in the same real social experiences—is what sets roleplaying games apart from the rest of the pack.**

*Baldur’s Gate 3* is brilliant in ways that makes you pray you see another game like it in your lifetime. **I think tabletop games run by a human game master still have a leg up on Larian Studios. And here’s the real hook: I don’t think it necessarily depends on the quality of the game master.** Restated: you don’t need Matthew Mercer to DM your campaign to dethrone *Baldur’s Gate 3*. 

Don’t get me wrong, awful GMs and awful party members do exist, and they can absolutely make the activity miserable. (Sadly, this isn’t even always apparent early on—decades of friendship can end over the abrupt appearance of “table drama.”) But if you are willing to shave those extreme negatives from the equation and accept the premise of “finding a decent gaming group,” I think **playing a TTRPG led by a human game master can consistently compete with the best the gaming industry has to offer.** Not just Larian, but every best-in-class developer out there.

## What? Why? *How?*

**Players put more of themselves into the human-led TTRPG. The format requires it.** In a video game, there is always some form of structure imposed on a player’s response, whether it is an option selected from a predetermined menu, or an execution of a button command structuring your activity. Hell, let’s look a couple years down the road and say you have a hyper-advanced LLM interpreting and executing your desired action with beautiful animations rendered on the fly. (That actually sounds dope, not gonna lie.) But part of it is still coming from somewhere other than yourself. 

At a table, you have to come up with a response yourself. And the response doesn’t have to be Shakespeare on your part either! A monstrous looking goblin pops out right in front of you. What do you do? Scream? Talk to it? Punch it in the face on reflex? None of those options are outlandishly creative. Those are actually some fairly boring responses to be honest, but they are also perfectly acceptable because they are a reflection of who you are trying to be in that moment. **You don’t need to be a creative genius for earnest, meaningful roleplay.**
![Game screenshot](/lp/eclipsing3.png)

There may be an adjustment period if you’ve never done anything like this before. But after you have acclimated to the format, the collaboration and improvisation, your will come to learn how you roleplay. Whether you punch the goblin or take it out to dinner, **your friends will think “that’s so you,” or “that’s so your character,” or—in the best-case scenario—they will think both of those things at the same time, even though “your character” is a distinct persona from the normal you.**

And if you are lucky enough to find a good Game Master? Somebody who bothers to prepare thoughtful content and is quick on their feet to adapt their story to their players’ interests? Those once-in-a-lifetime experiences that stain and transform us become consistently attainable. You will get these opportunities, again, and again, and again over the course of a normal TTRPG campaign.

## The First Step
This is more than mere “escapism.” At minimum you discover something new about yourself. Best case, those revelations empower you for the better. You can find courage, personality traits, and strength of character that have been lying dormant within you. This is all on top of the usual perks of escapism: you get to experience things that would be suicidally reckless, irresponsibly charitable, loathsomely selfish, or logically impossible in real life. 

**Except these fantasies have more reality to them than those found in the pages of a book, or the code of a typical game, because everyone at the table will experience it with you. They will become memories each of member of your party carries for the rest of their lives.** Even if the story is made up, even if the mechanics are tightly structured, the shared experience with your fellow party members and game master are completely authentic.
![Game screenshot](/lp/eclipsing4.png)

That’s what I mean when I talk about eclipsing escapism. That’s what To Whit Ventures is trying to enable as a company. That is what we want the Echelon platform to support. This is why I spent years building Anno Amagium. 

**Playing make-believe isn’t the problem. The problem is believing that fantasies are things that can only exist inside of our hearts and minds. Precious lies that will dissolve in the light of day. Escapism isn’t meaningless and it isn’t merely necessary. It is the first step toward realizing your hopes and dreams.**
`;

export default function EclipsingEscapismPage() {
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
