"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Alert } from "@/components/ui/alert";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { Plus, List } from "@/components/Icons";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import type { BlogPost } from "@/types/admin";
import { NewPostForm } from "./NewPostForm";
import { motion, AnimatePresence } from "framer-motion";

interface PostsListProps {
  posts: BlogPost[];
  onDeleteAction: () => void;
  password: string;
}

export function PostsList({ posts, onDeleteAction, password }: PostsListProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [postToDelete, setPostToDelete] = useState<string | null>(null);
  const [showNewPostForm, setShowNewPostForm] = useState(false);

  const handleDelete = async (slug: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/admin/posts/${slug}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) throw new Error("Failed to delete post");

      onDeleteAction();
    } catch (error) {
      setError(error instanceof Error ? error.message : "Error deleting post");
    } finally {
      setIsLoading(false);
      setPostToDelete(null);
    }
  };

  const handleCancel = () => {
    setPostToDelete(null);
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 space-y-6 bg-background dark:bg-background-dark rounded-lg shadow-md"
    >
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <motion.h2 layout className="text-xl font-bold">
            {showNewPostForm ? "New Post" : "Posts"}
          </motion.h2>
          <Button
            variant="outline"
            onClick={() => setShowNewPostForm(!showNewPostForm)}
            className="flex items-center gap-2"
          >
            {showNewPostForm ? (
              <>
                <List className="h-4 w-4" />
                Show Posts List
              </>
            ) : (
              <>
                <Plus className="h-4 w-4" />
                New Post
              </>
            )}
          </Button>
        </div>

        {error && <Alert variant="destructive">{error}</Alert>}

        <AnimatePresence mode="wait">
          {showNewPostForm ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <NewPostForm
                onSuccessAction={() => {
                  onDeleteAction();
                  setShowNewPostForm(false);
                }}
                password={password}
              />
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              {posts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex justify-between items-center p-4 border rounded-lg"
                >
                  <div>
                    <h3 className="font-medium">{post.title}</h3>
                    <p className="text-sm text-muted-foreground">{post.slug}</p>
                  </div>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => setPostToDelete(post.slug)}
                    disabled={isLoading}
                  >
                    {isLoading && post.slug === postToDelete && (
                      <LoadingSpinner className="mr-2" />
                    )}
                    Delete
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <AlertDialog open={!!postToDelete} onOpenChange={handleCancel}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the
                post.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={handleCancel} disabled={isLoading}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                disabled={isLoading}
                onClick={() => postToDelete && handleDelete(postToDelete)}
              >
                {isLoading ? (
                  <>
                    <LoadingSpinner className="mr-2" />
                    Deleting...
                  </>
                ) : (
                  "Delete"
                )}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </motion.main>
  );
}
