import { ClientHeroSection } from "@/components/home/ClientHeroSection";
import { ClientRecentPosts } from "@/components/home/ClientRecentPosts";
import { getAllPosts } from "@/lib/blog";

export default async function Home() {
  const posts = await getAllPosts();
  const recentPosts = posts.slice(0, 2);

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="space-y-8 sm:space-y-12 py-6 sm:py-8 md:py-12 lg:py-16">
          <div className="animate-fadeIn">
            <ClientHeroSection />
          </div>
          <div className="animate-slideUp">
            <ClientRecentPosts posts={recentPosts} />
          </div>
        </div>
      </div>
    </main>
  );
}
