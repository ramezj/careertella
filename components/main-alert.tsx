import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import ShineBorder from "./magicui/shine-border";

export async function MainAlert() {
  return (
    <div className="flex items-center justify-center cursor-pointer">
      <AnimatedGradientText>
        🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r text-white`,
          )}
        >
          Introducing HireHollo
        </span>
        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>
    </div>
  );
}

export function Alert() {
  return (
    <div className="rounded-3xl bg-black relative">
    <ShineBorder color={"white"} className="max-w-fit p-4 py-1.5 border text-sm font-light flex items-center justify-center cursor-pointer bg-black">
        🎉 
        <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r dark:text-white text-black`,
          )}
        >
          Introducing Heliup <i>Beta</i>
        </span>
        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
    </ShineBorder>
    </div>
  )
}
