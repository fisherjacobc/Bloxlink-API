import axios, { HttpStatusCode } from "axios";
import { apiBaseUrl, apiVersion } from "../apiInformation";
import { guildApiKey } from "../apikey";
import type {
  GuildDiscordToRobloxResponse,
  GuildRobloxToDiscordResponse,
} from "../../index";

/**
 * Send's an API request to Bloxlink to get the Roblox ID of a Discord user
 *
 * @method `GET`
 *
 * @param {string} discordGuildId The ID of the Discord guild
 * @param {string} discordUserId The ID of the Discord user you want to get
 * @param {boolean} premiumResponse If you have API Premium or be using an guild API key with Server Premium, you can set this to true to get an enriched response
 * @param {string?} apiKey Optional API key to specifically use (see {@link [apikey#setGuildApiKey](../apiKey.ts)} to set an API key across all of your request)
 * @returns {GuildDiscordToRobloxResponse}
 */
export const DiscordToRoblox = async <Premium extends boolean = boolean>(
  discordGuildId: string,
  discordUserId: string,
  premiumResponse?: Premium,
  apiKey?: string
): Promise<
  GuildDiscordToRobloxResponse<Premium extends true ? true : false>
> => {
  try {
    const response = await axios<
      Omit<GuildDiscordToRobloxResponse, "statusCode">
    >({
      method: "GET",
      url: `${apiBaseUrl}/${apiVersion}/public/guilds/${discordGuildId}/discord-to-roblox/${discordUserId}`,
      headers: {
        Authorization: apiKey || guildApiKey,
      },
      validateStatus: (status) => status === HttpStatusCode.Ok,
    });

    return {
      ...response.data,
      statusCode: response.status,
    } as GuildDiscordToRobloxResponse<Premium extends true ? true : false>;
  } catch (error) {
    throw new Error(`[BLOXLINK API] ${error.response.data.error}`);
  }
};

/**
 * Send's an API request to Bloxlink to get the Discord ID of a Roblox user
 *
 * @method `GET`
 *
 * @param {string} discordGuildId The ID of the Discord guild
 * @param {string} robloxUserId The ID of the Roblox user you want to get
 * @param {boolean} premiumResponse If you have API Premium or be using an guild API key with Server Premium, you can set this to true to get an enriched response
 * @param {string?} apiKey Optional API key to specifically use (see {@link [apikey#setGuildApiKey](../apiKey.ts)} to set an API key across all of your request)
 * @returns {GuildRobloxToDiscordResponse}
 */
export const RobloxToDiscord = async <Premium extends boolean = boolean>(
  discordGuildId: string,
  robloxUserId: string,
  premiumResponse?: Premium,
  apiKey?: string
): Promise<
  GuildRobloxToDiscordResponse<Premium extends true ? true : false>
> => {
  try {
    const response = await axios<
      Omit<GuildRobloxToDiscordResponse, "statusCode">
    >({
      method: "GET",
      url: `${apiBaseUrl}/${apiVersion}/public/guilds/${discordGuildId}/roblox-to-discord/${robloxUserId}`,
      headers: {
        Authorization: apiKey || guildApiKey,
      },
      validateStatus: (status) => status === HttpStatusCode.Ok,
    });

    return {
      ...response.data,
      statusCode: response.status,
    } as GuildRobloxToDiscordResponse<Premium extends true ? true : false>;
  } catch (error) {
    throw new Error(`[BLOXLINK API] ${error.response.data.error}`);
  }
};
