"use client";

import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex min-h-screen flex-col items-center justify-center bg-background"
      aria-label="Loading content"
      role="status"
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-4xl flex flex-col items-center text-center space-y-10 py-12 sm:py-20 lg:py-32">
          <Skeleton className="h-14 sm:h-20 lg:h-24 w-[80%] sm:w-[70%] rounded-lg" />
          <Skeleton className="h-4 sm:h-5 w-[85%] sm:w-[75%] rounded-md" />
          <Skeleton className="h-4 sm:h-5 w-[60%] sm:w-[50%] rounded-md" />
        </section>
      </div>

      <div className="absolute bottom-10 flex items-center gap-2">
        <div className="h-2 w-2 animate-bounce bg-primary rounded-full delay-100" />
        <div className="h-2 w-2 animate-bounce bg-primary rounded-full delay-200" />
        <div className="h-2 w-2 animate-bounce bg-primary rounded-full delay-300" />
      </div>
    </motion.main>
  );
}
