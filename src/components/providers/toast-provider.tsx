"use client";

import { Toaster as Sonner } from "sonner";

export function ToastProvider() {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group flex w-full items-center gap-2 rounded-md border bg-background p-4 shadow-lg",
          title: "text-sm font-semibold",
          description: "text-sm opacity-90",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          error:
            "group-[.toast]:border-destructive group-[.toast]:text-destructive",
          success:
            "group-[.toast]:border-green-500 group-[.toast]:text-green-500",
        },
      }}
    />
  );
}
