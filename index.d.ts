import { HttpStatusCode } from "axios";
import { APIGuildMember } from "discord-api-types/v10";

// Util
type If<T extends boolean, A, B = null> = T extends true
  ? A
  : T extends false
  ? B
  : A | B;

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

// Roblox User Typings
export interface Headers {
  name: string;
  value: string;
}

export interface Groups {
  added: string[];
  removed: string[];
  nickname: string;
}

export interface Badges {
  imageUri: string;
  name: string;
}

export interface Group {
  id: number;
  name: string;
  memberCount: number;
  hasVerifiedBadge: boolean;
}

export interface Role {
  id: number;
  name: string;
  rank: number;
}

export interface Groups {
  group: Group;
  role: Role;
}

export interface GroupsV2 {
  [groupId: string]: {
    group: Group;
    role: Role;
  };
}

export interface Avatar {
  BustThumbnail: string;
  HeadshotThumbnail: string;
  FullBody: string;
}

export interface EnrichedRobloxUser {
  name: string;
  id: number;
  displayName: string;
  description: string;
  isBanned: boolean;
  created: Date;
  badges: Badges[];
  profileLink: string;
  presence: null;
  groups: Groups[];
  avatar: Avatar;
  rap: null;
  value: null;
  placeVisits: null;
  hasDisplayName: boolean;
  externalAppDisplayName?: any;
  hasVerifiedBadge: boolean;
  groupsv2: GroupsV2;
}

// Success responses

export type GuildDiscordToRobloxResolved = {
  roblox: EnrichedRobloxUser;
  discord: APIGuildMember;
};

export type GuildDiscordToRobloxResponse<Premium extends boolean = boolean> = {
  /**
   * Not included in the Bloxlink API response data
   */
  statusCode: HttpStatusCode;
  robloxID: string;
  resolved: If<Premium, GuildDiscordToRobloxResolved, {}>;
};

export type GlobalDiscordToRobloxResolved = {
  roblox: {};
};

export type GlobalDiscordToRobloxResponse<Premium extends boolean = boolean> = {
  /**
   * Not included in the Bloxlink API response data
   */
  statusCode: HttpStatusCode;
  robloxID: string;
  resolved: If<Premium, GlobalDiscordToRobloxResolved, {}>;
};

export type GuildRobloxToDiscordResolved = {
  discord: {
    [discordId: string]: APIGuildMember;
  };
};

export type GuildRobloxToDiscordResponse<Premium extends boolean = boolean> = {
  /**
   * Not included in the Bloxlink API response data
   */
  statusCode: HttpStatusCode;
  discordIDs: string[];
  resolved: If<Premium, GuildRobloxToDiscordResolved, {}>;
};

export type GlobalRobloxToDiscordResponse = {
  /**
   * Not included in the Bloxlink API response data
   */
  statusCode: HttpStatusCode;
  discordIDs: string[];
};

export type GuildUpdateUserResponse = {
  /**
   * Not included in the Bloxlink API response data
   */
  statusCode: HttpStatusCode;
  addedRoles: string[];
  removedRoles : string[];
  nickname: string;
};
