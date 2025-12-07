// imports

// components
import Link from "next/link"

// interfaces
import { Dispatch, SetStateAction } from "react"

type NavProps = {
  menuOpen: boolean;
  setmenuOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Nav( { menuOpen, setmenuOpen }: NavProps ) {
  return (
    <nav className={`md:flex ${menuOpen ? 'flex' : 'hidden'} items-center justify-center md:h-full md:bg-transparent md:relative absolute bg-white md:mt-0 mt-68 md:mx-0 mx-[2.5%] md:w-fit w-[90%] md:rounded-none rounded md:py-0 py-3 md:shadow-none shadow-[200px_200px_400px_200px_rgba(0,0,0,0.2)]`}>
      <ul className="flex items-center justify-center flex-col md:flex-row md:space-x-4 md:space-y-0 space-x-0 space-y-4 md:w-fit w-full">
        <li onClick={() => setmenuOpen(false)} className="text-blue-primary-950 font-medium hover:text-gray-neutral-300 md:w-fit w-full text-center"><Link href='#'>Pricing</Link></li>
        <li onClick={() => setmenuOpen(false)} className="text-blue-primary-950 font-medium hover:text-gray-neutral-300 md:w-fit w-full text-center"><Link href='#'>Product</Link></li>
        <li onClick={() => setmenuOpen(false)} className="text-blue-primary-950 font-medium hover:text-gray-neutral-300 md:w-fit w-full text-center"><Link href='#'>About Us</Link></li>
        <li onClick={() => setmenuOpen(false)} className="text-blue-primary-950 font-medium hover:text-gray-neutral-300 md:w-fit w-full text-center"><Link href='#'>Careers</Link></li>
        <li onClick={() => setmenuOpen(false)} className="text-blue-primary-950 font-medium hover:text-gray-neutral-300 md:w-fit w-full text-center"><Link href='#'>Community</Link></li>
      </ul>
    </nav>
  )
}
