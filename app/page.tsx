import Booking from "@/components/Booking";
import Camp from "@/components/Camp";
import Cards from "@/components/Cards";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Cards />
      <Booking />
      <Camp />
      {/* <Guide /> */}
      <Features />
      {/* <GetApp /> */}
    </>
  )
}
