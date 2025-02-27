"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, LinkIcon, Platform } from "@/components/Icons";
import { SITE_CONFIG } from "@/config/config";

export default function ProjectsPage() {
  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16">
      <div className="space-y-12">

        <AnimatePresence>
        {SITE_CONFIG.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl border bg-card hover:bg-accent/40 transition-all duration-500 hover:shadow-xl"
              >
                <div className="flex flex-col sm:flex-row-reverse">
                  <div className="w-full sm:w-2/5 relative aspect-video sm:aspect-auto sm:min-h-[240px]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 40vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      priority={index < 2}
                    />
                  </div>

                  <div className="w-full sm:w-3/5 p-6 sm:p-8 space-y-5">
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground text-base sm:text-lg line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex gap-8 pt-3">
                      {project.platform && (
                        <div
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2.5 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors duration-300"
                        >
                          <Platform className="h-5 w-5" />
                          { project.platform }
                        </div>
                      )}
                      {project.github !== null && project.github !== undefined && (
                        <Link
                          href={"https://github.com/" + project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2.5 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors duration-300"
                        >
                        <Github className="h-5 w-5" />
                        { project.github }
                        </Link>
                      )}
                      {project.link && (
                        <Link
                          href={"" + project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2.5 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors duration-300"
                        >
                          <LinkIcon className="h-5 w-5" />
                          { project.link }
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
