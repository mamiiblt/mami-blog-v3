import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface ArrayItemControlsProps {
  index: number;
  total: number;
  onRemove: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
}

export function ArrayItemControls({
  index,
  total,
  onRemove,
  onMoveUp,
  onMoveDown,
}: ArrayItemControlsProps) {
  return (
    <motion.div
      className="flex justify-end gap-2 mt-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={onRemove}
          className="text-destructive hover:text-destructive"
        >
          Remove
        </Button>
      </motion.div>
      <AnimatePresence>
        {index > 0 && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={onMoveUp}
            >
              Move Up
            </Button>
          </motion.div>
        )}
        {index < total - 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={onMoveDown}
            >
              Move Down
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
