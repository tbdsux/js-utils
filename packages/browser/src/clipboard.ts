/**
 * Simple wrapper to the `navigator.clipboard.writeText` function
 *
 * @param content Content to copy to clipboard.
 * @returns
 */
export const copyToClipboard = async (content: string) => {
  if (typeof navigator === "undefined") return;

  await navigator.clipboard.writeText(content);
};
