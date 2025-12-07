
// imports

// interfaces
import type { FeatureI } from "@/interfaces/feature"

export default function Feature(props: FeatureI) {
  return (
    <li className="flex flex-wrap gap-0 md:gap-x-6 text-left">
      <div className="flex w-screen bg-orange-primary-400/10 md:bg-transparent rounded-l-full">
        <span className="bg-orange-primary-400 py-2 px-6 rounded-full text-white font-bold ">{props.id}</span>
        <h3 className="text-blue-primary-950 py-2 font-bold pl-3 lg:pl-10">{props.title}</h3>
      </div>
        <p className="text-gray-neutral-300 pl-4 lg:pl-27 pr-8 md:pr-0">
          {props.description}
        </p>
    </li>
  )
}
