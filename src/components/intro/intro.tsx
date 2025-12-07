// imports

// components
import Header from "@/components/intro/header/header";
import CTA from "../ui/CTA";
import Image from "next/image";

export default function Intro() {
  return (
    <section id="intro" className="bg-[url('./images/bg-tablet-pattern.svg')] bg-no-repeat bg-[right_-11rem_top_-9rem] min-h-screen md:bg-[length:700px] bg-[length:500px]">
      <Header />
      {/* Hero */}
      <div className="flex flex-wrap-reverse md:flex-nowrap md:justify-between justify-center md:items-center px-16 lg:px-32 xl:px-48 pb-4 min-h-[calc(100vh-7rem)] text-center md:text-left gap-y-12">
        <div className="w-xs lg:w-sm xl:w-md min-w-xs">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-primary-950">
            Bring everyone together to build better products.
          </h1>
          <p className="mt-6 text-lg text-gray-neutral-300 md:text-xl">
            Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
          </p>
          <div className="mt-6">
            <CTA />
          </div>
        </div>
        <div className="flex md:justify-end w-xs lg:w-sm xl:w-md min-w-xs">
          <Image
            src="images/illustration-intro.svg"
            alt="Intro Illustration"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
