/**
 * Join `req.params` (commonly used in `Next`, `express`)
 *
 * @param params request.params
 * @returns
 */
export const joinParams = (params?: string | string[] | null) =>
  Array.isArray(params) ? params.join() : params ?? "";
