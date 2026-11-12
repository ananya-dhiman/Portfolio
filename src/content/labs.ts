export interface Lab {
  floor: string; name: string; kind: string; stat: string; layer: string;
  text: string; stack: string; code: string; diagram: string;
  /** Omitted when there is no write-up yet; the link is then not rendered. */
  writeup?: string;
  caption: string; defaultOpen?: boolean;
}

// Text for FLUX, EMTY, Ghostproof, Aegis Audit, VibeScape and Fasal Forecast was checked against each repo's README/source.
// SNIX and REDDB have no public repo under github.com/ananya-dhiman (404), so their copy is still the original brief.
// Floors run 11 down to 04; sigils.ts is keyed by the same numbers, so renumbering a lab means moving its glyph too.
export const labs: Lab[] = [
  { floor: '11', name: 'SNIX', kind: 'Adaptive reverse proxy', stat: 'p99 78 ms vs 182 ms', layer: 'edge',
    text: 'A Go reverse proxy that routes each request to the backend with the lowest latency score, not round-robin. With one backend degraded: p99 182 → 78 ms, throughput 359 → 1,608 req/s.',
    stack: 'Go', code: '[SNIX REPO URL]', diagram: 'snix',
    caption: 'Each request goes to the lowest-scoring backend.' },
  { floor: '10', name: 'FLUX', kind: 'Message broker', stat: '93K msgs/s · p99 67 µs', layer: 'messaging',
    text: 'A C++20 message broker, standard library only. Fanout, direct and topic exchanges, acks, bounded queues. A single epoll loop gave about 20× the throughput and holds 8,000 idle connections.',
    stack: 'C++20 · epoll · TCP', code: 'https://github.com/ananya-dhiman/flux', diagram: 'flux',
    caption: 'Publishers send to an exchange, which fans out to bound queues. Consumers ack.', defaultOpen: true },
  { floor: '09', name: 'REDDB', kind: 'Redis-inspired server', stat: 'race-detector clean', layer: 'storage',
    text: 'A Redis-compatible in-memory server in Go, standard library only. Works with the real redis-cli. Strings, lists, TTL expiry, Pub/Sub and a persistent append-only log. Race-detector clean.',
    stack: 'Go · RESP · TCP', code: '[REDDB REPO URL]', diagram: 'reddb',
    caption: 'Commands update the keyspace and are appended to the log.' },
  { floor: '08', name: 'EMTY', kind: 'Private desktop email', stat: 'sensitive mail stays local', layer: 'local AI',
    text: 'A privacy-first desktop email app. Syncs Gmail, ranks the inbox by AI importance, and keeps sensitive mail (finance, health, legal) on a local Ollama model.',
    stack: 'TypeScript · Tauri · React · Express · SQLite · MongoDB', code: 'https://github.com/ananya-dhiman/Emty', writeup: '/writing/emty/', diagram: 'emty',
    caption: 'Sensitive mail stays on a local model; the rest can use the cloud.' },
  { floor: '07', name: 'Aegis Audit', kind: 'AI smart-contract audits', stat: 'Hedera · team project', layer: 'web3 security',
    text: 'Team project. AI agents audit smart contracts with Slither and Mythril, then an LLM writes fixes. Every stage is logged on Hedera, and prediction markets bet on whether a contract is safe.',
    stack: 'Next.js · Node.js · Solidity · LangChain · Hedera', code: 'https://github.com/ritwikmohanty/aegis-audit', diagram: 'aegis',
    caption: 'Three agents audit in order; each stage is logged on Hedera.' },
  { floor: '06', name: 'Ghostproof', kind: 'Bug-bounty escrow', stat: 'ETHGlobal Mumbai · team project', layer: 'on-chain security',
    text: 'Team project. A hacker submits an exploit as a runnable test. A checker replays it on a forked copy of the chain and measures the funds actually moved, so no AI decides the payout. If it breaks a rule the company committed to in advance, a contract releases a capped base from a locked pool automatically; an LLM then writes a plain-language evidence report for any bonus on top.',
    stack: 'TypeScript · Solidity · Foundry · Next.js · World ID · Arkiv', code: 'https://github.com/ananya-dhiman/ghostproof', diagram: 'ghostproof',
    caption: 'The exploit is replayed on a fork; a rule committed in advance releases the base payout.' },
  { floor: '05', name: 'VibeScape', kind: 'Places by vibe', stat: 'LLM vibe summaries', layer: 'retrieval',
    text: 'Find places by mood. An LLM turns real reviews into a vibe summary. React front end, Flask API, TomTom and MongoDB Atlas.',
    stack: 'React · Tailwind · Flask · MongoDB Atlas · OpenRouter · TomTom · Firebase', code: 'https://github.com/ananya-dhiman/Vibe-Scape', diagram: 'vibescape',
    caption: 'Flask fetches places, an LLM writes the vibe, MongoDB stores it.' },
  { floor: '04', name: 'Fasal Forecast', kind: 'Crop health app', stat: '33 disease classes', layer: 'mobile + ML',
    text: 'A Flutter app for farmers, built for Smart India Hackathon. A CNN classifies a leaf photo into 33 crop diseases and the app shows local weather.',
    stack: 'Dart · Flutter · Python · TensorFlow/Keras', code: 'https://github.com/ananya-dhiman/Fasal-Forecast', diagram: 'fasal',
    caption: 'A leaf photo in; a disease label and local weather out.' },
];
