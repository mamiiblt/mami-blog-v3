import { Metadata } from "next";
import { SITE_CONFIG } from "@/config/config";
import { defaultMetadata } from "@/config/metadata";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: `Admin - ${SITE_CONFIG.name} | ${SITE_CONFIG.siteName}`,
  description: "Site Configuration Management",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
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
