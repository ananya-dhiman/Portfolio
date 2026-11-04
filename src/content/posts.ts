export interface Post { title: string; date: string; read: string; url: string }

export const posts: Post[] = [];

export const library = {
  line: 'Notes from the builds: benchmarks, bugs and what they taught me.',
  placeholder: { title: '[Post title]', date: '[date]', read: '[n] min read' },
};
