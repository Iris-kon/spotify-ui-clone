import {
  Laptop2,
  LayoutList,
  Maximize2,
  Mic2,
  Play,
  Repeat,
  SkipBack,
  Volume,
} from "lucide-react"
import { SkipForward } from "lucide-react"
import { Shuffle } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="w-full bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between fixed bottom-0">
      <div className="flex items-center gap-3">
        <Image
          src="/album.jpg"
          width={56}
          height={56}
          alt="Capa do álbum Hybrid theory da banda linkin Park"
        />
        <div className="flex flex-col">
          <strong className="font-normal">High Voltage</strong>
          <span className="text-xs text-zinc-400">Linkin Park</span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <Shuffle size={20} className="text-zinc-200" />
          <SkipBack size={20} className="text-zinc-200" />

          <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
            <Play />
          </button>

          <SkipForward size={20} className="text-zinc-200" />
          <Repeat size={20} className="text-zinc-200" />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:31</span>
          <input
            value={19}
            min={0}
            max={198}
            type="range"
            className="h-2 bg-zinc-400 hover:bg-zinc-200 rounded-lg w-96 accent-zinc-200"
          />
          <span className="text-xs text-zinc-400">3:30</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Mic2 size={20} />
        <LayoutList size={20} />
        <Laptop2 size={20} />
        <div className=" flex items-center gap-2 ">
          <Volume />
          <input
            value={80}
            min={0}
            max={100}
            type="range"
            className="h-1 bg-zinc-400 hover:bg-zinc-200 rounded-lg w-24 accent-zinc-200"
          />
        </div>
        <Maximize2 size={20} />
      </div>
    </footer>
  )
}
