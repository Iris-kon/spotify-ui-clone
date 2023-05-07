import { Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function MostPlayedCard() {
  return (
    <Link
      href="/"
      className="bg-white/5 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
    >
      <Image
        src="/album.jpg"
        width={104}
        height={104}
        alt="Capa do álbum Hybrid theory da banda linkin Park"
      />
      <strong>Hybrid Theory</strong>
      <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
        <Play />
      </button>
    </Link>
  )
}
