import React from "react";
import { Metadata } from "next";
import { SITE_CONFIG } from "@/config/config";
import { defaultMetadata } from "@/config/metadata";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: `Blog | mamiiblt`,
  description: SITE_CONFIG.description,
};

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-primary-foreground dark:bg-primary-background">
      {children}
    </div>
  );
}
