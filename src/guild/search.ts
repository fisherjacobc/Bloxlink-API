import axios, { HttpStatusCode } from "axios";
import { apiBaseUrl, apiVersion } from "../apiInformation";
import { guildApiKey } from "../apikey";
import type {
  DiscordToRobloxResponse,
  RobloxToDiscordResponse,
  FailedResponse,
} from "../../index";

/**
 *
 * @param discordGuild
 * @param discordUserId
 * @param apiKey
 * @returns {DiscordToRobloxResponse}
 */
export const DiscordToRoblox = async (
  discordGuild: string,
  discordUserId: string,
  apiKey?: string
): Promise<DiscordToRobloxResponse> => {
  try {
    const response = await axios<Omit<DiscordToRobloxResponse, "statusCode">>({
      method: "GET",
      url: `${apiBaseUrl}/${apiVersion}/public/guilds/${discordGuild}/discord-to-roblox/${discordUserId}`,
      headers: {
        Authorization: apiKey || guildApiKey,
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
 * @param discordGuild
 * @param robloxUserId
 * @param apiKey
 * @returns {RobloxToDiscordResponse}
 */
export const RobloxToDiscord = async (
  discordGuild: string,
  robloxUserId: string,
  apiKey?: string
): Promise<RobloxToDiscordResponse> => {
  try {
    const response = await axios<Omit<RobloxToDiscordResponse, "statusCode">>({
      method: "GET",
      url: `${apiBaseUrl}/${apiVersion}/public/guilds/${discordGuild}/roblox-to-discord/${robloxUserId}`,
      headers: {
        Authorization: apiKey || guildApiKey,
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
