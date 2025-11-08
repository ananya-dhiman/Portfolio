

// import React, { useState, useRef, useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { Play, Pause, SkipBack, SkipForward } from "lucide-react";

// interface Song {
//   songUrl: string;
//   songName: string;
//   artistName: string;
// }

// interface RotatingVinylPlayerProps {
//   songUrl?: string;
//   songName?: string;
//   artistName?: string;
//   mobVinylOpen?: boolean;
//   setMobVinylOpen?: (value: boolean) => void;
// }

// const RotatingVinylPlayer: React.FC<RotatingVinylPlayerProps> = ({
//   songUrl="/playlist/duvet.mp3",
//   songName= "Duvet",
//   artistName="Bôa",
//   mobVinylOpen,
//   setMobVinylOpen,
// }) => {
//   const playlist: Song[] = [
//     {
//       songUrl: "/playlist/duvet.mp3",
//       songName: "Duvet",
//       artistName: "Bôa",
//     },
//     {
//       songUrl: "/playlist/Call.mp3",
//       songName: "Call It Fate, Call It Karma",
//       artistName: "The Strokes",
//     },
//     {
//       songUrl: "/playlist/Notion.mp3",
//       songName: "Notion",
//       artistName: "The Rare Occasions",
//     },
//   ];
  
//   const [currentSong, setCurrentSong] = useState<Song>({ songUrl, songName, artistName });
 
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const audioRef = useRef<HTMLAudioElement>(null);
//   const controls = useAnimation();

  

//   const togglePlayPause = () => {
//     if (!audioRef.current) return;
//     if (isPlaying) audioRef.current.pause();
//     else audioRef.current.play();
//     setIsPlaying(!isPlaying);
//   };

//   const handleNext = () => setCurrentIndex((i) => (i + 1) % playlist.length);
//   const handlePrev = () => setCurrentIndex((i) => (i - 1 + playlist.length) % playlist.length);

//   useEffect(() => {
//     if (!audioRef.current) return;
//     audioRef.current.pause();
//     audioRef.current.load();
//     if (isPlaying) audioRef.current.play();
//   }, [currentIndex, isPlaying]);

//   useEffect(() => {
//     if (isPlaying) {
//       controls.start({
//         rotate: 360,
//         transition: { duration: 3, repeat: Infinity, ease: "linear" },
//       });
//     } else {
//       controls.stop();
//     }
//   }, [isPlaying, controls]);

//   return (
//     <>
//       {/* ✅ Desktop Vinyl */}
//       <motion.div
//         className="fixed top-1/2 -translate-y-1/2 hidden sm:flex z-50"
//         initial={{ right: -200 }}
//         animate={{ right: isOpen ? 20 : -300 }}
//         transition={{ type: "spring", damping: 25, stiffness: 200 }}
//       >
//         <div
//           className="relative w-104 h-104 cursor-pointer"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {/* Rotating vinyl */}
//           <motion.div className="absolute inset-0" animate={controls}>
//             <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-900 via-black to-gray-800 shadow-2xl border-2 border-primary/50">
//               {[...Array(18)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="absolute inset-0 rounded-full border border-gray-700 opacity-30"
//                   style={{ margin: `${i * 8}px` }}
//                 />
//               ))}
//             </div>
//           </motion.div>

//           {/* Not rotating center */}
//           <div className="absolute top-1/2 left-1/2 p-10 -translate-x-1/2 -translate-y-1/2 w-51 h-51 rounded-full bg-black/85 border-2 border-primary/50 flex flex-col items-center gap-3 shadow-xl">
//             <p className="text-sm font-semibold text-white truncate">{currentSong.songName}</p>
//             <p className="text-xs text-gray-400 truncate">{currentSong.artistName}</p>

//             <div className="flex gap-2">
//               <button onClick={(e) => { e.stopPropagation(); handlePrev(); }}>
//                 <SkipBack className="text-primary w-4 h-4" />
//               </button>

//               <button onClick={(e) => { e.stopPropagation(); togglePlayPause(); }}>
//                 {isPlaying ? <Pause className="text-primary w-4 h-4" /> : <Play className="text-primary w-4 h-4" />}
//               </button>

//               <button onClick={(e) => { e.stopPropagation(); handleNext(); }}>
//                 <SkipForward className="text-primary w-4 h-4" />
//               </button>
//             </div>
//           </div>
//         </div>

//         <audio ref={audioRef} src={currentSong.songUrl} onEnded={handleNext} />
//       </motion.div>

//       {/* ✅ Mobile Modal Vinyl */}
//       {mobVinylOpen && (
//         <motion.div
//           className="fixed inset-0 flex items-center justify-center sm:hidden z-[999]"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.9 }}
//         >
//           {/* ✅ Blur + close overlay - CLICK HERE TO CLOSE */}
//           <div
//             className="absolute inset-0 bg-black/50 backdrop-blur-md"
//             onClick={() => {
//               console.log("Backdrop clicked - closing modal");
//               setMobVinylOpen?.(false);
//             }}
//           />

//           {/* Vinyl - stops propagation so clicking vinyl doesn't close */}
//           <div 
//             className="relative w-64 h-64 cursor-pointer z-[1000]"
//             onClick={(e) => {
//               console.log("Vinyl clicked - NOT closing");
//               e.stopPropagation();
//             }}
//           >
//             <motion.div className="absolute inset-0" animate={controls}>
//               <div className="absolute inset-2 rounded-full bg-gradient-to-br from-gray-900 via-black to-gray-800 shadow-2xl border-2 border-primary">
//                 {[...Array(14)].map((_, i) => (
//                   <div
//                     key={i}
//                     className="absolute inset-0 rounded-full border border-gray-700 opacity-30"
//                     style={{ margin: `${i * 6}px` }}
//                   />
//                 ))}
//               </div>
//             </motion.div>

//             {/* Play circle */}
//             <div className="absolute flex flex-col w-32 h-32 top-1/2 left-1/2 p-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/85 border border-primary/30 items-center justify-center gap-2 shadow-xl">
//               <p className="text-xs font-semibold text-white truncate">{currentSong.songName}</p>
//               <p className="text-[10px] text-gray-400 truncate">{currentSong.artistName}</p>

//               <div className="flex gap-1">
//                 <button onClick={handlePrev}>
//                   <SkipBack className="text-primary w-3 h-3" />
//                 </button>

//                 <button onClick={togglePlayPause}>
//                   {isPlaying ? <Pause className="text-primary w-3 h-3" /> : <Play className="text-primary w-3 h-3" />}
//                 </button>

//                 <button onClick={handleNext}>
//                   <SkipForward className="text-primary w-3 h-3" />
//                 </button>
//               </div>
//             </div>
//           </div>

//           <audio ref={audioRef} src={currentSong.songUrl} onEnded={handleNext} />
//         </motion.div>
//       )}
//     </>
//   );
// };

// export default RotatingVinylPlayer;

import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";

interface Song {
  songUrl: string;
  songName: string;
  artistName: string;
}

interface RotatingVinylPlayerProps {
  songUrl?: string;        // initial song URL
  songName?: string;       // initial song name
  artistName?: string;     // initial artist
  mobVinylOpen?: boolean;
  setMobVinylOpen?: (value: boolean) => void;
}

const RotatingVinylPlayer: React.FC<RotatingVinylPlayerProps> = ({
  songUrl = "/playlist/Call.mp3",
  songName = "Call It Fate, Call It Karma",
  artistName = "The Strokes",
  mobVinylOpen,
  setMobVinylOpen,
}) => {
  // Playlist
const playlist: Song[] = React.useMemo(() => [
    { songUrl: "/playlist/Notion.mp3", songName: "Notion", artistName: "The Rare Occasions" },
  { songUrl: "/playlist/Call.mp3", songName: "Call It Fate, Call It Karma", artistName: "The Strokes" },
  { songUrl: "/playlist/duvet.mp3", songName: "Duvet", artistName: "Bôa" },
  

], []); // empty array → memoized once


  // State
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentSong, setCurrentSong] = useState<Song>({ songUrl, songName, artistName });
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const controls = useAnimation();

  // Update current song when playlist changes
  useEffect(() => {
    setCurrentSong(playlist[currentIndex]);
  }, [currentIndex,playlist]);

  // Play/pause toggle
  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => setCurrentIndex((i) => (i + 1) % playlist.length);
  const handlePrev = () => setCurrentIndex((i) => (i - 1 + playlist.length) % playlist.length);

  // Update audio element
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    audioRef.current.load();
    if (isPlaying) audioRef.current.play();
  }, [currentSong, isPlaying]);

  // Rotate vinyl animation
  useEffect(() => {
    if (isPlaying) {
      controls.start({
        rotate: 360,
        transition: { duration: 3, repeat: Infinity, ease: "linear" },
      });
    } else {
      controls.stop();
    }
  }, [isPlaying, controls]);

  return (
    <>
      {/* Desktop Vinyl */}
      <motion.div
        className="fixed top-1/2 -translate-y-1/2 hidden sm:flex z-50"
        initial={{ right: -200 }}
        animate={{ right: isOpen ? 20 : -300 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
      >
        <div className="relative w-104 h-104 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <motion.div className="absolute inset-0" animate={controls}>
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-900 via-black to-gray-800 shadow-2xl border-2 border-primary/50">
              {[...Array(18)].map((_, i) => (
                <div key={i} className="absolute inset-0 rounded-full border border-gray-700 opacity-30" style={{ margin: `${i * 8}px` }} />
              ))}
            </div>
          </motion.div>

          <div className="absolute top-1/2 left-1/2 p-10 -translate-x-1/2 -translate-y-1/2 w-51 h-51 rounded-full bg-black/85 border-2 border-primary/50 flex flex-col items-center gap-3 shadow-xl">
            <p className="text-sm font-semibold text-white truncate">{currentSong.songName}</p>
            <p className="text-xs text-gray-400 truncate">{currentSong.artistName}</p>

            <div className="flex gap-2">
              <button onClick={(e) => { e.stopPropagation(); handlePrev(); }}><SkipBack className="text-primary w-4 h-4" /></button>
              <button onClick={(e) => { e.stopPropagation(); togglePlayPause(); }}>{isPlaying ? <Pause className="text-primary w-4 h-4" /> : <Play className="text-primary w-4 h-4" />}</button>
              <button onClick={(e) => { e.stopPropagation(); handleNext(); }}><SkipForward className="text-primary w-4 h-4" /></button>
            </div>
          </div>
        </div>

        <audio ref={audioRef} src={currentSong.songUrl} onEnded={handleNext} />
      </motion.div>

      {/* Mobile Modal Vinyl */}
      {mobVinylOpen && (
        <motion.div className="fixed inset-0 flex items-center justify-center sm:hidden z-[999]" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-md" onClick={() => setMobVinylOpen?.(false)} />
          <div className="relative w-64 h-64 cursor-pointer z-[1000]" onClick={(e) => e.stopPropagation()}>
            <motion.div className="absolute inset-0" animate={controls}>
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-gray-900 via-black to-gray-800 shadow-2xl border-2 border-primary">
                {[...Array(14)].map((_, i) => (
                  <div key={i} className="absolute inset-0 rounded-full border border-gray-700 opacity-30" style={{ margin: `${i * 6}px` }} />
                ))}
              </div>
            </motion.div>

            <div className="absolute flex flex-col w-32 h-32 top-1/2 left-1/2 p-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/85 border border-primary/30 items-center justify-center gap-2 shadow-xl">
              <p className="text-xs font-semibold text-white truncate">{currentSong.songName}</p>
              <p className="text-[10px] text-gray-400 truncate">{currentSong.artistName}</p>
              <div className="flex gap-1">
                <button onClick={handlePrev}><SkipBack className="text-primary w-3 h-3" /></button>
                <button onClick={togglePlayPause}>{isPlaying ? <Pause className="text-primary w-3 h-3" /> : <Play className="text-primary w-3 h-3" />}</button>
                <button onClick={handleNext}><SkipForward className="text-primary w-3 h-3" /></button>
              </div>
            </div>
          </div>
          <audio ref={audioRef} src={currentSong.songUrl} onEnded={handleNext} />
        </motion.div>
      )}
    </>
  );
};

export default RotatingVinylPlayer;
