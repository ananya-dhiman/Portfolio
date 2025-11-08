
// 'use client';

// import React, { useState, useRef, useEffect } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';

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
//   const [isOpen, setIsOpen] = useState(false);
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
//     <motion.div 
//       className="fixed top-1/2 -translate-y-1/2 hidden sm:flex pointer-events-auto z-50"
//       initial={{ right: -200 }}
//       animate={{ right: isOpen ? 20 : -300 }}
//       transition={{ type: 'spring', damping: 25, stiffness: 200 }}
//     >
//       {/* Rotating vinyl with controls inside */}
//       <div
//         className="relative w-104 h-104 cursor-pointer flex-shrink-0"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {/* Background glow */}
      
        
//         {/* Rotating outer vinyl */}
//         <motion.div
//           className="absolute inset-0"
//           animate={controls}
//           initial={{ rotate: 0 }}
//         >
//           <div  />
//           <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-900 via-black to-gray-800 shadow-2xl border-2 border-green-500/50">
//             <div className="absolute inset-0 rounded-full opacity-30">
//               {[...Array(18)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="absolute inset-0 rounded-full border border-gray-700"
//                   style={{ margin: `${i * 8}px` }}
//                 />
//               ))}
//             </div>
//           </div>
//         </motion.div>

//         {/* Center label with controls - doesn't rotate */}
//         <div className="absolute p-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-51 h-51 rounded-full bg-gradient-to-br from-gray-800 via-gray-900 to-black border-2 border-green-500/50 flex flex-col items-center justify-center gap-3 shadow-2xl z-10">
//           {/* Song info */}
//           <div className="flex flex-col items-center text-center px-4">
//             <span className="text-sm font-semibold text-white truncate max-w-full">{currentSong.songName}</span>
//             <span className="text-xs text-gray-400 truncate max-w-full">{currentSong.artistName}</span>
//           </div>

//           {/* Control buttons */}
//           <div className="flex items-center justify-center gap-2">
//             {/* Prev Button */}
//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 handlePrev();
//               }}
//               className="w-8 h-8 rounded-full bg-green-500/20 hover:bg-green-500/30 border border-green-500/50 flex items-center justify-center transition-all duration-200 hover:scale-110"
//               aria-label="Previous"
//             >
//               <SkipBack className="w-4 h-4 text-primary" />
//             </button>

//             {/* Play/Pause Button */}
//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 togglePlayPause();
//               }}
//               className="w-10 h-10 rounded-full bg-green-500/30 hover:bg-green-500/40 border border-green-500/50 flex items-center justify-center transition-all duration-200 hover:scale-110"
//               aria-label={isPlaying ? 'Pause' : 'Play'}
//             >
//               {isPlaying ? (
//                 <Pause className="w-4 h-4 text-primary" />
//               ) : (
//                 <Play className="w-4 h-4 text-primary ml-0.5" />
//               )}
//             </button>

//             {/* Next Button */}
//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 handleNext();
//               }}
//               className="w-8 h-8 rounded-full bg-green-500/20 hover:bg-green-500/30 border border-green-500/50 flex items-center justify-center transition-all duration-200 hover:scale-110"
//               aria-label="Next"
//             >
//               <SkipForward className="w-4 h-4 text-primary" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* 🎧 Audio Element */}
//       <audio ref={audioRef} src={currentSong.songUrl} onEnded={handleSongEnd} />
//     </motion.div>
//   );
// };

// export default RotatingVinylPlayer;



// 'use client';

// import React, { useState, useRef, useEffect } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';

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
//   const [isOpen, setIsOpen] = useState(false);
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
//     <>
//       {/* Desktop Version */}
//       <motion.div 
//         className="fixed top-1/2 -translate-y-1/2 hidden sm:flex pointer-events-auto z-50"
//         initial={{ right: -200 }}
//         animate={{ right: isOpen ? 20 : -300 }}
//         transition={{ type: 'spring', damping: 25, stiffness: 200 }}
//       >
//         <div
//           className="relative w-104 h-104 cursor-pointer flex-shrink-0"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {/* Rotating outer vinyl */}
//           <motion.div
//             className="absolute inset-0"
//             animate={controls}
//             initial={{ rotate: 0 }}
//           >
//             <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-900 via-black to-gray-800 shadow-2xl border-2 border-green-500/50">
//               <div className="absolute inset-0 rounded-full opacity-30">
//                 {[...Array(18)].map((_, i) => (
//                   <div
//                     key={i}
//                     className="absolute inset-0 rounded-full border border-gray-700"
//                     style={{ margin: `${i * 8}px` }}
//                   />
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           {/* Center label with controls - doesn't rotate */}
//           <div className="absolute p-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-51 h-51 rounded-full bg-gradient-to-br from-gray-800 via-gray-900 to-black border-2 border-green-500/50 flex flex-col items-center justify-center gap-3 shadow-2xl z-10">
//             {/* Song info */}
//             <div className="flex flex-col items-center text-center px-4">
//               <span className="text-sm font-semibold text-white truncate max-w-full">{currentSong.songName}</span>
//               <span className="text-xs text-gray-400 truncate max-w-full">{currentSong.artistName}</span>
//             </div>

//             {/* Control buttons */}
//             <div className="flex items-center justify-center gap-2">
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handlePrev();
//                 }}
//                 className="w-8 h-8 rounded-full bg-green-500/20 hover:bg-green-500/30 border border-green-500/50 flex items-center justify-center transition-all duration-200 hover:scale-110"
//                 aria-label="Previous"
//               >
//                 <SkipBack className="w-4 h-4 text-primary" />
//               </button>

//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   togglePlayPause();
//                 }}
//                 className="w-10 h-10 rounded-full bg-green-500/30 hover:bg-green-500/40 border border-green-500/50 flex items-center justify-center transition-all duration-200 hover:scale-110"
//                 aria-label={isPlaying ? 'Pause' : 'Play'}
//               >
//                 {isPlaying ? (
//                   <Pause className="w-4 h-4 text-primary" />
//                 ) : (
//                   <Play className="w-4 h-4 text-primary ml-0.5" />
//                 )}
//               </button>

//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleNext();
//                 }}
//                 className="w-8 h-8 rounded-full bg-green-500/20 hover:bg-green-500/30 border border-green-500/50 flex items-center justify-center transition-all duration-200 hover:scale-110"
//                 aria-label="Next"
//               >
//                 <SkipForward className="w-4 h-4 text-primary" />
//               </button>
//             </div>
//           </div>
//         </div>

//         <audio ref={audioRef} src={currentSong.songUrl} onEnded={handleSongEnd} />
//       </motion.div>

//       {/* Mobile Version - Top positioned */}
//       <motion.div 
//         className="fixed left-1/2 -translate-x-1/2 flex sm:hidden pointer-events-auto z-50"
//         initial={{ top: -150 }}
//         animate={{ top: isOpen ? 0 : -150 }}
//         transition={{ type: 'spring', damping: 25, stiffness: 200 }}
//       >
//         <div
//           className="relative w-64 h-64 cursor-pointer flex-shrink-0"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {/* Rotating outer vinyl */}
//           <motion.div
//             className="absolute inset-0"
//             animate={controls}
//             initial={{ rotate: 0 }}
//           >
//             <div className="absolute inset-2 rounded-full bg-gradient-to-br from-gray-900 via-black to-gray-800 shadow-2xl border-2 border-green-500/50">
//               <div className="absolute inset-0 rounded-full opacity-30">
//                 {[...Array(14)].map((_, i) => (
//                   <div
//                     key={i}
//                     className="absolute inset-0 rounded-full border border-gray-700"
//                     style={{ margin: `${i * 6}px` }}
//                   />
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           {/* Center label with controls - doesn't rotate */}
//           <div className="absolute p-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-gray-800 via-gray-900 to-black border-2 border-green-500/50 flex flex-col items-center justify-center gap-2 shadow-2xl z-10">
//             {/* Song info */}
//             <div className="flex flex-col items-center text-center px-2">
//               <span className="text-xs font-semibold text-white truncate max-w-full">{currentSong.songName}</span>
//               <span className="text-[10px] text-gray-400 truncate max-w-full">{currentSong.artistName}</span>
//             </div>

//             {/* Control buttons */}
//             <div className="flex items-center justify-center gap-1">
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handlePrev();
//                 }}
//                 className="w-6 h-6 rounded-full bg-green-500/20 hover:bg-green-500/30 border border-green-500/50 flex items-center justify-center transition-all duration-200 active:scale-95"
//                 aria-label="Previous"
//               >
//                 <SkipBack className="w-3 h-3 text-primary" />
//               </button>

//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   togglePlayPause();
//                 }}
//                 className="w-7 h-7 rounded-full bg-green-500/30 hover:bg-green-500/40 border border-green-500/50 flex items-center justify-center transition-all duration-200 active:scale-95"
//                 aria-label={isPlaying ? 'Pause' : 'Play'}
//               >
//                 {isPlaying ? (
//                   <Pause className="w-3 h-3 text-primary" />
//                 ) : (
//                   <Play className="w-3 h-3 text-primary ml-0.5" />
//                 )}
//               </button>

//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleNext();
//                 }}
//                 className="w-6 h-6 rounded-full bg-green-500/20 hover:bg-green-500/30 border border-green-500/50 flex items-center justify-center transition-all duration-200 active:scale-95"
//                 aria-label="Next"
//               >
//                 <SkipForward className="w-3 h-3 text-primary" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </>
//   );
// };

// export default RotatingVinylPlayer;

// 'use client';

// import React, { useState, useRef, useEffect } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';

// interface Song {
//   songUrl: string;
//   songName: string;
//   artistName: string;
  
// }
// type prop={
//   mobVinylOpen?:boolean
// }

// const RotatingVinylPlayer: React.FC = (mobVinylOpen) => {
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
//   const [isOpen, setIsOpen] = useState(false);
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
//     <>
//       {/* Desktop Version */}
//       <motion.div 
//         className="fixed top-1/2 -translate-y-1/2 hidden sm:flex pointer-events-auto z-50"
//         initial={{ right: -200 }}
//         animate={{ right: isOpen ? 20 : -300 }}
//         transition={{ type: 'spring', damping: 25, stiffness: 200 }}
//       >
//         <div
//           className="relative w-104 h-104 cursor-pointer flex-shrink-0"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {/* Rotating outer vinyl */}
//           <motion.div
//             className="absolute inset-0"
//             animate={controls}
//             initial={{ rotate: 0 }}
//           >
//             <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-900 via-black to-gray-800 shadow-2xl border-2 border-primary/50">
//               <div className="absolute inset-0 rounded-full opacity-30">
//                 {[...Array(18)].map((_, i) => (
//                   <div
//                     key={i}
//                     className="absolute inset-0 rounded-full border border-gray-700"
//                     style={{ margin: `${i * 8}px` }}
//                   />
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           {/* Center label with controls - doesn't rotate */}
//           <div className="absolute p-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-51 h-51 rounded-full bg-gradient-to-br from-gray-800 via-gray-900 to-black border-2 border-primary/50 flex flex-col items-center justify-center gap-3 shadow-2xl z-10">
//             {/* Song info */}
//             <div className="flex flex-col items-center text-center px-4">
//               <span className="text-sm font-semibold text-white truncate max-w-full">{currentSong.songName}</span>
//               <span className="text-xs text-gray-400 truncate max-w-full">{currentSong.artistName}</span>
//             </div>

//             {/* Control buttons */}
//             <div className="flex items-center justify-center gap-2">
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handlePrev();
//                 }}
//                 className="w-8 h-8 rounded-full bg-primary/20 hover:bg-primary/30 border border-primary/50 flex items-center justify-center transition-all duration-200 hover:scale-110"
//                 aria-label="Previous"
//               >
//                 <SkipBack className="w-4 h-4 text-primary" />
//               </button>

//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   togglePlayPause();
//                 }}
//                 className="w-10 h-10 rounded-full bg-primary/30 hover:bg-primary/40 border border-primary/50 flex items-center justify-center transition-all duration-200 hover:scale-110"
//                 aria-label={isPlaying ? 'Pause' : 'Play'}
//               >
//                 {isPlaying ? (
//                   <Pause className="w-4 h-4 text-primary" />
//                 ) : (
//                   <Play className="w-4 h-4 text-primary ml-0.5" />
//                 )}
//               </button>

//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleNext();
//                 }}
//                 className="w-8 h-8 rounded-full bg-primary/20 hover:bg-primary/30 border border-/50 flex items-center justify-center transition-all duration-200 hover:scale-110"
//                 aria-label="Next"
//               >
//                 <SkipForward className="w-4 h-4 text-primary" />
//               </button>
//             </div>
//           </div>
//         </div>

//         <audio ref={audioRef} src={currentSong.songUrl} onEnded={handleSongEnd} />
//       </motion.div>

//       {/* Mobile Version - Below TabBar */}
//       <motion.div 
//         className="fixed left-1/2 -translate-x-1/2 flex sm:hidden pointer-events-auto z-40"
//         initial={{ top: -100 }}
//         animate={{ top: isOpen ? 50 : -100 }}
//         transition={{ type: 'spring', damping: 25, stiffness: 200 }}
//       >
//         <div
//           className="relative w-64 h-64 cursor-pointer flex-shrink-0"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {/* Rotating outer vinyl */}
//           <motion.div
//             className="absolute inset-0"
//             animate={controls}
//             initial={{ rotate: 0 }}
//           >
//             <div className="absolute inset-2 rounded-full bg-gradient-to-br from-gray-900 via-black to-gray-800 shadow-2xl border-2 border-primary">
//               <div className="absolute inset-0 rounded-full opacity-30">
//                 {[...Array(14)].map((_, i) => (
//                   <div
//                     key={i}
//                     className="absolute inset-0 rounded-full border border-gray-700"
//                     style={{ margin: `${i * 6}px` }}
//                   />
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           {/* Center label with controls - doesn't rotate */}
//           <div className="absolute p-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-gray-800 via-gray-900 to-black border-2 border-green-500/50 flex flex-col items-center justify-center gap-2 shadow-2xl z-10">
//             {/* Song info */}
//             <div className="flex flex-col items-center text-center px-2">
//               <span className="text-xs font-semibold text-white truncate max-w-full">{currentSong.songName}</span>
//               <span className="text-[10px] text-gray-400 truncate max-w-full">{currentSong.artistName}</span>
//             </div>

//             {/* Control buttons */}
//             <div className="flex items-center justify-center gap-1">
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handlePrev();
//                 }}
//                 className="w-6 h-6 rounded-full bg-green-500/20 hover:bg-green-500/30 border border-green-500/50 flex items-center justify-center transition-all duration-200 active:scale-95"
//                 aria-label="Previous"
//               >
//                 <SkipBack className="w-3 h-3 text-primary" />
//               </button>

//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   togglePlayPause();
//                 }}
//                 className="w-7 h-7 rounded-full bg-green-500/30 hover:bg-green-500/40 border border-green-500/50 flex items-center justify-center transition-all duration-200 active:scale-95"
//                 aria-label={isPlaying ? 'Pause' : 'Play'}
//               >
//                 {isPlaying ? (
//                   <Pause className="w-3 h-3 text-primary" />
//                 ) : (
//                   <Play className="w-3 h-3 text-primary ml-0.5" />
//                 )}
//               </button>

//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleNext();
//                 }}
//                 className="w-6 h-6 rounded-full bg-green-500/20 hover:bg-green-500/30 border border-green-500/50 flex items-center justify-center transition-all duration-200 active:scale-95"
//                 aria-label="Next"
//               >
//                 <SkipForward className="w-3 h-3 text-primary" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </>
//   );
// };

// export default RotatingVinylPlayer;
// "use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";

interface Song {
  songUrl: string;
  songName: string;
  artistName: string;
}

interface RotatingVinylPlayerProps {
  songUrl?: string;
  songName?: string;
  artistName?: string;
  mobVinylOpen?: boolean;
  setMobVinylOpen?: (value: boolean) => void;
}

const RotatingVinylPlayer: React.FC<RotatingVinylPlayerProps> = ({

  mobVinylOpen = false,
  setMobVinylOpen,
}) => {
  const playlist: Song[] = [
    {
      songUrl: "/playlist/duvet.mp3",
      songName: "Duvet",
      artistName: "Bôa",
    },
    {
      songUrl: "/playlist/Call.mp3",
      songName: "Call It Fate, Call It Karma",
      artistName: "The Strokes",
    },
    {
      songUrl: "/playlist/Notion.mp3",
      songName: "Notion",
      artistName: "The Rare Occasions",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const controls = useAnimation();

  const currentSong = playlist[currentIndex];

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => setCurrentIndex((i) => (i + 1) % playlist.length);
  const handlePrev = () => setCurrentIndex((i) => (i - 1 + playlist.length) % playlist.length);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    audioRef.current.load();
    if (isPlaying) audioRef.current.play();
  }, [currentIndex, isPlaying]);

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
      {/* ✅ Desktop Vinyl */}
      <motion.div
        className="fixed top-1/2 -translate-y-1/2 hidden sm:flex z-50"
        initial={{ right: -200 }}
        animate={{ right: isOpen ? 20 : -300 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
      >
        <div
          className="relative w-104 h-104 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Rotating vinyl */}
          <motion.div className="absolute inset-0" animate={controls}>
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-900 via-black to-gray-800 shadow-2xl border-2 border-primary/50">
              {[...Array(18)].map((_, i) => (
                <div
                  key={i}
                  className="absolute inset-0 rounded-full border border-gray-700 opacity-30"
                  style={{ margin: `${i * 8}px` }}
                />
              ))}
            </div>
          </motion.div>

          {/* Not rotating center */}
          <div className="absolute top-1/2 left-1/2 p-10 -translate-x-1/2 -translate-y-1/2 w-51 h-51 rounded-full bg-black/85 border-2 border-primary/50 flex flex-col items-center gap-3 shadow-xl">
            <p className="text-sm font-semibold text-white truncate">{currentSong.songName}</p>
            <p className="text-xs text-gray-400 truncate">{currentSong.artistName}</p>

            <div className="flex gap-2">
              <button onClick={(e) => { e.stopPropagation(); handlePrev(); }}>
                <SkipBack className="text-primary w-4 h-4" />
              </button>

              <button onClick={(e) => { e.stopPropagation(); togglePlayPause(); }}>
                {isPlaying ? <Pause className="text-primary w-4 h-4" /> : <Play className="text-primary w-4 h-4" />}
              </button>

              <button onClick={(e) => { e.stopPropagation(); handleNext(); }}>
                <SkipForward className="text-primary w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <audio ref={audioRef} src={currentSong.songUrl} onEnded={handleNext} />
      </motion.div>

      {/* ✅ Mobile Modal Vinyl */}
      {mobVinylOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center sm:hidden z-[999]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
        >
          {/* ✅ Blur + close overlay - CLICK HERE TO CLOSE */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-md"
            onClick={() => {
              console.log("Backdrop clicked - closing modal");
              setMobVinylOpen?.(false);
            }}
          />

          {/* Vinyl - stops propagation so clicking vinyl doesn't close */}
          <div 
            className="relative w-64 h-64 cursor-pointer z-[1000]"
            onClick={(e) => {
              console.log("Vinyl clicked - NOT closing");
              e.stopPropagation();
            }}
          >
            <motion.div className="absolute inset-0" animate={controls}>
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-gray-900 via-black to-gray-800 shadow-2xl border-2 border-primary">
                {[...Array(14)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 rounded-full border border-gray-700 opacity-30"
                    style={{ margin: `${i * 6}px` }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Play circle */}
            <div className="absolute flex flex-col w-32 h-32 top-1/2 left-1/2 p-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/85 border border-primary/30 items-center justify-center gap-2 shadow-xl">
              <p className="text-xs font-semibold text-white truncate">{currentSong.songName}</p>
              <p className="text-[10px] text-gray-400 truncate">{currentSong.artistName}</p>

              <div className="flex gap-1">
                <button onClick={handlePrev}>
                  <SkipBack className="text-primary w-3 h-3" />
                </button>

                <button onClick={togglePlayPause}>
                  {isPlaying ? <Pause className="text-primary w-3 h-3" /> : <Play className="text-primary w-3 h-3" />}
                </button>

                <button onClick={handleNext}>
                  <SkipForward className="text-primary w-3 h-3" />
                </button>
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