import { getCookies } from "$std/http/cookie.ts";
import { controlAccess } from "infrastructure/security.ts";

import { type ServerState } from "infrastructure/Types.d.ts";
import { type MiddlewareHandlerContext } from "$fresh/server.ts";

export function handler(
  request: Request,
  context: MiddlewareHandlerContext<ServerState>,
) {

  const cookies = getCookies(request.headers);
  
  try {
    controlAccess(cookies.auth);
    context.state.user = {
      id: "todo",
      name: "Jean Todo",
      access_token: "123"
    }
    return context.next();
  } catch (error) {
    console.log(error)
    const headers = new Headers();
    headers.set("location", "/");
    return new Response(null, { headers, status: 303 });
  }
}