import { Metadata } from "next"
import { LoadingStatisticalCard } from "@/components/statistical-card";
import { Button } from "@/components/ui/button";
import { SquareArrowOutUpRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Loader2 } from "lucide-react";

export const metadata: Metadata = {
    title: "Loading",
    description: "Generated by create next app",
  };

export default function Loading() {
    return (
        <>
        <div className="flex justify-between items-center w-full">
        <h1 className="font-bold text-3xl tracking-tight">Overview</h1>
        <Button size={"sm"} variant={"expandIcon"} Icon={SquareArrowOutUpRight} iconPlacement="right" className="w-36 bg-blue-600 text-white hover:bg-blue-700 duration-200">
        Preview
        </Button>
        </div>
        {/* <div className="flex sm:flex-row flex-col gap-2">
          <div className="relative w-full">
          <LoadingStatisticalCard name="Active Jobs"/>
          </div>
          <div className="relative w-full">
          <LoadingStatisticalCard name="Inactive Jobs"/>
          </div>
          <div className="relative w-full">
          <LoadingStatisticalCard name="Total Applicants"/>
          </div>
        </div>
        <div className="space-y-2">
        <div className="space-y-4 w-full">
              <div className="space-y-2">
              <Skeleton className="w-24 h-6" />
              <Skeleton className="w-full h-10" />
              </div>
              <div className="space-y-2">
              <Skeleton className="w-24 h-6" />
              <Skeleton className="w-full h-10" />
              </div>
              <div className="space-y-2">
              <Skeleton className="w-24 h-6" />
              <Skeleton className="w-full h-[4.17rem]" />
              </div>
              <div>
              <Button type="submit">Save Changes</Button>
              </div>
            </div>
          </div> */}
           <div className="w-full h-full items-center flex flex-col justify-center">
        <Loader2 className="size-8 animate-spin text-gray-200" />
        </div>
        </>
    )
}