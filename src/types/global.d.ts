import type { RolesSchema } from "../functions/utils/dbrolesget.ts";

declare global {
  var dbroles: RolesSchema;
}

export {};
