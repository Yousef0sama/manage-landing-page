"use client";

import HoverIcon from "./hoverIcon";
import Link from "next/link";

// svgs
import Logo from "@/svgs/logo";
import FaceookIcon from "@/svgs/icon-facebook";
import InstagramIcon from "@/svgs/icon-instagram";
import PinterestIcon from "@/svgs/icon-pinterest";
import TwitterIcon from "@/svgs/icon-twitter";
import YoutueIcon from "@/svgs/icon-youtube";
import Form from "./form";

export default function Footer() {
  return (
    <footer className="bg-gray-neutral-950 text-white">
      <div
        className="
        grid
        grid-cols-1
        lg:grid-cols-3
        gap-y-8
        lg:gap-y-0
        px-10 sm:px-16
        py-10
        lg:py-12
      "
      >

        {/* Logo */}
        <div className="lg:col-start-1 flex justify-center lg:justify-start order-3 lg:order-1">
          <Logo color="#ffffff" />
        </div>

        {/* Links */}
        <div
          className="
          lg:col-start-2
          flex justify-between
          lg:order-2
          order-4
          text-center lg:text-left
        "
        >
          <div className="flex flex-col gap-2">
            <Link href="#" className="hover:text-orange-primary-400">Home</Link>
            <Link href="#" className="hover:text-orange-primary-400">Pricing</Link>
            <Link href="#" className="hover:text-orange-primary-400">Products</Link>
            <Link href="#" className="hover:text-orange-primary-400">About Us</Link>
          </div>

          <div className="flex flex-col gap-2">
            <Link href="#" className="hover:text-orange-primary-400">Careers</Link>
            <Link href="#" className="hover:text-orange-primary-400">Community</Link>
            <Link href="#" className="hover:text-orange-primary-400">Privacy Policy</Link>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-start-3 flex justify-center lg:justify-end order-1 lg:order-3">
          <Form />
        </div>

        {/* Social Icons */}
        <div className="flex justify-center lg:justify-start gap-6 order-2 lg:order-4">
          <HoverIcon Icon={FaceookIcon} />
          <HoverIcon Icon={YoutueIcon} />
          <HoverIcon Icon={TwitterIcon} />
          <HoverIcon Icon={PinterestIcon} />
          <HoverIcon Icon={InstagramIcon} />
        </div>

        {/* Copyright */}
        <div className="lg:col-start-3 flex justify-center lg:justify-end text-gray-neutral-300 order-5">
          Copyright 2020. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
