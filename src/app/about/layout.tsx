import { Metadata } from "next";
import { SITE_CONFIG } from "@/config/config";
import { defaultMetadata } from "@/config/metadata";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: `About - ${SITE_CONFIG.name} | ${SITE_CONFIG.siteName}`,
  description: SITE_CONFIG.aboutDescription,
};

export default function AboutLayout({
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
