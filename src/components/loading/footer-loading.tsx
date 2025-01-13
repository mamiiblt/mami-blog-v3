"use client";

import { Skeleton } from "@/components/ui/skeleton";

export function FooterLoading() {
  return (
    <footer className="border-t border-border bg-gradient-to-b from-background to-background/50">
      <div className="mx-auto max-w-7xl px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <Skeleton className="h-8 w-48" /> {/* Title */}
            <Skeleton className="h-5 w-36" /> {/* Copyright */}
            <div className="flex gap-4">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="h-6 w-6 rounded-full" />
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col gap-6 md:col-start-2">
            <Skeleton className="h-7 w-32" /> {/* Section Title */}
            <div className="space-y-4">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="h-5 w-24" />
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col gap-6 md:col-start-3">
            <Skeleton className="h-7 w-32" /> {/* Section Title */}
            <Skeleton className="h-20 w-full" /> {/* Contact Description */}
            <div className="flex items-center gap-3">
              <Skeleton className="h-5 w-5 rounded-full" />
              <Skeleton className="h-5 w-24" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
