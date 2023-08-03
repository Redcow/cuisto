import { User } from "domain/user/Types.d.ts";
 
export type ServerState = {
  user: User | null;
  error: { code: number; msg: string } | null;
};