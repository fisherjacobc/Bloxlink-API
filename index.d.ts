import { HttpStatusCode } from "axios";

// Error related responses
export enum ResponseError {
  NOT_FOUND = "User not found",
  QUOTA_REACHED = "You have reached your API key limit for today. Email cm@blox.link for elevated rates.",
  INVALID_KEY = "Invalid API Key",
  GUILD_NOT_MATCHED = "Guild ID does not match API Key",
  REQUIRES_API_PREMIUM = "This endpoint requires API Premium or Server Premium/Pro",
}

export type FailedResponse = {
  /**
   * Not included in the Bloxlink API response data
   */
  statusCode: HttpStatusCode;
  error: ResponseError;
};

// Success responses

export type DiscordToRobloxResponse = {
  /**
   * Not included in the Bloxlink API response data
   */
  statusCode: HttpStatusCode;
  robloxID: string;
  resolved: {};
};

export type RobloxToDiscordResponse = {
  /**
   * Not included in the Bloxlink API response data
   */
  statusCode: HttpStatusCode;
  discordIDs: string[];
  resolved: {};
};
