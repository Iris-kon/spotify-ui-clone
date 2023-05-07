import { Home } from "lucide-react"
import { Library, Search } from "lucide-react"
import Link from "next/link"

export function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6 fixed h-screen">
      <div className=" flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
        <div className="w-3 h-3 bg-green-500 rounded-full" />
      </div>

      <nav className="space-y-5 mt-10">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold text-zinc-100"
        >
          <Home />
          Home
        </Link>
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold text-zinc-100"
        >
          <Search />
          Search
        </Link>
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold text-zinc-100"
        >
          <Library />
          Your Library
        </Link>
      </nav>

      <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-2">
        <Link href="/" className="text-sm text-zinc-400 hover:text-zinc-100">
          Classic Rock
        </Link>
        <Link href="/" className="text-sm text-zinc-400 hover:text-zinc-100">
          Punk Rock
        </Link>
        <Link href="/" className="text-sm text-zinc-400 hover:text-zinc-100">
          Heavy Metal
        </Link>
        <Link href="/" className="text-sm text-zinc-400 hover:text-zinc-100">
          Alternative
        </Link>
        <Link href="/" className="text-sm text-zinc-400 hover:text-zinc-100">
          Indies
        </Link>
        <Link href="/" className="text-sm text-zinc-400 hover:text-zinc-100">
          Best of 2022
        </Link>
      </nav>
    </aside>
  )
}
