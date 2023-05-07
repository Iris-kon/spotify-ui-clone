import Link from "next/link"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import Image from "next/image"
import { Footer } from "@/components/Footer"
import { Sidebar } from "@/components/Sidebar"
import { MostPlayed } from "@/components/MostPlayed"
import { MayLike } from "@/components/MayLike"

export default function Home() {
  function getGreentings() {
    const hour = new Date().getHours()

    if (hour >= 6 && hour <= 12) {
      return "Good Morning"
    } else if (hour > 12 && hour <= 18) {
      return "Good Afternoon"
    } else if (hour > 18 && hour <= 21) {
      return "Good Evening"
    } else {
      return "Good Night"
    }
  }

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6 overflow-auto mb-[8%]">
          <div className=" flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>

            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="mt-10 font-semibold text-3xl">{getGreentings()}</h1>

          <MostPlayed />

          <h2 className="mt-10 font-semibold text-2xl">
            Made for Íris Oliveira
          </h2>

          <MayLike />
        </main>
      </div>

      <Footer />
    </div>
  )
}
