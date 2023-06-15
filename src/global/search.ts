import axios, { HttpStatusCode } from "axios";
import { apiBaseUrl, apiVersion } from "../apiInformation";
import { globalApiKey } from "../apikey";
import type {
  DiscordToRobloxResponse,
  RobloxToDiscordResponse,
  FailedResponse,
} from "../../index";

/**
 *
 * @param discordUserId
 * @param apiKey
 * @returns {DiscordToRobloxResponse | FailedResponse}
 */
export const DiscordToRoblox = async (
  discordUserId: string,
  apiKey?: string
): Promise<DiscordToRobloxResponse> => {
  try {
    const response = await axios<Omit<DiscordToRobloxResponse, "statusCode">>({
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
 *
 * @param robloxUserId
 * @param apiKey
 * @returns {RobloxToDiscordResponse | FailedResponse}
 */
export const RobloxToDiscord = async (
  robloxUserId: string,
  apiKey?: string
): Promise<RobloxToDiscordResponse> => {
  try {
    const response = await axios<Omit<RobloxToDiscordResponse, "statusCode">>({
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
    };
  } catch (error) {
    throw new Error(`[BLOXLINK API] ${error.response.data.error}`);
  }
};
