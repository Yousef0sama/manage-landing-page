import FeaturesFetch from "./featuresFetch";


export default function About() {
  return (
    <section id="about" className="flex items-center">
      <div className="flex flex-wrap md:flex-nowrap md:justify-between justify-center w-screen pl-8 md:px-12 lg:px-32 xl:px-48 text-center md:text-left gap-y-12 pb-16">
        <div className="w-xs lg:w-sm xl:w-md min-w-xs pr-8 md:pr-0">
          <h2 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-blue-primary-950">What&apos;s different about Manage?</h2>
          <p className="mt-6 text-gray-neutral-300 max-w-80 md:w-66 lg:w-75 xl:w-80">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital
            product teams.
          </p>
        </div>
        <ul className="flex flex-col gap-y-8 md:w-sm xl:w-md min-w-xs">
          <FeaturesFetch />
        </ul>
      </div>
    </section>
  )
}
