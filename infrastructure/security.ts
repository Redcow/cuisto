import jwt, { type JwtPayload } from "jsonwebtoken";
import { SecurityError } from "exceptions/SecurityError.ts";

export function controlAccess(token?: string) {

  if (!token) {
    throw new SecurityError({
      name: "INVALID_TOKEN",
      message: "Veuillez vous reconnecter",
    });
  }

  verifyJWT(token);
}

function verifyJWT(token: string) {
  try {
    const user = jwt.verify(
      token,
      Deno.env.get("SUPABASE_JWT_SECRET"),
    ) as JwtPayload;
    // user.id = user.sub;
    // timestampExp = user.exp;
    //console.log(user);
  } catch {
    throw new SecurityError({
      name: "INVALID_TOKEN",
      message: "Veuillez vous reconnecter",
    });
  }
}
