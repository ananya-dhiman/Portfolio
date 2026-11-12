export interface Post { title: string; date: string; read: string; url: string }

// Posts live on this site under /writing/<slug>/; the Medium copies are cross-posts.
// The Library renders one shelf row per entry, so there are no placeholder rows.
export const posts: Post[] = [
  {
    title: 'Emty: I built an app because I missed one deadline',
    date: '9 Nov 2026',
    read: '9 min read',
    url: '/writing/emty/',
  },
];

export const library = {
  line: 'Notes from the builds: benchmarks, bugs and what they taught me.',
};
