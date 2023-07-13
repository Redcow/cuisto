import { getCookies } from "$std/http/cookie.ts";
import { controlAccess } from "infrastructure/security.ts";

import { type ServerState } from "infrastructure/Types.d.ts";
import { type MiddlewareHandlerContext } from "$fresh/server.ts";

export function handler(
  request: Request,
  context: MiddlewareHandlerContext<ServerState>,
) {
  const url = new URL(request.url);
  const cookies = getCookies(request.headers);
  
  try {
    controlAccess(url.pathname, cookies.auth);
    return context.next();
  } catch (error) {
    const headers = new Headers();
    headers.set("location", "/");
    return new Response(null, { headers, status: 303 });
  }
}