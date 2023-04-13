import { useState } from "react";

/**
 * useOpen hook
 *
 * Simple wrapper hook to the `useState(false)` and its open and close functions.
 *
 * @returns
 */
const useOpen = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return { isOpen, open, close };
};

export default useOpen;
