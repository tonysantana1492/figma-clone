"use client";

import { Live } from "@/components/Live";

export default function Page() {
  return (
   <div className="h-[100dvh] w-full flex justify-center items-center text-center">
    <h1 className="text-2xl text-white">Figma Clone</h1>
    <Live />
   </div>
  );
}
