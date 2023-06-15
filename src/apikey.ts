export let globalApiKey = "";

/**
 * Set's the default API key for global API requests
 *
 * @param {string} newKey
 * @returns {void}
 */
export const setGlobalApiKey = (newKey: string) => (globalApiKey = newKey);

export let guildApiKey = "";

/**
 * Set's the default API key for guild API requests
 *
 * @param {string} newKey
 * @returns {void}
 */
export const setGuildApiKey = (newKey: string) => (guildApiKey = newKey);
