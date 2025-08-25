'use client';

import { MarkdownRenderer } from '@/components/markdown-renderer';

const markdownText = `# Here We Go Questin&apos; Again

If you don't know what ConQuesting is yet, give this page a quick look before reading further.

---

## Once More into the Breach

Next year will mark the **tenth-year anniversary** of ConQuesting (putting aside the Pandemic). And with any luck, we are just getting started. Even though we advertise our projects during the con, there are hundreds of cheaper, less labor-intensive ways to promote something. When we started, we didn't even have anything to shill. We are still doing ConQuesting for the same reason that we started: **It's fun.** For you, good players, and for us as well.

It is a delight to hear somebody gasp or laugh when they find an unexpected fandom in the Epic Quest Tome. It is a thrill to see people's expressions light up as they unroll a scroll. Inquiries like *"There's loot?"* and *"How long did it take you to put this together?"* make us swell with pride. We get to feel like we are doing something that gives back to the community DragonCon represents: **Our People.**

These are some of the things we love most about this little game, and why we think it is a weirdly (but genuinely) important tradition.

---

## Socializing

ConQuesting gives you a reason—not just an excuse, but an opportunity with a good reason—to make friends with somebody you share a common interest with. *"Ah, nice Link cosplay! I too enjoy The Legend of Zelda. In fact, I am on a quest to find Link!"* Nerdy? Of course. But look at where we are. Look at what we are about. Unlike social media, which is, at its best, a place to shout into a thankless void, ConQuesting is a **genuinely social activity**. It is conversations. It is appreciating commonly held interests. It is creating memories of implausible moments that deserve recording.

---

## Structure

DragonCon can be overwhelming, even after experiencing it for years in a row. Even if you are an extroverted, crowd-loving party animal. Even if you live for stimulation because your brain has trouble producing certain chemicals. *(Hi, yes, hello. It's me. I'm talking about myself.)* There are simply too many references pinging your senses at once. Too many cool costumes with details that demand your attention. Too many panels and events to choose from. 

And while ConQuesting augments your experience, it also **provides structure**. It gives your senses a concrete goal as you navigate the chaos. It turns something chaotic and into something structured. And while that may seem like a minor pivot, it can have a huge impact on how you perceive and navigate the con.

---

## Only at DragonCon

Most other cons—anything in the comic con family, Anime Expo in Los Angeles, PAX—have very specific strictures about what can qualify as a costume, versus advertising, versus programming. They also have narrower focuses than DragonCon, which does everything, from everywhere, all at once, all the time. The fan-run nature of the con enables us to provide a unique experience and every year, we have built upon that experience, trying to take things to the next level.

---

## …Or Is it?

This year is our **most ambitious reach yet**. We are going to build upon what we've done at DragonCon, and extend that same premise to the broader world, mundane though it may seem. We want people to have more fun. We want to give them easy, daily opportunities to flex the creative muscles that seem to atrophy by merely existing. We want, if possible, to make daily acts of adulting feel like acts of heroism, rather than a grind. 

So on the last day of DragonCon, we will kick off **ConQuesting 365** on our Instagram. Follow us for daily quests, and find out where this adventure takes us next.`;

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
