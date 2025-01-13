"use client";

import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container max-w-7xl mx-auto px-4 py-12">
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-2"
        >
          <Skeleton className="h-10 w-[200px]" />
          <Skeleton className="h-5 w-[300px]" />
        </motion.div>

        <div className="border-b" />

        <div className="container px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col md:flex-row items-start gap-8 max-w-6xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex-1 space-y-6"
            >
              <Skeleton className="h-12 w-3/4" />
              <div className="space-y-4">
                <Skeleton className="h-4 w-[95%]" />
                <Skeleton className="h-4 w-[90%]" />
                <Skeleton className="h-4 w-[85%]" />
                <Skeleton className="h-4 w-[88%]" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="pt-4 space-y-4"
              >
                <Skeleton className="h-6 w-40" />
                <div className="flex gap-6">
                  {[...Array(4)].map((_, i) => (
                    <Skeleton key={i} className="h-8 w-8 rounded-full" />
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex-1"
            >
              <div className="aspect-[16/9] relative">
                <Skeleton className="h-full w-full rounded-2xl" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
