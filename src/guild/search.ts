import axios, { HttpStatusCode } from "axios";
import { apiBaseUrl, apiVersion } from "../apiInformation";
import { guildApiKey } from "../apikey";
import type {
  GuildDiscordToRobloxResponse,
  GuildRobloxToDiscordResponse,
} from "../../index";

/**
 *
 * @param discordGuild
 * @param discordUserId
 * @param premiumResponse
 * @param apiKey
 * @returns {GuildDiscordToRobloxResponse}
 */
export const DiscordToRoblox = async <Premium extends boolean = boolean>(
  discordGuild: string,
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
      url: `${apiBaseUrl}/${apiVersion}/public/guilds/${discordGuild}/discord-to-roblox/${discordUserId}`,
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
 *
 * @param discordGuild
 * @param robloxUserId
 * @param premiumResponse
 * @param apiKey
 * @returns {GuildRobloxToDiscordResponse}
 */
export const RobloxToDiscord = async <Premium extends boolean = boolean>(
  discordGuild: string,
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
      url: `${apiBaseUrl}/${apiVersion}/public/guilds/${discordGuild}/roblox-to-discord/${robloxUserId}`,
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
