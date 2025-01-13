"use client";

import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      <div className="space-y-8">
        {/* Tabs Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-6"
        >
          <Skeleton className="h-10 w-[300px] rounded-lg" /> {/* Tabs */}
          <Skeleton className="h-6 w-6 rounded-full" /> {/* Loading Spinner */}
        </motion.div>

        {/* Alert Placeholder */}
        <Skeleton className="h-12 w-full rounded-lg" />

        {/* Content Area */}
        <div className="space-y-6">
          {/* Config Tab Content */}
          <div className="space-y-4">
            <Skeleton className="h-6 w-32" /> {/* Section Title */}
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-5 w-24" /> {/* Field Label */}
                <Skeleton className="h-10 w-full" /> {/* Input Field */}
              </div>
            ))}
            <Skeleton className="h-10 w-32 mt-6" /> {/* Save Button */}
          </div>

          {/* Posts Tab Content (hidden by default) */}
          <div className="space-y-4 hidden">
            {/* New Post Form */}
            <div className="space-y-2">
              <Skeleton className="h-6 w-48" />
              <Skeleton className="h-40 w-full" />
              <Skeleton className="h-10 w-32" />
            </div>

            {/* Posts List */}
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="p-4 border rounded-lg space-y-2">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/4" />
                  <div className="flex justify-end space-x-2">
                    <Skeleton className="h-8 w-20" />
                    <Skeleton className="h-8 w-20" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
