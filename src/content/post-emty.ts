/**
 * The Emty write-up, transcribed from the Medium post (published 9 Nov 2026).
 * Medium is the original, so writing/emty/index.html carries rel=canonical to it.
 *
 * Body copy is plain strings with a tiny inline syntax the renderer understands:
 * **bold**, _italic_, `code` and [text](url). Figure alt text was written here;
 * the Medium originals had none.
 */
export type Block =
  | { t: 'p'; x: string }
  | { t: 'h'; x: string }
  | { t: 'quote'; x: string }
  | { t: 'ul'; items: string[] }
  | { t: 'ol'; items: string[] }
  | { t: 'code'; lang?: string; x: string }
  | { t: 'img'; src: string; alt: string; cap?: string };

export interface PostDoc {
  slug: string;
  title: string;
  dek: string;
  date: string;
  dateISO: string;
  read: string;
  medium: string;
  lab: { name: string; floor: string };
  body: Block[];
}

export const emtyPost: PostDoc = {
  slug: 'emty',
  title: 'Emty: I built an app because I missed one deadline',
  dek: 'A breakdown of Emty, a desktop app that reads your Gmail and only bothers you about the stuff that actually matters. Code’s on [GitHub](https://github.com/ananya-dhiman/Emty).',
  date: '9 Nov 2026',
  dateISO: '2026-11-09',
  read: '9 min read',
  medium: 'https://medium.com/@zecoder06/emty-i-built-an-app-because-i-missed-one-deadline-84b3dc09cea0',
  lab: { name: 'EMTY', floor: '08' },
  body: [
    { t: 'h', x: 'The email that got away' },
    { t: 'p', x: 'Emty exists for one reason: I wanted to stop missing deadlines. That’s it.' },
    { t: 'p', x: 'Here’s what happened. An email came in about an internship I really wanted to apply for. It showed up a whole week before the deadline. I read it, I starred it, and since I was out at the time, I told myself I’d fill the form later.' },
    { t: 'p', x: 'I never did.' },
    { t: 'p', x: 'By the time I remembered, it had sunk under a pile of other emails and the deadline had passed. Even worse, the deadline was written as plain text, so nothing ever landed on my calendar. (Not that I check Google Calendar anyway, but still.)' },
    { t: 'p', x: 'When I thought about it, the real problem wasn’t that I’m forgetful (okay, I am, a little). It was that **the important stuff was buried under a ton of emails that only look important.** On my college email that’s every event from every college, plus updates that have nothing to do with me. My personal inbox isn’t better either: genuinely good hackathon invites get buried under “someone wants to connect with you on LinkedIn.”' },
    { t: 'p', x: 'So I started building Emty. The name comes from the dream of an empty inbox. Just spelled a bit cooler.' },

    { t: 'h', x: 'First, homework: how do people even manage email?' },
    { t: 'p', x: 'Before writing any code, I went down a rabbit hole of threads and blog posts about how people organise their inboxes. There are already tools for this, like Superhuman, and Gmail has its own [Priority Inbox](https://support.google.com/mail/answer/186531), which splits your mail into “important and unread”, “starred” and “everything else”.' },
    { t: 'p', x: 'So why build another one? Because of _where the idea of “important” comes from_.' },
    { t: 'p', x: 'Gmail **guesses** what’s important by watching what you do: who you reply to, who you email a lot, what you usually open. That’s an outside-in (extrinsic) signal. It works great for regular stuff, but think about my internship email. It came from an organisation I’d never talked to before. There was no history for Gmail to learn from, so it had no reason to think it mattered.' },
    { t: 'p', x: 'Emty does both. You **tell** it what matters to you up front (keywords like _internship_, _deadline_, _application_, plus the domains you care about), and then it keeps adjusting based on what actually happens. Your own declared priorities (intrinsic) plus the outside signals (extrinsic).' },
    { t: 'img', src: 'https://cdn-images-1.medium.com/max/2000/1*8xPFlVRDN-L6K3Xldy3k6w.png', alt: 'A table comparing Gmail Priority Inbox with Emty, row by row, starting with where the idea of “important” comes from: guessed from your behaviour, versus declared by you and then refined by feedback.' },
    { t: 'p', x: 'Neither one is strictly better. Gmail needs zero setup. Emty needs about three minutes of setup, and it pays that back on exactly the kind of email I missed: a new sender with a date hidden inside.' },
    { t: 'p', x: 'The way I like to think about it: **Emty is basically a set of dials you can turn to tune your own idea of what’s important.**' },

    { t: 'h', x: 'How Emty decides what’s important' },
    { t: 'p', x: 'This is the core of the app, so let me walk through what happens to an email from the moment it arrives.' },
    { t: 'p', x: '**1. It gets pulled in and staged.** Emty syncs your Gmail in the background and saves the basic details (sender, subject, a preview snippet) on your machine.' },
    { t: 'p', x: '**2. A quick rules check.** Before any AI touches it, a simple rules engine looks at it. If it matches something you said you don’t care about (excluded keywords like _newsletter_ or _promo_, or a blocked sender), or it just scores really low on relevance, it goes straight to the low-priority pile. Matching your keywords or preferred domains gives it a big bump.' },
    { t: 'p', x: '**3. A first guess at the score.** Everything that survives gets an early score based on how well it matches your labels. The top 20 get marked as the top picks to process first.' },
    { t: 'p', x: '**4. The AI actually reads it.** The AI reads the full email and pulls out a one-line summary, a to-do checklist, any dates (deadlines, events, follow-ups), important links, which labels fit, and an importance score from 0 to 1.' },
    { t: 'p', x: '**5. The final score.** Everything gets combined into one number:' },
    {
      t: 'ul',
      items: [
        '**60%** is how important the AI thinks the email is',
        '**20%** is how well it matches your top-ranked labels',
        '**20%** is how fresh it is. This fades over about a week, so old emails don’t sit on top forever',
        '**+ a deadline boost** if there’s a deadline in the next 48 hours',
      ],
    },
    { t: 'p', x: 'That last bit is the one I personally needed. An email due tomorrow beats the same email due next week.' },
    { t: 'p', x: '**6. It lands in a tier.** The dashboard sorts everything into **Action Required** (the AI found a task or deadline), **Top Priority** (your next ten highest scores), **Others**, and **Completed**.' },
    { t: 'p', x: 'And because every email shows its full score breakdown, when something gets ranked weirdly you can see exactly which part caused it.' },
    {
      t: 'img',
      src: 'https://cdn-images-1.medium.com/max/2000/1*kSuUwNy7Lp52m1CdWDpZwg.png',
      alt: 'The scoring pipeline: sync, rules check, early score, AI read, final score, then a tier.',
      cap: 'Cheap checks run first so the AI only spends time on emails that have a real shot at mattering.',
    },

    { t: 'h', x: 'The cold start trick' },
    { t: 'p', x: 'Here’s a problem I hit early on. A brand new user has told Emty nothing, so what does it rank against?' },
    { t: 'p', x: 'My fix: during onboarding, Emty scans your most recent emails (the subject lines and previews), counts which words and sender domains keep showing up, and pre-fills your priority keywords and domains with them. You then just edit the list instead of starting from a blank page. It’s a lot easier to say “yes, no, no, yes” than to come up with ten keywords off the top of your head.' },
    { t: 'p', x: 'One rule I was strict about: cold start only fills in empty fields. If you’ve already typed your own keywords, it never overwrites them.' },

    { t: 'h', x: 'Making onboarding not feel like a loading screen' },
    { t: 'p', x: 'The first version made you wait. Connect Gmail, wait for the sync, then set up your priorities, then wait again for everything to be processed. Boring.' },
    { t: 'p', x: 'So I flipped it around. The moment you connect Gmail, the sync starts quietly in the background while you’re still answering the onboarding questions. (That’s also where cold start gets its emails from.) One thing I deliberately didn’t change: the AI doesn’t start ranking anything until you finish onboarding, because ranking emails before you’ve told it what matters would just give you garbage.' },
    { t: 'p', x: 'Once you hit finish, you go straight to the dashboard and the emails start appearing one by one as they get processed. It feels alive instead of stuck.' },

    { t: 'h', x: 'The part I completely forgot about: security' },
    { t: 'p', x: 'The prototype worked. I was happy. Then I started actually testing it and realised something kind of embarrassing.' },
    { t: 'p', x: 'I wasn’t storing anyone’s emails in the cloud, only tiny insights about them (more on that below). But every email still went to the same cloud AI model to get read, and the app didn’t care what was inside. A newsletter and a bank alert with an OTP got treated exactly the same way. For an app whose whole job is to read your inbox, that didn’t sit right with me. Some emails just shouldn’t leave your laptop at all, not even for a few seconds.' },
    { t: 'p', x: 'This led to a proper revamp: a **hybrid setup** that decides, email by email, where it’s allowed to be read.' },
    { t: 'p', x: '**Step 1: a sensitivity check.** Before any AI sees an email, a keyword classifier scans the subject and the start of the body. Some words are instant red flags (things like _Aadhaar_, _PAN card_, _CVV_, _medical report_, _Form 16_). Others are weighted: _OTP_ counts a lot, _bank account_ a bit less, _invoice_ just a little. If the total crosses a threshold, the email is marked sensitive. Newsletters and no-reply senders get marked as routine. Everything else is normal.' },
    { t: 'p', x: '**Step 2: send it to the right place.**' },
    {
      t: 'ul',
      items: [
        '**Sensitive** emails go to a local AI model (Ollama) that runs fully offline on your own computer. They never leave your device, and the dashboard shows a little banner saying the email was processed on-device.',
        '**Normal** emails go to Groq’s cloud model, because it’s really fast. This only happens if you’ve added your own Groq API key.',
        '**Routine** emails, or anything when you don’t have a Groq key, go to the local model too.',
        'If your Groq daily quota runs out, Emty quietly switches everything to local for the rest of the day and switches back the next day.',
      ],
    },
    { t: 'p', x: '**But local models are slow, right?** Yes. Running an AI model on a laptop is a lot slower than Groq. My trick was to hide that slowness with scheduling instead of trying to make it faster. Normal emails get processed first, routine ones after that, and sensitive ones last. So by the time the slow local model is chewing through your bank emails, your dashboard is already full of everything else and you don’t even notice. It all runs in the background, one email at a time.' },
    { t: 'p', x: '**Step 3: move the data home.** To be fair, even the first version never pushed raw emails to the cloud database. It only focused on the extracted insights without storing sensitive data.' },
    { t: 'p', x: 'But “a little bit of data” still isn’t “no data”, and I wanted this properly locked down. So I moved all of those insights out of the cloud and into a local database on your own machine. Here’s where everything lives now:' },
    {
      t: 'ul',
      items: [
        '**On your machine (a local SQLite database):** email content, AI insights, scores and feedback. Basically anything that came out of your inbox.',
        '**In the cloud (MongoDB):** only your account details, Gmail connection settings, and label and priority preferences. Never email content.',
        '**Extra care:** your Groq API key is encrypted with AES-256 before it’s saved, Gmail refresh tokens are encrypted too, and the temporary login state lives in Redis with an expiry so it cleans itself up.',
      ],
    },
    {
      t: 'img',
      src: 'https://cdn-images-1.medium.com/max/2000/1*D4KP-BXiVKgn2AWnR0YMiQ.png',
      alt: 'Sensitive and routine mail routed to a local Ollama model, normal mail routed to Groq’s cloud model.',
      cap: 'Only normal emails ever touch the cloud model, and whatever comes back still gets saved on your own machine.',
    },

    { t: 'h', x: 'Stuff I added after using it myself' },
    { t: 'p', x: 'Once I actually started using Emty every day, I kept finding things I wanted:' },
    {
      t: 'ul',
      items: [
        '**Multiple accounts.** I have a college email and a personal one, and they care about totally different things. So you can connect several Gmail accounts and switch between them, and each one keeps its own ranking, labels and priorities. I didn’t merge them into one feed because my college priorities and my personal priorities are not the same list.',
        '**Tracking emails.** Ranking is for figuring out what to look at. Tracking is for the thing you’ve already looked at and need to come back to. You can pin an email and add a little sticky note to it like “waiting on transcript before I reply.” It stays pinned until you’re done.',
        '**A feedback loop.** On any email you can hit boost (this should have ranked higher), suppress (this shouldn’t be here), or clear. Every click gets saved locally along with a few details about the email, and Emty uses them to measure how accurate its rankings actually are. That growing pile of my own verdicts is what I’m using to make the ranking smarter over time.',
      ],
    },

    { t: 'h', x: 'No more building it by hand: the GitHub Actions pipeline' },
    { t: 'p', x: 'Building a desktop app for different operating systems by hand is painful. You need the right machine, the right setup, and you have to remember all the steps every single time. So I automated it.' },
    { t: 'p', x: 'Now I just push a version tag (something like `v1.2.0`) and GitHub Actions takes it from there:' },
    {
      t: 'ul',
      items: [
        'It builds the app on **macOS** (Apple Silicon) and **Windows** at the same time. If one fails, the other keeps going, so I can tell whether the problem is platform-specific or something I broke everywhere.',
        'It writes the config files the app needs from GitHub secrets, and it fails loudly if any are missing. I learned this the hard way: without them, the installer builds fine but the app just opens to a white screen or the backend quietly dies on launch.',
        'It caches the slow parts (the Rust build and the bundled Node and Ollama binaries) so later builds are way faster.',
        'It signs the update files, then creates the release as a **draft**, so nothing goes live until I check it and hit publish myself.',
        'It also uploads a copy of each installer with a fixed name, so the download links on the landing page never break when the version number changes.',
      ],
    },
    { t: 'p', x: 'In short: one tag, two installers, no manual work, and I still get the final say.' },
    { t: 'img', src: 'https://cdn-images-1.medium.com/max/2000/0*VjhBQpi3pTTmno3H', alt: 'The GitHub Actions release pipeline running the macOS and Windows build jobs.' },

    { t: 'h', x: 'The widget (aka why I stopped opening the app)' },
    { t: 'p', x: 'The last big refinement turned out to be my favourite.' },
    { t: 'img', src: 'https://cdn-images-1.medium.com/max/415/0*pZmGRLidpFHnwsk7', alt: 'The Emty desktop widget listing upcoming tasks sorted by nearest deadline.' },
    { t: 'p', x: 'Since the AI was already pulling out to-dos and deadlines from every email, I added a small widget that sits in the bottom-right corner of my desktop and just shows me the tasks I need to do, sorted by whichever deadline is closest. It has three tabs: **All**, **Urgent**, and **Tracked**.' },
    { t: 'p', x: 'It also sends desktop notifications to poke me when something is coming up in the next 48 hours, when it’s due today, and when it’s overdue. To stop it from being annoying, only emails that are actually important can trigger a notification, and each one only fires once, even if I restart the app.' },
    { t: 'p', x: 'Honestly? After I built this, I barely opened the main app again. All my most important tasks just sit on my desktop, nagging me in the nicest possible way.' },
    { t: 'p', x: 'So Emty officially solved my problem. I don’t miss deadlines because I didn’t see them anymore.' },
    { t: 'p', x: 'The only thing left now is for me to stop being so lazy and actually do them. :(' },
    { t: 'p', x: '_Want to try it or poke around the code? Check out the_ [repo](https://github.com/ananya-dhiman/Emty)_._' },
  ],
};
