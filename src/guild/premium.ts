import axios, { HttpStatusCode } from "axios";
import { apiBaseUrl, apiVersion } from "../apiInformation";
import { guildApiKey } from "../apikey";
import type { GuildUpdateUserResponse } from "../types";

/**
 * Send's an API request to Bloxlink to update the user in the provided Discord server
 *
 * @method `POST`
 * @premium **This is a premium endpoint!** You must have API Premium or be using an guild API key with Server Premium!
 *
 * @param {string} discordGuildId The ID of the Discord guild
 * @param {string} discordUserId The ID of the Discord user you want to update
 * @param {string?} apiKey Optional API key to specifically use (see {@link [apikey#setGuildApiKey](../apiKey.ts)} to set an API key across all of your request)
 * @returns {GuildUpdateUserResponse}
 */
export const UpdateUser = async (
  discordGuildId: string,
  discordUserId: string,
  apiKey?: string
): Promise<GuildUpdateUserResponse> => {
  try {
    const response = await axios<Omit<GuildUpdateUserResponse, "statusCode">>({
      method: "POST",
      url: `${apiBaseUrl}/${apiVersion}/public/guilds/${discordGuildId}/update-user/${discordUserId}`,
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
