// "use client"

// import Link from "next/link"
// import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"

// export function HeroSpline() {
//   return (
//     <section className="relative h-[100dvh] w-full overflow-hidden bg-background">
//       {/* Spline 3D embed */}
//       <iframe
//         title="Ananya's Vault 3D Hero"
//         src="https://my.spline.design/robotfollowcursorforlandingpage-DxgpurIefx3UjtlrBoK9FN0D/"
//         frameBorder="0"
//         width="100%"
//         height="100%"
//         className="absolute inset-0"
//       />

//       {/* Subtle dark overlay to ensure text contrast */}
//       <div className="absolute inset-0 bg-background/40 backdrop-blur-[1px] pointer-events-none" aria-hidden />

//       {/* Centered overlay content */}
//       <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center pointer-events-none">
//         <motion.h1
//           initial={{ opacity: 0, y: 12 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//           className="text-balance text-5xl font-bold tracking-tight sm:text-6xl"
//         >
//           {"Ananya’s Vault"}
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
//           className="mt-3 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg"
//         >
//           {"A creative hub inspired by Obsidian."}
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
//           className="mt-8"
//         >
//           <Link href="#vault" className="pointer-events-auto">
//             <Button
//               size="lg"
//               className="rounded-full bg-primary px-8 text-primary-foreground shadow-lg shadow-primary/30 transition-shadow hover:shadow-primary/50"
//             >
//               {"Enter Vault"}
//             </Button>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   )
// }
