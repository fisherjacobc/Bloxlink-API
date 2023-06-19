import axios, { HttpStatusCode } from "axios";
import { apiBaseUrl, apiVersion } from "../apiInformation";
import { globalApiKey } from "../apikey";
import type {
  GlobalDiscordToRobloxResponse,
  GlobalRobloxToDiscordResponse,
} from "../../index";

/**
 * Send's an API request to Bloxlink to get the Roblox ID of a Discord user
 *
 * @method `GET`
 *
 * @param {string} discordUserId The ID of the Discord user you want to get
 * @param {boolean} premiumResponse If you have API Premium or be using an guild API key with Server Premium, you can set this to true to get an enriched response
 * @param {string?} apiKey Optional API key to specifically use (see {@link [apikey#setGuildApiKey](../apiKey.ts)} to set an API key across all of your request)
 * @returns {DiscordToRobloxResponse}
 */
export const DiscordToRoblox = async <Premium extends boolean = boolean>(
  discordUserId: string,
  //@ts-ignore surpress as it is being used for types
  premiumResponse?: Premium,
  apiKey?: string
): Promise<GlobalDiscordToRobloxResponse> => {
  try {
    const response = await axios<
      Omit<GlobalDiscordToRobloxResponse, "statusCode">
    >({
      method: "GET",
      url: `${apiBaseUrl}/${apiVersion}/public/discord-to-roblox/${discordUserId}`,
      headers: {
        Authorization: apiKey || globalApiKey,
      },
      validateStatus: (status) => status === HttpStatusCode.Ok,
    });

    return {
      ...response.data,
      statusCode: response.status,
    };
  } catch (error) {
    throw new Error(`[BLOXLINK API] ${error.response.data.error}`);
  }
};

/**
 * Send's an API request to Bloxlink to get the Discord ID of a Roblox user
 *
 * @method `GET`
 *
 * @param {string} robloxUserId The ID of the Roblox user you want to get
 * @param {string?} apiKey Optional API key to specifically use (see {@link [apikey#setGuildApiKey](../apiKey.ts)} to set an API key across all of your request)
 * @returns {GlobalRobloxToDiscordResponse}
 */
export const RobloxToDiscord = async (
  robloxUserId: string,
  apiKey?: string
): Promise<GlobalRobloxToDiscordResponse> => {
  try {
    const response = await axios<
      Omit<GlobalRobloxToDiscordResponse, "statusCode">
    >({
      method: "GET",
      url: `${apiBaseUrl}/${apiVersion}/public/roblox-to-discord/${robloxUserId}`,
      headers: {
        Authorization: apiKey || globalApiKey,
      },
      validateStatus: (status) => status === HttpStatusCode.Ok,
    });

    return {
      ...response.data,
      statusCode: response.status,
    } as GlobalRobloxToDiscordResponse;
  } catch (error) {
    throw new Error(`[BLOXLINK API] ${error.response.data.error}`);
  }
};
