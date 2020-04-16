import NodeCache from "node-cache";
const cache = new NodeCache({
  stdTTL: 3600,
  checkperiod: 720,
  useClones: false,
});

/**
 * Simple caching mechanism to prevent data retrieval from static sources. If data is present in the cache returns it else uses the provided fallback function to retrieve the data.
 * @params key - Unique key that identifies an entry within the cache.
 * @param fallbackFunction - Function to execute if cache doesn't contain an entry for the provided key.
 * @returns Promise<any> - Returns a promise that resolves with the data requested.
 */
export const cacheService = async (
  key: string,
  fallbackFunction: Function
): Promise<any> => {
  const value = await cache.get(key);
  if (value) {
    return value;
  }
  const result = await fallbackFunction.call(null);
  cache.set(key, result);
  return result;
};
