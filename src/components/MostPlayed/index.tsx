import { MostPlayedCard } from "./MostPlayedCard"

export function MostPlayed() {
  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      <MostPlayedCard />
      <MostPlayedCard />
      <MostPlayedCard />
      <MostPlayedCard />
      <MostPlayedCard />
      <MostPlayedCard />
    </div>
  )
}
