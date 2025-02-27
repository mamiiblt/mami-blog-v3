"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import CustomSocialLinks from "@/components/CustomSocialLinks";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Coffee } from "@/components/Icons";

const RenderContent = ({ content }: { content: string }) => {
  const parts = content.split(/(\[.*?\]\(.*?\))/g);

  return (
    <>
      {parts.map((part, index) => {
        const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
        if (linkMatch) {
          const [_, text, url] = linkMatch;
          return (
            <Link
              key={index}
              href={url}
              className="text-primary hover:underline transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              {text}
            </Link>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
};

export default function AboutPage() {
  return (
    <AnimatePresence >
          <div className="py-5">
    <div className="sm:grid grid-cols-8 px-6 py-5 sm:py-9 gap-5 container max-w-5xl mx-auto">
      <div className="col-span-5 max-w-md">
        <div className="hidden sm:block flex justify-between">
          <div>
            <h1 className="text-xl sm:text-4xl pb-2 font-bold">
              Muhammed Ali
            </h1>
            <p className="text-sm text-muted-foreground text-base sm:text-2xl pb-2">
              a.k.a mami, muhammedmgs
            </p>

            <div className="my-3 space-x-2 md:space-x-3 pb-2">
            <CustomSocialLinks
                  platforms={["Github", "Instagram", "Telegram", "Twitter", "Spotify"]}
                  iconClassName="h-6 w-6 hover:scale-95 transition-transform duration-200"
                  className="gap-8"
                />
            </div>
          </div>

        </div>
        <div className="sm:hidden flex justify-center text-center">
          <div>
            <div className="sm:hidden col-span-3 pb-10 flex justify-center dark:text-[#F1F2F4] text-center">
              <Image alt="Profile Picture" src="/mamiiblt.jpg" width="140" height="140" quality="50" className="rounded-[35px]" />
            </div>
            <h1 className="text-xl sm:text-4xl pb-2 font-bold text-center">
              Muhammed Ali Bulut
            </h1>
            <p className="text-sm sm:text-2xl text-muted-foreground text-base pb-2 font-normal text-center">
              a.k.a mami, mamiiblt
            </p>
            <div className="my-3 space-x-2 md:space-x-3 pb-2">
            <CustomSocialLinks
                  platforms={["Github", "Instagram", "Telegram", "Twitter", "Spotify"]}
                  iconClassName="h-6 w-6 hover:scale-95 transition-transform duration-200"
                  className="gap-5"
                />
            </div>
          </div>
        </div>

        <p className="text-center sm:text-left text-muted-foreground text-base pb-4">Hello! I am Muhammad Ali, usually I'm working mainly on Android development, Web, AI and some reverse engineering projects / apps. When I'm not crafting code, you can find me summoning solutions to problems on online judges. Just don't ask me to cast any love spells, my magic only works on machines!</p>
        <Button
          size={"lg"}
          variant={"outline-gradient"}
          className="w-full text-center justify-content sm:w-auto transform hover:scale-105 transition-transform duration-200">
            <Coffee />
            <Link href="https://buymeacoffee.com/mamiiblt" className="ml-2">Buy me a coffee</Link>
        </Button>      
          </div>
      <div className="hidden sm:block col-span-3">
        <Image alt="Profile Picture" src="/mamiiblt.jpg" width="450" height="500" quality="50" className="rounded-md" />
      </div>
    </div>
  </div>
  </AnimatePresence>
  );
}
