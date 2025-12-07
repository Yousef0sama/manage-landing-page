  import React from 'react'

  export default function Simplify() {
    return (
      <section className="flex flex-wrap gap-10 md:flex-nowrap bg-orange-primary-400 lg:bg-[url('./images/bg-simplify-section-desktop.svg')] bg-[url('/images/bg-simplify-section-mobile.svg')] bg-no-repeat lg:bg-[left_calc((0.96*100vw)-1136px)_bottom_0rem] bg-[left_0rem_top_2.5rem] bg-[length:5%] lg:bg-auto text-white py-16 sm:px-32 px-10 md:justify-between justify-center items-center">
        <h2 className='font-bold text-3xl max-w-sm'> Simplify how your team works today.</h2>
        <div>
          <button className="bg-white px-6 py-2 rounded-full text-orange-primary-400 hover:text-orange-primary-400/50 font-bold shadow-[0px_10px_8px_-4px] cursor-pointer transition-all duration-300">
            Get Started
          </button>
        </div>
      </section>
    )
  }
