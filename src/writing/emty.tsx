import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/instrument-serif/latin-400.css';
import '@fontsource/instrument-serif/latin-400-italic.css';
import '@fontsource/ibm-plex-sans/latin-400.css';
import '@fontsource/ibm-plex-sans/latin-500.css';
import '@fontsource/ibm-plex-sans/latin-400-italic.css';
import '@fontsource/jetbrains-mono/latin-400.css';
import '@fontsource/jetbrains-mono/latin-500.css';
import '@fontsource/jetbrains-mono/latin-700.css';
import '@fontsource/anton/latin-400.css';
import '../styles/prototype.css';
import '../styles/extras.css';
import '../styles/post.css';
import { Post } from '../components/Post';
import { emtyPost } from '../content/post-emty';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Post doc={emtyPost} />
  </StrictMode>,
);
