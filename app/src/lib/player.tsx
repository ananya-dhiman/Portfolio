'use client'
import { useState, useEffect, useRef } from "react"

export default function LocalPlaylistPlayer() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const songs = [
    { name: "Duvet", artist: "Bôa", url: "/playlist/Duvet.mp3" },
    { name: "Call It Fate,Call It Karma", artist: "The Strokes", url: "/playlist/Call.mp3" },
    { name: "Notion", artist: "The Rare Occasion", url: "/playlist/Notion.mp3" }
  ]

  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = new Audio(songs[currentIndex].url)
    audioRef.current = audio
    audio.play()

    audio.addEventListener("ended", () => {
      setCurrentIndex((prev) => (prev + 1) % songs.length)
    })

    return () => {
      audio.pause()
      audio.removeEventListener("ended", () => {})
    }
  }, [currentIndex])

  return (
    <div className="text-center mt-10">
      <h2 className="text-xl font-bold">{songs[currentIndex].name}</h2>
      <p className="text-gray-400">{songs[currentIndex].artist}</p>

      <div className="mt-4 flex justify-center gap-4">
        <button
          onClick={() =>
            setCurrentIndex((prev) =>
              prev === 0 ? songs.length - 1 : prev - 1
            )
          }
          className="px-4 py-2 rounded bg-gray-700 text-white"
        >
          ⏮ Prev
        </button>

        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % songs.length)}
          className="px-4 py-2 rounded bg-gray-700 text-white"
        >
          ⏭ Next
        </button>
      </div>
    </div>
  )
}
