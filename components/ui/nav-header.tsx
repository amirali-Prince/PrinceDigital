"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface TabItem {
  label: string;
  href: string;
}

interface Position {
  left: number;
  width: number;
  opacity: number;
}

interface TabProps {
  children: React.ReactNode;
  href: string;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
}

interface CursorProps {
  position: Position;
}

function NavHeader({ tabs }: { tabs: TabItem[] }) {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      className="relative flex w-fit h-12 items-center rounded-full bg-white/[0.06] backdrop-blur-2xl border border-white/[0.12] shadow-2xl shadow-black/60 p-1"
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
    >
      {tabs.map((tab) => (
        <Tab key={tab.href} href={tab.href} setPosition={setPosition}>
          {tab.label}
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
}

const Tab = ({ children, href, setPosition }: TabProps) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 h-full flex items-center cursor-pointer"
    >
      <a
        href={href}
        className="h-full flex items-center px-3 text-[13px] font-medium text-white/65 hover:text-white transition-colors whitespace-nowrap"
      >
        {children}
      </a>
    </li>
  );
};

const Cursor = ({ position }: CursorProps) => {
  return (
    <motion.li
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      animate={position as any}
      className="absolute z-0 top-1 h-[calc(100%-8px)] rounded-full bg-gradient-to-r from-indigo-500/40 to-violet-500/40 border border-indigo-500/30"
    />
  );
};

export { NavHeader, type TabItem };
