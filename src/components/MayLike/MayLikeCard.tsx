import Image from "next/image"
import Link from "next/link"

export function MayLikeCard() {
  return (
    <Link
      href="#"
      className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10"
    >
      <Image
        className="w-full"
        src="/album.jpg"
        width={120}
        height={120}
        alt="Capa do álbum Hybrid theory da banda linkin Park"
      />
      <strong className="font-semibold">Daily Mix 1</strong>
      <span className="text-sm text-zinc-500">
        High Voltage, Part of Me, Step Up and more
      </span>
    </Link>
  )
}
