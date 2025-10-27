// import { motion } from "framer-motion";
// import Image from "next/image";

// export function RotatingVinyl() {
//   return (
//     <motion.div
//       animate={{ rotate: 360 }}
//       transition={{
//         repeat: Infinity,
//         ease: "linear",
//         duration: 6,
//       }}
//       className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-[2px] border-gray-700 shadow-md"
//     >
//       <Image
//         src="/vinyl.png" 
//         alt="Vinyl Disc"
//         width={64}
//         height={64}
//         className="w-full h-full object-cover"
//       />
//     </motion.div>
//   );
// }
// 'use client';

// import React, { useState, useRef, useEffect } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import { Play, Pause } from 'lucide-react';
// import { SiYoutubemusic } from 'react-icons/si';

// interface RotatingVinylPlayerProps {
//   songUrl: string;
//   songName?: string;
//   artistName?: string;
//   youtubeUrl?: string;
// }

// const RotatingVinylPlayer: React.FC<RotatingVinylPlayerProps> = ({
//   songUrl,
//   songName = 'Duvet',
//   artistName = 'Bôa',
//   youtubeUrl = 'https://music.youtube.com/watch?v=QZShA_a-5r8',
// }) => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const audioRef = useRef<HTMLAudioElement>(null);
//   const controls = useAnimation();

//   // Handle play/pause toggle
//   const togglePlayPause = () => {
//     if (audioRef.current) {
//       if (isPlaying) {
//         audioRef.current.pause();
//       } else {
//         audioRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   // Control vinyl rotation based on play state
//   useEffect(() => {
//     if (isPlaying) {
//       controls.start({
//         rotate: 360,
//         transition: {
//           duration: 3,
//           repeat: Infinity,
//           ease: 'linear',
//         },
//       });
//     } else {
//       controls.stop();
//     }
//   }, [isPlaying, controls]);

//   return (
//     <div className="fixed right-0 top-1/2 -translate-y-1/2 hidden sm:block pointer-events-none z-50">
//       {/* Vinyl Disc Container */}
//       <div className="relative w-80 h-80 overflow-hidden pointer-events-auto">
//         {/* Radial gradient background glow */}
//         <div className="absolute inset-0 bg-gradient-radial from-green-500/20 via-transparent to-transparent blur-2xl" />
        
//         {/* Rotating Vinyl Disc - Half visible on the right */}
//         <motion.div
//           className="absolute top-1/2 -translate-y-1/2 -right-40 w-80 h-80"
//           animate={controls}
//           initial={{ rotate: 0 }}
//         >
//           {/* Outer glow ring */}
//           <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400/30 to-emerald-600/30 blur-xl" />
          
//           {/* Main vinyl disc */}
//           <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-900 via-black to-gray-800 shadow-2xl border-2 border-green-500/50">
//             {/* Vinyl grooves effect */}
//             <div className="absolute inset-0 rounded-full opacity-30">
//               {[...Array(12)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="absolute inset-0 rounded-full border border-gray-700"
//                   style={{
//                     margin: `${i * 8}px`,
//                   }}
//                 />
//               ))}
//             </div>
            
//             {/* Center label */}
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-gray-800 to-black border-2 border-gray-700 flex items-center justify-center">
//               <div className="w-3 h-3 rounded-full bg-gray-900 border border-gray-600" />
//             </div>
//           </div>
//         </motion.div>

//         {/* Music Info Panel - Positioned on the left side of the vinyl */}
//         <div className="absolute top-1/2 -translate-y-1/2 left-4 backdrop-blur-md bg-black/40 border border-green-500/30 rounded-lg p-3 shadow-xl">
//           <div className="flex flex-col gap-3">
//             {/* Song Info */}
//             <div className="flex flex-col">
//               <span className="text-sm font-semibold text-white">{songName}</span>
//               <span className="text-xs text-gray-400">{artistName}</span>
//             </div>

//             {/* Controls */}
//             <div className="flex items-center gap-2">
//               {/* Play/Pause Button */}
//               <button
//                 onClick={togglePlayPause}
//                 className="w-9 h-9 rounded-full bg-green-500/20 hover:bg-green-500/30 border border-green-500/50 flex items-center justify-center transition-all duration-200 hover:scale-110"
//                 aria-label={isPlaying ? 'Pause' : 'Play'}
//               >
//                 {isPlaying ? (
//                   <Pause className="w-4 h-4 text-green-400" fill="currentColor" />
//                 ) : (
//                   <Play className="w-4 h-4 text-green-400 ml-0.5" fill="currentColor" />
//                 )}
//               </button>

//               {/* YouTube Music Link */}
//               {youtubeUrl && (
//                 <a
//                   href={youtubeUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-9 h-9 rounded-full bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 flex items-center justify-center transition-all duration-200 hover:scale-110"
//                   aria-label="Listen on YouTube Music"
//                 >
//                   <SiYoutubemusic className="w-4 h-4 text-red-400" />
//                 </a>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Hidden Audio Element */}
//       <audio
//         ref={audioRef}
//         src={songUrl}
//         loop
//         onEnded={() => setIsPlaying(false)}
//       />
//     </div>
//   );
// };

// export default RotatingVinylPlayer;

// 'use client';

// import React, { useState, useRef, useEffect } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';
// import { SiYoutubemusic } from 'react-icons/si';

// interface Song {
//   songUrl: string;
//   songName: string;
//   artistName: string;
  
// }

// const RotatingVinylPlayer: React.FC = () => {
//   const playlist: Song[] = [
//     {
//       songUrl: '/playlist/duvet.mp3',
//       songName: 'Duvet',
//       artistName: 'Bôa',
//     },
//     {
//       songUrl: '/playlist/Call.mp3',
//       songName: 'Call It Fate, Call It Karma',
//       artistName: 'The Strokes',
//     },
//     {
//       songUrl: '/playlist/Notion.mp3',
//       songName: 'Notion',
//       artistName: 'The Rare Occasions',
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const audioRef = useRef<HTMLAudioElement>(null);
//   const controls = useAnimation();

//   const togglePlayPause = () => {
//     if (audioRef.current) {
//       if (isPlaying) {
//         audioRef.current.pause();
//       } else {
//         audioRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % playlist.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
//   };

//   const handleSongEnd = () => {
//     handleNext();
//   };

//   useEffect(() => {
//     if (isPlaying) {
//       controls.start({
//         rotate: 360,
//         transition: { duration: 3, repeat: Infinity, ease: 'linear' },
//       });
//     } else {
//       controls.stop();
//     }
//   }, [isPlaying, controls]);

//   useEffect(() => {
//     if (audioRef.current) {
//       audioRef.current.pause();
//       audioRef.current.load();
//       if (isPlaying) audioRef.current.play();
//     }
//   }, [currentIndex]);

//   const currentSong = playlist[currentIndex];

//   return (
//     <div className="fixed right-0 top-1/2 -translate-y-1/2 hidden sm:block pointer-events-none z-50">
//       <div className="relative w-80 h-80 overflow-hidden pointer-events-auto">
//         {/* Background glow */}
//         <div className="absolute inset-0 bg-gradient-radial from-green-500 via-transparent to-transparent blur-2xl" />

//         {/* Rotating vinyl */}
//         <motion.div
//           className="absolute top-1/2 -translate-y-1/2 -right-40 w-80 h-80"
//           animate={controls}
//           initial={{ rotate: 0 }}
//         >
//           <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400/30 to-emerald-600/30 blur-xl" />
//           <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-900 via-black to-gray-800 shadow-2xl border-2 border-green-500/50">
//             <div className="absolute inset-0 rounded-full opacity-30">
//               {[...Array(15)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="absolute inset-0 rounded-full border border-gray-700"
//                   style={{ margin: `${i * 8}px` }}
//                 />
//               ))}
//             </div>
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-gray-800 to-black border-2 border-gray-700 flex items-center justify-center">
//               <div className="w-8 h-8 rounded-full bg-gray-900 border border-gray-600" />
//             </div>
//           </div>
//         </motion.div>

//         {/* Info + controls */}
//         <div className="absolute top-1/2 -translate-y-1/2 -left-2 backdrop-blur-md bg-black/40 border border-green-500/30 rounded-lg p-3 shadow-xl">
//           <div className="flex flex-col gap-3">
//             <div className="flex flex-col">
//               <span className="text-sm font-semibold text-white">{currentSong.songName}</span>
//               <span className="text-xs text-gray-400">{currentSong.artistName}</span>
//             </div>

//             <div className="flex items-center gap-2">
//               {/* Prev Button */}
//               <button
//                 onClick={handlePrev}
//                 className="w-8 h-8 rounded-full bg-green-500/20 hover:bg-green-500/30 border border-green-500/50 flex items-center justify-center transition-all duration-200 hover:scale-110"
//                 aria-label="Previous"
//               >
//                 <SkipBack className="w-4 h-4 text-green-400" />
//               </button>

//               {/* Play/Pause Button */}
//               <button
//                 onClick={togglePlayPause}
//                 className="w-9 h-9 rounded-full bg-green-500/20 hover:bg-green-500/30 border border-green-500/50 flex items-center justify-center transition-all duration-200 hover:scale-110"
//                 aria-label={isPlaying ? 'Pause' : 'Play'}
//               >
//                 {isPlaying ? (
//                   <Pause className="w-4 h-4 text-green-400" />
//                 ) : (
//                   <Play className="w-4 h-4 text-green-400 ml-0.5" />
//                 )}
//               </button>

//               {/* Next Button */}
//               <button
//                 onClick={handleNext}
//                 className="w-8 h-8 rounded-full bg-green-500/20 hover:bg-green-500/30 border border-green-500/50 flex items-center justify-center transition-all duration-200 hover:scale-110"
//                 aria-label="Next"
//               >
//                 <SkipForward className="w-4 h-4 text-green-400" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* 🎧 Audio Element */}
//       <audio ref={audioRef} src={currentSong.songUrl} onEnded={handleSongEnd} />
//     </div>
//   );
// };

// export default RotatingVinylPlayer;
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';

interface Song {
  songUrl: string;
  songName: string;
  artistName: string;
}

const RotatingVinylPlayer: React.FC = () => {
  const playlist: Song[] = [
    {
      songUrl: '/playlist/duvet.mp3',
      songName: 'Duvet',
      artistName: 'Bôa',
    },
    {
      songUrl: '/playlist/Call.mp3',
      songName: 'Call It Fate, Call It Karma',
      artistName: 'The Strokes',
    },
    {
      songUrl: '/playlist/Notion.mp3',
      songName: 'Notion',
      artistName: 'The Rare Occasions',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const controls = useAnimation();

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % playlist.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
  };

  const handleSongEnd = () => {
    handleNext();
  };

  useEffect(() => {
    if (isPlaying) {
      controls.start({
        rotate: 360,
        transition: { duration: 3, repeat: Infinity, ease: 'linear' },
      });
    } else {
      controls.stop();
    }
  }, [isPlaying, controls]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      if (isPlaying) audioRef.current.play();
    }
  }, [currentIndex]);

  const currentSong = playlist[currentIndex];

  return (
    <motion.div 
      className="fixed top-1/2 -translate-y-1/2 hidden sm:flex pointer-events-auto z-50"
      initial={{ right: -200 }}
      animate={{ right: isOpen ? 20 : -300 }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
    >
      {/* Rotating vinyl with controls inside */}
      <div
        className="relative w-104 h-104 cursor-pointer flex-shrink-0"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Background glow */}
      
        
        {/* Rotating outer vinyl */}
        <motion.div
          className="absolute inset-0"
          animate={controls}
          initial={{ rotate: 0 }}
        >
          <div  />
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-900 via-black to-gray-800 shadow-2xl border-2 border-green-500/50">
            <div className="absolute inset-0 rounded-full opacity-30">
              {[...Array(18)].map((_, i) => (
                <div
                  key={i}
                  className="absolute inset-0 rounded-full border border-gray-700"
                  style={{ margin: `${i * 8}px` }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Center label with controls - doesn't rotate */}
        <div className="absolute p-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-51 h-51 rounded-full bg-gradient-to-br from-gray-800 via-gray-900 to-black border-2 border-green-500/50 flex flex-col items-center justify-center gap-3 shadow-2xl z-10">
          {/* Song info */}
          <div className="flex flex-col items-center text-center px-4">
            <span className="text-sm font-semibold text-white truncate max-w-full">{currentSong.songName}</span>
            <span className="text-xs text-gray-400 truncate max-w-full">{currentSong.artistName}</span>
          </div>

          {/* Control buttons */}
          <div className="flex items-center justify-center gap-2">
            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="w-8 h-8 rounded-full bg-green-500/20 hover:bg-green-500/30 border border-green-500/50 flex items-center justify-center transition-all duration-200 hover:scale-110"
              aria-label="Previous"
            >
              <SkipBack className="w-4 h-4 text-green-400" />
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                togglePlayPause();
              }}
              className="w-10 h-10 rounded-full bg-green-500/30 hover:bg-green-500/40 border border-green-500/50 flex items-center justify-center transition-all duration-200 hover:scale-110"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 text-green-400" />
              ) : (
                <Play className="w-4 h-4 text-green-400 ml-0.5" />
              )}
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="w-8 h-8 rounded-full bg-green-500/20 hover:bg-green-500/30 border border-green-500/50 flex items-center justify-center transition-all duration-200 hover:scale-110"
              aria-label="Next"
            >
              <SkipForward className="w-4 h-4 text-green-400" />
            </button>
          </div>
        </div>
      </div>

      {/* 🎧 Audio Element */}
      <audio ref={audioRef} src={currentSong.songUrl} onEnded={handleSongEnd} />
    </motion.div>
  );
};

export default RotatingVinylPlayer;