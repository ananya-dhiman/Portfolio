export interface Role {
  when: string;
  where: string;
  org: string;
  role: string;
  /** One-line summary, shown first. */
  line: string;
  /** Scan-length fragments, not sentences — facts only, nothing inferred. */
  bullets: string[];
  /** Only tools named in the work itself. */
  stack: string;
}

export const experience: Role[] = [
  {
    when: '2026', where: 'Mumbai', org: 'CometChat', role: 'Intern',
    line: 'Built a Claude-powered evaluation harness for AI skills.',
    bullets: [
      'Ran generated cases against the live agent: 30+ logic gaps caught before release.',
      'Ticket routing for 100+ users — priority weighting, escalation, webhook audit trails.',
      'Deployed on AWS behind a load balancer, with reverse proxy and SSL.',
    ],
    stack: 'Claude · FCM · AWS (EC2 · ALB)',
  },
  {
    when: '2025–26', where: 'Pune', org: 'ApplyCup', role: 'Backend Developer',
    line: 'Built sandboxed code execution on a queue-backed worker pool.',
    bullets: [
      'One isolate sandbox per worker, on a Google Cloud VM — no host access, no races.',
      'Moved execution onto Redis and BullMQ workers: 2× throughput.',
      'Chunked interview recording, stitched with FFmpeg — crashes stopped losing takes.',
      'Load-tested at 50–100 users; found 5–7 bottlenecks.',
    ],
    stack: 'Node.js · Redis · BullMQ · isolate · Linux · FFmpeg · Firebase · Google Cloud',
  },
  {
    when: '2025', where: 'Mumbai', org: 'Valueye', role: 'Backend Engineering Intern',
    line: 'Cut LLM query latency by about 40% with a caching layer and vector search.',
    bullets: [
      'SearxNG search caching in front of every query: ~4 seconds off.',
      'Chroma vector search over market signals and news.',
      'Live market APIs and scraping, for fresh context.',
    ],
    stack: 'Node.js · SearxNG · Chroma',
  },
];
