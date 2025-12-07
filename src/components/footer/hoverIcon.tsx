"use client"

// imports

// hooks
import { useState } from "react";

// components
import Link from "next/link";

export default function HoverIcon({ Icon } : {Icon: React.ComponentType<{ color: string }>}) {
  const defaultColor = "#ffffff";
  const hoverColor = "#f25f3a";

  const [color, setColor] = useState(defaultColor);

  return (
    <Link
      href="#"
      onMouseEnter={() => setColor(hoverColor)}
      onMouseLeave={() => setColor(defaultColor)}
    >
      <Icon color={color} />
    </Link>
  );
}
