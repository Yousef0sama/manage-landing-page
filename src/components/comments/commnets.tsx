import CTA from "../ui/CTA";
import CommnetsFetch from "./commnetsFetch";

export default function Commnets() {
  return (
    <section id="comments" className="flex flex-col items-center py-16 gap-y-1">
      <h2 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-blue-primary-950"> What they&apos;ve said </h2>
      <CommnetsFetch />
      <CTA />
    </section>
  )
}
