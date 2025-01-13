import { Metadata } from "next";
import { SITE_CONFIG } from "@/config/config";
import { defaultMetadata } from "@/config/metadata";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: `Projects - ${SITE_CONFIG.name} | ${SITE_CONFIG.siteName}`,
  description: SITE_CONFIG.projectDescription,
};

export default function ProjectsLayout({
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
