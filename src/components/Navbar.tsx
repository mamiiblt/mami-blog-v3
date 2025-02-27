"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { Book, Code, Github, Menu, User } from "@/components/Icons";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { SITE_CONFIG } from "@/config/config";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { NavbarLoading } from "./loading";
import { NavigationItem } from "./NavigationItem";
import { motion, AnimatePresence } from "framer-motion";
import { AuthorizedIcon } from "@hugeicons/core-free-icons";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const pathname = usePathname();

  React.useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <NavbarLoading />;
  }

  return (
<div className="container mx-auto flex h-16 items-center px-4 sm:px-6">
      <div className="flex w-1/8 sm:w-1/3">
        <Link href="/">
          <div className="flex items-center space-x-2 ml-4 sm:ml-8">
            <span className="text-lg font-bold text-foreground sm:text-2xl">
              mamiiblt
            </span>
          </div>
        </Link>
      </div>

      <div className="flex-1 flex justify-center">
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-2">
            <AnimatePresence>
              {SITE_CONFIG.navItems.map((link) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <NavigationItem
                    href={link.href}
                    title={link.title}
                    isActive={pathname === link.href}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex w-1/4 sm:w-1/3 justify-end items-center space-x-4">
        <ThemeToggle />
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-accent transition-colors duration-200"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] p-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="border-b border-border p-6"
            >
              <SheetTitle className="text-xl font-bold">
                mamiiblt
              </SheetTitle>
            </motion.div>
            <nav className="flex flex-col p-2">
              {SITE_CONFIG.navItems.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                  >{link.title === "Projects" && (
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center space-x-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:translate-x-1
                        ${isActive ? "bg-accent text-accent-foreground" : "text-foreground"}`}>
                      <Code />
                      <span>{link.title}</span>
                    </Link>
                  )}
                    {link.title === "About" && (
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`flex items-center space-x-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:translate-x-1
                          ${isActive ? "bg-accent text-accent-foreground" : "text-foreground"}`}>
                        <User />
                        <span>{link.title}</span>
                      </Link>
                    )}
                    {link.title === "Blogs" && (
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`flex items-center space-x-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:translate-x-1
                          ${isActive ? "bg-accent text-accent-foreground" : "text-foreground"}`}>
                        <Book />
                        <span>{link.title}</span>
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
